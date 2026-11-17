import React from "react";

const BRAND_LOGOS = [
  {
    id: "mckesson",
    name: "McKesson",
    render: () => (
      <div className="flex items-center text-white font-black text-xl sm:text-2xl tracking-wider font-sans select-none opacity-90 hover:opacity-100 transition-opacity">
        <span>MCKESSON</span>
      </div>
    ),
  },
  {
    id: "hinduja",
    name: "Hinduja Group",
    render: () => (
      <div className="flex flex-col items-center justify-center text-white select-none opacity-90 hover:opacity-100 transition-opacity leading-none">
        <svg viewBox="0 0 36 24" className="w-8 h-6 fill-none stroke-white stroke-[2]">
          <circle cx="18" cy="12" r="10" />
          <path d="M13 12 A5 5 0 0 1 23 12 A5 5 0 0 1 13 12" />
        </svg>
        <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.2em] uppercase mt-1 font-sans">
          HINDUJA GROUP
        </span>
      </div>
    ),
  },
  {
    id: "reliance",
    name: "Reliance",
    render: () => (
      <div className="flex items-center gap-1.5 text-white select-none opacity-90 hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M12 4.5 C9.8 7.5 8.8 9.8 8.8 12.8 C8.8 14.8 10.2 16.8 12 16.8 C13.8 16.8 15.2 14.8 15.2 12.8 C15.2 9.8 14.2 7.5 12 4.5 Z" />
        </svg>
        <span className="text-base sm:text-lg font-bold font-serif tracking-tight">
          Reliance
        </span>
      </div>
    ),
  },
  {
    id: "dhl",
    name: "DHL",
    render: () => (
      <div className="flex items-center text-white select-none opacity-90 hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 100 24" className="w-20 sm:w-24 h-6">
          <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2.5" strokeDasharray="4 2" />
          <text
            x="28"
            y="18"
            fill="white"
            fontStyle="italic"
            fontWeight="900"
            fontSize="18"
            fontFamily="Arial Black, Impact, sans-serif"
            letterSpacing="1"
          >
            DHL
          </text>
          <line x1="78" y1="12" x2="98" y2="12" stroke="white" strokeWidth="2.5" strokeDasharray="4 2" />
        </svg>
      </div>
    ),
  },
  {
    id: "whirlpool",
    name: "Whirlpool",
    render: () => (
      <div className="flex items-center text-white select-none opacity-90 hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 110 26" className="w-24 sm:w-28 h-6">
          <path
            d="M14 6 C8 4 3 9 3 14 C3 19 8 23 15 22 C22 21 24 13 20 7 C16 2 8 2 3 7"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="24"
            y="18"
            fill="white"
            fontWeight="700"
            fontSize="15"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.5"
          >
            Whirlpool
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "sony-bravia",
    name: "Sony Bravia",
    render: () => (
      <div className="flex flex-col items-center justify-center text-white select-none opacity-90 hover:opacity-100 transition-opacity leading-none">
        <span className="text-xs sm:text-sm font-black tracking-[0.2em] font-serif">
          SONY
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] font-sans mt-0.5 text-zinc-300">
          BRAVIA
        </span>
      </div>
    ),
  },
  {
    id: "draftkings",
    name: "DraftKings",
    render: () => (
      <div className="flex flex-col items-center justify-center text-white select-none opacity-90 hover:opacity-100 transition-opacity leading-tight">
        <svg viewBox="0 0 24 10" className="w-5 h-2.5 fill-white mb-0.5">
          <polygon points="2,10 4,4 8,8 12,2 16,8 20,4 22,10" />
        </svg>
        <span className="text-[9px] sm:text-[10px] font-black tracking-widest font-sans uppercase">
          DRAFT KINGS
        </span>
      </div>
    ),
  },
];

export const BrandStrip = () => {
  return (
    <div 
      className="w-full bg-[#08080A]/95 border-y border-zinc-800/80 py-4 sm:py-5 relative z-20 overflow-hidden" 
      data-testid="brand-strip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-5 md:gap-8">
        
        {/* Left Label: Built for Brands That Mean Business */}
        <div className="shrink-0 text-center md:text-left border-b md:border-b-0 md:border-r border-zinc-800/80 pb-3 md:pb-0 md:pr-8">
          <h3 className="font-display font-extrabold text-white text-base sm:text-[17px] tracking-tight leading-snug">
            Built for <span className="text-[#F97316]">Brands</span>
          </h3>
          <p className="text-zinc-400 font-medium text-xs sm:text-sm tracking-tight leading-snug">
            That Mean <span className="text-[#F97316] font-semibold">Business</span>
          </p>
        </div>

        {/* Right Brand Logos: Continuous fluid row / marquee */}
        <div className="flex-1 w-full overflow-hidden relative">
          {/* Subtle edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#08080A] to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#08080A] to-transparent z-10 pointer-events-none hidden sm:block" />

          {/* Logos Marquee Container */}
          <div className="flex items-center gap-10 sm:gap-12 animate-marquee whitespace-nowrap min-w-full">
            {/* 1st copy */}
            {BRAND_LOGOS.map((brand) => (
              <div key={brand.id} className="shrink-0 flex items-center justify-center">
                {brand.render()}
              </div>
            ))}
            {/* 2nd duplicated copy for seamless infinite loop */}
            {BRAND_LOGOS.map((brand) => (
              <div key={`${brand.id}-dup`} className="shrink-0 flex items-center justify-center">
                {brand.render()}
              </div>
            ))}
            {/* 3rd duplicated copy for ultra-wide screens */}
            {BRAND_LOGOS.map((brand) => (
              <div key={`${brand.id}-dup2`} className="shrink-0 flex items-center justify-center">
                {brand.render()}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrandStrip;
