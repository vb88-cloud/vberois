import { motion } from "motion/react";

interface PortfolioVintageProps {
  onNavigate: (view: string) => void;
}

export function PortfolioVintage({ onNavigate }: PortfolioVintageProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Retro Label Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start"
        >
          <div className="bg-[#FF6B35] text-white px-8 py-4 mb-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-mono text-xs tracking-[0.4em] block mb-1">VALENTINA BEROIS</span>
            <span className="text-4xl font-black tracking-tight">PORTFOLIO</span>
          </div>
        </motion.div>

        {/* Cassette/Product Style Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enterprise - TR-808 Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            onClick={() => onNavigate('enterprise')}
          >
            <div className="bg-gradient-to-b from-[#FF6B35] to-[#E85A2A] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1">
              {/* Top Label Area */}
              <div className="bg-black text-white p-4 border-b-4 border-black">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-xs tracking-[0.3em] block">TYPE-01</span>
                    <span className="text-2xl font-black">ENTERPRISE</span>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div>2013-2026</div>
                    <div className="text-gray-400">STEREO</div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-8">
                <h3 className="text-5xl font-black text-white mb-4 leading-none">
                  CLIENT<br />PROJECTS
                </h3>
                <p className="text-white/90 font-mono text-sm mb-6 leading-relaxed">
                  Transformative digital initiatives for leading global organizations
                </p>

                {/* Cassette Holes Decoration */}
                <div className="flex gap-4 mb-6">
                  <div className="w-16 h-16 border-4 border-white/30 rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-white/30 rounded-full"></div>
                </div>

                {/* Bottom Label */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white tracking-[0.2em]">→ VIEW</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-8 bg-white"></div>
                    <div className="w-2 h-8 bg-white/70"></div>
                    <div className="w-2 h-8 bg-white/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI - VHS Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            onClick={() => onNavigate('ai')}
          >
            <div className="bg-gradient-to-b from-[#FFD93D] to-[#F5CE00] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1">
              {/* Top Label Area */}
              <div className="bg-black text-white p-4 border-b-4 border-black">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-xs tracking-[0.3em] block">TYPE-02</span>
                    <span className="text-2xl font-black">AI TOOLS</span>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div>2023-2026</div>
                    <div className="text-gray-400">DIGITAL</div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-8">
                <h3 className="text-5xl font-black text-black mb-4 leading-none">
                  EXPERI<br />MENTS
                </h3>
                <p className="text-black/80 font-mono text-sm mb-6 leading-relaxed">
                  Exploring AI and design through innovative experimental tools
                </p>

                {/* VHS Color Bars */}
                <div className="grid grid-cols-5 h-12 mb-6 border-2 border-black">
                  <div className="bg-[#FF6B35]"></div>
                  <div className="bg-[#6BCF7F]"></div>
                  <div className="bg-[#4ECDC4]"></div>
                  <div className="bg-[#FF6B9D]"></div>
                  <div className="bg-black"></div>
                </div>

                {/* Bottom Label */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-black tracking-[0.2em]">→ EXPLORE</span>
                  <div className="font-mono text-xs text-black">
                    ▶ REC
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Time Machine - Polaroid Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            onClick={() => onNavigate('timemachine')}
          >
            <div className="bg-gradient-to-b from-[#6BCF7F] to-[#5BC06D] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1">
              {/* Top Label Area */}
              <div className="bg-black text-white p-4 border-b-4 border-black">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-xs tracking-[0.3em] block">TYPE-03</span>
                    <span className="text-2xl font-black">RETRO</span>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div>2006-2013</div>
                    <div className="text-gray-400">ARCHIVE</div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-8">
                <h3 className="text-5xl font-black text-black mb-4 leading-none">
                  TIME<br />MACHINE
                </h3>
                <p className="text-black/80 font-mono text-sm mb-6 leading-relaxed">
                  A nostalgic journey to early design projects and explorations
                </p>

                {/* Polaroid Style Bottom */}
                <div className="bg-white/30 border-2 border-black p-4 mb-6">
                  <div className="text-center font-mono text-xs text-black">
                    COMING SOON<br />
                    UNDER CONSTRUCTION
                  </div>
                </div>

                {/* Bottom Label */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-black tracking-[0.2em]">→ TRAVEL</span>
                  <div className="text-black text-xl">⏳</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Strip - Vintage Label Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] block mb-2 text-gray-500">SELECTED CLIENTS</span>
                <div className="flex flex-wrap gap-4 font-black text-lg">
                  <span>BASF</span>
                  <span className="text-[#FF6B35]">•</span>
                  <span>ARRI</span>
                  <span className="text-[#FFD93D]">•</span>
                  <span>VORWERK</span>
                  <span className="text-[#6BCF7F]">•</span>
                  <span>HEATHROW EXPRESS</span>
                  <span className="text-gray-400">+MORE</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-[#FF6B35] border-2 border-black"></div>
                <div className="w-6 h-6 bg-[#FFD93D] border-2 border-black"></div>
                <div className="w-6 h-6 bg-[#6BCF7F] border-2 border-black"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
