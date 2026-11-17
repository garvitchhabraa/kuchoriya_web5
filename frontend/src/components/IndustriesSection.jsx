import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coins,
  HeartPulse,
  GraduationCap,
  Factory,
  Package,
  Compass,
  Plane,
  Home,
  ShoppingCart,
  Clapperboard,
} from "lucide-react";
import { Reveal } from "./Reveal";

const INDUSTRIES = [
  {
    id: "finance",
    name: "Finance",
    icon: Coins,
    highlight: "Banking and Finance",
    titleSuffix: "Software Development",
    desc: "We develop secure, compliant, and efficient fintech solutions for banks and financial institutions. Our software simplifies transactions, automates financial workflows, and enhances customer experiences.",
    bullets: [
      { highlight: "Core Banking System", suffix: "Development" },
      { highlight: "Loan Origination", suffix: "Software" },
      { highlight: "Digital Payment", suffix: "App Development" },
      { highlight: "Budgeting App", suffix: "Development" },
      { highlight: "eBanking Mobile", suffix: "Applications" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Banking and Finance Software Development",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    highlight: "Healthcare",
    titleSuffix: "Software Development",
    desc: "Our healthcare solutions comply with international standards and cater to hospitals, clinics, and startups. From patient management to telemedicine, we help improve care delivery and operational efficiency.",
    bullets: [
      { highlight: "Electronic Health Record (EHR)", suffix: "Software" },
      { highlight: "Medical Database", suffix: "Development" },
      { highlight: "Doctor Appointment", suffix: "Booking App" },
      { highlight: "Telemedicine", suffix: "App Development" },
      { highlight: "Fitness and Wellness", suffix: "Apps" },
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Healthcare Software Development",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    highlight: "Education",
    titleSuffix: "Software Development",
    desc: "We build smart digital learning platforms for schools, universities, and e-learning providers, enabling interactive classrooms and data-driven teaching.",
    bullets: [
      { highlight: "eLearning", suffix: "App Development" },
      { highlight: "Learning Management System", suffix: "(LMS)" },
      { highlight: "Virtual Classroom", suffix: "Software" },
      { highlight: "Student Assessment and Tracking", suffix: "Software" },
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Education Software Development",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    highlight: "Manufacturing",
    titleSuffix: "Software Development",
    desc: "Our solutions help manufacturers implement Industry 4.0 practices with software that streamlines production, automates inventory, and integrates smart operations.",
    bullets: [
      { highlight: "ERP", suffix: "Software Development" },
      { highlight: "Supply Chain Management", suffix: "Solutions" },
      { highlight: "Inventory and Warehouse", suffix: "Automation" },
      { highlight: "Product Lifecycle Management", suffix: "(PLM)" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Manufacturing Software Development",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Package,
    highlight: "Logistics and Supply Chain",
    titleSuffix: "Software Development",
    desc: "Streamline supply chain logistics, fleet tracking, route optimization, and warehouse management with automated end-to-end transport software that cuts delivery costs.",
    bullets: [
      { highlight: "Fleet Management", suffix: "Software" },
      { highlight: "Real-Time GPS", suffix: "Tracking Apps" },
      { highlight: "Warehouse Management Systems", suffix: "(WMS)" },
      { highlight: "Freight & Cargo Dispatch", suffix: "Solutions" },
      { highlight: "Last-Mile Delivery", suffix: "Tracking" },
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Logistics and Supply Chain Software Development",
  },
  {
    id: "on-demand",
    name: "On-demand",
    icon: Compass,
    highlight: "On-Demand App",
    titleSuffix: "Development",
    desc: "Connect service providers with customers in real-time. We engineer high-availability on-demand delivery, taxi booking, and home service applications that scale smoothly.",
    bullets: [
      { highlight: "Taxi & Ride-Hailing", suffix: "App Development" },
      { highlight: "Food & Grocery", suffix: "Delivery Apps" },
      { highlight: "Home Services", suffix: "Booking Platforms" },
      { highlight: "Real-Time Dispatch", suffix: "& Geo-Tracking" },
      { highlight: "Integrated Payment", suffix: "& Escrow Gateways" },
    ],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=80",
    imageAlt: "On-Demand App Development",
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    highlight: "Travel and Hospitality",
    titleSuffix: "Software Development",
    desc: "Our apps enhance tourism and hospitality experiences, from bookings to loyalty programs, offering seamless guest services.",
    bullets: [
      { highlight: "Hotel and Flight Booking", suffix: "App Development" },
      { highlight: "Travel Itinerary Planning", suffix: "Software" },
      { highlight: "Restaurant and Food Reservation", suffix: "Apps" },
      { highlight: "Taxi/Car Rental", suffix: "App Development" },
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Travel and Hospitality Software Development",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Home,
    highlight: "Real Estate",
    titleSuffix: "Software Development",
    desc: "Transform property discovery, tenant management, and virtual property tours with smart digital platforms for brokers, buyers, and developers.",
    bullets: [
      { highlight: "Real Estate Marketplace", suffix: "& MLS Portals" },
      { highlight: "Property Management", suffix: "& Tenant Systems" },
      { highlight: "3D Virtual Tour", suffix: "& AR Property Viewers" },
      { highlight: "Real Estate CRM", suffix: "& Lead Management" },
      { highlight: "Smart Mortgage", suffix: "& ROI Calculators" },
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Real Estate Software Development",
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    icon: ShoppingCart,
    highlight: "eCommerce & Retail",
    titleSuffix: "Software Development",
    desc: "Drive conversions and scale global transactions with headless commerce, multi-vendor marketplaces, and personalized AI shopping engines.",
    bullets: [
      { highlight: "Custom eCommerce Portal", suffix: "Development" },
      { highlight: "Multi-Vendor Marketplace", suffix: "Platforms" },
      { highlight: "Omnichannel POS", suffix: "& ERP Integration" },
      { highlight: "AI-Powered Recommendation", suffix: "Engines" },
      { highlight: "Secure International Payment", suffix: "Gateways" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=900&q=80",
    imageAlt: "eCommerce & Retail Software Development",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Clapperboard,
    highlight: "Entertainment and Media",
    titleSuffix: "Software Development",
    desc: "Deliver immersive media experiences with custom OTT streaming platforms, video-on-demand architectures, and real-time gaming engines.",
    bullets: [
      { highlight: "OTT Video Streaming Apps", suffix: "(Smart TV & Mobile)" },
      { highlight: "Audio & Podcast", suffix: "Streaming Platforms" },
      { highlight: "Live Broadcasting", suffix: "& WebRTC Solutions" },
      { highlight: "Digital Rights Management (DRM)", suffix: "Integration" },
      { highlight: "Interactive Gaming", suffix: "& Social Portals" },
    ],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Entertainment and Media Software Development",
  },
];

export const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeIndustry = INDUSTRIES[activeIdx];

  return (
    <section
      id="industries"
      className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200/90 relative"
      data-testid="industries-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with crisp white background and #F97316 highlights */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono font-semibold">
              Specialized Industry Practices
            </span>
          </div>

          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Empowering{" "}
              <span className="text-[#F97316]">
                Industries
              </span>{" "}
              with Specialized{" "}
              <span className="text-[#F97316]">
                Software Development
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-3xl mx-auto">
              From{" "}
              <span className="text-[#F97316] font-semibold">finance and healthcare</span>
              {" "}to{" "}
              <span className="text-[#F97316] font-semibold">real estate, logistics, retail</span>
              , and beyond – our experienced{" "}
              <span className="text-[#F97316] font-semibold">software development</span>
              {" "}company builds industry-specific digital products that help global businesses{" "}
              <span className="text-[#F97316] font-semibold">automate operations</span>
              , serve customers better, and compete on a{" "}
              <span className="text-[#F97316] font-semibold">global level</span>.
            </p>
          </Reveal>
        </div>

        {/* Master Card Container */}
        <div className="bg-[#FFFFFF] text-zinc-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-200/90">
          
          {/* Top 10 Industry Horizontal Tabs */}
          <div className="overflow-x-auto pb-4 mb-8 -mx-2 px-2 no-scrollbar">
            <div className="flex items-center justify-between min-w-[760px] lg:min-w-0 gap-2 border-b border-zinc-200 pb-4">
              {INDUSTRIES.map((ind, i) => {
                const Icon = ind.icon;
                const isActive = i === activeIdx;

                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIdx(i)}
                    className={`flex flex-col items-center justify-center py-2 px-3 sm:px-4 rounded-xl transition-all duration-200 group cursor-pointer ${
                      isActive
                        ? "bg-[#FFF7ED] text-[#F97316] border border-[#F97316]/30 shadow-xs"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 mb-1 transition-colors ${
                        isActive ? "text-[#F97316]" : "text-zinc-500 group-hover:text-[#F97316]"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold whitespace-nowrap tracking-tight ${
                        isActive ? "text-[#F97316]" : "text-zinc-700 group-hover:text-zinc-950"
                      }`}
                    >
                      {ind.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Industry Content (2 Columns: Left Text & Bullets, Right Photo) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Left Column: Heading with highlighted keywords, Description & Bullet Points */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  <span className="text-[#F97316]">{activeIndustry.highlight}</span>{" "}
                  <span>{activeIndustry.titleSuffix}</span>
                </h3>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {activeIndustry.desc}
                </p>

                {/* Bullets with vibrant #F97316 checkmarks and highlighted key phrases */}
                <div className="pt-2 space-y-2.5">
                  {activeIndustry.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-[#F97316] font-extrabold text-base leading-none select-none">
                        ✓
                      </span>
                      <span className="text-sm sm:text-[15px] text-zinc-800 leading-snug">
                        <strong className="font-semibold text-zinc-950">{bullet.highlight}</strong>{" "}
                        <span className="text-zinc-600">{bullet.suffix}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High Quality Visual Photo Container */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-md border border-zinc-200 bg-zinc-50">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
