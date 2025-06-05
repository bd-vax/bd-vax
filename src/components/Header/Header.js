// Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // 你可以换成 heroicons 或 svg

const navItems = ['Abstract', 'Motivation', 'Methodology', 'Experiment'];

export default function Header({ currentSection = 'abstract' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left: Logo / Title */}
        <div className="text-base sm:text-xl font-semibold text-gray-800 whitespace-nowrap">
          SAFETY ALIGNMENT
        </div>

        {/* Right: Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`hover:text-black transition relative ${
                currentSection === item.toLowerCase() ? 'text-black font-semibold' : ''
              }`}
            >
              {item}
              {currentSection === item.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
              )}
            </a>
          ))}
        </nav>

        {/* Right: Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`block text-sm font-medium ${
                currentSection === item.toLowerCase()? 'text-black font-semibold' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
