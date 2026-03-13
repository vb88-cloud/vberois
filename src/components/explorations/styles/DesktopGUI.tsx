import { motion } from 'motion/react';
import { X, Minus, Square } from 'lucide-react';

export function DesktopGUI() {
  const Window = ({ title, children, className = '', zIndex = 10 }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-gray-200 border-2 border-gray-400 shadow-2xl ${className}`}
      style={{ zIndex }}
    >
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white/20 flex items-center justify-center text-white text-xs">
            📄
          </div>
          <span className="text-white text-sm font-bold">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-gray-300 border border-gray-600 flex items-center justify-center hover:bg-gray-400">
            <Minus size={12} />
          </button>
          <button className="w-5 h-5 bg-gray-300 border border-gray-600 flex items-center justify-center hover:bg-gray-400">
            <Square size={10} />
          </button>
          <button className="w-5 h-5 bg-red-600 border border-red-800 flex items-center justify-center hover:bg-red-700 text-white">
            <X size={12} />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 bg-white">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 p-8 relative">
      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 space-y-6 z-0">
        {['About.txt', 'Work/', 'Contact.exe'].map((icon, i) => (
          <div key={i} className="text-center cursor-pointer hover:bg-white/20 p-2 rounded">
            <div className="w-12 h-12 mx-auto mb-1 bg-white/90 border-2 border-gray-400 flex items-center justify-center text-2xl">
              {icon.includes('/') ? '📁' : icon.includes('.exe') ? '⚙️' : '📄'}
            </div>
            <div className="text-white text-xs font-bold drop-shadow-lg">{icon}</div>
          </div>
        ))}
      </div>

      {/* Main Windows Layout */}
      <div className="max-w-[1400px] mx-auto relative">
        {/* Hero Window */}
        <Window title="Valentina Berois - Digital Transformation Leader.doc" className="mb-6" zIndex={30}>
          <div className="p-6">
            {/* Menu Bar */}
            <div className="flex gap-6 mb-6 text-sm border-b pb-2">
              <span className="cursor-pointer hover:underline">File</span>
              <span className="cursor-pointer hover:underline">Edit</span>
              <span className="cursor-pointer hover:underline">View</span>
              <span className="cursor-pointer hover:underline">Help</span>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 text-xs font-bold mb-4">
                  UX DIRECTOR
                </div>
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  Digital
                  <br />
                  Transformation
                  <br />
                  Leader
                </h1>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
                </p>
                <div className="flex gap-3">
                  <button className="px-6 py-2 bg-blue-600 text-white font-bold border-2 border-blue-800 shadow-md hover:bg-blue-700 active:translate-y-px">
                    Contact Me
                  </button>
                  <button className="px-6 py-2 bg-gray-300 font-bold border-2 border-gray-500 shadow-md hover:bg-gray-400 active:translate-y-px">
                    View Portfolio
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-yellow-100 border-2 border-gray-400 p-4">
                  <div className="text-3xl font-bold mb-1">15</div>
                  <div className="text-xs font-bold">YEARS EXPERIENCE</div>
                </div>
                <div className="bg-green-100 border-2 border-gray-400 p-4">
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-xs font-bold">PROJECTS</div>
                </div>
              </div>
            </div>
          </div>
        </Window>

        {/* Portfolio Window - Overlapping */}
        <Window title="Portfolio - Selected Work" className="absolute top-72 left-32" zIndex={20}>
          <div className="w-[600px]">
            <div className="space-y-3">
              {[
                { title: 'Enterprise Projects', color: 'bg-orange-100' },
                { title: 'AI Experiments', color: 'bg-yellow-100' },
                { title: 'Time Machine', color: 'bg-green-100' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} border-2 border-gray-400 p-4 hover:shadow-lg cursor-pointer`}>
                  <div className="flex items-center justify-between">
                    <div className="font-bold">{item.title}</div>
                    <div className="text-gray-600">▶</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Window>

        {/* Contact Window */}
        <Window title="Contact Information" className="absolute top-96 right-32" zIndex={15}>
          <div className="w-[400px]">
            <div className="space-y-4">
              <div className="bg-gray-100 border border-gray-300 p-3">
                <div className="text-xs text-gray-600 mb-1">EMAIL</div>
                <div className="font-bold">hello@valentina.com</div>
              </div>
              <div className="bg-gray-100 border border-gray-300 p-3">
                <div className="text-xs text-gray-600 mb-1">LINKEDIN</div>
                <div className="font-bold text-blue-600">/in/valentinaberois</div>
              </div>
              <div className="bg-gray-100 border border-gray-300 p-3">
                <div className="text-xs text-gray-600 mb-1">LOCATION</div>
                <div className="font-bold">Germany (UTC+1)</div>
              </div>
            </div>
          </div>
        </Window>

        {/* Lab Projects Window */}
        <Window title="Lab - Experimental Projects" className="absolute bottom-32 left-64" zIndex={25}>
          <div className="w-[500px]">
            <div className="grid grid-cols-2 gap-3">
              {[
                'AI Design System',
                'UX Research Bot',
                'Prototype Generator',
                'A11y Audit Tool',
              ].map((project, i) => (
                <div key={i} className="bg-blue-50 border border-blue-300 p-3 text-center hover:bg-blue-100 cursor-pointer">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="text-xs font-bold">{project}</div>
                </div>
              ))}
            </div>
          </div>
        </Window>
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-300 border-t-2 border-gray-400 px-2 py-1 flex items-center gap-2 z-50">
        <button className="px-4 py-1 bg-green-600 text-white font-bold border-2 border-green-800 hover:bg-green-700 flex items-center gap-2">
          <span>⊞</span>
          Start
        </button>
        <div className="flex-1 flex gap-1">
          <div className="px-3 py-1 bg-gray-200 border border-gray-400 text-xs font-bold hover:bg-gray-100">
            Portfolio.doc
          </div>
          <div className="px-3 py-1 bg-gray-200 border border-gray-400 text-xs font-bold hover:bg-gray-100">
            Contact.txt
          </div>
        </div>
        <div className="px-3 py-1 bg-blue-200 border border-blue-400 text-xs font-bold">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}
