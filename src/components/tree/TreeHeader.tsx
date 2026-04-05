import { motion } from 'framer-motion';
import { BookOpen, TreePine, Info, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function TreeHeader() {
  const [showAbout, setShowAbout] = useState(false);
  
  return (
    <header className="bg-gradient-to-r from-[#7B2D00] via-[#C0580A] to-[#E8820A] text-white">
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Left: Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <TreePine className="w-7 h-7 text-[#FFD9A0]" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-[#FFF8E1] tracking-wide">
              Śrīmad-Bhāgavatam Family Tree
            </h1>
            <p className="text-sm text-[#FFD9A0] italic hidden sm:block">
              The Sacred Genealogy of the Vedic Universe — From Lord Brahmā to Janamejaya
            </p>
          </div>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="About"
          >
            <Info className="w-5 h-5" />
          </button>
          <a
            href="https://vedabase.io/en/library/sb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read SB</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      
      {/* Sanskrit quote */}
      <div className="px-4 py-2 bg-black/10 text-center">
        <p className="text-sm font-serif text-[#FFD9A0]">
          ।। एकम् सत् विप्रा बहुधा वदन्ति ।।
        </p>
        <p className="text-xs text-[#FFD9A0]/70 mt-0.5">
          "Truth is one, the wise speak of it in many ways" (Ṛg Veda)
        </p>
      </div>
      
      {/* About panel */}
      {showAbout && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#4A2800] border-t border-white/10"
        >
          <div className="px-4 py-4 max-w-4xl">
            <h3 className="text-lg font-serif font-bold text-[#FFD9A0] mb-2">
              About This Visualization
            </h3>
            <p className="text-sm text-[#FFF8E1]/80 leading-relaxed mb-3">
              This interactive family tree presents the sacred genealogy described in the 
              Śrīmad-Bhāgavatam (Bhāgavata Purāṇa), one of the most important texts in 
              Vedic literature. It traces the lineages from Lord Brahmā through the great 
              sages (Saptarṣis), the Manus (progenitors of humanity), and the royal dynasties 
              — particularly the Solar (Ikṣvāku) and Lunar (Yadu/Kuru) lines.
            </p>
            <p className="text-sm text-[#FFF8E1]/80 leading-relaxed mb-3">
              The tree includes over 200 figures, from divine incarnations like Lord Kṛṣṇa 
              and Lord Rāma to great kings like Bharata (after whom India is named), 
              Bhīṣma, the Pāṇḍavas, and the Kauravas.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#FFD9A0]/60">
              <span>📖 Based on Śrīmad-Bhāgavatam (Bhāgavata Purāṇa)</span>
              <span>•</span>
              <span>200+ figures</span>
              <span>•</span>
              <span>7 lineage types</span>
              <span>•</span>
              <span>Interactive visualization</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
