export function Glassmorphism() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-75" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-150" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto p-8">
        {/* Hero Glass Card */}
        <section className="mb-8">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white mb-4 border border-white/30">
                  UX DIRECTOR
                </div>
                <h1 className="text-7xl font-black text-white mb-6 leading-tight">
                  Digital
                  <br />
                  Transformation
                  <br />
                  Leader
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white/30 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/40 hover:bg-white/40 transition-all">
                    Contact Me
                  </button>
                  <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:shadow-xl transition-all">
                    View Work
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                  <div className="text-5xl font-black text-white mb-2">15</div>
                  <div className="text-sm font-bold text-white/80">YEARS EXPERIENCE</div>
                </div>
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                  <div className="text-5xl font-black text-white mb-2">100+</div>
                  <div className="text-sm font-bold text-white/80">PROJECTS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Pills - Frosted Glass */}
        <section className="mb-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {['B2B', 'B2C', 'Enterprise', 'Mobile First', 'PWA', 'Web', 'iOS', 'Android'].map((skill, i) => (
              <div key={i} className="px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full text-sm font-bold text-white border border-white/30">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Grid - Layered Glass */}
        <section className="mb-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Enterprise', icon: '🏢', gradient: 'from-orange-500/30 to-red-500/30' },
              { title: 'AI Experiments', icon: '🤖', gradient: 'from-yellow-500/30 to-amber-500/30' },
              { title: 'Time Machine', icon: '⏰', gradient: 'from-green-500/30 to-emerald-500/30' },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${card.gradient} backdrop-blur-2xl rounded-2xl p-8 border border-white/30 hover:scale-105 transition-transform cursor-pointer group shadow-xl`}
              >
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <div className="text-white/70 group-hover:text-white transition-colors">View Projects →</div>
              </div>
            ))}
          </div>
        </section>

        {/* Lab Section - Nested Glass */}
        <section className="mb-8">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Experimental Lab</h2>
            <div className="grid grid-cols-4 gap-4">
              {['AI Design System', 'UX Research Bot', 'Smart Prototyper', 'A11y Audit Bot'].map((lab, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-xl rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">💡</div>
                  <div className="text-sm font-bold text-white">{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Glass Panel */}
        <section>
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center text-white">
              <h2 className="text-5xl font-black mb-4">Let's Connect</h2>
              <p className="text-xl text-white/80 mb-8">Ready to transform your organization?</p>
              <div className="flex gap-4 justify-center mb-8">
                <a href="mailto:hello@valentina.com" className="px-10 py-5 bg-white text-purple-600 font-bold rounded-2xl hover:shadow-2xl transition-all">
                  Email Me
                </a>
                <a href="https://linkedin.com/in/valentinaberois" className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/40 hover:bg-white/30 transition-all">
                  LinkedIn
                </a>
              </div>
              <div className="text-white/70">📍 Germany (UTC+1)</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
