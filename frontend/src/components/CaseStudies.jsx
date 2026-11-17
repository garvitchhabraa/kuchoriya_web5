import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Smartphone,
  Laptop,
  Tv,
  Trophy
} from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const PROJECTS = [
  {
    id: "sixt-app",
    title: "Sixt Rent a Car App",
    category: "Mobile Application",
    brand: "SIXT",
    brandSub: "rent a car",
    brandColor: "#FF5F00",
    stats: "10M+ Downloads • <2s Booking",
    img: "/images/work/work-sixt-app.jpg",
    alt: "Sixt Rent a Car Mobile App Development",
    icon: Smartphone,
    highlight: "Keyless Bluetooth (BLE) unlock & digital check-in system deployed globally.",
  },
  {
    id: "sixt-fleet",
    title: "Sixt Fleet Management Platform",
    category: "Enterprise Web Platform",
    brand: "SIXT",
    brandSub: "Fleet Portal",
    brandColor: "#FF5F00",
    stats: "450+ Fleets • 98.2% Utilization",
    img: "/images/work/work-sixt-fleet.jpg",
    alt: "Sixt Fleet Management Web Platform",
    icon: Laptop,
    highlight: "Enterprise operations dashboard tracking 150,000+ active rental vehicles.",
  },
  {
    id: "epix-iptv",
    title: "EPIX IPTV Multi-Screen Suite",
    category: "Multi-Screen OTT Suite",
    brand: "EPIX IPTV",
    brandSub: "Smart TV & Mobile",
    brandColor: "#00D2FF",
    stats: "4,000+ Channels • 4K HDR",
    img: "/images/work/work-epix-iptv.jpg",
    alt: "EPIX IPTV Smart TV and Mobile Streaming Platform",
    icon: Tv,
    highlight: "Ultra-low-latency 4K live sports and VOD streaming across Smart TVs and mobile.",
  },
  {
    id: "draftkings",
    title: "DraftKings Real-Time Gaming Engine",
    category: "Real-Time Gaming Engine",
    brand: "DRAFTKINGS",
    brandSub: "Fantasy Sports",
    brandColor: "#53D337",
    stats: "1M+ Concurrent Players • <50ms Latency",
    img: "/images/work/work-draftkings.jpg",
    alt: "DraftKings Real-Time Fantasy Sports Engine",
    icon: Trophy,
    highlight: "Sub-50ms live contest telemetry and microservices supporting 1M+ active players.",
  },
];

const CLIENT_STORIES = [
  {
    id: "story-1",
    rating: "5.0",
    platform: "Trustpilot",
    reviewSource: "GoodFirms",
    summary: "Productive co-development with strong technical expertise and best practices.",
    description:
      "I co-developed a web application with Kuchoriya Softwares' full-stack developer for over 5 months. The project was delivered on time using best practices like test-driven development and continuous integration. Even with ambiguous requirements, the developer made smart design decisions independently, maintaining momentum. Their ability to quickly learn new technologies and implement practical solutions was impressive.",
    projectOwner: "Guiliani – Principal Software Engineer (Development & Architecture)",
    projectTitle: "Web Application Development in Angular & Node.js",
    authorName: "Guiliani",
    authorRole: "Principal Software Engineer (Development & Architecture)",
    location: "Australia",
    startDate: "March 5, 2021",
    endDate: "August 25, 2021",
    budget: "$60,000 – $75,000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "story-2",
    rating: "5.0",
    platform: "Trustpilot",
    reviewSource: "Clutch",
    summary:
      "Kuchoriya TechSoft delivered a powerful ERP software solution with expert consultation, innovative problem-solving, and scalable architecture, helping improve operational efficiency and drive long-term digital transformation and business growth.",
    description:
      "Initially skeptical, we were reassured by Kuchoriya TechSoft's expertise in ERP software development and enterprise solutions. Their innovative approach and scalable ERP implementation improved efficiency and enabled long-term digital transformation and business growth.",
    projectOwner: "James Mitchell – CEO",
    projectTitle: "ERP Development for CSI International",
    authorName: "James Mitchell",
    authorRole: "CEO",
    location: "Canada",
    startDate: "January 15, 2022",
    endDate: "March 30, 2026",
    budget: "$85,000 – $100,000",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "story-3",
    rating: "5.0",
    platform: "Trustpilot",
    reviewSource: "Clutch",
    summary:
      "Kuchoriya TechSoft engineered high-concurrency microservices with sub-50ms latency, handling millions of live match events flawlessly.",
    description:
      "Partnering with Kuchoriya TechSoft for our real-time fantasy gaming platform was transformative. Their dedicated backend team implemented event-driven microservices capable of handling sudden spikes during live championships. From rigorous load testing to proactive zero-downtime deployments, their engineering discipline exceeded our expectations.",
    projectOwner: "Marcus Vance – Head of Engineering & Infrastructure",
    projectTitle: "Real-Time Fantasy Sports Engine for DraftKings FC",
    authorName: "Marcus Vance",
    authorRole: "Head of Engineering & Infrastructure",
    location: "United States",
    startDate: "July 10, 2022",
    endDate: "October 28, 2024",
    budget: "$95,000 – $120,000",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export const CaseStudies = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide transition every 5.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % CLIENT_STORIES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveStoryIdx((prev) => (prev - 1 + CLIENT_STORIES.length) % CLIENT_STORIES.length);
  };

  const handleNext = () => {
    setActiveStoryIdx((prev) => (prev + 1) % CLIENT_STORIES.length);
  };

  const currentStory = CLIENT_STORIES[activeStoryIdx];

  return (
    <section 
      id="work" 
      className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0C] text-white border-y border-zinc-800/80 relative" 
      data-testid="work-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header: Explore Our Work */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold">
              Selected Portfolio
            </span>
          </div>

          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Explore Our <span className="text-[#F97316]">Work</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
              From <span className="text-[#F97316] font-semibold">web and mobile applications</span> to{" "}
              <span className="text-[#F97316] font-semibold">enterprise software</span>, we deliver future-ready solutions designed to drive growth, boost engagement, and adapt as your business scales.
            </p>
          </Reveal>
        </div>

        {/* 4 Showcase Panels: Clean, balanced, responsive without language badges or view details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-[#F97316] shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-300 bg-[#121217] flex flex-col h-full"
              >
                {/* Top Image Canvas with Brand Badge & Quick Metric */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/40 to-transparent" />
                  
                  {/* Brand Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-white font-black text-[11px] tracking-wide">
                      <span style={{ color: project.brandColor }}>{project.brand}</span>
                      <span className="text-[9px] text-zinc-400 font-medium font-sans">
                        {project.brandSub}
                      </span>
                    </div>
                  </div>

                  {/* Quick Metric Pill */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <div className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-700/60 backdrop-blur-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#F97316] shrink-0" />
                      <span className="text-[10px] text-zinc-200 font-mono font-medium truncate">
                        {project.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area: Category, Title & Highlight ONLY */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-xs text-[#F97316] font-mono font-semibold uppercase tracking-wider mb-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#F97316] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {project.highlight}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Executive Consultation Strip */}
        <Reveal delay={0.2}>
          <div className="mt-12 sm:mt-14 p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#18181F] to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-mono2 uppercase tracking-widest text-[#F97316] font-semibold block mb-1">
                Enterprise Engineering Partner
              </span>
              <h4 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                Ready to build an industry-leading digital product?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Partner with Kuchoriya TechSoft for world-class mobile apps, OTT streaming suites, and enterprise scale.
              </p>
            </div>

            <button
              onClick={() => scrollToId("contact")}
              className="shrink-0 inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:gap-3.5 cursor-pointer"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* Empowered by Our Client's Stories (3-page Interactive Auto-Changing Card) */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 lg:mt-28" data-testid="client-stories-section">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Empowered by Our Client's <span className="text-[#F97316]">Stories</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed">
              Each project reflects <span className="text-[#F97316] font-semibold">strategic innovation</span>,{" "}
              <span className="text-[#F97316] font-semibold">collaborative success</span>, and{" "}
              <span className="text-[#F97316] font-semibold">real-world impact</span>.
            </p>
          </div>

          {/* Master Stories Carousel Box: Fully responsive on Mobile, Tablet & Laptop */}
          <div
            className="bg-[#FFFFFF] text-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-zinc-200/90 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center"
              >
                {/* Left Column: Review Details & Feedback */}
                <div className="order-2 lg:order-1 lg:col-span-5 space-y-3 sm:space-y-3.5 pr-0 lg:pr-2">
                  {/* Rating Line */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xl font-bold text-[#1E40AF]">
                      {currentStory.rating}
                    </span>
                    <div className="flex items-center text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-zinc-900 text-sm ml-1">
                      {currentStory.platform}
                    </span>
                  </div>

                  {/* The Review */}
                  <div>
                    <span className="text-xs font-bold text-[#F97316] block">
                      The Review
                    </span>
                    <p className="text-sm font-semibold text-zinc-800">
                      "{currentStory.reviewSource}"
                    </p>
                  </div>

                  {/* Feedback Summary */}
                  <div>
                    <span className="text-xs font-bold text-[#F97316] block">
                      Feedback Summary
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {currentStory.summary}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <span className="text-xs font-bold text-[#F97316] block">
                      Description
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {currentStory.description}
                    </p>
                  </div>

                  {/* Project Owner */}
                  <div>
                    <span className="text-xs font-bold text-zinc-950 block">
                      Project Owner
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-800 font-medium">
                      {currentStory.projectOwner}
                    </p>
                  </div>
                </div>

                {/* Center Column: Portrait Image with blue border and arrow navigation */}
                <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col items-center justify-center">
                  <div className="relative w-40 sm:w-48 lg:w-52 h-52 sm:h-60 lg:h-64 rounded-2xl overflow-hidden border-[3px] border-[#3B82F6] shadow-md bg-zinc-100">
                    <img
                      src={currentStory.image}
                      alt={currentStory.authorName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Left / Right Arrows & Pagination Dots */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous story"
                      className="w-8 h-8 rounded-full border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {CLIENT_STORIES.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStoryIdx(i)}
                          aria-label={`Go to story ${i + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeStoryIdx
                            ? "bg-[#F97316] w-4"
                            : "bg-zinc-300 w-2 hover:bg-zinc-400"
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      aria-label="Next story"
                      className="w-8 h-8 rounded-full border border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Project Title, Verified Pill, Author Info, Project Dates & Budget */}
                <div className="order-3 lg:col-span-4 space-y-4">
                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                    {currentStory.projectTitle}
                  </h3>

                  {/* Verified Review Pill */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#DBEAFE] text-[#1D4ED8]">
                      Verified Review
                    </span>
                  </div>

                  {/* Author Name, Role and Location */}
                  <div>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                      {currentStory.authorName} – {currentStory.authorRole}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                      {currentStory.location}
                    </p>
                  </div>

                  {/* 3 Metric Stats: Start Date, End Date, Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-zinc-100">
                    <div>
                      <span className="text-xs font-bold text-[#F97316] block mb-0.5">
                        Project Start Date
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                        {currentStory.startDate}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#F97316] block mb-0.5">
                        Project End Date
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                        {currentStory.endDate}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-[#F97316] block mb-0.5">
                        Project Budget
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#F97316]">
                        {currentStory.budget}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
