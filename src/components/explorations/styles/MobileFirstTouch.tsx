export function MobileFirstTouch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Mobile-First Layout - Large Touch Targets */}
      <div className="max-w-[500px] mx-auto">
        {/* Hero - Full Bleed */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-600 px-6 py-16 text-white mb-4">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold inline-block mb-4">
            UX DIRECTOR
          </div>
          <h1 className="text-5xl font-black mb-4 leading-tight">
            Valentina<br />Berois
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Digital transformation leader
          </p>
          <button className="w-full bg-white text-purple-600 font-bold py-5 rounded-2xl text-lg active:scale-95 transition-transform">
            Get In Touch
          </button>
        </section>

        {/* Stats - App-like Cards */}
        <section className="px-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center active:scale-95 transition-transform">
              <div className="text-4xl font-black text-purple-600 mb-1">15</div>
              <div className="text-xs text-gray-600 uppercase font-bold">Years</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center active:scale-95 transition-transform">
              <div className="text-4xl font-black text-indigo-600 mb-1">100+</div>
              <div className="text-xs text-gray-600 uppercase font-bold">Projects</div>
            </div>
          </div>
        </section>

        {/* Portfolio - Large Tap Targets */}
        <section className="px-4 mb-4">
          <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4 px-2">
            Selected Work
          </h2>
          <div className="space-y-3">
            {[
              { title: 'Enterprise Projects', icon: '🏢', color: 'from-orange-500 to-red-500' },
              { title: 'AI Experiments', icon: '🤖', color: 'from-yellow-500 to-amber-500' },
              { title: 'Time Machine', icon: '⏰', color: 'from-green-500 to-emerald-500' },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg active:scale-95 transition-transform text-white`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="text-3xl">→</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lab - Horizontal Scroll */}
        <section className="mb-4 overflow-x-auto">
          <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4 px-6">
            Lab Projects
          </h2>
          <div className="flex gap-4 px-4 pb-4">
            {['AI Design', 'UX Bot', 'Prototyper', 'A11y Tool'].map((lab, i) => (
              <div key={i} className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 shadow text-center active:scale-95 transition-transform">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-sm font-bold">{lab}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact - Full Bleed CTA */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 px-6 py-12 text-white">
          <h2 className="text-3xl font-black mb-4">Let's Connect</h2>
          <p className="opacity-90 mb-8">Ready to transform your organization?</p>
          <div className="space-y-3">
            <a href="mailto:hello@valentina.com" className="block w-full bg-white text-purple-600 font-bold py-5 rounded-2xl text-center active:scale-95 transition-transform">
              📧 Email Me
            </a>
            <a href="https://linkedin.com/in/valentinaberois" className="block w-full bg-white/20 backdrop-blur-sm text-white font-bold py-5 rounded-2xl text-center border-2 border-white/30 active:scale-95 transition-transform">
              💼 LinkedIn
            </a>
          </div>
          <div className="mt-8 text-center text-sm opacity-75">
            📍 Germany (UTC+1)
          </div>
        </section>
      </div>
    </div>
  );
}
