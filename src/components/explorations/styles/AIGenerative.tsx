import { useState } from 'react';
import { motion } from 'motion/react';

export function AIGenerative() {
  const [promptValue, setPromptValue] = useState('');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* AI Prompt Hero */}
        <section className="mb-12">
          <div className="border border-purple-500/30 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent p-12 relative overflow-hidden">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10">
              {/* AI Prompt Interface */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-mono text-purple-300">AI Assistant Active</span>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 font-mono text-sm">
                  <div className="text-purple-400 mb-2">
                    &gt; Generate portfolio for: Valentina Berois
                  </div>
                  <div className="text-purple-300/60 mb-4">
                    &gt; Parameters: role=UX_Director, experience=15years, focus=digital_transformation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">&gt;</span>
                    <input
                      type="text"
                      value={promptValue}
                      onChange={(e) => setPromptValue(e.target.value)}
                      placeholder="Type to customize experience..."
                      className="flex-1 bg-transparent outline-none text-white placeholder-purple-500/40"
                    />
                    <span className="animate-pulse">▋</span>
                  </div>
                </div>
              </div>

              {/* Generated Content Blocks */}
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="col-span-2 bg-gradient-to-br from-purple-900/40 to-blue-900/20 border border-purple-500/30 rounded-xl p-8"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-xs text-purple-300 font-mono">GENERATED_CONTENT_BLOCK</span>
                  </div>
                  <div className="inline-block bg-purple-500/20 px-4 py-2 rounded-full text-xs font-bold mb-4 border border-purple-500/30">
                    UX DIRECTOR
                  </div>
                  <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Digital
                    <br />
                    Transformation
                    <br />
                    Leader
                  </h1>
                  <p className="text-purple-100/80 leading-relaxed mb-6">
                    Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold transition-all relative overflow-hidden group">
                      <span className="relative z-10">Contact</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button className="px-8 py-4 border border-purple-500/50 rounded-lg font-bold hover:bg-purple-900/30 transition-all">
                      Portfolio
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/20 border border-amber-500/30 rounded-xl p-6">
                    <div className="text-xs text-amber-300 font-mono mb-3">METRIC_01</div>
                    <div className="text-5xl font-black mb-2">15</div>
                    <div className="text-sm text-amber-200/60">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <div className="text-xs text-emerald-300 font-mono mb-3">METRIC_02</div>
                    <div className="text-5xl font-black mb-2">100+</div>
                    <div className="text-sm text-emerald-200/60">Projects</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Adaptive Content Grid */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs text-purple-300 font-mono">CONTEXTUAL_CONTENT_BLOCKS</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Enterprise Projects', context: 'STRATEGIC_UX', color: 'from-orange-900/40 to-red-900/20', border: 'border-orange-500/30' },
              { title: 'AI Experiments', context: 'INNOVATION_LAB', color: 'from-yellow-900/40 to-amber-900/20', border: 'border-yellow-500/30' },
              { title: 'Time Machine', context: 'ARCHIVE_SYSTEM', color: 'from-green-900/40 to-emerald-900/20', border: 'border-green-500/30' },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`bg-gradient-to-br ${block.color} border ${block.border} rounded-xl p-8 hover:scale-105 transition-all cursor-pointer group`}
              >
                <div className="text-xs text-purple-300 font-mono mb-4">{block.context}</div>
                <h3 className="text-2xl font-bold mb-2">{block.title}</h3>
                <div className="text-purple-200/60 group-hover:text-purple-200 transition-colors">
                  View Projects →
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Lab Grid */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs text-purple-300 font-mono">EXPERIMENTAL_MODULES</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: 'AI Design System', status: 'ACTIVE' },
                { name: 'UX Research Bot', status: 'BETA' },
                { name: 'Smart Prototyper', status: 'ACTIVE' },
                { name: 'A11y Audit Tool', status: 'ACTIVE' },
              ].map((module, i) => (
                <div key={i} className="bg-black/40 border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400/50 transition-all">
                  <div className="text-4xl mb-3">💡</div>
                  <div className="text-sm font-bold mb-2">{module.name}</div>
                  <div className="text-xs text-green-400 font-mono">{module.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Prompt Style */}
        <section>
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/30 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block text-xs text-purple-300 font-mono mb-4">
                  CONTACT_INITIALIZATION
                </div>
                <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-purple-200/80">Ready to drive digital transformation?</p>
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="mailto:hello@valentina.com" className="bg-black/40 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all text-center">
                  <div className="text-xs text-purple-300 font-mono mb-2">EMAIL_PROTOCOL</div>
                  <div className="font-bold">hello@valentina.com</div>
                </a>
                <a href="https://linkedin.com/in/valentinaberois" className="bg-black/40 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all text-center">
                  <div className="text-xs text-purple-300 font-mono mb-2">LINKEDIN_API</div>
                  <div className="font-bold">/in/valentinaberois</div>
                </a>
                <div className="bg-black/40 border border-purple-500/30 rounded-xl p-6 text-center">
                  <div className="text-xs text-purple-300 font-mono mb-2">LOCATION_DATA</div>
                  <div className="font-bold">Germany (UTC+1)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
