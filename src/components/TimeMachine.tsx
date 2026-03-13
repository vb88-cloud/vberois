import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone } from 'lucide-react';

// Import Commerz Finanz images
import commerzImg1 from 'figma:asset/46e563781d39c3bb8d19f904a30296869ae5fb8e.png';
import commerzImg2 from 'figma:asset/86be628b2a20a575b4f0211c54fab9b74f37818f.png';
import commerzImg3 from 'figma:asset/5dedfcffa0740a9650780411a5c6c9b9dfc3398e.png';

// Import Temial images
import temialImg1 from 'figma:asset/84871d87d981dd465ff3e5107cfce8e39b69c646.png';

// Import Aktion Mensch images
import aktionImg1 from 'figma:asset/9417accc3da21be79223c89541cca4fcefa0181c.png';
import aktionImg2 from 'figma:asset/6155342656dd234305df422d753511eba234b45b.png';

// Import Heathrow Express images
import heathrowImg1 from 'figma:asset/1a83936a8dbe5501e840df331c0af3402b044d44.png';
import heathrowImg2 from 'figma:asset/59da4932413cc41b9df967eec7419db09b0ea64d.png';
import heathrowImg3 from 'figma:asset/80951172b9127bf3cde7804cde3e8e04e953ce3e.png';
import heathrowImg4 from 'figma:asset/d07e743041da6630d28018f59bf7d66d4c5a7c71.png';
import heathrowImg5 from 'figma:asset/a342733622df03ab094c3df22e75c83521267f93.png';
import heathrowImg6 from 'figma:asset/6d968f7b72a2ab5fc3257b12c50bffc7259a03c4.png';
import heathrowImg7 from 'figma:asset/3d3b43851088ece66e24f1ea69556b8493b04eb6.png';

interface TimeMachineProps {
  onBack: () => void;
}

interface Project {
  id: string;
  year: number;
  title: string;
  client: string;
  date: string;
  role_line: string;
  location: string;
  card_teaser: string;
  dialog_paragraphs: string[];
  media_hint: string;
  images?: string[];
  thumbnail?: string;
  brandColor: {
    bg: string;
    text: string;
    border: string;
    hoverBg: string;
  };
}

export function TimeMachine({ onBack }: TimeMachineProps) {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(2020);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'all'>('timeline'); // New state for view mode
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const startYear = 2015;
  const endYear = 2021;
  const totalYears = endYear - startYear;

  // Projects data - Real dataset
  const projectsData: Project[] = [
    {
      id: "commerz",
      year: 2015,
      title: "Commerz Finanz Online Banking",
      client: "Commerz Finanz & BNP Paribas",
      date: "12.2015 - 03.2016",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This project consisted on the Concept & Design of a product with several platforms support: Android App, iOS App & Responsive Web App (4 ma…",
      dialog_paragraphs: [
        "This project involved the concept and design of a cross-platform product, including an Android app, an iOS app, and a responsive web application with four primary breakpoints: smartphone, tablet, desktop, and large desktop. One of the main challenges was a complete rebrand only three months after the initial launch. To support this transition efficiently, we created a comprehensive design system based on reusable symbols, enabling a faster and more consistent rebranding process."
      ],
      media_hint: "8",
      images: [commerzImg1, commerzImg2, commerzImg3],
      brandColor: {
        bg: 'bg-[#FFCC00]',
        text: 'text-black',
        border: 'border-[#FFCC00]',
        hoverBg: 'hover:bg-[#E6B800]'
      }
    },
    {
      id: "temial",
      year: 2016,
      title: "Temial App",
      client: "Vorwerk",
      date: "12.2016",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This App not only lets you control your Temial Tea Maker, but it also recommends you recipes based on the Tea you have and your preferences. The…",
      dialog_paragraphs: [
        "The Temial app connects the Temial tea machine to a digital ecosystem and enhances the overall tea experience through a range of smart features. In addition to remotely controlling the device, the app provides detailed insights into tea consumption, preparation parameters, and the full tea portfolio.",
        "As soon as we learned about Vorwerk's new connected machine, we initiated a collaboration with intive and developed a pitch covering both the native mobile application and a potential e-commerce website. I was fully responsible for the concept and design of the two key media experiences: a mobile vision of the product and a web experience outlining the future commerce platform.",
        "The pitch was delivered in December 2016, the project was acquired, and the product successfully launched in 2018. A decisive factor in winning the pitch was creating an emotional connection with the product team by bringing their vision to life and giving them a tangible preview of the final experience."
      ],
      media_hint: "5",
      images: [temialImg1],
      brandColor: {
        bg: 'bg-[#009A3D]',
        text: 'text-white',
        border: 'border-[#009A3D]',
        hoverBg: 'hover:bg-[#008534]'
      }
    },
    {
      id: "aktion",
      year: 2016,
      title: "Aktion Mensch iOS & Android Apps",
      client: "Aktion Mensch Lotterie",
      date: "06.16 - 10.16",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "The Aktion Mensch mobile applications enable users to conveniently manage their lottery participation on the go. Through the app, users can securely store their tickets…",
      dialog_paragraphs: [
        "The Aktion Mensch mobile applications enable users to conveniently manage their lottery participation on the go. Through the app, users can securely store their tickets, check results instantly, and stay informed about new services, additional winning opportunities, and the organization's social initiatives.",
        "Aktion Mensch is a German social organization founded in 1964 on the initiative of ZDF. It is financed through its lottery operations, with the mission of promoting inclusion across Germany. Today, approximately 4.6 million people regularly participate in the Aktion Mensch lottery, making it the largest lottery in the country.",
        "Each month, the organization supports up to 1,000 projects benefiting people with disabilities, children, and adolescents. Since its foundation, Aktion Mensch has contributed more than €3.9 billion to social initiatives (as of 2017)."
      ],
      media_hint: "7",
      images: [aktionImg1, aktionImg2],
      brandColor: {
        bg: 'bg-[#E2001A]',
        text: 'text-white',
        border: 'border-[#E2001A]',
        hoverBg: 'hover:bg-[#C40016]'
      }
    },
    {
      id: "audi",
      year: 2017,
      title: "Audi HR App",
      client: "Audi GmbH",
      date: "10.17 - 11.17",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "First quick validation through the creation of a first prototype to test the information architecture and functionalities. I created also a style…",
      dialog_paragraphs: [
        "First quick validation through the creation of a first prototype to test the information architecture and functionalities. I created also a style direction proposal for Audi's brand implementation in digital products."
      ],
      media_hint: "15",
      brandColor: {
        bg: 'bg-[#000000]',
        text: 'text-white',
        border: 'border-[#000000]',
        hoverBg: 'hover:bg-[#1A1A1A]'
      }
    },
    {
      id: "scouting",
      year: 2017,
      title: "SCOUTING",
      client: "Bayer / BASF - xarvio Digital Farming Family",
      date: "06.2017 - 06.2020",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "xarvio™ SCOUTING app allows farmers to identify issues in their fields early on, enabling them to act quickly to protect their yield.",
      dialog_paragraphs: [
        "xarvio™ SCOUTING app allows farmers to identify issues in their fields early on, enabling them to act quickly to protect their yield."
      ],
      media_hint: "16",
      brandColor: {
        bg: 'bg-[#7CBB00]',
        text: 'text-black',
        border: 'border-[#7CBB00]',
        hoverBg: 'hover:bg-[#6FA600]'
      }
    },
    {
      id: "ross",
      year: 2017,
      title: "Rosmann App",
      client: "Rossmann",
      date: "04.2017",
      role_line: "Animations in Apps - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "My responsability on this project consisted of creating the full UX and UI design and to improve the overall user experience through micro-ani…",
      dialog_paragraphs: [
        "My responsability on this project consisted of creating the full UX and UI design and to improve the overall user experience through micro-animations."
      ],
      media_hint: "6",
      brandColor: {
        bg: 'bg-[#C3002F]',
        text: 'text-white',
        border: 'border-[#C3002F]',
        hoverBg: 'hover:bg-[#A80028]'
      }
    },
    {
      id: "kobold",
      year: 2018,
      title: "Kobold App",
      client: "Vorwerk",
      date: "03.2018 - 05.2018",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This app serves as a digital remote control of the Kobold VR300 Robot Vacuum cleaner. The goal was to improve the existing app through a better…",
      dialog_paragraphs: [
        "This app serves as a digital remote control of the Kobold VR300 Robot Vacuum cleaner. The goal was to improve the existing app through a better user experience and a new interface direction."
      ],
      media_hint: "8",
      brandColor: {
        bg: 'bg-[#009A3D]',
        text: 'text-white',
        border: 'border-[#009A3D]',
        hoverBg: 'hover:bg-[#008534]'
      }
    },
    {
      id: "winora",
      year: 2018,
      title: "Winora E-Bikes App",
      client: "Winora",
      date: "02.2018",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This was a pitch I prepared for an E-Bikes company to propose an app companion for their bikes. It included concept, UX and UI.",
      dialog_paragraphs: [
        "This was a pitch I prepared for an E-Bikes company to propose an app companion for their bikes. It included concept, UX and UI."
      ],
      media_hint: "6",
      brandColor: {
        bg: 'bg-[#E30613]',
        text: 'text-white',
        border: 'border-[#E30613]',
        hoverBg: 'hover:bg-[#C50510]'
      }
    },
    {
      id: "flaschen",
      year: 2018,
      title: "Flaschenpost App",
      client: "Flaschenpost",
      date: "06 - 07.2018",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This project consisted on the Concept & Design of the Flaschenpost App. The goal was to propose a modern and fresh design for their current app…",
      dialog_paragraphs: [
        "This project consisted on the Concept & Design of the Flaschenpost App. The goal was to propose a modern and fresh design for their current app."
      ],
      media_hint: "8",
      brandColor: {
        bg: 'bg-[#00AEEF]',
        text: 'text-white',
        border: 'border-[#00AEEF]',
        hoverBg: 'hover:bg-[#0099D6]'
      }
    },
    {
      id: "primark",
      year: 2019,
      title: "My Primark App",
      client: "Primark",
      date: "01.04 - 03.04.2019",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "On this ocassion Primark was looking for innovative ideas for their new app. This pitch consisted of a first concept definition, UX and UI.",
      dialog_paragraphs: [
        "On this ocassion Primark was looking for innovative ideas for their new app. This pitch consisted of a first concept definition, UX and UI."
      ],
      media_hint: "7",
      brandColor: {
        bg: 'bg-[#003D8F]',
        text: 'text-white',
        border: 'border-[#003D8F]',
        hoverBg: 'hover:bg-[#003070]'
      }
    },
    {
      id: "adidas",
      year: 2019,
      title: "Adidas GRM App",
      client: "adidas",
      date: "01.03.19 - 03.03.19",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "The pitch was succesfull and the App was launched. My role: concept + UX/UI for the adidas GRM app experience.",
      dialog_paragraphs: [
        "The pitch was succesfull and the App was launched."
      ],
      media_hint: "7",
      brandColor: {
        bg: 'bg-[#000000]',
        text: 'text-white',
        border: 'border-[#000000]',
        hoverBg: 'hover:bg-[#1A1A1A]'
      }
    },
    {
      id: "rehau",
      year: 2020,
      title: "Rehau Window Configurator",
      client: "Rehau",
      date: "07.10 - 06.10.2020",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "EXISTING SOLUTION : The Rehau Window Configurator is a web tool that allows end users to configure a window product. GOAL: propose an improved UX…",
      dialog_paragraphs: [
        "EXISTING SOLUTION : The Rehau Window Configurator is a web tool that allows end users to configure a window product."
      ],
      media_hint: "12",
      brandColor: {
        bg: 'bg-[#E31E24]',
        text: 'text-white',
        border: 'border-[#E31E24]',
        hoverBg: 'hover:bg-[#C51A1F]'
      }
    },
    {
      id: "hex",
      year: 2020,
      title: "Heathrow Express App",
      client: "Heathrow Express",
      date: "24.08.20 - 28.08.20",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "The redesign addressed three core dimensions: market dynamics, evolving user expectations, and pandemic-driven mobility restrictions. Our goal was to transform these…",
      dialog_paragraphs: [
        "Context & Mission\nThe redesign addressed three core dimensions that directly impacted the product's relevance: market dynamics, evolving user expectations, and pandemic-driven mobility restrictions. Our goal was to transform these constraints into an intuitive, reliable experience that users would actively choose and recommend.",
        "Outdated User Experience & App Reviews\nUsers reported missing functionality and friction in key journeys, which resulted in negative store reviews and reduced adoption. At the same time, positive experiences were rarely captured due to the lack of well-timed feedback triggers. This raised critical questions around the validity of existing personas, unmet user needs, and the product's positioning against an increasingly competitive landscape.",
        "Increasing Competitive Pressure\nWith the introduction of Crossrail, the market was moving toward saturation, putting the current value proposition at risk. To remain competitive, the product required a clear differentiation strategy, measurable objectives, and a refreshed experience aligned with both business and user goals.",
        "COVID-19 & Mobility Constraints\nThe pandemic fundamentally changed travel behavior and imposed new operational requirements. The product needed to support safer journeys through updated capacity information, contactless interactions, and real-time service communication while complying with government regulations.",
        "Product Strategy: All-in-One Solution\nA new product strategy aligned business vision, user needs, and technical feasibility. The resulting direction focused on: expanded contactless payment coverage, capacity and peak-time guidance to avoid crowding, real-time disruption notifications, in-app access to travel regulations and FAQs, and a fully intuitive interface with integrated digital ticketing. This created a cohesive, future-ready mobility experience."
      ],
      media_hint: "11",
      images: [heathrowImg6],
      brandColor: {
        bg: 'bg-[#532E8C]',
        text: 'text-white',
        border: 'border-[#532E8C]',
        hoverBg: 'hover:bg-[#442677]'
      }
    },
    {
      id: "hagebaut",
      year: 2020,
      title: "Hagebaumarkt App",
      client: "Hagebaut",
      date: "03.09 - 07.09.20",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "The homepage has almost no engagement triggers… UX audit style findings and recommendations to improve conversion and clarity.",
      dialog_paragraphs: [
        "The homepage has almost no engagement triggers…"
      ],
      media_hint: "11",
      brandColor: {
        bg: 'bg-[#F6A800]',
        text: 'text-black',
        border: 'border-[#F6A800]',
        hoverBg: 'hover:bg-[#DD9600]'
      }
    },
    {
      id: "loady",
      year: 2020,
      title: "BASF Loady",
      client: "BASF",
      date: "07.2020 - 2 Days",
      role_line: "Sales Pitch - Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "Loady enables chemical companies, logistic partners and customers to exchange product and safety data efficiently. This pitch covered concept and UX direction.",
      dialog_paragraphs: [
        "Loady enables chemical companies, logistic partners and customers to exchange product and safety data efficiently."
      ],
      media_hint: "13",
      brandColor: {
        bg: 'bg-[#004A96]',
        text: 'text-white',
        border: 'border-[#004A96]',
        hoverBg: 'hover:bg-[#003D7D]'
      }
    },
    {
      id: "symrise",
      year: 2020,
      title: "Symrise Formulation Software",
      client: "Symrise",
      date: "10.20 - 11.20",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "Fully remote co-creation workshop with perfumers and stakeholders, translating complex formulation workflows into a usable interface direction.",
      dialog_paragraphs: [
        "Fully remote Co-creation workshop with perfumers and stakeholders."
      ],
      media_hint: "16",
      brandColor: {
        bg: 'bg-[#003A8F]',
        text: 'text-white',
        border: 'border-[#003A8F]',
        hoverBg: 'hover:bg-[#002E73]'
      }
    },
    {
      id: "arri",
      year: 2021,
      title: "ARRI LightNet",
      client: "ARRI",
      date: "12.20 - 02.21",
      role_line: "Product Design Leader",
      location: "Regensburg, Germany",
      card_teaser: "This new design for the ARRI LightNet software focused on a clearer information architecture and a modern UI direction for remote monitoring.",
      dialog_paragraphs: [
        "This new design for the ARRI LightNet software focused on a clearer information architecture and a modern UI direction for remote monitoring."
      ],
      media_hint: "13",
      brandColor: {
        bg: 'bg-[#00A3E0]',
        text: 'text-white',
        border: 'border-[#00A3E0]',
        hoverBg: 'hover:bg-[#008EC6]'
      }
    }
  ];

  // Get projects for selected year
  const getProjectsForYear = (year: number) => {
    return projectsData.filter(p => p.year === year);
  };

  const currentProjects = getProjectsForYear(selectedYear);

  // Parse media hint to get number of images
  const getMediaCount = (mediaHint: string): number => {
    const match = mediaHint.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  // Timeline data
  const timelineData: Record<number, {
    location: string;
    country: string;
    coordinates: string;
    role: string;
    focus: string;
    project: string;
    learning: string;
    stage: 'regensburg';
  }> = {
    2015: {
      location: 'Regensburg',
      country: 'Germany',
      coordinates: '49.0°N 12.1°E',
      role: 'Senior UX Designer',
      focus: 'Digital Transformation',
      project: 'Commerz Finanz Platform',
      learning: 'Multi-platform Design',
      stage: 'regensburg'
    },
    2017: {
      location: 'Regensburg',
      country: 'Germany',
      coordinates: '49.0°N 12.1°E',
      role: 'Senior UX Designer',
      focus: 'Enterprise Solutions',
      project: 'xarvio SCOUTING',
      learning: 'Agricultural IoT',
      stage: 'regensburg'
    },
    2020: {
      location: 'Regensburg',
      country: 'Germany',
      coordinates: '49.0°N 12.1°E',
      role: 'Lead UX Designer',
      focus: 'Strategic Design',
      project: 'Multiple Enterprise Clients',
      learning: 'Remote Co-creation',
      stage: 'regensburg'
    },
    2021: {
      location: 'Regensburg',
      country: 'Germany',
      coordinates: '49.0°N 12.1°E',
      role: 'Lead UX Designer',
      focus: 'Professional Systems',
      project: 'ARRI LightNet',
      learning: 'Professional Workflows',
      stage: 'regensburg'
    }
  };

  // Get nearest data point
  const getCurrentData = (year: number) => {
    if (timelineData[year]) {
      return timelineData[year];
    }
    
    // Find closest year
    const years = Object.keys(timelineData).map(Number);
    const closest = years.reduce((prev, curr) => 
      Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
    );
    return timelineData[closest];
  };

  const currentData = getCurrentData(selectedYear);

  const handleTimelineDrag = (clientX: number) => {
    if (!timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const year = Math.round(startYear + (percentage * totalYears));
    
    setSelectedYear(year);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleTimelineDrag(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleTimelineDrag(e.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const progressPercentage = ((selectedYear - startYear) / totalYears) * 100;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="border-b-4 border-white px-8 py-6">
        <div className="max-w-[1800px] mx-auto">
          <button
            onClick={onBack}
            className="text-white font-mono text-sm mb-6 hover:text-[#6BCF7F] transition-colors"
          >
            ← BACK TO PORTFOLIO
          </button>
          <div className="flex items-end justify-between">
            <div>
              <h1 className="font-black text-4xl mb-2">TIME MACHINE</h1>
              <div className="font-mono text-xs text-gray-500 tracking-[0.2em]">
                {viewMode === 'timeline' ? 'SET DESTINATION YEAR' : 'ALL PROJECTS CHRONOLOGICAL'}
              </div>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-6">
              <div className="flex border-4 border-white overflow-hidden">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-8 py-4 font-black text-sm transition-colors ${
                    viewMode === 'timeline'
                      ? 'bg-white text-black'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  TIME CONTROL
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-8 py-4 font-black text-sm border-l-4 border-white transition-colors ${
                    viewMode === 'all'
                      ? 'bg-white text-black'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  VIEW ALL
                </button>
              </div>
              
              {viewMode === 'timeline' && (
                <div className="font-black text-8xl tabular-nums tracking-tight">
                  {selectedYear}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Content Based on View Mode */}
      {viewMode === 'timeline' ? (
        // TIMELINE VIEW (existing)
        <>
          {/* Central Stage */}
          <div className="relative" style={{ height: 'calc(100vh - 400px)', minHeight: '500px' }}>
            <div className="max-w-[1800px] mx-auto h-full px-8 py-12 grid grid-cols-12 gap-8">
              {/* Left Column - Projects + Stage */}
              <div className="col-span-7 space-y-8 flex flex-col">
                {/* Project Cards - Top Position */}
                <div className="bg-black border-4 border-white p-8">
                  <div className="font-mono text-xs text-gray-500 tracking-[0.2em] mb-6">
                    ARCHIVED PROJECTS • {selectedYear}
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {currentProjects.length > 0 ? (
                      <motion.div
                        key={selectedYear}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-3 gap-4"
                      >
                        {currentProjects.map((project, index) => {
                          const colors = project.brandColor;
                          return (
                            <motion.button
                              key={project.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => setSelectedProject(project)}
                              className={`${colors.bg} ${colors.text} border-4 ${colors.border} ${colors.hoverBg} transition-colors text-left group overflow-hidden flex flex-col p-0`}
                            >
                              {/* Image Thumbnail */}
                              {project.images && project.images.length > 0 ? (
                                <div className={`w-full aspect-[4/3] border-b-4 ${colors.border} overflow-hidden`}>
                                  <img 
                                    src={project.images[0]} 
                                    alt={project.title}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              ) : (
                                <div className={`w-full aspect-[4/3] border-b-4 ${colors.border} flex items-center justify-center bg-black/20`}>
                                  <Smartphone className="w-12 h-12 opacity-40" />
                                </div>
                              )}
                              
                              {/* Content */}
                              <div className="p-6">
                                {/* Title */}
                                <div className="font-black text-base mb-2 line-clamp-2">
                                  {project.title}
                                </div>
                                
                                {/* Subtitle (role_line) */}
                                <div className={`font-medium text-xs mb-3 line-clamp-2 ${colors.text === 'text-white' ? 'opacity-80' : 'opacity-70'}`}>
                                  {project.role_line}
                                </div>
                                
                                {/* Client label */}
                                <div className={`font-mono text-xs line-clamp-1 ${colors.text === 'text-white' ? 'opacity-60' : 'opacity-50'}`}>
                                  {project.client}
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="no-projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-black border-4 border-gray-800 p-8 text-center"
                      >
                        <div className="font-mono text-sm text-gray-600">
                          No archived projects
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Stage Container - Below Projects */}
                <div className="relative flex-1 flex items-center justify-center">
                  {/* Floor / Location */}
                  <div className="relative w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentData.stage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {/* Floor Surface with Perspective */}
                        <svg
                          viewBox="0 0 600 300"
                          className="w-full"
                          style={{ transform: 'perspective(1000px) rotateX(60deg)' }}
                        >
                          {/* Regensburg - Cool modular blueprint grid */}
                          <defs>
                            <linearGradient id="regensburgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
                              <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.2 }} />
                            </linearGradient>
                          </defs>
                          <rect x="0" y="0" width="600" height="300" fill="url(#regensburgGrad)" />
                          
                          {/* Precise modular grid */}
                          {[...Array(10)].map((_, i) => (
                            <line
                              key={`h-${i}`}
                              x1="0"
                              y1={i * 30}
                              x2="600"
                              y2={i * 30}
                              stroke="#3B82F6"
                              strokeWidth="0.5"
                              opacity="0.4"
                            />
                          ))}
                          {[...Array(20)].map((_, i) => (
                            <line
                              key={`v-${i}`}
                              x1={i * 30}
                              y1="0"
                              x2={i * 30}
                              y2="300"
                              stroke="#3B82F6"
                              strokeWidth="0.5"
                              opacity="0.4"
                            />
                          ))}
                          
                          {/* Blueprint style accents */}
                          <rect x="150" y="100" width="60" height="60" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.3" />
                          <rect x="390" y="140" width="40" height="40" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.3" />
                        </svg>
                        
                        {/* Landmark / Location - Regensburg Cathedral Wireframe */}
                        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateX(15%)' }}>
                          <AnimatePresence mode="wait">
                            <motion.svg
                              key={currentData.stage}
                              initial={{ opacity: 0, scaleY: 0 }}
                              animate={{ opacity: 1, scaleY: 1 }}
                              exit={{ opacity: 0, scaleY: 0 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              viewBox="0 0 200 400"
                              className="w-48 h-96"
                              style={{ 
                                transform: 'perspective(1000px) rotateX(60deg)',
                                transformOrigin: 'bottom center'
                              }}
                            >
                              <g id="regensburg-cathedral">
                                {/* Construction lines from grid */}
                                <line x1="70" y1="400" x2="70" y2="40" stroke="#3B82F6" strokeWidth="0.3" opacity="0.4" strokeDasharray="2,2" />
                                <line x1="130" y1="400" x2="130" y2="40" stroke="#3B82F6" strokeWidth="0.3" opacity="0.4" strokeDasharray="2,2" />
                                
                                {/* Base / Nave */}
                                <rect x="50" y="250" width="100" height="150" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6" />
                                
                                {/* Roof base */}
                                <polygon 
                                  points="50,250 100,220 150,250" 
                                  stroke="#3B82F6" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  opacity="0.6" 
                                />
                                <line x1="100" y1="220" x2="100" y2="250" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
                                
                                {/* Left Spire - Gothic Tower */}
                                <rect x="55" y="120" width="30" height="130" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.7" />
                                <polygon 
                                  points="55,120 60,90 80,90 85,120" 
                                  stroke="#3B82F6" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  opacity="0.7" 
                                />
                                <line x1="70" y1="90" x2="70" y2="40" stroke="#3B82F6" strokeWidth="1.8" opacity="0.8" />
                                <polygon 
                                  points="70,40 65,70 75,70" 
                                  stroke="#3B82F6" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  opacity="0.8" 
                                />
                                
                                {/* Right Spire - Gothic Tower */}
                                <rect x="115" y="120" width="30" height="130" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.7" />
                                <polygon 
                                  points="115,120 120,90 140,90 145,120" 
                                  stroke="#3B82F6" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  opacity="0.7" 
                                />
                                <line x1="130" y1="90" x2="130" y2="40" stroke="#3B82F6" strokeWidth="1.8" opacity="0.8" />
                                <polygon 
                                  points="130,40 125,70 135,70" 
                                  stroke="#3B82F6" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  opacity="0.8" 
                                />
                              </g>
                            </motion.svg>
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Geo Label */}
                    <motion.div
                      key={`${currentData.location}-${currentData.country}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-24 left-1/2 -translate-x-1/2 bg-black border-2 border-white px-6 py-3 font-mono"
                    >
                      <div className="text-2xl font-black mb-1">{currentData.location}</div>
                      <div className="text-xs text-gray-500">{currentData.country}</div>
                      <div className="text-xs text-gray-700 mt-1">{currentData.coordinates}</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Data Panel */}
              <div className="col-span-5 space-y-8">
                {/* Temporal Data */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black border-4 border-white p-8"
                  >
                    <div className="font-mono text-xs text-gray-500 tracking-[0.2em] mb-6">TEMPORAL DATA</div>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">YEAR</div>
                        <div className="font-black text-3xl">{selectedYear}</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">LOCATION</div>
                        <div className="font-bold text-xl">{currentData.location}, {currentData.country}</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">ROLE / CONTEXT</div>
                        <div className="font-medium">{currentData.role}</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">PRIMARY FOCUS</div>
                        <div className="font-medium">{currentData.focus}</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">KEY PROJECT</div>
                        <div className="font-medium">{currentData.project}</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-xs text-gray-500 mb-2">MAIN LEARNING</div>
                        <div className="font-medium text-[#6BCF7F]">{currentData.learning}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom Time Control */}
          <div className="border-t-4 border-white px-8 py-8 bg-black">
            <div className="max-w-[1800px] mx-auto">
              <div className="font-mono text-xs text-gray-500 tracking-[0.2em] mb-6">TIME CONTROL SYSTEM</div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Year Labels */}
                <div className="flex justify-between mb-4 font-mono text-xs text-gray-500">
                  <span>{startYear}</span>
                  <span>2017</span>
                  <span>2019</span>
                  <span>{endYear}</span>
                </div>
                
                {/* Timeline Rail */}
                <div
                  ref={timelineRef}
                  onMouseDown={handleMouseDown}
                  className={`relative h-2 bg-gray-900 border-2 border-white ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                >
                  {/* Progress Fill */}
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-100"
                    style={{ width: `${progressPercentage}%` }}
                  />
                  
                  {/* Year Tick Marks */}
                  {[...Array(totalYears + 1)].map((_, i) => {
                    const year = startYear + i;
                    const isMajorMilestone = year % 2 === 0;
                    const isActive = year === selectedYear;
                    const left = (i / totalYears) * 100;
                    
                    return (
                      <div
                        key={year}
                        className="absolute top-0 -translate-x-1/2"
                        style={{ left: `${left}%` }}
                      >
                        <div
                          className={`${
                            isActive
                              ? 'w-1 h-6 bg-[#6BCF7F]'
                              : isMajorMilestone
                              ? 'w-0.5 h-4 bg-white'
                              : 'w-0.5 h-2 bg-gray-600'
                          }`}
                        />
                      </div>
                    );
                  })}
                  
                  {/* Draggable Handle */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-100"
                    style={{ left: `${progressPercentage}%` }}
                  >
                    <div className={`w-6 h-6 border-4 border-white bg-black transition-all ${isDragging ? 'scale-125' : 'scale-100'}`}>
                      <div className="w-full h-full bg-[#6BCF7F]" />
                    </div>
                  </div>
                </div>
                
                {/* Milestone Labels */}
                <div className="mt-6 flex justify-between">
                  {Object.keys(timelineData).map((year) => {
                    const yearNum = parseInt(year);
                    const data = timelineData[yearNum];
                    const left = ((yearNum - startYear) / totalYears) * 100;
                    
                    return (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(yearNum)}
                        className={`absolute font-mono text-xs transition-all ${
                          selectedYear === yearNum
                            ? 'text-[#6BCF7F] font-bold'
                            : 'text-gray-600 hover:text-white'
                        }`}
                        style={{ left: `${left}%`, transform: 'translateX(-50%)' }}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // ALL PROJECTS VIEW
        <>
          <div className="min-h-screen bg-black px-8 py-12">
            <div className="max-w-[1800px] mx-auto">
              {/* Stats Header */}
              <div className="mb-12 bg-black border-4 border-white p-8">
                <div className="font-mono text-xs text-gray-500 tracking-[0.2em] mb-4">
                  COMPLETE ARCHIVE
                </div>
                <div className="flex gap-16">
                  <div>
                    <div className="font-black text-6xl mb-2">{projectsData.length}</div>
                    <div className="font-mono text-sm text-gray-500">TOTAL PROJECTS</div>
                  </div>
                  <div>
                    <div className="font-black text-6xl mb-2">{endYear - startYear + 1}</div>
                    <div className="font-mono text-sm text-gray-500">YEARS SPAN</div>
                  </div>
                  <div>
                    <div className="font-black text-6xl mb-2">01</div>
                    <div className="font-mono text-sm text-gray-500">LOCATION</div>
                  </div>
                </div>
              </div>

              {/* All Projects Grid - Grouped by Year */}
              <div className="space-y-12">
                {Array.from(new Set(projectsData.map(p => p.year)))
                  .sort((a, b) => a - b)
                  .map((year) => {
                    const yearProjects = projectsData.filter(p => p.year === year);
                    return (
                      <motion.div
                        key={year}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-black border-4 border-white p-8"
                      >
                        {/* Year Header */}
                        <div className="mb-8 pb-6 border-b-4 border-white flex items-center justify-between">
                          <div>
                            <div className="font-black text-6xl mb-2">{year}</div>
                            <div className="font-mono text-sm text-gray-500">
                              {yearProjects.length} PROJECT{yearProjects.length !== 1 ? 'S' : ''}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-xs text-gray-500 mb-2">LOCATION</div>
                            <div className="font-bold text-xl">Regensburg, Germany</div>
                          </div>
                        </div>

                        {/* Projects for this year */}
                        <div className="grid grid-cols-4 gap-4">
                          {yearProjects.map((project, index) => {
                            const colors = project.brandColor;
                            return (
                              <motion.button
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedProject(project)}
                                className={`${colors.bg} ${colors.text} border-4 ${colors.border} ${colors.hoverBg} transition-all text-left group overflow-hidden flex flex-col p-0`}
                              >
                                {/* Image Thumbnail */}
                                {project.images && project.images.length > 0 ? (
                                  <div className={`w-full aspect-[4/3] border-b-4 ${colors.border} overflow-hidden`}>
                                    <img 
                                      src={project.images[0]} 
                                      alt={project.title}
                                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                ) : (
                                  <div className={`w-full aspect-[4/3] border-b-4 ${colors.border} flex items-center justify-center bg-black/20`}>
                                    <Smartphone className="w-12 h-12 opacity-40" />
                                  </div>
                                )}
                                
                                {/* Content */}
                                <div className="p-6">
                                  {/* Year Badge */}
                                  <div className={`inline-block px-3 py-1 mb-3 font-mono text-xs font-bold border-2 ${colors.border} ${colors.text === 'text-white' ? 'opacity-60' : 'opacity-50'}`}>
                                    {project.year}
                                  </div>
                                  
                                  {/* Title */}
                                  <div className="font-black text-base mb-2 line-clamp-2">
                                    {project.title}
                                  </div>
                                  
                                  {/* Client */}
                                  <div className={`font-bold text-xs mb-3 line-clamp-1 ${colors.text === 'text-white' ? 'opacity-80' : 'opacity-70'}`}>
                                    {project.client}
                                  </div>
                                  
                                  {/* Date */}
                                  <div className={`font-mono text-xs ${colors.text === 'text-white' ? 'opacity-50' : 'opacity-40'}`}>
                                    {project.date}
                                  </div>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Project Detail Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border-8 border-white max-w-[95vw] w-full max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(255,255,255,0.3)]"
            >
              {/* Header */}
              <div className="border-b-8 border-white px-12 py-8 bg-black">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-mono text-sm text-gray-500 mb-4 tracking-[0.3em]">
                      PROJECT DETAILS
                    </div>
                    <h2 className="font-black text-5xl mb-4">{selectedProject.title}</h2>
                    <div className="font-black text-2xl text-gray-400 mb-3">{selectedProject.client}</div>
                    <div className="flex gap-8 font-mono text-sm text-gray-500">
                      <span className="font-bold">{selectedProject.year}</span>
                      <span>•</span>
                      <span>{selectedProject.date}</span>
                      <span>•</span>
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="ml-6 w-16 h-16 border-8 border-white hover:border-[#6BCF7F] hover:bg-[#6BCF7F] hover:text-black transition-colors flex items-center justify-center font-black text-4xl flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-12 gap-12 p-12">
                  {/* Left Content - Main body */}
                  <div className="col-span-9 space-y-12">
                    {/* Description */}
                    <div>
                      <div className="font-mono text-sm text-gray-500 mb-6 tracking-[0.3em]">
                        PROJECT OVERVIEW
                      </div>
                      <div className="space-y-4">
                        {selectedProject.dialog_paragraphs.map((paragraph, idx) => (
                          <p key={idx} className="font-medium text-2xl leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Media Gallery */}
                    <div>
                      <div className="font-black text-2xl mb-8 tracking-tight">
                        PROJECT MEDIA
                      </div>
                      <div className="space-y-8">
                        {selectedProject.images ? (
                          // Display real images if available (skip first image as it's used in card)
                          selectedProject.images.slice(1).map((imageSrc, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.2 }}
                              className="bg-black border-8 border-white overflow-hidden hover:border-[#6BCF7F] transition-all duration-300 hover:shadow-[0_0_60px_rgba(107,207,127,0.4)] group cursor-pointer"
                            >
                              <img 
                                src={imageSrc} 
                                alt={`${selectedProject.title} - Image ${idx + 1}`}
                                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                              />
                              {/* Image Number Label */}
                              <div className="absolute top-0 right-0 bg-black border-l-8 border-b-8 border-white px-6 py-3 font-mono text-sm text-gray-500 group-hover:border-[#6BCF7F] group-hover:text-[#6BCF7F] transition-colors">
                                {String(idx + 1).padStart(2, '0')}
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          // Display placeholders if no images
                          <div className="space-y-8">
                            {[...Array(getMediaCount(selectedProject.media_hint))].map((_, idx) => (
                              <div
                                key={idx}
                                className="bg-black border-8 border-gray-800 aspect-video flex items-center justify-center"
                              >
                                <div className="text-center">
                                  <div className="font-mono text-sm text-gray-600 mb-2">IMAGE</div>
                                  <div className="font-black text-6xl text-gray-800">
                                    {String(idx + 1).padStart(2, '0')}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Meta Panel */}
                  <div className="col-span-3">
                    <div className="bg-black border-8 border-white p-8 sticky top-0">
                      <div className="font-mono text-sm text-gray-500 mb-8 tracking-[0.3em]">
                        META
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">CLIENT</div>
                          <div className="font-black text-lg">{selectedProject.client}</div>
                        </div>
                        
                        <div>
                          <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">ROLE / CONTEXT</div>
                          <div className="font-bold text-base">{selectedProject.role_line}</div>
                        </div>
                        
                        <div>
                          <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">YEAR</div>
                          <div className="font-black text-4xl">{selectedProject.year}</div>
                        </div>
                        
                        <div>
                          <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">LOCATION</div>
                          <div className="font-bold text-base">{selectedProject.location}</div>
                        </div>
                        
                        <div>
                          <div className="font-mono text-xs text-gray-500 mb-3 tracking-wider">DATE RANGE</div>
                          <div className="font-bold text-base">{selectedProject.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}