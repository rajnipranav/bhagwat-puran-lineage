import { useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  useReactFlow,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';

import { TreeNodeComponent } from './TreeNode';
import { TreeEdgeComponent } from './TreeEdge';
import { NodeTooltip } from './NodeTooltip';
import type { TreeNode, NodeType } from '@/data/treeData';
import { 
  nodes as allNodesData, 
  edges as allEdgesData,
  getDescendants,
  getAncestors,
  getRelatedNodes,
} from '@/data/treeData';

const nodeTypes = {
  custom: TreeNodeComponent,
};

const edgeTypes = {
  custom: TreeEdgeComponent,
};

interface TreeCanvasProps {
  filterType: NodeType | 'all';
  searchQuery: string;
  selectedNode: TreeNode | null;
  onSelectNode: (node: TreeNode | null) => void;
  highlightMode: 'none' | 'ancestors' | 'descendants' | 'related';
}

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  // Optimize layout for a more tree-like appearance
  dagreGraph.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 120 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 140, height: 90 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - 70,
      y: nodeWithPosition.y - 45,
    };
  });

  return { nodes, edges };
};

export function TreeCanvas({
  filterType,
  searchQuery,
  selectedNode,
  onSelectNode,
  highlightMode,
}: TreeCanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [hoveredNodeData, setHoveredNodeData] = useState<TreeNode | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { fitBounds, fitView } = useReactFlow();

  const visibleNodesData = useMemo(() => {
    let filtered = allNodesData;
    if (filterType !== 'all') {
      filtered = filtered.filter(n => n.type === filterType);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(n => 
        n.label.toLowerCase().includes(query) ||
        n.role.toLowerCase().includes(query) ||
        n.desc.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [filterType, searchQuery]);

  const highlightedNodeIds = useMemo(() => {
    if (!selectedNode) return new Set<string>();
    const ids = new Set<string>();
    ids.add(selectedNode.id);
    switch (highlightMode) {
      case 'ancestors':
        getAncestors(selectedNode.id).forEach(n => ids.add(n.id));
        break;
      case 'descendants':
        getDescendants(selectedNode.id).forEach(n => ids.add(n.id));
        break;
      case 'related':
        getRelatedNodes(selectedNode.id).forEach(n => ids.add(n.id));
        break;
    }
    return ids;
  }, [selectedNode, highlightMode]);

  useEffect(() => {
    const nodeIds = new Set(visibleNodesData.map(n => n.id));
    const visibleEdgesData = allEdgesData.filter(e => nodeIds.has(e.from) && nodeIds.has(e.to));

    const initialNodes: Node[] = visibleNodesData.map((node) => {
      const isHighlighted = selectedNode ? (highlightMode === 'none' ? node.id === selectedNode.id : highlightedNodeIds.has(node.id)) : false;
      const isDimmed = selectedNode ? !isHighlighted : false;

      return {
        id: node.id,
        type: 'custom',
        position: { x: 0, y: 0 },
        data: {
          ...node,
          isHighlighted,
          isDimmed,
        },
      };
    });

    const initialEdges: Edge[] = visibleEdgesData.map((edge) => {
      const sourceNode = allNodesData.find(n => n.id === edge.from);
      const isHighlighted = Boolean(selectedNode && highlightedNodeIds.has(edge.from) && highlightedNodeIds.has(edge.to) && highlightMode !== 'none');
      const isDimmed = Boolean(selectedNode && !isHighlighted);

      return {
        id: `${edge.from}-${edge.to}`,
        source: edge.from,
        target: edge.to,
        type: 'custom',
        animated: isHighlighted,
        data: {
          type: sourceNode?.type || 'other',
          isHighlighted,
          isDimmed,
        },
      };
    });

    const layouted = getLayoutedElements(initialNodes, initialEdges);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }, [visibleNodesData, selectedNode, highlightMode, highlightedNodeIds, setNodes, setEdges]);
  
  useEffect(() => {
    if (selectedNode) {
      const selectedFlowLayoutNode = nodes.find(n => n.id === selectedNode.id);
      if (selectedFlowLayoutNode) {
        fitBounds(
          {
            x: selectedFlowLayoutNode.position.x - 100,
            y: selectedFlowLayoutNode.position.y - 100,
            width: 340,
            height: 290,
          },
          { duration: 800 }
        );
      }
    } else {
      setTimeout(() => {
        fitView({ duration: 800, padding: 0.2 });
      }, 50); // delay ensures graph is mounted
    }
  }, [selectedNode, fitBounds, fitView]);

  return (
    <div className="w-full h-full bg-[#FEF9EE] relative" onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}>
      <ReactFlow
        nodes={nodes.map((n) => ({
             ...n, 
             selected: n.id === selectedNode?.id
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={(_, node) => {
          onSelectNode(node.data as unknown as TreeNode);
        }}
        onNodeMouseEnter={(_e, node) => {
          setHoveredNodeData(node.data as unknown as TreeNode);
        }}
        onNodeMouseLeave={() => {
          setHoveredNodeData(null);
        }}
        minZoom={0.1}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#C9973A" gap={50} size={1} />
        <MiniMap 
          nodeColor={(n: any) => {
             const colors: Record<string, string> = { divine: '#E8820A', sage: '#7B1FA2', kuru: '#2E7D32', yadu: '#C2185B', solar: '#0277BD', manu: '#F9A825', other: '#A1887F' };
             return colors[(n.data.type as string) || 'other'] || '#A1887F';
          }}
          maskColor="rgba(254, 249, 238, 0.7)"
          className="rounded-xl border border-[#C9973A] shadow-md"
        />
        <Controls className="fill-[#7B2D00] border-[#C9973A] shadow-md bg-white rounded-md overflow-hidden" showInteractive={false} />
        
        <Panel position="top-right" className="text-xs font-semibold text-[#7B4010] bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9973A] shadow-sm">
          {visibleNodesData.length} / {allNodesData.length} nodes
        </Panel>
      </ReactFlow>

      <NodeTooltip node={hoveredNodeData} mousePosition={mousePosition} />
      
      {/* Node Info Panel */}
      {selectedNode && (
        <div className="absolute bottom-6 left-6 max-w-sm z-50 pointer-events-auto">
          <div className="bg-[#FEF9EE]/95 backdrop-blur-md rounded-xl border border-[#C9973A] shadow-2xl p-5 max-h-[40vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-start justify-between gap-3 sticky top-0 pb-2">
              <div>
                <h4 className="font-serif font-bold text-[#7B2D00] text-lg">
                  {selectedNode.label}
                </h4>
                <p className="text-sm text-[#A0612A] font-medium italic">
                  {selectedNode.role}
                </p>
              </div>
              <button
                onClick={() => onSelectNode(null)}
                className="text-[#7B2D00] hover:text-[#E8820A] transition-colors rounded-full p-1.5 hover:bg-[#FFF3E0]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="text-sm text-[#4A2800] mt-3 leading-relaxed">
              {selectedNode.desc}
            </p>
            {selectedNode.ref && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF3E0] rounded-full text-xs font-bold border border-[#E8820A] shadow-sm" style={{ color: '#7B2D00' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                {selectedNode.ref}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
