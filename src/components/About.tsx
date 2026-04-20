import React, { useState } from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Heliocentric System Group is a purpose-driven deep-tech company at the intersection of precision agriculture 
              and environmental sustainability. Through our flagship platform, Climavise, we deploy AI-powered tools that 
              empower farmers to protect their harvests and help communities safeguard their forests, turning data into action, 
              and action into impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Moise Iradukunda, our founder, grew up in a rural village in Rwanda where farming was the only livelihood. 
              Season after season, his family watched their crops destroyed by undetected pests and diseases, with no tools, 
              no guidance, and no support. The result was hunger, financial hardship, and broken dreams.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              In May 2018, a devastating landslide struck his hometown in Western Rwanda, claiming 18 lives and displacing 
              hundreds of families. The disaster, worsened by environmental degradation and unsustainable land use, became a 
              turning point. Still a secondary school student, Moise committed himself to building a solution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That idea grew into Climavise, incubated at the African Centre of Excellence in Data Science, University of Rwanda. 
              Today, Heliocentric System Group turns that vision into reality.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <article className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                Motto
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-gray-900 leading-tight">
                Heal the Land.
              </h4>
              <p className="mt-1 text-lg font-semibold text-green-700">Feed the People.</p>
              <p className="text-lg font-semibold text-emerald-700">Protect the Future.</p>
              <div className="mt-5 h-1 w-16 rounded-full bg-green-600 transition-all duration-300 group-hover:w-24"></div>
            </article>

            <article className="group rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Vision
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-gray-900">Future We See</h4>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A future where every farmer has access to intelligent tools, and every forest is protected.
              </p>
              <div className="mt-5 h-1 w-16 rounded-full bg-sky-600 transition-all duration-300 group-hover:w-24"></div>
            </article>

            <article className="group rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Mission
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-gray-900">How We Deliver</h4>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To deliver accessible, AI-powered solutions that enable sustainable agriculture and environmental protection.
              </p>
              <div className="mt-5 h-1 w-16 rounded-full bg-amber-600 transition-all duration-300 group-hover:w-24"></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}