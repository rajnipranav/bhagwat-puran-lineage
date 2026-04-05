import { useState, memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { cn } from '@/lib/utils';
import { typeColors, getInitials } from '@/data/treeData';
import { motion } from 'framer-motion';

function CustomNode({ data, selected }: NodeProps) {
  const [imageError, setImageError] = useState(false);
  const type = data.type as keyof typeof typeColors;
  const colors = typeColors[type] || typeColors.other;
  const label = data.label as string;
  const role = data.role as string;
  const id = data.id as string;
  const initials = getInitials(label);
  
  const isHighlighted = data.isHighlighted as boolean;
  const isDimmed = data.isDimmed as boolean;

  return (
    <>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <motion.div
        className={cn(
          'w-[140px] h-[90px] rounded-xl border-2 overflow-hidden shadow-md bg-white',
          'transition-all duration-200 cursor-pointer',
          isDimmed && 'opacity-20',
          isHighlighted && 'shadow-2xl z-50',
          selected && 'ring-2 ring-offset-2'
        )}
        style={{
          backgroundColor: colors.fill,
          borderColor: selected ? '#E8820A' : colors.stroke,
          boxShadow: isHighlighted 
            ? `0 8px 30px ${colors.stroke}40` 
            : '0 2px 8px rgba(0,0,0,0.1)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isDimmed ? 0.2 : 1, 
          scale: isHighlighted ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Avatar section */}
        <div
          className="h-12 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{ backgroundColor: colors.avbg }}
        >
          {!imageError ? (
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${id}&backgroundColor=${colors.avbg.replace('#', '')}&textColor=${colors.avtxt.replace('#', '')}&size=48`}
              alt={label}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span 
              className="text-lg font-bold font-serif"
              style={{ color: colors.avtxt }}
            >
              {initials}
            </span>
          )}
        </div>
        
        {/* Info section */}
        <div 
          className="h-[42px] px-2 py-1 flex flex-col items-center justify-center pointer-events-none"
          style={{ backgroundColor: colors.fill }}
        >
          <span
            className="text-[10px] font-semibold text-center leading-tight line-clamp-2 font-serif"
            style={{ color: colors.text }}
            title={label}
          >
            {label}
          </span>
          <span
            className="text-[8px] text-center leading-tight line-clamp-1 mt-0.5 italic"
            style={{ color: colors.sub }}
            title={role}
          >
            {role}
          </span>
        </div>

        {selected && (
          <div 
            className="absolute -inset-1 rounded-xl border-2 border-dashed animate-pulse pointer-events-none"
            style={{ borderColor: colors.stroke }}
          />
        )}
      </motion.div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </>
  );
}

export const TreeNodeComponent = memo(CustomNode);
