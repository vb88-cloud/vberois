import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface PortfolioRetroProps {
  onNavigate: (view: string) => void;
}

export function PortfolioRetro({ onNavigate }: PortfolioRetroProps) {
  const categories = [
    {
      id: 'enterprise',
      number: '01',
      title: 'ENTERPRISE',
      subtitle: 'CLIENT PROJECTS',
      bgColor: 'bg-[#FF6B35]',
      textColor: 'text-white',
      hoverColor: 'hover:bg-[#E85A2A]'
    },
    {
      id: 'ai',
      number: '02',
      title: 'AI',
      subtitle: 'EXPERIMENTS',
      bgColor: 'bg-[#FFD93D]',
      textColor: 'text-black',
      hoverColor: 'hover:bg-[#F5CE00]'
    },
    {
      id: 'timemachine',
      number: '03',
      title: 'TIME',
      subtitle: 'MACHINE',
      bgColor: 'bg-[#6BCF7F]',
      textColor: 'text-black',
      hoverColor: 'hover:bg-[#5BC06D]'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-black text-white inline-block px-6 py-3 mb-8">
            <span className="font-mono text-sm tracking-widest">PORTFOLIO</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-none">
            SELECTED<br />
            WORK
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onNavigate(category.id)}
              className={`${category.bgColor} ${category.textColor} ${category.hoverColor} cursor-pointer transition-all duration-300 group relative overflow-hidden border-4 border-black`}
            >
              {/* Number Badge */}
              <div className="absolute top-0 right-0 bg-black text-white w-20 h-20 flex items-center justify-center">
                <span className="text-4xl font-black">{category.number}</span>
              </div>

              <div className="p-12 min-h-[400px] flex flex-col justify-between">
                {/* Title */}
                <div>
                  <h3 className="text-6xl font-black tracking-tighter mb-2 leading-none uppercase">
                    {category.title}
                  </h3>
                  <p className="text-2xl font-black tracking-tight uppercase">
                    {category.subtitle}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <div className="w-16 h-16 border-4 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-black text-white p-6 border-4 border-black"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm tracking-wider">
              BASF • ARRI • VORWERK • HEATHROW EXPRESS • AND MORE
            </p>
            <div className="flex gap-4">
              <div className="w-3 h-3 bg-[#FF6B35]"></div>
              <div className="w-3 h-3 bg-[#FFD93D]"></div>
              <div className="w-3 h-3 bg-[#6BCF7F]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
