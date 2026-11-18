'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <Image
              src="/climavise_logo.png"
              alt="Climavise logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md p-2 text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-700 text-white'
                      : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: -28, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -28, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="border-t border-gray-200 py-3 px-4 h-screen md:hidden bg-white/95 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-green-700 text-white'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}