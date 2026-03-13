import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CLITerminal() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'valentina-berois --role="UX Director" --experience="15+ years"';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section - CLI Style */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-green-600">user@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
            <span>{typedText}</span>
            <span className="animate-pulse">█</span>
          </div>
          
          <div className="border border-green-800 p-8 bg-black/50">
            <pre className="text-sm leading-relaxed">
{`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   VALENTINA BEROIS                                            ║
║   > Digital Transformation Leader                             ║
║                                                                ║
║   Driving strategic UX initiatives and transforming           ║
║   enterprise organizations through design, development,       ║
║   and innovation.                                             ║
║                                                                ║
║   [EXECUTE: contact.sh]  [VIEW: portfolio.md]                ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`}
            </pre>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex gap-4">
              <button className="border border-green-600 px-6 py-2 hover:bg-green-900/30 transition-colors">
                $ ./contact --email
              </button>
              <button className="border border-green-600 px-6 py-2 hover:bg-green-900/30 transition-colors">
                $ cat resume.txt
              </button>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="mb-16">
          <div className="text-green-600 mb-4">$ ls -la /experience</div>
          <div className="border border-green-800 p-6">
            <div className="grid grid-cols-4 gap-8 text-sm">
              <div>
                <div className="text-white mb-1">drwxr-xr-x</div>
                <div className="text-green-400">15_years</div>
              </div>
              <div>
                <div className="text-white mb-1">drwxr-xr-x</div>
                <div className="text-green-400">100+_projects</div>
              </div>
              <div>
                <div className="text-white mb-1">drwxr-xr-x</div>
                <div className="text-green-400">enterprise_scale</div>
              </div>
              <div>
                <div className="text-white mb-1">drwxr-xr-x</div>
                <div className="text-green-400">b2b_b2c_mobile</div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="mb-16">
          <div className="text-green-600 mb-4">$ cat ./work/index.log</div>
          <div className="space-y-4">
            {[
              { id: '01', title: 'ENTERPRISE PROJECTS', desc: 'Major organizations digital transformation' },
              { id: '02', title: 'AI EXPERIMENTS', desc: 'Exploring intelligent design systems' },
              { id: '03', title: 'TIME MACHINE', desc: 'Historical design archive' },
            ].map((item) => (
              <div key={item.id} className="border border-green-800 p-6 hover:bg-green-900/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white mb-2">
                      [{item.id}] {item.title}
                    </div>
                    <div className="text-green-600 text-sm">
                      {item.desc}
                    </div>
                  </div>
                  <div className="text-green-600">→</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lab / Experimental */}
        <section className="mb-16">
          <div className="text-green-600 mb-4">$ tree ./lab --depth 2</div>
          <div className="border border-green-800 p-6">
            <pre className="text-sm leading-loose">
{`├── ai_design_system_generator/
│   ├── README.md
│   └── status: [ACTIVE]
├── ux_research_assistant/
│   ├── README.md
│   └── status: [BETA]
├── smart_prototype_generator/
│   ├── README.md
│   └── status: [ACTIVE]
└── accessibility_audit_bot/
    ├── README.md
    └── status: [ACTIVE]`}
            </pre>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="text-green-600 mb-4">$ ./contact.sh --help</div>
          <div className="border border-green-800 p-8">
            <div className="space-y-4">
              <div className="text-white text-2xl mb-4">
                LET'S BUILD SOMETHING AMAZING
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-green-600">--email:</span>
                  <a href="mailto:hello@valentina.com" className="text-white hover:text-green-400">
                    hello@valentina.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-600">--linkedin:</span>
                  <a href="https://linkedin.com/in/valentinaberois" className="text-white hover:text-green-400">
                    /in/valentinaberois
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-600">--location:</span>
                  <span className="text-white">Germany (UTC+1)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-green-800 text-xs text-center py-8">
          © 2026 Valentina Berois — Built with React + TypeScript
        </div>
      </div>
    </div>
  );
}
