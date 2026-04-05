import { BaseEdge, getSmoothStepPath, type EdgeProps } from '@xyflow/react';
import { edgeColors } from '@/data/treeData';

export function TreeEdgeComponent({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
  style,
  animated,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const type = (data?.type as string) || 'other';
  const isHighlighted = data?.isHighlighted as boolean;
  const isDimmed = data?.isDimmed as boolean;

  const color = edgeColors[type as keyof typeof edgeColors] || '#C9973A';
  
  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          stroke: color,
          strokeWidth: isHighlighted ? 3 : 1.5,
          opacity: isDimmed ? 0.1 : isHighlighted ? 1 : 0.6,
          filter: isHighlighted ? `drop-shadow(0 0 4px ${color})` : 'none',
          transition: 'all 0.2s ease',
          strokeDasharray: animated ? 5 : 'none',
          animation: animated ? 'dashdraw 0.5s linear infinite' : 'none',
        }}
        className="react-flow__edge-path"
      />
    </>
  );
}
