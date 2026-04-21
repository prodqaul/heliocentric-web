import React from 'react';
import Image from 'next/image';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative flex lg:min-h-screen items-center pt-16">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 text-center text-white sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-5 text-2xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
              height: 2.65em;
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

            @media (max-width: 1024px) {
              .headline-motion-wrapper {
                height: 2.75em;
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

            @media (max-width: 480px) {
              .headline-motion-wrapper {
                height: 3em;
              }

              @keyframes healMotion {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(16px);
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
                  transform: translateX(calc(-100% - 12vw)) translateY(0);
                }
                100% {
                  opacity: 1;
                  transform: translateX(calc(-100% - 0.18em)) translateY(1.25em);
                }
              }

              @keyframes feedMotion {
                0% {
                  opacity: 0;
                  transform: translateX(-50%) translateY(1.25em);
                }
                15% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(1.25em);
                }
                45% {
                  opacity: 1;
                  transform: translateX(-50%) translateY(1.25em);
                }
                65% {
                  opacity: 1;
                  transform: translateX(12vw) translateY(1.25em);
                }
                100% {
                  opacity: 1;
                  transform: translateX(0.18em) translateY(1.25em);
                }
              }
            }
          `}</style>
          <p className="mb-8 text-base leading-relaxed text-gray-200 animate-fadeInUp sm:text-lg md:text-xl lg:text-2xl">
            Heliocentric System is an AI-driven company building intelligent solutions 
            for sustainable agriculture and environmental protection.
          </p>
          <div className="flex flex-col justify-center gap-3 animate-fadeInUp sm:flex-row sm:gap-4">
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
            >
              Discover Climavise
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}