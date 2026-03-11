import { ArrowRight, Play, Zap, Shield, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-900/20 to-transparent blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-900/20 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                NEW
              </span>
              <span className="text-gray-300 text-sm">
                Now offering AI-powered digital solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
              Building Scalable
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <span className="block mt-2">That Drive Growth</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We help startups and enterprises with web development, backend
              systems, SEO, cloud, and AI-powered solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Get a Free Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="group border border-gray-700 hover:border-gray-600 text-white font-medium px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 hover:bg-gray-800/50">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1.5">
                  <Play size={14} fill="white" className="text-white" />
                </div>
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Rocket, label: '500+', sub: 'Projects' },
                { icon: Shield, label: '200+', sub: 'Clients' },
                { icon: Zap, label: '99%', sub: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-2">
                    <stat.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl rotate-12 blur-2xl animate-pulse"></div>
              <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-700/30 to-blue-600/30 rounded-3xl -rotate-12 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              <div className="relative grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-32 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800 rounded-2xl flex items-center justify-center backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                    style={{
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-24 pt-12 border-t border-gray-800 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-500 text-sm text-center mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {['Google', 'AWS', 'Shopify', 'Meta', 'Microsoft', 'Vercel'].map((company, i) => (
              <div key={i} className="text-gray-400 font-bold text-xl hover:text-white transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
