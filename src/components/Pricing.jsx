import { Check, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Ideal for startups',
    price: 'Fixed',
    features: [
      'Small-scope projects',
      'Up to 3 revisions',
      '4-week delivery',
      'Email support',
      'Basic documentation',
    ],
    highlighted: false,
    icon: Clock,
  },
  {
    name: 'Growth',
    description: 'Monthly retainer',
    price: 'Custom',
    badge: 'Recommended',
    features: [
      'Dedicated team',
      'Unlimited revisions',
      'Priority support',
      'Ongoing development',
      'Weekly check-ins',
      'Advanced analytics',
    ],
    highlighted: true,
    icon: Zap,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions',
    price: 'Custom',
    features: [
      'Long-term partnership',
      'SLA support',
      'Custom architecture',
      'Scalability planning',
      '24/7 monitoring',
      'Dedicated account manager',
    ],
    highlighted: false,
    icon: Shield,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-500/20">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Engagement Models</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-500 group ${
                  plan.highlighted
                    ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 hover:scale-110'
                    : 'border border-gray-800 hover:border-gray-700 hover:scale-105'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/25">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-br ${plan.highlighted ? 'from-blue-500/20 to-purple-500/20' : 'from-gray-500/10 to-gray-600/10'} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Icon size={24} className={plan.highlighted ? 'text-blue-400' : 'text-gray-400'} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {plan.highlighted ? 'Starting at $5,000/mo' : 'Starting at $2,500'}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`rounded-full p-1 mt-0.5 ${plan.highlighted ? 'bg-blue-500/10' : 'bg-gray-500/10'}`}>
                        <Check size={14} className={plan.highlighted ? 'text-blue-400' : 'text-gray-400'} />
                      </div>
                      <span className="text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-[#1a1a1a] hover:bg-[#252525] text-white border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  Schedule a Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
