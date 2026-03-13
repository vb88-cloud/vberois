import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLITerminal } from './styles/CLITerminal';
import { DesktopGUI } from './styles/DesktopGUI';
import { Skeuomorphic } from './styles/Skeuomorphic';
import { Web1 } from './styles/Web1';
import { Web2Glossy } from './styles/Web2Glossy';
import { FlatMinimal } from './styles/FlatMinimal';
import { MaterialCards } from './styles/MaterialCards';
import { MobileFirstTouch } from './styles/MobileFirstTouch';
import { Glassmorphism } from './styles/Glassmorphism';
import { AIGenerative } from './styles/AIGenerative';

type ExplorationStyle = 
  | 'cli'
  | 'desktop-gui'
  | 'skeuomorphic'
  | 'web1'
  | 'web2-glossy'
  | 'flat-minimal'
  | 'material-cards'
  | 'mobile-first'
  | 'glassmorphism'
  | 'ai-generative';

interface ExplorationWrapperProps {
  onBack: () => void;
}

export function ExplorationWrapper({ onBack }: ExplorationWrapperProps) {
  const [currentStyle, setCurrentStyle] = useState<ExplorationStyle>('cli');
  const [showStyleGrid, setShowStyleGrid] = useState(true);

  const styles = [
    { 
      id: 'cli', 
      name: 'CLI / Terminal', 
      icon: '>', 
      years: '1970s - 1980s',
      origin: 'Unix/Linux command-line interfaces',
      description: 'Text-based interaction with monospace fonts and command prompts. The foundation of modern computing.',
      color: 'from-green-900 to-emerald-900'
    },
    { 
      id: 'desktop-gui', 
      name: 'Desktop GUI / WIMP', 
      icon: '⬜', 
      years: '1980s - 2000s',
      origin: 'Xerox PARC, Apple Macintosh, Windows',
      description: 'Windows, Icons, Menus, Pointer. The paradigm that made computers accessible to everyone.',
      color: 'from-blue-900 to-cyan-900'
    },
    { 
      id: 'skeuomorphic', 
      name: 'Skeuomorphic', 
      icon: '🎨', 
      years: '2007 - 2013',
      origin: 'Early iOS, macOS interfaces',
      description: 'Digital objects mimicking real-world materials and textures. Leather, wood, and realistic shadows.',
      color: 'from-amber-900 to-orange-900'
    },
    { 
      id: 'web1', 
      name: 'Web 1.0', 
      icon: '🌐', 
      years: '1991 - 2004',
      origin: 'Early World Wide Web',
      description: 'Static HTML pages with table layouts, blue links, and system fonts. The internet\'s humble beginnings.',
      color: 'from-gray-800 to-gray-900'
    },
    { 
      id: 'web2-glossy', 
      name: 'Web 2.0 Glossy', 
      icon: '✨', 
      years: '2004 - 2010',
      origin: 'AJAX, social media era',
      description: 'Gradients, reflections, and glossy buttons. The era of interactive web applications and social platforms.',
      color: 'from-purple-900 to-indigo-900'
    },
    { 
      id: 'flat-minimal', 
      name: 'Flat Minimal', 
      icon: '▢', 
      years: '2013 - Present',
      origin: 'Microsoft Metro, iOS 7',
      description: 'Clean lines, simple colors, abundant whitespace. Design reduced to its essential elements.',
      color: 'from-slate-800 to-slate-900'
    },
    { 
      id: 'material-cards', 
      name: 'Material Design', 
      icon: '📇', 
      years: '2014 - Present',
      origin: 'Google Material Design',
      description: 'Paper metaphor with elevation, shadows, and motion. Digital surfaces with physical properties.',
      color: 'from-indigo-900 to-blue-900'
    },
    { 
      id: 'mobile-first', 
      name: 'Mobile-First Touch', 
      icon: '📱', 
      years: '2010 - Present',
      origin: 'Smartphone revolution',
      description: 'Large tap targets, thumb-friendly layouts, app-like interfaces. Design for fingers, not cursors.',
      color: 'from-violet-900 to-purple-900'
    },
    { 
      id: 'glassmorphism', 
      name: 'Glassmorphism', 
      icon: '💎', 
      years: '2020 - Present',
      origin: 'macOS Big Sur, iOS 14',
      description: 'Frosted glass effects with background blur. Translucent layers creating depth and hierarchy.',
      color: 'from-pink-900 to-rose-900'
    },
    { 
      id: 'ai-generative', 
      name: 'AI / Generative', 
      icon: '🤖', 
      years: '2022 - Present',
      origin: 'ChatGPT, AI revolution',
      description: 'Prompt-based interfaces, dynamic content blocks, and adaptive layouts. The future of interaction.',
      color: 'from-purple-950 to-slate-950'
    },
  ];

  const currentStyleData = styles.find(s => s.id === currentStyle);

  const renderExploration = () => {
    switch (currentStyle) {
      case 'cli':
        return <CLITerminal />;
      case 'desktop-gui':
        return <DesktopGUI />;
      case 'skeuomorphic':
        return <Skeuomorphic />;
      case 'web1':
        return <Web1 />;
      case 'web2-glossy':
        return <Web2Glossy />;
      case 'flat-minimal':
        return <FlatMinimal />;
      case 'material-cards':
        return <MaterialCards />;
      case 'mobile-first':
        return <MobileFirstTouch />;
      case 'glassmorphism':
        return <Glassmorphism />;
      case 'ai-generative':
        return <AIGenerative />;
      default:
        return <CLITerminal />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 border-b-4 border-purple-500/30">
        <div className="max-w-[1800px] mx-auto px-6 py-12">
          <button
            onClick={onBack}
            className="text-white/60 hover:text-white text-sm font-mono transition-colors mb-8 flex items-center gap-2"
          >
            ← BACK TO PORTFOLIO
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-xs font-bold mb-6">
              INTERACTIVE DESIGN EXHIBITION
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
              Design Through
              <br />
              The Ages
            </h1>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience 50+ years of interface design evolution. Same portfolio, 10 different eras.
              <br />
              <span className="text-purple-300 font-bold">Click any style below to time travel! 🚀</span>
            </p>
          </motion.div>

          {/* Style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {styles.map((style, i) => (
              <motion.button
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setCurrentStyle(style.id as ExplorationStyle);
                  setShowStyleGrid(false);
                }}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all ${
                  currentStyle === style.id
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/50 scale-105'
                    : 'border-white/10 hover:border-white/30 hover:scale-105'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 p-6 text-left">
                  <div className="text-4xl mb-3">{style.icon}</div>
                  <div className="text-white font-bold text-sm mb-1">{style.name}</div>
                  <div className="text-white/60 text-xs font-mono">{style.years}</div>
                  {currentStyle === style.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Current Style Info Banner */}
      {currentStyleData && (
        <motion.div
          key={currentStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40"
        >
          <div className="max-w-[1800px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="text-4xl">{currentStyleData.icon}</div>
                <div>
                  <div className="text-white font-black text-xl mb-1">{currentStyleData.name}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-purple-400 font-mono">{currentStyleData.years}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60">{currentStyleData.origin}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowStyleGrid(!showStyleGrid)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all"
              >
                {showStyleGrid ? 'Hide' : 'Show'} All Styles
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4 max-w-4xl">
              {currentStyleData.description}
            </p>
          </div>
        </motion.div>
      )}

      {/* Expandable Style Grid */}
      <AnimatePresence>
        {showStyleGrid && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-black/80 backdrop-blur-sm border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-[1800px] mx-auto px-6 py-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setCurrentStyle(style.id as ExplorationStyle)}
                    className={`relative overflow-hidden rounded-lg border transition-all p-4 text-left ${
                      currentStyle === style.id
                        ? 'border-purple-400 bg-purple-500/20'
                        : 'border-white/10 hover:border-white/30 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{style.icon}</div>
                      <div>
                        <div className="text-white text-xs font-bold">{style.name}</div>
                        <div className="text-white/50 text-xs font-mono">{style.years}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exploration Content */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderExploration()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}