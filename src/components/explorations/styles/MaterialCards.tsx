export function MaterialCards() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto p-8">
        {/* Hero Card - Elevated */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-16 text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium mb-4">
              UX DIRECTOR
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Digital Transformation Leader
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mb-8">
              Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded font-medium hover:shadow-lg transition-shadow">
                GET IN TOUCH
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded border border-white/30 font-medium hover:bg-white/20 transition-colors">
                VIEW PORTFOLIO
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white px-8 py-6">
              <div className="text-4xl font-bold text-indigo-600 mb-1">15</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="bg-white px-8 py-6">
              <div className="text-4xl font-bold text-purple-600 mb-1">100+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
            </div>
          </div>
        </div>

        {/* Chip Group */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['B2B', 'B2C', 'Enterprise', 'Mobile First', 'PWA', 'Web', 'Native iOS', 'Native Android'].map((chip, i) => (
            <div key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow hover:shadow-md transition-shadow">
              {chip}
            </div>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Enterprise Projects', desc: 'Strategic transformation', elevation: 'shadow-md hover:shadow-xl', color: 'bg-orange-50' },
            { title: 'AI Experiments', desc: 'Innovation laboratory', elevation: 'shadow-md hover:shadow-xl', color: 'bg-yellow-50' },
            { title: 'Time Machine', desc: 'Design archives', elevation: 'shadow-md hover:shadow-xl', color: 'bg-green-50' },
          ].map((card, i) => (
            <div key={i} className={`bg-white rounded-lg ${card.elevation} transition-all overflow-hidden cursor-pointer group`}>
              <div className={`h-48 ${card.color} flex items-center justify-center text-6xl`}>
                {i === 0 ? '🏢' : i === 1 ? '🤖' : '⏰'}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                <button className="text-indigo-600 font-medium text-sm hover:underline">
                  VIEW PROJECTS →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Grid - Elevation 1 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Experimental Lab</h2>
          <div className="grid grid-cols-4 gap-4">
            {['AI Design System', 'UX Research Bot', 'Prototype Gen', 'A11y Audit'].map((lab, i) => (
              <div key={i} className="bg-gray-50 rounded p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-sm font-medium">{lab}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card - Elevated */}
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
              <p className="text-gray-600 mb-8">
                Ready to drive digital transformation in your organization?
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Email</div>
                <a href="mailto:hello@valentina.com" className="text-lg text-indigo-600 hover:underline">
                  hello@valentina.com
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">LinkedIn</div>
                <a href="https://linkedin.com/in/valentinaberois" className="text-lg text-indigo-600 hover:underline">
                  /in/valentinaberois
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Location</div>
                <div className="text-lg">Germany (UTC+1)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
