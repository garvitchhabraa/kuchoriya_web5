import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "How We Work" },
  { id: "stack", label: "Tech Stack" },
  { id: "work", label: "Work" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact Us" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Section Scroll-Spy for smooth line-by-line synchronization
      const scrollPos = window.scrollY + 150;
      const sections = ["contact", "insights", "work", "stack", "process", "industries", "services"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const jump = (id) => {
    setMobileOpen(false);
    setAboutDropdownOpen(false);
    setTimeout(() => scrollToId(id), mobileOpen ? 250 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || aboutDropdownOpen
            ? "bg-[#0A0A0C]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-[72px] flex items-center justify-between">
          
          {/* Logo Container with clean spacing after name */}
          <div className="flex items-center gap-3 shrink-0 mr-4 lg:mr-8 xl:mr-10">
            <button
              onClick={() => jump("hero")}
              className="hover:opacity-85 transition-opacity cursor-pointer flex items-center"
              aria-label="Kuchoriya TechSoft home"
            >
              <Logo />
            </button>

            <button
              onClick={() => jump("services")}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 hover:border-[#F97316]/80 text-white text-xs font-semibold transition-all shadow-inner group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F97316] group-hover:scale-110 transition-transform" />
              <span>NextGen AI</span>
            </button>
          </div>

          {/* Desktop Navigation Menu: Equal spacing across all items with zero multi-line wrapping */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5" ref={dropdownRef}>
            
            {/* About Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={`px-2 xl:px-3.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold whitespace-nowrap shrink-0 flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                  aboutDropdownOpen ? "text-[#F97316]" : "text-zinc-200 hover:text-white"
                }`}
              >
                <span>About</span>
                {aboutDropdownOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#F97316]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                )}
              </button>

              {/* Mega Menu Dropdown Box */}
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[48px] -left-12 w-[840px] bg-white text-zinc-900 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-zinc-200/90 p-6 z-50 cursor-default"
                  >
                    <div className="grid grid-cols-12 gap-6 items-start">
                      
                      {/* Left Promo Card: Team Photo & Consultation CTA */}
                      <div className="col-span-4 bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex flex-col justify-between">
                        <div>
                          <div className="w-full h-32 rounded-lg overflow-hidden bg-zinc-200 mb-3">
                            <img
                              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                              alt="Kuchoriya TechSoft Team"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-sm font-bold text-zinc-950 leading-snug mb-3">
                            Shape Your Idea into a Profitable, Scalable Solution
                          </h4>
                        </div>
                        <button
                          onClick={() => jump("contact")}
                          className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-colors cursor-pointer shadow-sm"
                        >
                          Get a Free Consultation
                        </button>
                      </div>

                      {/* Center Column */}
                      <div className="col-span-4 space-y-4 pr-2">
                        <div>
                          <button
                            onClick={() => jump("hero")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            About Us
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            Powering your business with tailored software solutions through a trusted custom software development company - delivering innovation, scalability, and digital transformation that drive measurable business growth.
                          </p>
                        </div>

                        <div>
                          <button
                            onClick={() => jump("estimator")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            Calculate Project Cost
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            From startups to giants, we help businesses grow and thrive.
                          </p>
                        </div>

                        <div>
                          <button
                            onClick={() => jump("work")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            Clients Testimonials
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            How our custom software development drives business growth and ROI.
                          </p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="col-span-4 space-y-4">
                        <div>
                          <button
                            onClick={() => jump("contact")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            Referral Partner
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            The Kuchoriya Referral Partner Program enables you to create a long-term revenue stream. Connect with us and leverage financial rewards for referring contacts without any hassle.
                          </p>
                        </div>

                        <div>
                          <button
                            onClick={() => jump("contact")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            Career
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            Join us in building something that matters.
                          </p>
                        </div>

                        <div>
                          <button
                            onClick={() => jump("contact")}
                            className="text-left text-sm font-bold text-zinc-950 hover:text-[#F97316] transition-colors block cursor-pointer"
                          >
                            Associate Partner
                          </button>
                          <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                            Build strategic business partnerships and unlock real growth opportunities together.
                          </p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Synchronized Nav Items: Identical equal padding and whitespace-nowrap */}
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => jump(item.id)}
                  className={`px-2 xl:px-3.5 py-1.5 text-[12.5px] xl:text-[13.5px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 flex items-center cursor-pointer relative ${
                    isActive ? "text-[#F97316] font-bold" : "text-zinc-200 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-2 right-2 xl:left-3.5 xl:right-3.5 h-0.5 bg-[#F97316] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => jump("contact")}
              className="hidden 2xl:inline-flex items-center gap-1 px-4 py-2 rounded-full border border-zinc-700 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
            >
              Become a Partner <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            <button
              onClick={() => jump("estimator")}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:gap-2 whitespace-nowrap shrink-0"
            >
              Get a Free Quote
            </button>

            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0C]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="h-[72px] px-4 sm:px-6 flex items-center justify-between border-b border-zinc-800">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
              <button
                onClick={() => jump("hero")}
                className="w-full text-left font-display text-lg font-bold text-white hover:text-[#F97316] transition-colors py-2 border-b border-zinc-800/60"
              >
                Home
              </button>

              {/* Mobile About Accordion / Quick Links */}
              <div className="py-2 border-b border-zinc-800/60">
                <div className="font-display text-lg font-bold text-white mb-2 flex items-center justify-between">
                  <span>About Kuchoriya</span>
                </div>
                <div className="pl-3 space-y-2 text-sm text-zinc-400">
                  <button onClick={() => jump("estimator")} className="block text-left hover:text-[#F97316]">
                    • Calculate Project Cost
                  </button>
                  <button onClick={() => jump("work")} className="block text-left hover:text-[#F97316]">
                    • Client Testimonials
                  </button>
                  <button onClick={() => jump("contact")} className="block text-left hover:text-[#F97316]">
                    • Partnership & Referral Program
                  </button>
                </div>
              </div>

              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => jump(item.id)}
                  className={`w-full text-left font-display text-lg font-bold transition-colors py-2 border-b border-zinc-800/60 ${
                    activeSection === item.id ? "text-[#F97316]" : "text-white hover:text-[#F97316]"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => jump("estimator")}
                  className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 px-6 rounded-full text-center transition-colors shadow-md block cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <button
                  onClick={() => jump("contact")}
                  className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-full text-center border border-zinc-700 transition-colors block cursor-pointer"
                >
                  Become a Partner
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
