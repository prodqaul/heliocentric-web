import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-800 mb-3">
            Our Purpose &amp; Heritage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>EZA CLIMAVISE</strong> (Environmental Zone Analytics &amp; Climate Vision and Integrated Surveillance Engine) 
              is a purpose-driven environmental innovation initiative deploying advanced technology to protect forests, wetlands, 
              rivers, lakes, and marine ecosystems from illegal degradation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We bridge the critical gap between environmental intelligence and enforcement by integrating satellite radar, 
              artificial intelligence, IoT acoustic sensors, and drone verification into a unified decision-support workflow—turning 
              data into action, and action into lasting conservation impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              In May 2018, a devastating landslide struck the hometown of our founder, Moise Iradukunda, in Western Rwanda, 
              claiming 18 lives and displacing hundreds of families. The disaster, worsened by severe deforestation and unsustainable 
              land use, became a defining turning point.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Witnessing how environmental degradation directly threatens human lives and biodiversity, Moise committed himself to 
              building an automated early-warning solution. Incubated at the African Centre of Excellence in Data Science, University of Rwanda, 
              that vision evolved into EZA CLIMAVISE.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, recognized by the International Astronautical Federation and selected for presentation at GLOC 2026, 
              EZA CLIMAVISE empowers conservation authorities across Africa to safeguard nature before it is lost.
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
                DETECT.
              </h4>
              <p className="mt-1 text-lg font-semibold text-green-700">PROTECT.</p>
              <p className="text-lg font-semibold text-emerald-700">RESTORE. HARVEST.</p>
              <div className="mt-5 h-1 w-16 rounded-full bg-green-600 transition-all duration-300 group-hover:w-24"></div>
            </article>

            <article className="group rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Vision
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-gray-900">Future We See</h4>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A world where people and nature live in harmony, ecosystems flourish, environmental threats are addressed before lasting damage occurs, and every conservation effort contributes to a healthier planet.
              </p>
              <div className="mt-5 h-1 w-16 rounded-full bg-sky-600 transition-all duration-300 group-hover:w-24"></div>
            </article>

            <article className="group rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Mission
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-gray-900">How We Deliver</h4>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To safeguard vital ecosystems from illegal degradation and habitat destruction by connecting real-time satellite, sensor, and drone intelligence with verified, on-the-ground conservation enforcement.
              </p>
              <div className="mt-5 h-1 w-16 rounded-full bg-amber-600 transition-all duration-300 group-hover:w-24"></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
