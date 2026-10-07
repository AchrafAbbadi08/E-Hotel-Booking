import React from 'react'

const Sponsor = () => {
  const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-inner {
          animation: marqueeScroll 15s linear infinite;
        }

        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none py-4">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* Marquee Container */}
        <div className="marquee-inner flex w-max will-change-transform">
          {/* First Set */}
          <div className="flex items-center shrink-0">
            {companyLogos.map((company, index) => (
              <img 
                key={`original-${index}`} 
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                alt={company} 
                className="h-8 md:h-10 w-auto object-contain mx-6 md:mx-10" 
                draggable={false} 
              />
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {companyLogos.map((company, index) => (
              <img 
                key={`duplicate-${index}`} 
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                alt={company} 
                className="h-8 md:h-10 w-auto object-contain mx-6 md:mx-10" 
                draggable={false} 
              />
            ))}
          </div>
        </div>

        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  )
}

export default Sponsor