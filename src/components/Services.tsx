import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'AI Crop Disease & Nutrient Diagnostics',
      description: 'Instant, accurate, and offline-capable',
      image: '/agriculture.jpeg'
    },
    {
      title: 'Agro-Input Ordering & Delivery',
      description: 'From diagnosis to treatment, end-to-end',
      image: '/home.png'
    },
    {
      title: 'Drone-as-a-Service',
      description: 'Field health mapping for large farms and cooperatives',
      image: '/agriculture.jpeg'
    },
    {
      title: 'Forest Monitoring & Alerts',
      description: 'Real-time deforestation detection',
      image: '/home.png'
    },
    {
      title: 'Institutional Dashboards',
      description: 'Data-driven insights for governments and development partners',
      image: '/agriculture.jpeg'
    },
    {
      title: 'Field Support & Extension Services',
      description: 'Human support when technology needs a human touch',
      image: '/home.png'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-auto flex justify-center pt-6">
                <button className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-green-700">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}