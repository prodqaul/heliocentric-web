import Link from 'next/link';

export default function Support() {
  return (
    <section id="support" className="py-20 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Help Us Put Better Tools in the Hands of Farmers Who Need Them Most
        </h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          Climavise is built by a small, passionate team with big ambitions and limited resources. 
          Every contribution, large or small, helps us reach more farmers, improve our technology, 
          and protect more land. We are a registered innovation project incubated at the University 
          of Rwanda, validated in the field, and ready to scale. Your support makes that possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/support-our-team"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg"
          >
            Support Our Team
          </Link>
          <button className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-green-800 transition-colors shadow-lg">
            Make a Donation
          </button>
        </div>
        <p className="text-lg opacity-75">
          100% of donations go directly toward technology development, field pilots, and farmer onboarding.
        </p>
      </div>
    </section>
  );
}