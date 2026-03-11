import { Code2, Server, TrendingUp, Cloud, Sparkles, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'React, Next.js, UI/UX - Beautiful, responsive interfaces that users love.',
    color: 'blue',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'APIs, Databases, Microservices - Robust, scalable server-side solutions.',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance Optimization',
    description:
      'Boost rankings and speed with technical SEO and optimization strategies.',
    color: 'green',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description:
      'End-to-end SaaS platforms with subscription management and scalability.',
    color: 'cyan',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation Solutions',
    description:
      'Leverage AI and machine learning to automate and enhance workflows.',
    color: 'pink',
  },
  {
    icon: Settings,
    title: 'Cloud & DevOps',
    description:
      'AWS, CI/CD pipelines - Reliable infrastructure and deployment systems.',
    color: 'orange',
  },
];

const colorClasses = {
  blue: 'from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border-blue-500/20 hover:border-blue-500/40',
  purple: 'from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10 border-purple-500/20 hover:border-purple-500/40',
  green: 'from-green-500/10 to-green-600/5 hover:from-green-500/20 hover:to-green-600/10 border-green-500/20 hover:border-green-500/40',
  cyan: 'from-cyan-500/10 to-cyan-600/5 hover:from-cyan-500/20 hover:to-cyan-600/10 border-cyan-500/20 hover:border-cyan-500/40',
  pink: 'from-pink-500/10 to-pink-600/5 hover:from-pink-500/20 hover:to-pink-600/10 border-pink-500/20 hover:border-pink-500/40',
  orange: 'from-orange-500/10 to-orange-600/5 hover:from-orange-500/20 hover:to-orange-600/10 border-orange-500/20 hover:border-orange-500/40',
};

const iconColorClasses = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  cyan: 'text-cyan-400',
  pink: 'text-pink-400',
  orange: 'text-orange-400',
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-500/20">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            End-to-End <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From idea to launch and beyond, we build reliable, high-performance
            digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = colorClasses[service.color];
            const iconColorClass = iconColorClasses[service.color];

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${colorClass}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative">
                  <div className={`bg-gradient-to-br ${colorClass.split(' ')[0]} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <Icon size={28} className={iconColorClass} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
