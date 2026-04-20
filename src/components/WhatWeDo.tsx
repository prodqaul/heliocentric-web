export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build AI-powered platforms that solve two of the world's most urgent challenges: 
            food insecurity and environmental degradation. Our solutions are designed to be accessible, 
            affordable, and impactful for every farmer, regardless of location or device.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Climavise 1 */}
          <div className="group bg-white rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
              <h3 className="flex flex-col gap-1 leading-tight">
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-green-700">
                  Climavise:
                </span>
                <span className="text-2xl font-extrabold text-gray-900">
                  Precision Agriculture
                </span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              An AI-powered crop diagnostics platform that identifies diseases, pests, and nutrient deficiencies 
              in as little as 1.8 seconds. Available via smartphone app, the SAROK handheld device for non-smartphone 
              users, and a Drone-as-a-Service solution for large farms and cooperatives.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex min-w-[190px] items-center justify-center rounded-lg bg-green-600 px-8 py-2.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
                Review
              </button>
            </div>
          </div>

          {/* Climavise 2 */}
          <div className="group bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
              <h3 className="flex flex-col gap-1 leading-tight">
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Climavise:
                </span>
                <span className="text-2xl font-extrabold text-gray-900">
                  Forest Protection
                </span>
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A near real-time deforestation monitoring system combining satellite imagery, smart forest sensors, 
              and AI to detect illegal land-use changes and deliver timely alerts to decision-makers even in the 
              most remote areas.
            </p>
            <div className="flex justify-center">
              <button
                disabled
                className="inline-flex min-w-[190px] items-center justify-center rounded-lg bg-gray-200 px-8 py-2.5 text-base font-semibold text-gray-500 cursor-not-allowed"
              >
                Review
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Learn More
            </button>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium border-2 border-green-600 hover:bg-green-50 transition-colors">
              Download the App (coming soon)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}