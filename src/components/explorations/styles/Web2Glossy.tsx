export function Web2Glossy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Hero with Glossy Elements */}
        <section className="mb-12">
          <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl p-12 border border-white relative overflow-hidden">
            {/* Glossy Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-lg">
                  ⭐ UX DIRECTOR
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight">
                  Digital
                  <br />
                  Transformation
                  <br />
                  Leader
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                    <span className="relative">Get In Touch →</span>
                  </button>
                  <button className="px-8 py-4 bg-gradient-to-b from-white to-gray-50 text-gray-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-gray-200">
                    View Work
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                  <div className="relative">
                    <div className="text-5xl font-black text-white mb-2">15</div>
                    <div className="text-sm font-bold text-white/90">YEARS EXPERIENCE</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                  <div className="relative">
                    <div className="text-5xl font-black text-white mb-2">100+</div>
                    <div className="text-sm font-bold text-white/90">PROJECTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility with Glossy Badges */}
        <section className="mb-12">
          <div className="flex gap-4 justify-center flex-wrap">
            {['B2B', 'B2C', 'ENTERPRISE', 'MOBILE', 'WEB', 'iOS', 'ANDROID'].map((badge, i) => (
              <div key={i} className="px-6 py-3 bg-gradient-to-b from-white to-gray-50 rounded-full shadow-lg border border-gray-200 font-bold text-sm text-gray-700">
                {badge}
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Cards with Reflection */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Enterprise', color: 'from-orange-400 to-red-500', icon: '🏢' },
              { title: 'AI Experiments', color: 'from-yellow-400 to-amber-500', icon: '🤖' },
              { title: 'Time Machine', color: 'from-green-400 to-emerald-500', icon: '⏰' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />
                  <div className="relative">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-white/90 text-sm">View Projects →</div>
                  </div>
                </div>
                {/* Reflection Effect */}
                <div className={`h-20 bg-gradient-to-b ${item.color} opacity-20 rounded-2xl mt-1 blur-xl`} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact with Glossy Panel */}
        <section>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-5xl font-black mb-4">Let's Connect</h2>
              <p className="text-xl mb-8 text-white/90">Ready to transform your organization?</p>
              <div className="flex gap-4 justify-center">
                <a href="mailto:hello@valentina.com" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  Email Me
                </a>
                <a href="https://linkedin.com/in/valentinaberois" className="px-8 py-4 bg-gradient-to-b from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border border-white/20">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
