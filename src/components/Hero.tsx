'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const slides = [
    {
      action: 'DETECT',
      badge: '01. SATELLITE & RADAR SURVEILLANCE',
      title: 'Detect Threats Before Damage Occurs',
      description:
        'Continuous 24/7 optical and SAR radar surveillance penetrating dense cloud cover and darkness to catch illegal deforestation in real-time.',
      image: '/Futuristic Satellite Forest Monitoring changes.webp',
      accent: 'text-emerald-400',
      pillBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
    {
      action: 'PROTECT',
      badge: '02. SATELLITE-TO-DRONE VERIFICATION',
      title: 'Protect Vital Ecosystems & Wildlife',
      description:
        'Autonomous 4K UAV inspection dispatched to satellite-flagged coordinates, slashing false positives and securing actionable evidence for enforcement.',
      image: '/service-drone-inspection.jpg',
      accent: 'text-green-400',
      pillBg: 'bg-green-500/20 text-green-300 border-green-500/40',
    },
    {
      action: 'RESTORE',
      badge: '03. IOT ACOUSTIC SENSORS & WILDLIFE',
      title: 'Restore Habitats & Ecological Balance',
      description:
        'Ground acoustic and vibration sensor meshes detecting chainsaws and vehicles, paired with wildlife movement tracking to prevent human-wildlife conflict.',
      image: '/service-wildlife-tracking.jpg',
      accent: 'text-teal-400',
      pillBg: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    },
    {
      action: 'HARVEST',
      badge: '04. OPERATIONAL DECISION DASHBOARD',
      title: 'Harvest Impact Through Actionable Data',
      description:
        'Bridging the gap between environmental intelligence and enforcement, delivering prioritized GPS coordinates, heatmaps, and case tracking to rangers.',
      image: '/Futuristic Forest Surveillance Dashboard.webp',
      accent: 'text-cyan-400',
      pillBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds (5000ms) continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 bg-[#090d16]">
      {/* Sliding Background Images (Full-bleed across the hero, touching navbar seamlessly) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Balanced gradient overlay: preserves vivid image details while ensuring high contrast for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-black/45 to-black/60" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 text-center text-white">
        {/* Top Brand Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-200 backdrop-blur-md mb-6 shadow-md">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span>Climavise &amp; Eza Climavise</span>
        </div>

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-green-300/90">
          Environmental Intelligence + Agriculture Intelligence
        </p>

        {/* Dynamic Slide Content */}
        <div className="min-h-[200px] sm:min-h-[190px] flex flex-col items-center justify-center transition-all duration-500">
          {/* Phase Badge */}
          <span
            className={`inline-block rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 transition-all duration-300 ${slides[currentSlide].pillBg}`}
          >
            {slides[currentSlide].badge}
          </span>

          {/* Dynamic Headline */}
          <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
            {slides[currentSlide].title.split(' ')[0]}{' '}
            <span className={slides[currentSlide].accent}>
              {slides[currentSlide].title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Dynamic Description */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:gap-4">
          <button
            onClick={() => scrollToSection('what-we-do')}
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-green-600/50 sm:px-8 sm:py-4 sm:text-lg"
          >
            Discover Our Platforms
          </button>
          <button
            onClick={() => scrollToSection('support')}
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-900 sm:px-8 sm:py-4 sm:text-lg"
          >
            Support Our Mission
          </button>
        </div>

        {/* 4-Phase Interactive Tabs (5-Second Auto Progress, Never Freezes) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3.5 max-w-4xl mx-auto">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`group flex flex-col items-center rounded-xl p-3 text-left transition-all duration-300 backdrop-blur-md border ${
                idx === currentSlide
                  ? 'border-green-400 bg-white/20 shadow-lg shadow-green-500/25 scale-[1.02]'
                  : 'border-white/10 bg-black/45 hover:bg-white/10 hover:border-white/25'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`text-[11px] font-mono font-bold tracking-wider ${
                    idx === currentSlide ? 'text-green-400' : 'text-gray-400'
                  }`}
                >
                  PHASE 0{idx + 1}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    idx === currentSlide ? 'bg-green-400 animate-ping' : 'bg-transparent'
                  }`}
                />
              </div>
              <span
                className={`mt-1 w-full text-xs sm:text-sm font-extrabold tracking-wider ${
                  idx === currentSlide ? 'text-white' : 'text-gray-300'
                }`}
              >
                {slide.action}
              </span>

              {/* 5-second Progress Bar indicator */}
              <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className={`h-full transition-all ${
                    idx === currentSlide
                      ? 'w-full bg-green-400 duration-[5000ms] ease-linear'
                      : 'w-0'
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
