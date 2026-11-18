import React from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'AI Crop Disease & Nutrient Diagnostics',
      badge: 'Eza Climavise',
      description: 'Instant, accurate, and offline-capable crop disease, pest, and nutrient deficiency detection.',
      image: '/agriculture.jpeg'
    },
    {
      title: 'Agro-Input Ordering & Delivery',
      badge: 'Eza Climavise',
      description: 'From diagnosis to treatment, end-to-end agro-input ordering and delivery for farmers.',
      image: '/home.png'
    },
    {
      title: 'Drone-as-a-Service',
      badge: 'Eza Climavise',
      description: 'Field health mapping for large farms and cooperatives with actionable crop insights.',
      image: '/agriculture.jpeg'
    },
    {
      title: '24/7 Satellite & Radar Surveillance',
      badge: 'Climavise',
      description: 'Continuous optical and SAR radar monitoring through clouds and darkness to detect illegal logging and land clearing.',
      image: '/service-satellite-radar.jpg'
    },
    {
      title: 'Drone Aerial Verification',
      badge: 'Climavise',
      description: 'Autonomous 4K UAV dispatch to satellite-flagged coordinates to verify incidents, slash false positives, and gather evidence.',
      image: '/service-drone-inspection.jpg'
    },
    {
      title: 'IoT Acoustic & Ground Sensors',
      badge: 'Climavise',
      description: 'Ground and aquatic sensors detecting real-time sounds of chainsaws, gunshots, vehicles, and seismic vibrations in remote areas.',
      image: '/service-iot-sensor.jpg'
    },
    {
      title: 'Wildlife & Habitat Protection',
      badge: 'Climavise',
      description: 'Baseline movement mapping and boundary breach detection to protect vulnerable species and mitigate human-wildlife conflict.',
      image: '/service-wildlife-tracking.jpg'
    },
    {
      title: 'Institutional Dashboards',
      badge: 'Both Platforms',
      description: 'Data-driven insights and geospatial command interfaces for governments, development partners, and conservation authorities.',
      image: '/Futuristic%20Forest%20Surveillance%20Dashboard.webp'
    },
    {
      title: 'Field Support & Extension Services',
      badge: 'Eza Climavise',
      description: 'Human support when technology needs a human touch—extension services for farmers adopting AI tools.',
      image: '/home.png'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 mb-3">
            Agriculture &amp; Conservation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive services spanning precision agriculture with Eza Climavise and
            environmental intelligence with Climavise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-900 shadow">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-auto flex justify-center pt-6">
                <button className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-green-700">
                  Explore Service
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
