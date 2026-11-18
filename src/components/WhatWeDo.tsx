import React from 'react';
import Image from 'next/image';

export default function WhatWeDo() {
  const pillars = [
    {
      title: 'Satellite & Radar Surveillance',
      badge: '24/7 All-Weather',
      image: '/service-satellite-radar.jpg',
      description:
        'Continuous fusion of Sentinel-1, Sentinel-2, Landsat 8/9, and SAR radar imagery. Operates day and night through dense clouds and heavy weather, directly addressing the reality that 60% of illegal degradation occurs in the dark.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'AI Change Detection & Anomaly Models',
      badge: 'Deep Learning',
      image: '/Futuristic%20Satellite%20Forest%20Monitoring%20changes.webp',
      description:
        'Deep learning U-Net CNN architectures combined with Z-score NDVI/EVI anomaly algorithms flag micro-changes in canopy cover, unauthorized clearing, and environmental degradation faster with minimal false negatives.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'IoT Acoustic & Environmental Sensors',
      badge: 'Persistent Ground Mesh',
      image: '/service-iot-sensor.jpg',
      description:
        'Low-power sensor networks deployed across remote terrestrial and aquatic habitats capturing acoustic signatures (chainsaws, gunshots, vehicles), seismic vibrations, temperature shifts, and water quality anomalies.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Satellite-to-Drone Visual Verification',
      badge: 'Rapid Confirmation',
      image: '/service-drone-inspection.jpg',
      description:
        'Automated dispatch of 4K UAV inspection to satellite-flagged anomaly coordinates before alerts are escalated to law enforcement. Dramatically reduces false positives and delivers legal-grade evidence for rapid response.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Animal Escape & Wildlife Protection',
      badge: 'Biodiversity Safeguard',
      image: '/service-wildlife-tracking.jpg',
      description:
        'Baseline movement mapping and real-time boundary breach monitoring for wildlife in national parks and reserves. Protects vulnerable species from poachers and prevents human-wildlife conflict in nearby communities.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Decision-Support & Enforcement Dashboard',
      badge: 'Actionable Intelligence',
      image: '/Futuristic%20Forest%20Surveillance%20Dashboard.webp',
      description:
        'Interactive geospatial intelligence dashboard that delivers prioritized, geolocated coordinates, risk heatmaps, case lifecycle tracking, and instant notifications directly to rangers and conservation authorities.',
      icon: (
        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'DETECT',
      description: 'Continuous 24/7 all-weather optical & SAR satellite monitoring with AI anomaly detection across forests, wetlands, and water bodies.',
    },
    {
      step: '02',
      title: 'PROTECT',
      description: 'Acoustic IoT cross-checking and drone visual verification dispatch to exact GPS coordinates before threats cause irreversible loss.',
    },
    {
      step: '03',
      title: 'RESTORE',
      description: 'Transparent spatial analytics and degradation history empowering authorities and communities to target ecosystem recovery efforts.',
    },
    {
      step: '04',
      title: 'HARVEST',
      description: 'Safeguarding natural capital, water security, and sustainable livelihoods for vulnerable communities that depend on healthy ecosystems.',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 mb-3">
            Our Platforms
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build AI-powered platforms that solve two of the world&apos;s most urgent challenges:
            food insecurity and environmental degradation. Our solutions are designed to be
            accessible, affordable, and impactful for farmers and conservation teams alike.
          </p>
        </div>

        {/* Dual Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="group bg-white rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
              <h3 className="flex flex-col gap-1 leading-tight">
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-green-700">
                  Eza Climavise
                </span>
                <span className="text-2xl font-extrabold text-gray-900">
                  Agriculture Intelligence
                </span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              An AI-powered crop diagnostics platform that identifies diseases, pests, and nutrient
              deficiencies in as little as 1.8 seconds. Available via smartphone app, the SAROK
              handheld device for non-smartphone users, and a Drone-as-a-Service solution for large
              farms and cooperatives.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex min-w-[190px] items-center justify-center rounded-lg bg-green-600 px-8 py-2.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
                Review
              </button>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
              <h3 className="flex flex-col gap-1 leading-tight">
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Climavise
                </span>
                <span className="text-2xl font-extrabold text-gray-900">
                  Environmental Intelligence
                </span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A near real-time environmental monitoring system combining satellite radar, smart
              sensors, AI anomaly detection, and drone verification to detect illegal land-use
              changes and deliver timely, verified alerts to decision-makers—even in the most
              remote areas.
            </p>
            <div className="flex justify-center">
              <a
                href="#climavise-platform"
                className="inline-flex min-w-[190px] items-center justify-center rounded-lg bg-blue-600 px-8 py-2.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Explore Platform
              </a>
            </div>
          </div>
        </div>

        {/* Climavise Environmental Detail */}
        <div id="climavise-platform" className="scroll-mt-24">
          {/* 4-Phase Operational Workflow */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800 mb-3">
                Climavise Platform
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Our End-to-End Conservation Workflow
              </h3>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                From early warning to verified enforcement and long-term ecosystem recovery
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-green-600/30">{item.step}</span>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold tracking-wider text-green-700">
                      PHASE {item.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated Core Capabilities with Images */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Integrated Technology Architecture
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-base">
                Climavise unifies space, aerial, and ground data streams into an actionable
                decision-support pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-800 shadow-sm">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 rounded-lg bg-green-50 flex items-center justify-center ring-1 ring-green-200 text-green-700">
                          {pillar.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 leading-snug">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automatic Forest Loss Verification Feature Showcase */}
          <div className="mb-20">
            <div className="rounded-2xl border border-gray-800 bg-[#090d16] p-6 sm:p-8 md:p-10 text-white shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block rounded-full bg-cyan-950 border border-cyan-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                    Temporal Satellite AI
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Automatic Forest Loss Verification
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    Comparing untouched baseline terrain with today&apos;s live satellite capture
                  </p>
                </div>
              </div>

              <div className="relative w-full aspect-[2020/778] rounded-xl overflow-hidden border border-slate-800 shadow-inner">
                <Image
                  src="/Futuristic%20Satellite%20Forest%20Monitoring%20changes.webp"
                  alt="Automatic Forest Loss Verification - Comparing untouched baseline terrain with today's live satellite capture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Value Proposition & Differentiators Callout */}
          <div className="rounded-2xl bg-gradient-to-br from-green-900 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block rounded-full bg-green-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green-300 mb-3">
                Recognized at GLOC 2026
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Connecting Environmental Intelligence with Verified Action
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Endorsed by the International Astronautical Federation and selected for presentation
                at the Global Space Conference on Climate Change, Climavise is designed for real
                operational enforcement across forests, wetlands, lakes, and marine ecosystems.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-300 mt-1">Optical + SAR Radar</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-green-400">Drone</div>
                  <div className="text-xs text-gray-300 mt-1">Visual Verification</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-green-400">Multi-Eco</div>
                  <div className="text-xs text-gray-300 mt-1">Land, Water &amp; Wildlife</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-green-400">Nonprofit</div>
                  <div className="text-xs text-gray-300 mt-1">Mission-Reinvested</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
