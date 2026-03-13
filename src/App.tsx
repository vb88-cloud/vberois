import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Linkedin, Mail, Github, ExternalLink, Users, Award, Briefcase, ArrowUpRight, Sparkles, Bot, Brain, Zap, Palette, MessageSquare, Clock, Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import speakingImage from 'figma:asset/10c128015a37747e8f1522403a34ae3b46591e2d.png';
import { useState, lazy, Suspense } from 'react';
import { SEO } from './components/SEO';
import { SkipLink } from './components/SkipLink';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useReducedMotion } from './hooks/useReducedMotion';
import { PortfolioBrutalist } from './components/PortfolioBrutalist';
import { BackToTop } from './components/BackToTop';
import LogoDark from './imports/logo-dark_copy_2.svg';
import svgPaths from './imports/svg-gmxeuackzi';

// Lazy load heavy components for better performance
const EnterpriseProjects = lazy(() => import('./components/EnterpriseProjects').then(module => ({ default: module.EnterpriseProjects })));
const TimeMachine = lazy(() => import('./components/TimeMachine').then(module => ({ default: module.TimeMachine })));
const BadUXVersion = lazy(() => import('./components/BadUXVersion').then(module => ({ default: module.BadUXVersion })));
const BadUIVersion = lazy(() => import('./components/BadUIVersion').then(module => ({ default: module.BadUIVersion })));
const BadRequirementsVersion = lazy(() => import('./components/BadRequirementsVersion').then(module => ({ default: module.BadRequirementsVersion })));

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [uiStyle, setUiStyle] = useState<'good' | 'bad-ux' | 'bad-ui' | 'bad-requirements'>('good');
  const [isTimeMachineUnlocked, setIsTimeMachineUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Password protection for Time Machine
  const TIME_MACHINE_PASSWORD = 'timeline2024';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === TIME_MACHINE_PASSWORD) {
      setIsTimeMachineUnlocked(true);
      setPasswordError(false);
      setPasswordInput('');
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  // Render detail pages based on currentView
  if (currentView === 'enterprise') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <EnterpriseProjects onBack={() => setCurrentView('home')} />
      </Suspense>
    );
  }

  if (currentView === 'timemachine') {
    if (!isTimeMachineUnlocked) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white border-8 border-white p-12">
              {/* Header */}
              <div className="mb-8">
                <button
                  onClick={() => setCurrentView('home')}
                  className="mb-6 px-4 py-2 border-4 border-black hover:bg-black hover:text-white transition-colors font-black text-sm"
                >
                  ← BACK TO HOME
                </button>
                <div className="font-mono text-xs text-gray-500 mb-4 tracking-[0.3em]">
                  RESTRICTED ACCESS
                </div>
                <h2 className="text-5xl font-black mb-4 tracking-tight">
                  TIME MACHINE
                </h2>
                <p className="text-lg font-bold text-gray-600">
                  ENTER PASSWORD TO ACCESS ARCHIVE
                </p>
              </div>

              {/* Password Form */}
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs tracking-[0.2em] mb-3 text-gray-500">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full px-6 py-4 border-4 border-black font-mono text-lg focus:outline-none focus:border-[#6BCF7F] transition-colors"
                    placeholder="Enter password..."
                    autoFocus
                  />
                </div>

                {passwordError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#FF6B35] border-4 border-black p-4"
                  >
                    <p className="font-black text-sm text-white">
                      ⚠ INCORRECT PASSWORD. PLEASE TRY AGAIN.
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 font-black text-lg hover:bg-[#6BCF7F] hover:text-black border-4 border-black transition-colors"
                >
                  UNLOCK ACCESS →
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-8 pt-8 border-t-4 border-gray-200">
                <p className="font-mono text-xs text-gray-500 leading-relaxed">
                  This section contains early design work and is password-protected for privacy. If you need access, please contact the portfolio owner.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <TimeMachine onBack={() => setCurrentView('home')} />
      </Suspense>
    );
  }

  // If Bad UX mode is active, render that version
  if (uiStyle === 'bad-ux') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <BadUXVersion onReturnToGoodUX={() => setUiStyle('good')} />
      </Suspense>
    );
  }

  // If Bad UI mode is active, render that version
  if (uiStyle === 'bad-ui') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <BadUIVersion onReturnToGoodUI={() => setUiStyle('good')} />
      </Suspense>
    );
  }

  // If Bad Requirements mode is active, render that version
  if (uiStyle === 'bad-requirements') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <BadRequirementsVersion onReturnToGood={() => setUiStyle('good')} />
      </Suspense>
    );
  }

  const expertiseAreas = [
    {
      number: "01",
      title: "Digital Transformation & Innovation Strategy",
      description: "Helping organizations evolve how they deliver value through new digital models and strategic frameworks.",
      color: "from-violet-500/10 to-purple-500/10",
      accent: "text-violet-600",
      border: "border-violet-200",
      icon: "✨"
    },
    {
      number: "02", 
      title: "UX Leadership & Cross-Functional Collaboration",
      description: "Building strong teams and facilitating collaboration across diverse disciplines and stakeholder groups.",
      color: "from-blue-500/10 to-cyan-500/10",
      accent: "text-blue-600",
      border: "border-blue-200",
      icon: "🚀"
    },
    {
      number: "03",
      title: "Service Design & Ecosystem Thinking", 
      description: "Creating holistic experiences that connect touchpoints across complex customer journeys and service ecosystems.",
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-600",
      border: "border-emerald-200",
      icon: "🌐"
    },
    {
      number: "04",
      title: "Web & Product Development",
      description: "Bringing solutions to life through hands-on development and strategic implementation of digital products.",
      color: "from-amber-500/10 to-orange-500/10",
      accent: "text-amber-600",
      border: "border-amber-200",
      icon: "⚡"
    },
    {
      number: "05",
      title: "Agile Practices & Strategic Management", 
      description: "Guiding teams through agile methodologies to deliver high-impact digital transformation initiatives.",
      color: "from-pink-500/10 to-rose-500/10",
      accent: "text-pink-600",
      border: "border-pink-200",
      icon: "🎯"
    }
  ];

  const clientLogos = [
    "BASF", "ARRI", "Vorwerk", "Heathrow Express", "and more..."
  ];

  const weekendProjects = [
    {
      title: "AI Design System Generator",
      description: "An intelligent tool that generates design systems from brand guidelines using GPT-4 Vision and custom algorithms.",
      tech: ["OpenAI API", "React", "TypeScript", "Tailwind"],
      status: "Active",
      github: "https://github.com/valentina/ai-design-system",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "UX Research Assistant",
      description: "A conversational AI that analyzes user interviews and generates insights, personas, and journey maps automatically.",
      tech: ["Claude API", "Python", "Next.js", "Supabase"],
      status: "Beta",
      github: "https://github.com/valentina/ux-research-ai",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Smart Prototype Generator",
      description: "Transforms wireframes into interactive prototypes using computer vision and generates React components.",
      tech: ["Gemini Pro", "Vision API", "React", "Framer Motion"],
      status: "Active",
      github: "https://github.com/valentina/smart-prototyper",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      title: "AI-Powered User Story Generator",
      description: "Generates comprehensive user stories, acceptance criteria, and test cases from simple feature descriptions.",
      tech: ["ChatGPT API", "Nuxt.js", "Prisma", "PostgreSQL"],
      status: "In Development",
      github: "https://github.com/valentina/story-generator-ai",
      icon: MessageSquare,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Accessibility Audit Bot",
      description: "An automated accessibility scanner that provides detailed reports and suggestions for WCAG compliance improvements.",
      tech: ["LangChain", "Playwright", "Vue.js", "Node.js"],
      status: "Active",
      github: "https://github.com/valentina/a11y-audit-bot",
      icon: Bot,
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* SEO Meta Tags */}
      <SEO />
      
      {/* Accessibility Skip Link */}
      <SkipLink />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#F5F1E8] border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-14">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img src={LogoDark} alt="VB Logo" className="w-11 h-11" />
              <div>
                <div className="font-black text-base leading-6 text-black">Valentina Berois</div>
                <div className="text-[10.5px] font-bold leading-3 text-neutral-500 tracking-[0.0923px]">UX Director</div>
              </div>
            </motion.div>
            
            <div className="flex items-center gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex gap-6"
              >
                {['About', 'Work', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="font-bold text-xs text-black hover:text-[#FF6B35] transition-colors tracking-tight"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
              
              <button
                className="px-4 py-2 border-4 border-black bg-[#FF6B35] text-white font-black text-xs hover:bg-transparent hover:text-black transition-all"
                aria-label="Contact me"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="pt-24 pb-16 px-14">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-4 border-black p-14 relative overflow-hidden"
          >
            {/* Rainbow Diagonal Gradient Accent */}
            <div className="absolute top-0 right-0 bottom-0 w-[464px] opacity-20 pointer-events-none">
              <div className="absolute inset-0 -skew-x-12 scale-y-[0.98] bg-gradient-to-b from-[#FF6B35] via-[#FFD93D] to-[#C2185B]" />
            </div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block px-3 py-1 font-black text-[10.5px] mb-6 border-2 border-black bg-black text-[#FFD600] leading-[14px] tracking-[0.0923px]">
                UX DIRECTOR
              </div>
              
              {/* Main Title */}
              <h1 className="text-[84px] font-black leading-[84px] mb-8 text-black tracking-tight">
                Digital<br/>
                Transformation<br/>
                Leader
              </h1>
              
              {/* Description */}
              <p className="text-[21px] leading-[34px] max-w-[588px] mb-12 text-[#1E2939] tracking-tight">
                Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFD600] border-4 border-black p-5">
                  <div className="text-[15px] font-black mb-3 leading-5 text-black tracking-[0.0923px]">
                    SELECTED COMPANY REFERENCES FROM PROJECTS DELIVERED THROUGH AGENCIES I WORKED AT, WHERE DISCLOSURE IS PERMITTED.
                  </div>
                  <div className="text-sm font-black leading-[22.75px] text-black tracking-tight">
                    BASF • ARRI • Vorwerk Cookidoo® • Heathrow Express • Commerz Finanz • Rossmann • Esprit
                  </div>
                </div>
                
                <div className="bg-[#6BCF7F] border-4 border-black p-6">
                  <div className="text-[15px] font-black mb-3 leading-[13px] text-black tracking-[0.0923px]">
                    SOLUTIONS DESIGNED
                  </div>
                  <div className="text-sm font-black leading-[22.75px] text-black tracking-tight">
                    B2B • B2C • ENTERPRISE • WEB ACCESSIBILITY ACT EU AUDITS • MOBILE FIRST • PWA • WEB • iOS • ANDROID
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Areas of Expertise */}
      <section id="work" className="hidden py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/50 via-transparent to-blue-100/50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Core Areas of Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Specialized capabilities that drive meaningful digital transformation across enterprise organizations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${area.color} backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${area.border} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 group-hover:from-white/80 group-hover:to-white/50 transition-all duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-2xl`}>{area.icon}</div>
                      <span className={`text-sm font-bold ${area.accent} tracking-wider`}>{area.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-800 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work - Portfolio */}
      <PortfolioBrutalist onNavigate={setCurrentView} />

      {/* Work Experience */}
      <section id="experience" className="py-24 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 pt-6 mb-8 border-t-4 border-white">
              <span className="font-mono text-xs tracking-[0.3em] text-gray-500">CURRENT AND FORMER JOB POSITION</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2">
                EXPERIENCE
              </h2>
            </div>

            {/* Current Role */}
            <div className="col-span-12 md:col-span-6">
              <div className="border-4 p-8 h-full transition-colors duration-200 bg-[#FF6B35] border-white hover:bg-[#E85A2A]">
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs tracking-[0.3em]">CURRENT</div>
                  <div className="font-mono text-xs">2023—NOW</div>
                </div>
                
                <h3 className="text-4xl font-black leading-tight mb-4">
                  HEAD OF UX
                </h3>
                
                <div className="text-2xl font-black mb-6">
                  KRONES AG
                </div>
                
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="font-bold">LEADING THE UX DEPARTMENT AND A STRATEGIC DIGITAL TRANSFORMATION INITIATIVE AT THE CORE OF THE COMPANY'S FUTURE OFFERING.</p>
                  <p>RESPONSIBLE FOR ESTABLISHING UX EXCELLENCE AS A PILLAR OF PRODUCT STRATEGY AND DRIVING INNOVATION WITHIN ENTERPRISE-SCALE SYSTEMS.</p>
                </div>
                
                <div className="mt-8 pt-6 border-t-2 border-white/30">
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <div className="text-white/70 mb-1">SCOPE</div>
                      <div className="font-black">ENTERPRISE</div>
                    </div>
                    <div>
                      <div className="text-white/70 mb-1">TEAM</div>
                      <div className="font-black">10+ PEOPLE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role */}
            <div className="col-span-12 md:col-span-6">
              <div className="border-4 p-8 h-full transition-colors duration-200 bg-white border-white text-black hover:bg-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs tracking-[0.3em]">PREVIOUS</div>
                  <div className="font-mono text-xs">2015—2023</div>
                </div>
                
                <h3 className="text-4xl font-black leading-tight mb-4">
                  UX DIRECTOR
                </h3>
                
                <div className="text-2xl font-black mb-6">
                  INTIVE
                </div>
                
                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="font-bold">SHAPED TEAMS AND DELIVERED LARGE-SCALE DIGITAL SOLUTIONS FOR GLOBAL CLIENTS.</p>
                  <p>LED MULTI-DISCIPLINARY DESIGN TEAMS ON COMPLEX PROJECTS FOR MAJOR INTERNATIONAL CLIENTS, ESTABLISHING DESIGN SYSTEMS AND INNOVATION PROCESSES.</p>
                </div>
                
                <div className="mt-8 pt-6 border-t-2 border-black/20">
                  <div className="grid grid-cols-3 gap-4 font-mono text-xs">
                    <div>
                      <div className="opacity-70 mb-1">CLIENTS</div>
                      <div className="font-black">20+</div>
                    </div>
                    <div>
                      <div className="opacity-70 mb-1">PROJECTS</div>
                      <div className="font-black">35+</div>
                    </div>
                    <div>
                      <div className="opacity-70 mb-1">TEAM</div>
                      <div className="font-black">10+ IN 2 COUNTRIES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6 lg:px-8 border-b-4 border-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 pt-6 mb-8 border-t-4 border-white">
              <span className="font-mono text-xs tracking-[0.3em] text-gray-500">SECTION—05</span>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mt-2 text-black">
                CONTACT
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border-4 p-12 text-black bg-[#FFD93D] border-white">
                <div className="mb-8">
                  <p className="text-3xl md:text-5xl font-black leading-tight mb-6">
                    WANT TO GET<br/>
                    IN TOUCH?
                  </p>
                  <p className="text-lg font-bold">
                    SEND ME AN EMAIL OR CONTACT ME THROUGH LINKEDIN
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@valentina.com"
                    className="block w-full bg-black text-white py-4 px-8 font-mono text-sm tracking-[0.2em] hover:bg-white hover:text-black border-4 border-black transition-colors duration-200 text-center"
                    aria-label="Send email"
                  >
                    EMAIL → HELLO@VALENTINA.COM
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/valentinaberois"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-black py-4 px-8 font-mono text-sm tracking-[0.2em] hover:bg-black hover:text-white border-4 border-black transition-colors duration-200 text-center"
                    aria-label="LinkedIn profile"
                  >
                    LINKEDIN → CONNECT
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 space-y-4">
              <div className="border-4 p-8 h-full bg-white border-white text-black">
                <div className="font-mono text-xs tracking-[0.3em] mb-4">LOCATION</div>
                
                {/* Current Location */}
                <div className="mb-6">
                  <div className="text-xs font-black mb-2 opacity-60">CURRENT</div>
                  <div className="text-3xl font-black mb-2">
                    BAVARIA, GERMANY
                  </div>
                  <div className="font-mono text-xs opacity-70">
                    UTC+1 / CET
                  </div>
                </div>
                
                {/* Former Location */}
                <div className="mb-6 pb-6 border-b-2 border-black/20">
                  <div className="text-xs font-black mb-2 opacity-60">FORMER</div>
                  <div className="text-2xl font-black">
                    MONTEVIDEO, URUGUAY
                  </div>
                </div>
                
                {/* Languages */}
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] mb-3">LANGUAGES</div>
                  <div className="text-lg font-black">
                    ENGLISH • SPANISH • GERMAN
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t-4 border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={LogoDark} alt="VB Logo" className="w-16 h-16" />
                <div>
                  <div className="font-black text-xl text-black">VALENTINA BEROIS</div>
                  <div className="font-mono text-xs tracking-[0.2em] text-gray-500">UX DIRECTOR</div>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-xs mb-2 text-gray-500">© 2026 ALL RIGHTS RESERVED</div>
              <div className="font-mono text-xs space-x-1">
                <span className="text-gray-500">VERSION </span>
                <span className="text-[#6BCF7F]">2.0.0</span>
                <span className="text-gray-500"> • BUILT WITH </span>
                <span className="text-[#FFD93D]">REACT</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}