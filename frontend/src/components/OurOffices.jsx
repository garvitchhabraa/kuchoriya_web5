import React from "react";
import { Reveal } from "./Reveal";

const OFFICES = [
  {
    country: "USA",
    address: "9765 keystone court, Clarence, NY 14031 , USA",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M10 45 L10 25 L16 25 L16 45 M16 28 L24 28 L24 45 M24 22 L32 22 L32 45 M32 30 L40 30 L40 45" />
        <path d="M50 45 L50 18 L55 12 L60 18 L60 45" />
        <path d="M55 12 L55 5" />
        <path d="M68 45 L68 20 L76 20 L76 45 M72 20 L72 10" />
        <path d="M82 45 L82 26 L90 26 L90 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "AUSTRALIA",
    address: "Unit 14G, 3 darling point road, Sydney, NSW, Australia, 2027",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M15 45 C20 35, 30 35, 35 45" />
        <path d="M28 45 C35 30, 48 30, 52 45" />
        <path d="M48 45 C55 25, 68 25, 72 45" />
        <path d="M50 45 L50 8 M47 16 L53 16" />
        <path d="M72 45 C80 32, 90 38, 92 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "ISRAEL",
    address: "Hashomer 7, Pardes Hanna - Karkur, 3711960, Israel",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M15 45 L15 30 L25 30 L25 45" />
        <path d="M25 32 L35 32 L35 45" />
        <path d="M40 45 L40 20 L60 20 L60 45" />
        <path d="M45 20 C45 12, 55 12, 55 20" />
        <path d="M65 45 L65 26 L85 26 L85 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "UAE",
    address: "Building A2 DDP - Dubai Silicon Oasis - Dubai - United Arab Emirates",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M20 45 L20 28 L30 28 L30 45" />
        <path d="M35 45 L35 22 L45 22 L45 45" />
        <path d="M48 45 L50 6 L52 45" />
        <line x1="50" y1="6" x2="50" y2="2" />
        <path d="M60 45 C60 25, 75 25, 75 45" />
        <path d="M80 45 L80 30 L90 30 L90 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "CANADA",
    address: "1100 Caven St, Suite PH11, Mississauga, ON L5G 4N3 Canada",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M20 45 L20 25 L32 25 L32 45" />
        <path d="M48 45 L48 10 L52 10 L52 45" />
        <path d="M45 22 L55 22 L50 15 Z" />
        <line x1="50" y1="10" x2="50" y2="3" />
        <path d="M68 45 L68 28 L78 28 L78 45" />
        <path d="M80 45 L80 32 L90 32 L90 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "SINGAPORE",
    address: "01-08 50 Ubi Cres, Ubi TechPark, Singapore, 408585",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M15 45 L20 20 L28 20 L28 45" />
        <path d="M32 45 L34 16 L42 16 L42 45" />
        <path d="M46 45 L48 18 L56 18 L56 45" />
        <path d="M18 20 C35 15, 45 15, 58 18" strokeDasharray="1,1" />
        <circle cx="78" cy="28" r="10" />
        <line x1="78" y1="28" x2="78" y2="45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "BRAZIL",
    address: "Bispo César da Corso Filho, 1266, San Carlos, São Paulo, Boa Vista, Brazil, 13575-331",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M20 45 L20 32 L30 32 L30 45" />
        <path d="M48 45 L48 18 L52 18 L52 45" />
        <path d="M38 24 L62 24" />
        <path d="M47 18 C47 12, 53 12, 53 18" />
        <path d="M40 45 C45 35, 55 35, 60 45" />
        <path d="M70 45 L70 30 L80 30 L80 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "MEXICO",
    address: "Iguala 440, Mitras Norte, Monterrey, NL. Mexico, 64320",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M15 45 L25 30 L35 45" />
        <path d="M40 45 L40 18 L60 18 L60 45" />
        <path d="M46 18 L46 10 L54 10 L54 18" />
        <path d="M68 45 L78 28 L88 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "SPAIN",
    address: "Plaza Emilio Sala 1, 03801 Alcoy, Alicante, Spain",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M20 45 L20 22 L35 22 L35 45" />
        <path d="M22 22 L22 17 L26 17 L26 22 M29 22 L29 17 L33 17 L33 22" />
        <path d="M45 45 L45 28 L55 28 L55 45" />
        <path d="M65 45 L65 22 L80 22 L80 45" />
        <path d="M67 22 L67 17 L71 17 L71 22 M74 22 L74 17 L78 17 L78 22" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
  {
    country: "HONG KONG",
    address: "Tower 2, Silvercord, Rm 907, 9F, 30 Canton Rd, Tsim Sha Tsui, Hong Kong",
    svg: (
      <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-10 opacity-75 group-hover:opacity-100 transition-opacity">
        <path d="M15 45 L15 20 L25 20 L25 45" />
        <path d="M30 45 L30 14 L42 14 L42 45" />
        <path d="M48 45 L48 8 L58 8 L58 45" />
        <line x1="53" y1="8" x2="53" y2="3" />
        <path d="M64 45 L64 16 L76 16 L76 45" />
        <path d="M82 45 L82 24 L92 24 L92 45" />
        <line x1="5" y1="45" x2="95" y2="45" strokeWidth="1" />
      </svg>
    ),
  },
];

export const OurOffices = () => {
  return (
    <section id="offices" className="py-24 bg-[#0A0A0C] text-white border-t border-zinc-800/80" data-testid="offices-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F97316]">
            Our Offices
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-300 font-normal">
            We Proudly Serve Global Locations
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 sm:gap-y-12 lg:gap-y-14 gap-x-4 sm:gap-x-6 lg:gap-x-8">
          {OFFICES.map((office, idx) => (
            <Reveal key={office.country} delay={idx * 0.05}>
              <div className="group flex flex-col items-center text-center p-2 sm:p-0">
                <div className="h-12 sm:h-14 flex items-end justify-center mb-4 sm:mb-5 text-zinc-300 group-hover:text-[#F97316] transition-colors">
                  {office.svg}
                </div>
                <h3 className="font-display text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-white group-hover:text-[#F97316] transition-colors pb-1 border-b border-transparent group-hover:border-[#F97316]/40 inline-block">
                  {office.country}
                </h3>
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs text-zinc-400 leading-relaxed max-w-[190px] sm:max-w-[210px]">
                  {office.address}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
