import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TreeNode } from '@/data/treeData';
import { typeColors, getInitials } from '@/data/treeData';
import { BookOpen, User, Crown, Sparkles, Scroll, Sun, Moon, Star } from 'lucide-react';

interface NodeTooltipProps {
  node: TreeNode | null;
  mousePosition: { x: number; y: number };
}

const typeIcons: Record<string, React.ReactNode> = {
  divine: <Sparkles className="w-4 h-4" />,
  sage: <Scroll className="w-4 h-4" />,
  kuru: <Crown className="w-4 h-4" />,
  yadu: <Moon className="w-4 h-4" />,
  solar: <Sun className="w-4 h-4" />,
  manu: <User className="w-4 h-4" />,
  other: <Star className="w-4 h-4" />,
};

export function NodeTooltip({ node, mousePosition }: NodeTooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    if (!node) return;
    
    // Calculate position to keep tooltip on screen
    const tooltipWidth = 320;
    const tooltipHeight = 200;
    const padding = 20;
    
    let x = mousePosition.x + 20;
    let y = mousePosition.y - 20;
    
    // Adjust if going off right edge
    if (x + tooltipWidth > window.innerWidth - padding) {
      x = mousePosition.x - tooltipWidth - 20;
    }
    
    // Adjust if going off bottom edge
    if (y + tooltipHeight > window.innerHeight - padding) {
      y = window.innerHeight - tooltipHeight - padding;
    }
    
    // Adjust if going off top edge
    if (y < padding) {
      y = padding;
    }
    
    setPosition({ x, y });
    setImageError(false);
  }, [node, mousePosition]);
  
  if (!node) return null;
  
  const colors = typeColors[node.type];
  const initials = getInitials(node.label);
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-[100] pointer-events-none"
        style={{ left: position.x, top: position.y }}
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div 
          className="w-80 rounded-xl overflow-hidden shadow-2xl border-2"
          style={{ 
            backgroundColor: '#FEF9EE',
            borderColor: colors.stroke,
          }}
        >
          {/* Header */}
          <div 
            className="px-4 py-3 flex items-center gap-3"
            style={{ 
              background: `linear-gradient(135deg, ${colors.stroke}, ${colors.avbg})`,
            }}
          >
            {/* Avatar */}
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-2 flex-shrink-0"
              style={{ borderColor: colors.fill }}
            >
              {!imageError ? (
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${node.id}&backgroundColor=${colors.avbg.replace('#', '')}&textColor=${colors.avtxt.replace('#', '')}&size=48`}
                  alt={node.label}
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
            
            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-serif font-bold text-base leading-tight truncate">
                {node.label}
              </h3>
              <p className="text-white/80 text-xs italic truncate">
                {node.role}
              </p>
            </div>
          </div>
          
          {/* Body */}
          <div className="p-4">
            {/* Type badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3"
              style={{ 
                backgroundColor: colors.tagbg,
                color: colors.tagcol,
                border: `1px solid ${colors.stroke}`,
              }}
            >
              {typeIcons[node.type]}
              <span>{colors.tag}</span>
            </div>
            
            {/* Description */}
            <p 
              className="text-sm leading-relaxed mb-3"
              style={{ color: '#4A2800' }}
            >
              {node.desc}
            </p>
            
            {/* Reference */}
            {node.ref && (
              <div className="flex items-center gap-1.5 text-xs" style={{ color: '#7B4010' }}>
                <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium">{node.ref}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
