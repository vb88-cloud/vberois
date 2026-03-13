import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowLeft, Briefcase, Award, Users, Target, TrendingUp, Building2 } from "lucide-react";

interface EnterpriseProjectsProps {
  onBack: () => void;
}

export function EnterpriseProjects({ onBack }: EnterpriseProjectsProps) {
  const projects = [
    {
      company: "Global Industrial Technology Company",
      role: "Head of UX",
      period: "2023 – Present",
      title: "Digital Transformation at Scale",
      description: "Leading a key digitalization transformation program that impacts the company's core offering and delivers exceptional value to industrial clients.",
      highlights: [
        "Established UX excellence as a strategic pillar across the organization",
        "Led cross-functional teams through complex enterprise system redesign",
        "Implemented design systems and governance frameworks at scale",
        "Drove user research initiatives that informed product strategy"
      ],
      impact: {
        users: "10,000+",
        markets: "Global",
        teams: "15+"
      },
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200"
    },
    {
      company: "BASF",
      role: "UX Director",
      period: "2019 – 2022",
      title: "Enterprise Digital Ecosystem",
      description: "Transformed the digital experience for one of the world's largest chemical companies, creating cohesive design systems and user experiences across multiple platforms.",
      highlights: [
        "Designed and implemented company-wide design system",
        "Led UX strategy for complex B2B digital products",
        "Facilitated workshops with stakeholders across 15+ countries",
        "Established UX metrics and measurement frameworks"
      ],
      impact: {
        users: "50,000+",
        markets: "40+ Countries",
        teams: "20+"
      },
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      company: "Global Pharmaceutical Leader",
      role: "Senior UX Lead",
      period: "2018 – 2019",
      title: "Healthcare Innovation Platform",
      description: "Reimagined digital healthcare solutions focusing on patient experience and clinical workflows for a global pharmaceutical leader.",
      highlights: [
        "Led design of patient-facing digital health applications",
        "Conducted extensive user research with healthcare professionals",
        "Created accessible and compliant healthcare interfaces",
        "Collaborated with medical experts to ensure clinical accuracy"
      ],
      impact: {
        users: "100,000+",
        markets: "25+ Countries",
        teams: "12+"
      },
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      company: "Leading European Bank",
      role: "UX Lead",
      period: "2017 – 2018",
      title: "Digital Banking Transformation",
      description: "Modernized banking experiences for a major European financial institution, focusing on mobile-first design and fintech innovation.",
      highlights: [
        "Redesigned core banking mobile applications",
        "Implemented secure and compliant financial interfaces",
        "Led accessibility improvements across all digital touchpoints",
        "Established design patterns for financial products"
      ],
      impact: {
        users: "2M+",
        markets: "Europe",
        teams: "8+"
      },
      gradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      company: "Major Retail Chain",
      role: "UX Designer",
      period: "2016 – 2017",
      title: "Omnichannel Retail Experience",
      description: "Created seamless digital experiences connecting online and offline touchpoints for a major European retail chain.",
      highlights: [
        "Designed mobile app with loyalty program integration",
        "Created in-store digital kiosk experiences",
        "Developed design system for consistent brand experience",
        "Led user testing across multiple retail locations"
      ],
      impact: {
        users: "5M+",
        markets: "8 Countries",
        teams: "6+"
      },
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      company: "Vorwerk",
      role: "UX Designer",
      period: "2015 – 2016",
      title: "Smart Home Product Ecosystem",
      description: "Designed connected product experiences for household appliances, creating intuitive interfaces for IoT devices.",
      highlights: [
        "Created mobile app for smart home device control",
        "Designed onboarding flows for IoT product setup",
        "Conducted usability testing with diverse user groups",
        "Developed voice interface design patterns"
      ],
      impact: {
        users: "500,000+",
        markets: "Europe",
        teams: "4+"
      },
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200"
    },
    {
      company: "ARRI",
      role: "UX Consultant",
      period: "2014 – 2015",
      title: "Professional Camera System Interface",
      description: "Designed intuitive interfaces for professional film and broadcast camera systems, working with cinematographers and industry experts.",
      highlights: [
        "Created touch-based menu systems for cinema cameras",
        "Conducted field research with cinematographers on film sets",
        "Designed companion mobile app for remote camera control",
        "Optimized interface for high-pressure production environments"
      ],
      impact: {
        users: "50,000+",
        markets: "Global",
        teams: "3+"
      },
      gradient: "from-rose-600 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
    },
    {
      company: "Heathrow Express",
      role: "UX Designer",
      period: "2013 – 2014",
      title: "Mobile Ticketing Platform",
      description: "Redesigned the mobile ticketing experience for one of London's premier airport rail services, improving booking conversion and user satisfaction.",
      highlights: [
        "Designed streamlined mobile booking flow",
        "Implemented digital ticket wallet functionality",
        "Created accessible interfaces for international travelers",
        "Integrated real-time service updates and notifications"
      ],
      impact: {
        users: "6M+ annually",
        markets: "UK",
        teams: "4+"
      },
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button
            variant="outline"
            onClick={onBack}
            className="border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <Badge className="mb-6 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border-violet-200 px-4 py-2">
            ENTERPRISE PORTFOLIO
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Enterprise Client{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming digital experiences for leading global organizations across industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`bg-gradient-to-br ${project.bgGradient} ${project.borderColor} border-2 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/50 to-white/0 rounded-full blur-3xl"></div>
                <CardContent className="p-8 lg:p-12 relative z-10">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1">
                      <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.company}</h3>
                      <Badge className="mb-4 bg-white/60 text-slate-700 border-slate-200">
                        {project.role}
                      </Badge>
                      <p className="text-sm text-slate-600 font-medium mb-6">{project.period}</p>

                      {/* Impact Metrics */}
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Impact</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-slate-500" />
                            <div>
                              <p className="text-xs text-slate-500">Users Reached</p>
                              <p className="font-bold text-slate-900">{project.impact.users}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Target className="w-4 h-4 text-slate-500" />
                            <div>
                              <p className="text-xs text-slate-500">Markets</p>
                              <p className="font-bold text-slate-900">{project.impact.markets}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-4 h-4 text-slate-500" />
                            <div>
                              <p className="text-xs text-slate-500">Teams Led</p>
                              <p className="font-bold text-slate-900">{project.impact.teams}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="lg:col-span-2">
                      <h4 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h4>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-5 h-5 text-slate-700" />
                          <h5 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Key Achievements</h5>
                        </div>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                              <p className="text-slate-600 leading-relaxed">{highlight}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-br from-violet-600 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
                I bring deep expertise in enterprise digital transformation and strategic UX leadership to complex projects.
              </p>
              <Button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}