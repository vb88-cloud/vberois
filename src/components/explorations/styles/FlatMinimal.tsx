export function FlatMinimal() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Hero */}
        <section className="mb-40">
          <div className="mb-4">
            <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">UX Director</span>
          </div>
          <h1 className="text-8xl font-light mb-8 tracking-tight text-gray-900">
            Valentina<br />Berois
          </h1>
          <p className="text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
            Digital transformation leader driving strategic UX initiatives across enterprise organizations.
          </p>
          <div className="flex gap-6">
            <button className="px-10 py-5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Contact
            </button>
            <button className="px-10 py-5 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors">
              Portfolio
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-40">
          <div className="grid grid-cols-4 gap-16">
            <div>
              <div className="text-6xl font-light mb-2">15</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years</div>
            </div>
            <div>
              <div className="text-6xl font-light mb-2">100+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-6xl font-light mb-2">B2B</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Focus</div>
            </div>
            <div>
              <div className="text-6xl font-light mb-2">DE</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Location</div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="mb-40">
          <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-12">Selected Work</h2>
          <div className="space-y-px border-t border-gray-200">
            {[
              { title: 'Enterprise Projects', type: 'Strategic UX' },
              { title: 'AI Experiments', type: 'Innovation Lab' },
              { title: 'Time Machine', type: 'Archive' },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 py-8 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                <div>
                  <h3 className="text-2xl font-light mb-1 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-400">{item.type}</div>
                </div>
                <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-12">Get in Touch</h2>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:hello@valentina.com" className="text-xl hover:text-gray-600 transition-colors">
                hello@valentina.com
              </a>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">LinkedIn</div>
              <a href="https://linkedin.com/in/valentinaberois" className="text-xl hover:text-gray-600 transition-colors">
                /in/valentinaberois
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
