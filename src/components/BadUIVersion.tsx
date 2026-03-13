import { motion } from "motion/react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import speakingImage from 'figma:asset/10c128015a37747e8f1522403a34ae3b46591e2d.png';

export function BadUIVersion({ onReturnToGoodUI }: { onReturnToGoodUI: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-yellow-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
        .bad-ui-font {
          font-family: 'Comic Neue', cursive;
        }
      `}</style>

      {/* Fixed return button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={onReturnToGoodUI}
          className="bg-lime-400 text-purple-900 border-4 border-orange-500 px-6 py-3 font-black text-sm shadow-2xl hover:bg-cyan-400 hover:border-pink-500 transition-colors bad-ui-font animate-pulse"
        >
          ← RETURN TO GOOD UI
        </button>
      </div>

      {/* Navigation - same structure, terrible styling */}
      <nav className="fixed w-full top-0 z-40 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 border-b-8 border-yellow-300 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-500 border-4 border-purple-600 flex items-center justify-center rotate-12 shadow-lg">
                <span className="text-red-600 font-black text-xl bad-ui-font">VB</span>
              </div>
              <div>
                <div className="font-black text-lg bad-ui-font text-yellow-300 drop-shadow-lg">Valentina Berois</div>
                <div className="text-xs font-bold text-lime-300 bad-ui-font">UX Director ⭐✨🌟</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-6"
            >
              {['About', 'Work', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="font-bold text-sm text-cyan-300 hover:text-yellow-300 transition-colors bad-ui-font underline decoration-wavy"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section - same structure, awful design */}
      <section className="pt-28 pb-16 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-12 gap-4"
          >
            {/* Main Title Block */}
            <div className="col-span-12 md:col-span-7 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 border-8 border-dashed border-cyan-400 p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 w-32 h-32 bg-lime-400 rounded-full opacity-50 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 opacity-30"></div>
              
              <div className="relative z-10 text-white">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-yellow-300 font-black text-xs mb-4 bad-ui-font animate-bounce border-2 border-pink-400">
                  ⭐ UX DIRECTOR ⭐
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-cyan-300 to-pink-300 drop-shadow-lg">
                  Digital
                  <br/>
                  Transformation
                  <br/>
                  Leader
                </h1>
                <p className="text-lg leading-relaxed max-w-xl bad-ui-font text-yellow-100 drop-shadow-md">
                  Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation. 🚀✨🎯
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-lime-400 to-yellow-300 border-8 border-double border-purple-600 p-6 shadow-2xl">
                <div className="text-sm font-black mb-2 leading-tight bad-ui-font text-red-600">LEADING STRATEGICAL PRODUCT DESIGN SOLUTIONS SINCE</div>
                <div className="text-6xl font-black bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">{new Date().getFullYear() - 2011}</div>
                <div className="text-sm font-black mt-1 bad-ui-font text-purple-700">YEARS 📅</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 border-8 border-dotted border-orange-500 p-6 shadow-2xl">
                <div className="text-sm font-black mb-3 leading-tight bad-ui-font text-yellow-300">SOLUTIONS DESIGNED ✨</div>
                <div className="text-xs font-black leading-relaxed bad-ui-font text-lime-300">
                  B2B • B2C • ENTERPRISE • MOBILE FIRST • PROGRESSIVE WEB APPS • WEB SOLUTIONS • NATIVE iOS • NATIVE ANDROID 📱💻
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:from-orange-500 hover:via-yellow-500 hover:to-lime-500 border-8 border-double border-cyan-400 p-4 font-black text-white transition-all bad-ui-font shadow-2xl transform hover:scale-105">
                GET IN TOUCH → 📧
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - same structure, terrible colors */}
      <section id="work" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400 border-y-8 border-lime-400">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t-8 border-dashed border-cyan-500 pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-purple-700 bad-ui-font">SECTION—03 ⭐</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                SELECTED WORK
              </h2>
            </div>

            {/* Portfolio Cards */}
            <div className="col-span-12 md:col-span-4">
              <div className="border-8 border-double border-orange-600 bg-gradient-to-br from-yellow-300 to-red-400 p-8 h-full shadow-2xl hover:rotate-2 transition-transform">
                <div className="font-mono text-xs tracking-[0.3em] mb-4 bad-ui-font text-purple-800">CATEGORY 1 🏢</div>
                <h3 className="text-4xl font-black leading-tight mb-4 bad-ui-font text-cyan-600 drop-shadow-lg">
                  ENTERPRISE
                  <br />
                  CLIENT
                  <br />
                  PROJECTS
                </h3>
                <p className="text-sm mb-6 bad-ui-font text-purple-900 font-bold">
                  Confidential B2B work for global organizations 🌍
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-yellow-300 px-6 py-3 font-black text-sm bad-ui-font hover:from-lime-500 hover:to-cyan-500 transition-all border-4 border-orange-500 shadow-lg transform hover:scale-110">
                  VIEW PROJECTS → 🔍
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="border-8 border-dashed border-cyan-600 bg-gradient-to-br from-lime-300 to-green-500 p-8 h-full shadow-2xl hover:rotate-2 transition-transform">
                <div className="font-mono text-xs tracking-[0.3em] mb-4 bad-ui-font text-red-700">CATEGORY 2 🤖</div>
                <h3 className="text-4xl font-black leading-tight mb-4 bad-ui-font text-purple-700 drop-shadow-lg">
                  AI
                  <br />
                  EXPERIMENTS
                </h3>
                <p className="text-sm mb-6 bad-ui-font text-orange-800 font-bold">
                  Weekend projects exploring AI in UX design 🧪✨
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-lime-300 px-6 py-3 font-black text-sm bad-ui-font hover:from-cyan-500 hover:to-purple-500 transition-all border-4 border-pink-500 shadow-lg transform hover:scale-110">
                  EXPLORE AI → 🚀
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="border-8 border-dotted border-pink-600 bg-gradient-to-br from-purple-400 to-pink-500 p-8 h-full shadow-2xl hover:rotate-2 transition-transform">
                <div className="font-mono text-xs tracking-[0.3em] mb-4 bad-ui-font text-yellow-300">CATEGORY 3 ⏰</div>
                <h3 className="text-4xl font-black leading-tight mb-4 bad-ui-font text-cyan-300 drop-shadow-lg">
                  TIME
                  <br />
                  MACHINE
                </h3>
                <p className="text-sm mb-6 bad-ui-font text-yellow-200 font-bold">
                  Early design work from 2011-2015 era 🎨📜
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-yellow-300 px-6 py-3 font-black text-sm bad-ui-font hover:from-lime-500 hover:to-orange-500 transition-all border-4 border-red-500 shadow-lg transform hover:scale-110">
                  UNLOCK ARCHIVE → 🔐
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience - same structure, awful styling */}
      <section id="experience" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white border-y-8 border-yellow-300">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 border-t-8 border-dotted border-lime-400 pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-yellow-300 bad-ui-font">SECTION—04 💼</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-lime-300 to-yellow-300">
                EXPERIENCE
              </h2>
            </div>

            {/* Current Role */}
            <div className="col-span-12 md:col-span-6">
              <div className="border-8 border-double border-cyan-400 p-8 bg-gradient-to-br from-orange-500 to-red-600 h-full hover:scale-105 transition-transform duration-200 shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs tracking-[0.3em] bad-ui-font text-yellow-300">CURRENT 🔥</div>
                  <div className="font-mono text-xs bad-ui-font text-lime-300">2023—NOW ⏰</div>
                </div>
                
                <h3 className="text-4xl font-black leading-tight mb-4 bad-ui-font text-cyan-300 drop-shadow-lg">
                  HEAD OF UX
                </h3>
                
                <div className="text-2xl font-black mb-6 bad-ui-font text-yellow-300">
                  KRONES AG 🏭
                </div>
                
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="font-bold bad-ui-font text-lime-300">LEADING THE UX DEPARTMENT AND A STRATEGIC DIGITAL TRANSFORMATION INITIATIVE AT THE CORE OF THE COMPANY'S FUTURE OFFERING. 🚀✨</p>
                  <p className="bad-ui-font text-yellow-200">RESPONSIBLE FOR ESTABLISHING UX EXCELLENCE AS A PILLAR OF PRODUCT STRATEGY AND DRIVING INNOVATION WITHIN ENTERPRISE-SCALE SYSTEMS. 🎯</p>
                </div>
                
                <div className="mt-8 pt-6 border-t-4 border-dashed border-yellow-300">
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs bad-ui-font">
                    <div>
                      <div className="text-lime-300 mb-1">SCOPE 📊</div>
                      <div className="font-black text-cyan-300">ENTERPRISE</div>
                    </div>
                    <div>
                      <div className="text-lime-300 mb-1">TEAM 👥</div>
                      <div className="font-black text-cyan-300">10+ PEOPLE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="col-span-12 md:col-span-6">
              <div className="border-8 border-dashed border-pink-400 p-8 bg-gradient-to-br from-lime-400 to-green-500 text-purple-900 h-full hover:scale-105 transition-transform duration-200 shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs tracking-[0.3em] bad-ui-font text-red-700">PREVIOUS 📜</div>
                  <div className="font-mono text-xs bad-ui-font text-orange-700">2015—2023 ⏳</div>
                </div>
                
                <h3 className="text-4xl font-black leading-tight mb-4 bad-ui-font text-purple-800 drop-shadow-lg">
                  UX DIRECTOR
                </h3>
                
                <div className="text-2xl font-black mb-6 bad-ui-font text-red-700">
                  INTIVE 🌐
                </div>
                
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="font-bold bad-ui-font text-orange-800">SHAPED TEAMS AND DELIVERED LARGE-SCALE DIGITAL SOLUTIONS FOR GLOBAL CLIENTS. 🌍💼</p>
                  <p className="bad-ui-font text-purple-800">LED MULTI-DISCIPLINARY DESIGN TEAMS ON COMPLEX PROJECTS FOR MAJOR INTERNATIONAL CLIENTS, ESTABLISHING DESIGN SYSTEMS AND INNOVATION PROCESSES. ⚡</p>
                </div>
                
                <div className="mt-8 pt-6 border-t-4 border-dotted border-purple-600">
                  <div className="grid grid-cols-3 gap-4 font-mono text-xs bad-ui-font">
                    <div>
                      <div className="text-red-700 mb-1">CLIENTS 🏢</div>
                      <div className="font-black text-purple-800">20+</div>
                    </div>
                    <div>
                      <div className="text-red-700 mb-1">PROJECTS 📁</div>
                      <div className="font-black text-purple-800">35+</div>
                    </div>
                    <div>
                      <div className="text-red-700 mb-1">TEAM 👥</div>
                      <div className="font-black text-purple-800">+30 IN 3 COUNTRIES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaking & Recognition */}
      <section id="projects" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 border-b-8 border-orange-500">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t-8 border-double border-pink-500 pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-purple-800 bad-ui-font">SECTION—05 🎤</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
                SPEAKING
              </h2>
            </div>

            <div className="col-span-12">
              <div className="border-8 border-double border-lime-500 p-12 bg-gradient-to-br from-yellow-300 to-orange-400 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="border-4 border-dashed border-purple-600 p-6 bg-gradient-to-r from-pink-300 to-red-300 shadow-lg">
                      <div className="font-mono text-xs tracking-[0.3em] mb-2 bad-ui-font text-purple-800">2024 🎯</div>
                      <h3 className="text-xl font-black mb-2 bad-ui-font text-cyan-700">World IA Day Stuttgart 2024</h3>
                      <p className="text-sm bad-ui-font text-purple-900 font-bold">Presented on AI applications in design to 200+ attendees 🤖✨</p>
                    </div>
                    
                    <div className="border-4 border-dotted border-cyan-600 p-6 bg-gradient-to-r from-lime-300 to-green-400 shadow-lg">
                      <div className="font-mono text-xs tracking-[0.3em] mb-2 bad-ui-font text-red-700">2023 🌟</div>
                      <h3 className="text-xl font-black mb-2 bad-ui-font text-purple-700">World IA Day Barcelona 2023</h3>
                      <p className="text-sm bad-ui-font text-orange-800 font-bold">Delivered presentation on IA best practices 🏛️📊</p>
                    </div>
                  </div>

                  <div className="border-8 border-double border-orange-600 p-6 bg-gradient-to-br from-cyan-300 to-blue-400 shadow-2xl">
                    <h3 className="text-2xl font-black mb-4 bad-ui-font text-yellow-300 drop-shadow-lg">MORE SPEAKING 🎤✨</h3>
                    <ul className="space-y-2 text-sm bad-ui-font text-purple-900 font-bold">
                      <li>⭐ UX Nordic Conference 2022</li>
                      <li>🌟 Various meetups and workshops</li>
                      <li>✨ Corporate training sessions</li>
                      <li>🎯 Design thinking facilitation</li>
                      <li>🚀 Innovation workshops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - same structure, garish colors */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 border-b-8 border-yellow-400">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 border-t-8 border-dashed border-lime-400 pt-6 mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-yellow-300 bad-ui-font">SECTION—06 📧</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-lime-300 to-yellow-300">
                CONTACT
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-8 border-double border-orange-500 p-12 bg-gradient-to-br from-lime-300 to-yellow-400 text-purple-900 shadow-2xl">
                <div className="mb-8">
                  <p className="text-3xl md:text-5xl font-black leading-tight mb-6 bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-700 drop-shadow-lg">
                    LET'S BUILD<br/>
                    SOMETHING<br/>
                    AMAZING ✨🚀
                  </p>
                  <p className="text-lg font-bold bad-ui-font text-orange-700">
                    READY TO DRIVE DIGITAL TRANSFORMATION IN YOUR ORGANIZATION? 🎯💼
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@valentina.com"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-yellow-300 py-4 px-8 font-mono text-sm tracking-[0.2em] hover:from-cyan-500 hover:to-lime-500 border-8 border-double border-red-500 transition-all duration-200 flex items-center justify-center shadow-2xl transform hover:scale-105 bad-ui-font font-black"
                    aria-label="Send email"
                  >
                    EMAIL → HELLO@VALENTINA.COM 📧
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/valentinaberois"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-cyan-300 py-4 px-8 font-mono text-sm tracking-[0.2em] hover:from-lime-500 hover:to-green-600 border-8 border-dashed border-purple-600 transition-all duration-200 flex items-center justify-center shadow-2xl transform hover:scale-105 bad-ui-font font-black"
                    aria-label="LinkedIn profile"
                  >
                    LINKEDIN → CONNECT 🔗
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 space-y-4">
              <div className="border-8 border-dotted border-cyan-500 p-8 bg-gradient-to-br from-pink-300 to-purple-400 text-yellow-200 h-full shadow-2xl">
                <div className="font-mono text-xs tracking-[0.3em] mb-4 bad-ui-font text-lime-300">LOCATION 🌍</div>
                <div className="text-4xl font-black bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-lime-400 drop-shadow-lg">
                  GERMANY
                </div>
                <div className="font-mono text-xs mt-4 bad-ui-font text-orange-300">
                  UTC+1 / CET ⏰
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reveal Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-8 border-double border-purple-600 p-8 bg-gradient-to-br from-lime-300 to-cyan-400 shadow-2xl">
            <h2 className="text-4xl font-black mb-6 text-center bad-ui-font text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">
              THIS IS TERRIBLE UI! 🎨💥
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="border-4 border-dashed border-orange-600 p-4 bg-gradient-to-br from-yellow-200 to-orange-300">
                <h4 className="font-black mb-3 bad-ui-font text-purple-800">VISUAL DESIGN DISASTERS:</h4>
                <ul className="space-y-2 font-bold bad-ui-font text-red-700">
                  <li>✗ Clashing neon color combinations</li>
                  <li>✗ Comic Sans font everywhere</li>
                  <li>✗ Excessive gradients and borders</li>
                  <li>✗ Competing visual styles</li>
                  <li>✗ Random emojis scattered around</li>
                  <li>✗ Rotating, scaling animations</li>
                  <li>✗ Dashed, dotted, double borders</li>
                </ul>
              </div>
              
              <div className="border-4 border-dotted border-cyan-600 p-4 bg-gradient-to-br from-pink-200 to-purple-300">
                <h4 className="font-black mb-3 bad-ui-font text-orange-800">BUT GOOD UX STRUCTURE:</h4>
                <ul className="space-y-2 font-bold bad-ui-font text-green-800">
                  <li>✓ Clear information hierarchy</li>
                  <li>✓ Proper responsive grid layout</li>
                  <li>✓ Logical content sections</li>
                  <li>✓ Clear navigation that works</li>
                  <li>✓ Readable text sizes</li>
                  <li>✓ Proper spacing and whitespace</li>
                  <li>✓ All interactions work correctly</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-yellow-400 shadow-xl">
              <p className="text-2xl font-black text-center mb-2 bad-ui-font text-yellow-300 drop-shadow-lg">
                TERRIBLE UI. GREAT UX! 🎯
              </p>
              <p className="text-center font-bold bad-ui-font text-cyan-300">
                Same content structure and usability as the good version - but with intentionally awful visual design choices!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 border-t-8 border-yellow-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-cyan-500 flex items-center justify-center border-4 border-orange-500 rotate-12 shadow-lg">
                  <span className="text-purple-900 font-black text-3xl bad-ui-font">V</span>
                </div>
                <div>
                  <div className="font-black text-xl bad-ui-font text-yellow-300">VALENTINA BEROIS</div>
                  <div className="font-mono text-xs text-lime-300 tracking-[0.2em] bad-ui-font">UX DIRECTOR ⭐</div>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-xs text-cyan-300 mb-2 bad-ui-font">© 2026 ALL RIGHTS RESERVED 📜</div>
              <div className="font-mono text-xs space-x-4 bad-ui-font">
                <span className="text-yellow-300">VERSION</span>
                <span className="text-lime-300">2.0.0 (BAD UI DEMO)</span>
                <span className="text-yellow-300">•</span>
                <span className="text-yellow-300">BUILT WITH</span>
                <span className="text-orange-300">REACT 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
