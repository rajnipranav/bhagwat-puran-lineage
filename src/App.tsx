import { useState, useCallback } from 'react';
import { TreeHeader } from '@/components/tree/TreeHeader';
import { TreeToolbar } from '@/components/tree/TreeToolbar';
import { TreeLegend } from '@/components/tree/TreeLegend';
import { TreeCanvas } from '@/components/tree/TreeCanvas';
import type { NodeType, TreeNode } from '@/data/treeData';
import { Toaster } from '@/components/ui/sonner';
import { ReactFlowProvider } from '@xyflow/react';

function App() {
  const [filterType, setFilterType] = useState<NodeType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightMode, setHighlightMode] = useState<'none' | 'ancestors' | 'descendants' | 'related'>('none');
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  
  const handleFilterChange = useCallback((type: NodeType | 'all') => {
    setFilterType(type);
  }, []);
  
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);
  
  const handleHighlightModeChange = useCallback((mode: 'none' | 'ancestors' | 'descendants' | 'related') => {
    setHighlightMode(mode);
  }, []);
  
  const handleSelectNode = useCallback((node: TreeNode | null) => {
    setSelectedNode(node);
    if (!node) {
      setHighlightMode('none');
    }
  }, []);
  
  const handleLegendTypeClick = useCallback((type: string) => {
    setFilterType(type as NodeType | 'all');
  }, []);
  
  return (
    <div className="h-screen flex flex-col bg-[#FEF9EE] overflow-hidden">
      <TreeHeader />
      
      <TreeToolbar
        filterType={filterType}
        onFilterChange={handleFilterChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        highlightMode={highlightMode}
        onHighlightModeChange={handleHighlightModeChange}
        selectedNode={selectedNode}
      />
      
      <TreeLegend 
        onTypeClick={handleLegendTypeClick}
        activeType={filterType !== 'all' ? filterType : undefined}
      />
      
      <div className="flex-1 relative">
        <ReactFlowProvider>
          <TreeCanvas
            filterType={filterType}
            searchQuery={searchQuery}
            selectedNode={selectedNode}
            onSelectNode={handleSelectNode}
            highlightMode={highlightMode}
          />
        </ReactFlowProvider>
      </div>
      
      <Toaster />
    </div>
  );
}

export default App;
