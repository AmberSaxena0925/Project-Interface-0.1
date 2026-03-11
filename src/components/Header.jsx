import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('services');
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tight">
              FORGE SURGE
            </span>
          </div>

          {/* Center Navigation */}
          <div className="absolute left-1/2 hidden md:flex -translate-x-1/2 items-center gap-8">
            <button
              onClick={() => navigate('/about')}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              About
            </button>
            {[
              ['services', 'Services'],
              ['solutions', 'Solutions'],
              ['case-studies', 'Case Studies'],
              ['pricing', 'Pricing'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`nav-link ${active === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              Contact
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="text-gray-300 hover:text-white transition text-sm"
            >
              Login
            </button>

            <button
              onClick={() => navigate('/register')}
              className="bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full border border-gray-700 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/about');
              }}
              className="w-full text-left mobile-link px-4 py-2"
            >
              About
            </button>
            {[
              ['services', 'Services'],
              ['solutions', 'Solutions'],
              ['case-studies', 'Case Studies'],
              ['pricing', 'Pricing'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setIsOpen(false);
                }}
                className={`mobile-link ${active === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contact');
              }}
              className="w-full text-left mobile-link px-4 py-2"
            >
              Contact
            </button>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
                className="w-full text-left mobile-link px-4 py-2"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/register');
                }}
                className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full border border-gray-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
