import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-16 min-h-screen relative flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.png"
          alt="Climavise - Your Intelligent Farming Partner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <div className="headline-motion-wrapper">
              <span className="headline-line headline-heal">Heal the Land,</span>
              <span className="headline-line headline-feed">Feed the People</span>
            </div>
            <span
              className="block animate-fadeInUp text-green-400 opacity-0"
              style={{ animationDelay: '2600ms', animationFillMode: 'forwards' }}
            >
              Protect the Future
            </span>
          </h1>
          <style jsx>{`
            .headline-motion-wrapper {
              position: relative;
              height: 2.5em;
              margin-bottom: 0.15em;
            }

            .headline-line {
              position: absolute;
              left: 50%;
              top: 0;
              white-space: nowrap;
              opacity: 0;
              transform: translateX(-50%);
              animation-duration: 2.6s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }

            .headline-heal {
              animation-name: healMotion;
            }

            .headline-feed {
              animation-name: feedMotion;
            }

            @keyframes healMotion {
              0% {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
              }
              15% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
              }
              45% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
              }
              65% {
                opacity: 1;
                transform: translateX(calc(-100% - 24vw)) translateY(0);
              }
              100% {
                opacity: 1;
                transform: translateX(calc(-100% - 0.22em)) translateY(1.1em);
              }
            }

            @keyframes feedMotion {
              0% {
                opacity: 0;
                transform: translateX(-50%) translateY(1.1em);
              }
              15% {
                opacity: 1;
                transform: translateX(-50%) translateY(1.1em);
              }
              45% {
                opacity: 1;
                transform: translateX(-50%) translateY(1.1em);
              }
              65% {
                opacity: 1;
                transform: translateX(24vw) translateY(1.1em);
              }
              100% {
                opacity: 1;
                transform: translateX(0.22em) translateY(1.1em);
              }
            }

            @media (max-width: 768px) {
              .headline-motion-wrapper {
                height: 2.9em;
              }

              @keyframes healMotion {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(20px);
                }
                15% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(0);
                }
                45% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(0);
                }
                65% {
                  opacity: 1;
                  transform: translateX(calc(-100% - 16vw)) translateY(0);
                }
                100% {
                  opacity: 1;
                  transform: translateX(calc(-100% - 0.2em)) translateY(1.2em);
                }
              }

              @keyframes feedMotion {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(1.2em);
                }
                15% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(1.2em);
                }
                45% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(1.2em);
                }
                65% {
                  opacity: 1;
                  transform: translateX(16vw) translateY(1.2em);
                }
                100% {
                  opacity: 1;
                  transform: translateX(0.2em) translateY(1.2em);
                }
              }
            }
          `}</style>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp">
            Heliocentric System is an AI-driven company building intelligent solutions 
            for sustainable agriculture and environmental protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Climavise
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}