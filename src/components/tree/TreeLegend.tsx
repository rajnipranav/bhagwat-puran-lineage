import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Scroll, 
  Crown, 
  Moon, 
  Sun, 
  User, 
  Star,
  ChevronDown,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { nodeTypes } from '@/data/treeData';

const typeIcons: Record<string, React.ReactNode> = {
  divine: <Sparkles className="w-3.5 h-3.5" />,
  sage: <Scroll className="w-3.5 h-3.5" />,
  kuru: <Crown className="w-3.5 h-3.5" />,
  yadu: <Moon className="w-3.5 h-3.5" />,
  solar: <Sun className="w-3.5 h-3.5" />,
  manu: <User className="w-3.5 h-3.5" />,
  other: <Star className="w-3.5 h-3.5" />,
};

// Legend-specific colors (using stroke for border and fill for background)
const legendColors: Record<string, { bg: string; border: string; text: string }> = {
  divine: { bg: '#FFF3E0', border: '#E8820A', text: '#7B2D00' },
  sage: { bg: '#F3E5F5', border: '#7B1FA2', text: '#4A0072' },
  kuru: { bg: '#E8F5E9', border: '#2E7D32', text: '#1B4D1F' },
  yadu: { bg: '#FDF0F4', border: '#C2185B', text: '#7B0039' },
  solar: { bg: '#E1F5FE', border: '#0277BD', text: '#013E5F' },
  manu: { bg: '#FFF8E1', border: '#F9A825', text: '#7A5700' },
  other: { bg: '#FAF3E0', border: '#A1887F', text: '#4E342E' },
};

interface TreeLegendProps {
  onTypeClick?: (type: string) => void;
  activeType?: string;
}

export function TreeLegend({ onTypeClick, activeType }: TreeLegendProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-[#FFF8E1] border-b border-[#EDD8A0]">
      {/* Collapsed view */}
      <div 
        className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-[#F5EDD0] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#7B4010]" />
          <span className="text-sm font-medium text-[#7B2D00]">Lineage Legend</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Mini color dots */}
          <div className="flex items-center gap-1.5">
            {nodeTypes.map(({ type }) => (
              <div
                key={type}
                className="w-3 h-3 rounded-full border border-white/50"
                style={{ backgroundColor: legendColors[type].border }}
                title={type}
              />
            ))}
          </div>
          <ChevronDown 
            className={cn(
              "w-4 h-4 text-[#7B4010] transition-transform",
              isExpanded && "rotate-180"
            )} 
          />
        </div>
      </div>
      
      {/* Expanded view */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {nodeTypes.map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => onTypeClick?.(type)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all",
                    "hover:shadow-md",
                    activeType === type 
                      ? "ring-2 ring-[#E8820A] ring-offset-1" 
                      : ""
                  )}
                  style={{ 
                    backgroundColor: legendColors[type].bg,
                    color: legendColors[type].text,
                  }}
                >
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: legendColors[type].border,
                      color: 'white',
                    }}
                  >
                    {typeIcons[type]}
                  </div>
                  <span className="font-medium truncate">{label}</span>
                </button>
              ))}
            </div>
            
            {/* Instructions */}
            <div className="px-4 pb-3 text-xs text-[#7B4010]/70 flex items-center gap-4 flex-wrap">
              <span>💡 Click a node to select it</span>
              <span>•</span>
              <span>Drag to pan</span>
              <span>•</span>
              <span>Scroll to zoom</span>
              <span>•</span>
              <span>Esc to deselect</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
