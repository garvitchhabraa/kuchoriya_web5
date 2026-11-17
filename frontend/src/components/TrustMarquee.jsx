import React from "react";

/* -------------------------------------------------------------
 * Authentic Client Logos matching Kuchoriya TechSoft partners
 * ----------------------------------------------------------- */

// 1. Ayodo
const AyodoLogo = () => (
  <div className="flex items-center justify-center select-none">
    <svg viewBox="0 0 140 45" className="h-10 w-auto">
      <path d="M14 36 C8 36 3 30 3 22 C3 12 10 5 20 5 C30 5 35 14 33 24 C31 31 25 36 18 36 Z" fill="none" stroke="#2563EB" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M22 10 C26 19 35 34 42 34 C47 34 50 30 50 24" fill="none" stroke="#10B981" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M48 20 C48 11 55 5 65 5 C75 5 82 12 82 22 C82 32 75 39 65 39 C55 39 48 32 48 22 Z" fill="none" stroke="#F97316" strokeWidth="5" />
      <path d="M84 5 V36 M84 18 C89 18 97 20 97 26 C97 32 89 36 84 36" fill="none" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
      <circle cx="116" cy="22" r="10" fill="none" stroke="#10B981" strokeWidth="5" />
      <path d="M12 40 C35 44 85 44 126 39" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

// 2. bgo software
const BgoSoftwareLogo = () => (
  <div className="flex flex-col items-center justify-center text-center select-none">
    <div className="flex items-center gap-1">
      <span className="font-display font-black text-xl text-zinc-900 tracking-tight leading-none">
        bgo<span className="font-bold text-zinc-800">software</span>
      </span>
      <div className="flex items-center -space-x-1 ml-0.5">
        <span className="w-2.5 h-3.5 border-r-2 border-t-2 border-red-500 rounded-tr-full inline-block" />
        <span className="w-2.5 h-3.5 border-r-2 border-t-2 border-teal-500 rounded-tr-full inline-block" />
      </div>
    </div>
    <span className="text-[8px] font-mono2 text-zinc-500 tracking-wider mt-0.5 font-medium">
      the digital health lab
    </span>
  </div>
);

// 3. DUBAI PROPERTIES
const DubaiPropertiesLogo = () => (
  <div className="flex flex-col items-center justify-center select-none">
    <div className="relative">
      <span className="font-display font-extrabold text-base tracking-[0.25em] text-zinc-950">
        DUBA<span className="relative">I
          <span className="absolute -top-2 left-0 text-red-600 text-xs font-black">✓</span>
        </span>
      </span>
    </div>
    <span className="text-[7.5px] font-mono2 uppercase tracking-[0.3em] text-zinc-700 font-bold mt-0.5">
      PROPERTIES
    </span>
  </div>
);

// 4. Manglam BDL
const ManglamLogo = () => (
  <div className="flex flex-col items-center justify-center select-none">
    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-blue-600/30 bg-blue-50/50">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 fill-current">
        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 3.5l5 4.5v6H7v-6l5-4.5z" />
      </svg>
      <span className="font-display font-bold text-xs text-red-600 tracking-tight">
        Manglam
      </span>
      <span className="text-[9px] font-bold text-blue-700">BDL</span>
    </div>
    <span className="text-[7px] text-zinc-600 mt-0.5 font-medium">
      उमंग अपना घर संसार
    </span>
  </div>
);

// 5. BPCorrect
const BpCorrectLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="w-8 h-8 rounded-lg border-2 border-zinc-700 bg-zinc-100 flex flex-col items-center justify-center p-0.5 relative shadow-2xs">
      <div className="w-full h-4 bg-white border border-zinc-300 rounded flex items-center justify-center">
        <span className="text-red-600 text-[10px] font-black">✓</span>
      </div>
      <div className="flex items-center gap-0.5 mt-0.5">
        <span className="w-1 h-1 rounded-full bg-emerald-500" />
        <span className="w-1 h-1 rounded-full bg-amber-400" />
        <span className="w-1 h-1 rounded-full bg-orange-500" />
        <span className="w-1 h-1 rounded-full bg-red-600" />
      </div>
    </div>
    <div className="leading-tight">
      <span className="font-display font-black text-base text-zinc-950">BP</span>
      <span className="font-display font-bold text-base text-zinc-600">Correct</span>
    </div>
  </div>
);

// 6. DRAFT KINGS FC
const DraftKingsFcLogo = () => (
  <div className="flex items-center justify-center select-none">
    <div className="flex items-center gap-1 bg-[#18181B] px-3 py-1.5 rounded-xl border border-zinc-700 shadow-sm">
      <div className="relative">
        <svg viewBox="0 0 24 18" className="w-5 h-4 fill-amber-400">
          <path d="M2 16 L4 4 L9 9 L12 2 L15 9 L20 4 L22 16 Z" />
          <circle cx="4" cy="3" r="1.5" />
          <circle cx="12" cy="1" r="1.5" />
          <circle cx="20" cy="3" r="1.5" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-0.5">
          <span className="font-display font-black text-xs text-[#22C55E] tracking-tight uppercase">
            DRAFT
          </span>
          <span className="text-[9px] font-black text-amber-400 bg-amber-400/20 px-1 rounded-xs">
            FC
          </span>
        </div>
        <span className="font-display font-black text-[11px] text-white tracking-widest uppercase">
          KINGS
        </span>
      </div>
    </div>
  </div>
);

// 7. jobijoba
const JobijobaLogo = () => (
  <div className="flex items-center justify-center select-none">
    <span className="font-display font-black text-2xl text-zinc-950 tracking-tight">
      job<span className="text-[#EC4899] font-extrabold">i</span>j<span className="text-[#EC4899] font-extrabold">o</span>ba
    </span>
  </div>
);

// 8. ShiftForce
const ShiftForceLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="w-6 h-6 rounded-md bg-[#0284C7] flex items-center justify-center rotate-45 shadow-sm">
      <div className="w-2.5 h-2.5 rounded-full bg-white -rotate-45" />
    </div>
    <span className="font-display font-extrabold text-lg text-[#0F172A] tracking-tight">
      Shift<span className="text-[#0284C7]">Force</span>
    </span>
  </div>
);

// 9. Gleeking / eking
const EkingLogo = () => (
  <div className="flex items-center justify-center select-none">
    <span className="font-serif italic font-extrabold text-2xl text-[#DC2626] tracking-tight">
      eking<span className="text-xs not-italic align-super">®</span>
    </span>
  </div>
);

// 10. dresslily
const DresslilyLogo = () => (
  <div className="flex items-center justify-center select-none">
    <span className="font-display font-extrabold text-xl text-zinc-950 tracking-tight lowercase">
      dresslily
    </span>
  </div>
);

// 11. Fare Buzz
const FareBuzzLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="w-7 h-7 rounded bg-[#DC2626] flex items-center justify-center text-white font-bold text-sm shadow-xs">
      fb
    </div>
    <span className="font-display font-extrabold text-base text-[#1E3A8A] tracking-tight">
      Fare Buzz
    </span>
  </div>
);

// 12. DREAMDRY
const DreamdryLogo = () => (
  <div className="flex flex-col items-center justify-center text-center select-none">
    <span className="font-serif font-bold text-base text-zinc-900 tracking-[0.25em] uppercase">
      DREAMDRY
    </span>
    <span className="text-[6.5px] font-mono2 text-zinc-500 tracking-[0.2em] uppercase mt-0.5 font-medium">
      MAKE EVERY DAY GLAMOROUS
    </span>
  </div>
);

// 13. CSI International
const CsiLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <div className="w-7 h-7 rounded-full border-2 border-zinc-800 border-r-transparent rotate-45" />
      <span className="absolute font-display font-black text-xs text-zinc-900">
        CSI
      </span>
    </div>
    <div className="leading-tight">
      <span className="block font-display font-bold text-xs text-zinc-900 uppercase tracking-widest">
        CSI
      </span>
      <span className="block text-[8px] font-mono2 text-zinc-500 uppercase tracking-wider">
        international
      </span>
    </div>
  </div>
);

// 14. Hertz
const HertzLogo = () => (
  <div className="flex flex-col items-center justify-center select-none">
    <span className="font-display italic font-black text-2xl text-zinc-950 tracking-tight">
      Hertz<span className="text-[10px] not-italic align-super">®</span>
    </span>
    <span className="w-full h-1 bg-[#FACC15] rounded-full -mt-0.5" />
  </div>
);

// 15. SIXT rent a car
const SixtLogo = () => (
  <div className="flex flex-col items-center justify-center select-none">
    <div className="flex items-baseline font-display font-black text-2xl text-zinc-950 tracking-tighter leading-none">
      <span>S</span>
      <span className="relative inline-block text-zinc-950">
        I
        <span className="absolute -top-1.5 left-0 w-full h-1 bg-[#FB771F] rounded-xs rotate-12" />
      </span>
      <span>XT</span>
    </div>
    <span className="text-[8px] font-mono2 uppercase tracking-widest text-zinc-700 font-bold mt-0.5">
      rent a car
    </span>
  </div>
);

// 16. ATG ENTERTAINMENT
const AtgLogo = () => (
  <div className="flex flex-col items-center justify-center text-center select-none">
    <span className="font-display font-black text-2xl text-[#7C3AED] tracking-tight leading-none">
      ATG
    </span>
    <span className="text-[7.5px] font-mono2 uppercase tracking-[0.25em] text-[#7C3AED] font-bold mt-0.5">
      ENTERTAINMENT
    </span>
  </div>
);

// 17. Zangula
const ZangulaLogo = () => (
  <div className="flex items-center gap-1.5 select-none">
    <div className="w-7 h-7 rounded-full border-2 border-[#06B6D4] flex items-center justify-center">
      <span className="font-serif italic font-black text-sm text-zinc-950">Z</span>
    </div>
    <span className="font-display font-bold text-sm text-zinc-900 tracking-tight">
      angula
    </span>
  </div>
);

// 18. ASK A DOCTOR - 24x7
const AskDoctorLogo = () => (
  <div className="flex flex-col items-center justify-center text-center select-none">
    <div className="flex items-center gap-1 text-emerald-700 font-serif font-bold text-xs tracking-tight">
      <span className="text-emerald-600">☘</span>
      <span>ASK A DOCTOR - 24x7</span>
    </div>
    <span className="text-[7.5px] font-sans text-zinc-500 font-normal mt-0.5">
      Medical advice. Any time.
    </span>
  </div>
);

/* -------------------------------------------------------------
 * Row Data Arrays
 * ----------------------------------------------------------- */
const ROW_1_PARTNERS = [
  { name: "Ayodo", render: () => <AyodoLogo /> },
  { name: "bgo software", render: () => <BgoSoftwareLogo /> },
  { name: "DUBAI PROPERTIES", render: () => <DubaiPropertiesLogo /> },
  { name: "Manglam BDL", render: () => <ManglamLogo /> },
  { name: "BPCorrect", render: () => <BpCorrectLogo /> },
  { name: "DRAFT KINGS FC", render: () => <DraftKingsFcLogo /> },
  { name: "jobijoba", render: () => <JobijobaLogo /> },
  { name: "ShiftForce", render: () => <ShiftForceLogo /> },
];

const ROW_2_PARTNERS = [
  { name: "eking", render: () => <EkingLogo /> },
  { name: "dresslily", render: () => <DresslilyLogo /> },
  { name: "Fare Buzz", render: () => <FareBuzzLogo /> },
  { name: "DREAMDRY", render: () => <DreamdryLogo /> },
  { name: "CSI International", render: () => <CsiLogo /> },
  { name: "Hertz", render: () => <HertzLogo /> },
  { name: "SIXT rent a car", render: () => <SixtLogo /> },
  { name: "ATG ENTERTAINMENT", render: () => <AtgLogo /> },
  { name: "Zangula", render: () => <ZangulaLogo /> },
  { name: "ASK A DOCTOR - 24x7", render: () => <AskDoctorLogo /> },
];

/* -------------------------------------------------------------
 * Main TrustMarquee Component matching the exact user screenshot
 * ----------------------------------------------------------- */
export const TrustMarquee = () => {
  return (
    <section
      id="partners"
      className="py-16 lg:py-24 bg-[#0A0A0C] border-y border-zinc-800/80 overflow-hidden select-none"
      aria-label="Partnered with Startups and Fortune 500 Companies"
      data-testid="partners-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-10 sm:mb-12">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Partnered with <span className="text-[#F97316]">Startups</span> and{" "}
          <span className="text-[#F97316]">Fortune 500 Companies</span>
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6 marquee-paused">
        
        {/* Row 1 - Forward Scrolling */}
        <div className="overflow-hidden relative w-full mask-gradient">
          <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6">
            {[0, 1].map((dup) => (
              <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center gap-4 sm:gap-6">
                {ROW_1_PARTNERS.map((partner) => (
                  <div
                    key={`${dup}-${partner.name}`}
                    className="w-44 sm:w-52 h-20 sm:h-22 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center p-3 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default shrink-0"
                  >
                    {partner.render()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse Scrolling */}
        <div className="overflow-hidden relative w-full mask-gradient">
          <div className="flex w-max animate-marquee-reverse items-center gap-4 sm:gap-6">
            {[0, 1].map((dup) => (
              <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center gap-4 sm:gap-6">
                {ROW_2_PARTNERS.map((partner) => (
                  <div
                    key={`${dup}-${partner.name}`}
                    className="w-44 sm:w-52 h-20 sm:h-22 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center p-3 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default shrink-0"
                  >
                    {partner.render()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustMarquee;
