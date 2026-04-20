import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: 'Moise Iradukunda',
      role: 'CEO & Co-Founder',
      description: 'Drives strategy, partnerships, and execution with a background in data science and business development.',
      image: '/WhatsApp%20Image%202026-03-27%20at%2021.54.51.jpeg'
    },
    {
      name: 'Aphrodis Uwineza',
      role: 'Full-Stack Software Engineer',
      description: 'Leads all technical development, from AI model integration to mobile app and dashboard architecture.',
      image: '/WhatsApp%20Image%202026-01-04%20at%2021.41.52.jpeg'
    },
    {
      name: 'Clepine Icyitegetse',
      role: 'Agricultural Specialist, Horticulture',
      description: 'Ensures every diagnostic and recommendation is grounded in real agronomic expertise and on-farm practicality.',
      image: '/WhatsApp%20Image%202026-03-30%20at%2011.15.49.jpeg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-4 ring-green-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}