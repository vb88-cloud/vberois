import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface PortfolioBrutalistProps {
  onNavigate: (view: string) => void;
}

export function PortfolioBrutalist({ onNavigate }: PortfolioBrutalistProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Animation configs that respect reduced motion
  const getAnimationProps = (defaultProps: any) => {
    if (prefersReducedMotion) {
      return { initial: { opacity: 1 }, animate: { opacity: 1 } };
    }
    return defaultProps;
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Grid System Header */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true }
          })}
          className="grid grid-cols-12 gap-4 mb-12"
        >
          <div className="col-span-12 border-t-4 border-white pt-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-gray-500 block mb-2">COMING SOON!</span>
                <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                  WORK
                </h2>
              </div>
              <div className="text-right font-mono text-sm">
                <div className="mb-1">2011—2026</div>
                <div className="text-gray-500">15 YEARS</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* AI Experiments - Takes 6 columns */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              viewport: { once: true }
            })}
            className="col-span-12 md:col-span-6 cursor-pointer group"
            onClick={() => onNavigate('ai')}
          >
            <div className="bg-[#FFD93D] text-black h-full min-h-[400px] p-8 md:p-12 relative overflow-hidden border-4 border-white transition-all duration-300 group-hover:border-8">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="font-mono text-sm mb-4 tracking-[0.3em]">01</div>
                  <h3 className="text-5xl md:text-7xl font-black leading-none mb-6">
                    AI<br />EXPERIMENTS
                  </h3>
                  <p className="text-xl md:text-2xl font-bold max-w-md leading-tight">
                    WEEKEND PROJECTS<br />
                    AI TOOLS & EXPERIMENTS<br />
                    CONTINUOUS LEARNING
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border-4 border-black flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono text-sm tracking-[0.2em]">EXPLORE</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-4 border-black"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black"></div>
            </div>
          </motion.div>

          {/* Time Machine - Takes 6 columns */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: true }
            })}
            className="col-span-12 md:col-span-6 cursor-pointer group"
            onClick={() => onNavigate('timemachine')}
          >
            <div className="bg-[#6BCF7F] text-black h-full min-h-[400px] p-8 md:p-12 relative overflow-hidden border-4 border-white transition-all duration-300 group-hover:border-8">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="font-mono text-sm mb-4 tracking-[0.3em]">02</div>
                  <h3 className="text-5xl md:text-7xl font-black leading-none mb-6">
                    TIME<br />MACHINE
                  </h3>
                  <p className="text-xl md:text-2xl font-bold max-w-md leading-tight">
                    EARLY DESIGN WORK<br />
                    ARCHIVE PROJECTS<br />
                    PASSWORD PROTECTED
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border-4 border-black flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono text-sm tracking-[0.2em]">TRAVEL BACK</span>
                </div>
              </div>

              {/* Decorative Clock Elements */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 border-4 border-black rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-black origin-bottom -translate-x-1/2 -translate-y-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-black origin-bottom -translate-x-1/2 -translate-y-full rotate-90"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Strip */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            viewport: { once: true }
          })}
          className="mt-4 border-4 border-white p-6"
        >
          <div className="flex flex-wrap items-center gap-8 font-mono text-sm tracking-[0.2em]">
            <span className="text-gray-500">SUCCESS CASE STUDIES FROM MY FAVOURITE PROJECTS</span>
            <span>BASF</span>
            <span>ARRI</span>
            <span>VORWERK</span>
            <span>HEATHROW EXPRESS</span>
            <span className="text-gray-500">+MORE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}