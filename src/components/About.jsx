import { Target, Users, Award, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative solutions that drive growth and success in the digital age.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of experts passionate about creating exceptional digital experiences.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering quality that exceeds expectations.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing boundaries and embracing cutting-edge technologies to stay ahead of the curve.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-500">Forge Surge</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2014, Forge Surge started as a small team of developers with a big vision: to make enterprise-grade technology accessible to businesses of all sizes.
            </p>
            <p className="text-gray-400 mb-4">
              Over the years, we've grown into a full-service digital agency, helping hundreds of clients achieve their goals through innovative web solutions, mobile applications, and digital transformation strategies.
            </p>
            <p className="text-gray-400">
              Today, we continue to push the boundaries of what's possible, combining creativity with technical excellence to deliver results that matter.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-800">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-500 mb-4">10+</div>
              <p className="text-xl text-gray-300">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <value.icon className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', role: 'CEO & Founder', image: 'JS' },
              { name: 'Sarah Johnson', role: 'CTO', image: 'SJ' },
              { name: 'Michael Chen', role: 'Head of Design', image: 'MC' },
            ].map((member, index) => (
              <div key={index} className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's create something amazing together
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}