import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Sparkles, 
  Scroll, 
  Crown, 
  Moon, 
  Sun, 
  User, 
  Star,
  ChevronDown,
  Eye,
  EyeOff,
  GitBranch,
  GitCommit,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { NodeType, TreeNode } from '@/data/treeData';
import { nodeTypes, searchNodes } from '@/data/treeData';

interface TreeToolbarProps {
  filterType: NodeType | 'all';
  onFilterChange: (type: NodeType | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  highlightMode: 'none' | 'ancestors' | 'descendants' | 'related';
  onHighlightModeChange: (mode: 'none' | 'ancestors' | 'descendants' | 'related') => void;
  selectedNode: TreeNode | null;
}

const typeIcons: Record<string, React.ReactNode> = {
  all: <Users className="w-4 h-4" />,
  divine: <Sparkles className="w-4 h-4" />,
  sage: <Scroll className="w-4 h-4" />,
  kuru: <Crown className="w-4 h-4" />,
  yadu: <Moon className="w-4 h-4" />,
  solar: <Sun className="w-4 h-4" />,
  manu: <User className="w-4 h-4" />,
  other: <Star className="w-4 h-4" />,
};

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  all: { bg: '#FEF9EE', border: '#C9973A', text: '#7B2D00' },
  divine: { bg: '#FFF3E0', border: '#E8820A', text: '#7B2D00' },
  sage: { bg: '#F3E5F5', border: '#7B1FA2', text: '#4A0072' },
  kuru: { bg: '#E8F5E9', border: '#2E7D32', text: '#1B4D1F' },
  yadu: { bg: '#FDF0F4', border: '#C2185B', text: '#7B0039' },
  solar: { bg: '#E1F5FE', border: '#0277BD', text: '#013E5F' },
  manu: { bg: '#FFF8E1', border: '#F9A825', text: '#7A5700' },
  other: { bg: '#FAF3E0', border: '#A1887F', text: '#4E342E' },
};

const highlightModes = [
  { value: 'none' as const, label: 'None', icon: <EyeOff className="w-4 h-4" /> },
  { value: 'ancestors' as const, label: 'Ancestors', icon: <GitCommit className="w-4 h-4" /> },
  { value: 'descendants' as const, label: 'Descendants', icon: <GitBranch className="w-4 h-4" /> },
  { value: 'related' as const, label: 'All Related', icon: <Users className="w-4 h-4" /> },
];

export function TreeToolbar({
  filterType,
  onFilterChange,
  searchQuery,
  onSearchChange,
  highlightMode,
  onHighlightModeChange,
  selectedNode,
}: TreeToolbarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isHighlightOpen, setIsHighlightOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<TreeNode[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
      if (highlightRef.current && !highlightRef.current.contains(e.target as Node)) {
        setIsHighlightOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Handle search input
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearchChange(query);
    
    if (query.trim()) {
      const results = searchNodes(query).slice(0, 10);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [onSearchChange]);
  
  // Clear search
  const clearSearch = useCallback(() => {
    onSearchChange('');
    setSearchResults([]);
    setShowResults(false);
    searchRef.current?.focus();
  }, [onSearchChange]);
  
  // Select search result
  const selectResult = useCallback((result: TreeNode) => {
    onSearchChange(result.label);
    setShowResults(false);
  }, [onSearchChange]);
  
  return (
    <div className="bg-[#F5EDD0] border-b border-[#C9973A] px-4 py-3 flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="relative flex-1 min-w-[200px] max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0612A]" />
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search names, roles, descriptions..."
            className="w-full pl-10 pr-10 py-2 rounded-full border border-[#C9973A] bg-white text-sm text-[#4A2800] placeholder:text-[#A0612A]/60 focus:outline-none focus:ring-2 focus:ring-[#E8820A]/30 focus:border-[#E8820A] transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0612A] hover:text-[#7B2D00] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {/* Search results dropdown */}
        <AnimatePresence>
          {showResults && searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-[#C9973A] shadow-lg overflow-hidden z-50"
            >
              {searchResults.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => selectResult(result)}
                  className={cn(
                    "w-full px-4 py-2 text-left hover:bg-[#FFF3E0] transition-colors flex items-center gap-3",
                    index !== searchResults.length - 1 && "border-b border-[#F5EDD0]"
                  )}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ 
                      backgroundColor: typeColors[result.type].bg,
                      color: typeColors[result.type].text,
                    }}
                  >
                    {result.label.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#4A2800] truncate">
                      {result.label}
                    </p>
                    <p className="text-xs text-[#A0612A] truncate">
                      {result.role}
                    </p>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Filter dropdown */}
      <div className="relative" ref={filterRef}>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all",
            isFilterOpen 
              ? "bg-[#FFF3E0] border-[#E8820A] text-[#7B2D00]" 
              : "bg-white border-[#C9973A] text-[#4A2800] hover:bg-[#FFF3E0]"
          )}
        >
          <Filter className="w-4 h-4" />
          <span>Filter</span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", isFilterOpen && "rotate-180")} />
        </button>
        
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-[#C9973A] shadow-lg overflow-hidden z-50 min-w-[180px]"
            >
              <button
                onClick={() => {
                  onFilterChange('all');
                  setIsFilterOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2.5 text-left hover:bg-[#FFF3E0] transition-colors flex items-center gap-3",
                  filterType === 'all' && "bg-[#FFF3E0]"
                )}
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: typeColors.all.bg, color: typeColors.all.text }}
                >
                  {typeIcons.all}
                </div>
                <span className="text-sm">All Lineages</span>
              </button>
              
              {nodeTypes.map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => {
                    onFilterChange(type);
                    setIsFilterOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left hover:bg-[#FFF3E0] transition-colors flex items-center gap-3 border-t border-[#F5EDD0]",
                    filterType === type && "bg-[#FFF3E0]"
                  )}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: typeColors[type].bg, 
                      color: typeColors[type].text 
                    }}
                  >
                    {typeIcons[type]}
                  </div>
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Highlight mode dropdown */}
      <div className="relative" ref={highlightRef}>
        <button
          onClick={() => setIsHighlightOpen(!isHighlightOpen)}
          disabled={!selectedNode}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all",
            !selectedNode && "opacity-50 cursor-not-allowed",
            isHighlightOpen 
              ? "bg-[#FFF3E0] border-[#E8820A] text-[#7B2D00]" 
              : "bg-white border-[#C9973A] text-[#4A2800] hover:bg-[#FFF3E0]"
          )}
        >
          <Eye className="w-4 h-4" />
          <span>Highlight</span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", isHighlightOpen && "rotate-180")} />
        </button>
        
        <AnimatePresence>
          {isHighlightOpen && selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 bg-white rounded-xl border border-[#C9973A] shadow-lg overflow-hidden z-50 min-w-[160px]"
            >
              {highlightModes.map((mode, index) => (
                <button
                  key={mode.value}
                  onClick={() => {
                    onHighlightModeChange(mode.value);
                    setIsHighlightOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left hover:bg-[#FFF3E0] transition-colors flex items-center gap-3",
                    index !== 0 && "border-t border-[#F5EDD0]",
                    highlightMode === mode.value && "bg-[#FFF3E0]"
                  )}
                >
                  {mode.icon}
                  <span className="text-sm">{mode.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Active filter indicator */}
      {filterType !== 'all' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
          style={{ 
            backgroundColor: typeColors[filterType].bg,
            color: typeColors[filterType].text,
            border: `1px solid ${typeColors[filterType].border}`,
          }}
        >
          {typeIcons[filterType]}
          <span>{nodeTypes.find(t => t.type === filterType)?.label}</span>
          <button
            onClick={() => onFilterChange('all')}
            className="ml-1 hover:opacity-70"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
