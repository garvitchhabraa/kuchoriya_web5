import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { scrollToId } from "@/lib/scroll";

const NAV = [
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "How We Work" },
  { id: "stack", label: "Tech Stack" },
  { id: "work", label: "Work" },
  { id: "insights", label: "Insights" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const Footer = () => (
  <footer className="border-t border-zinc-800/80 bg-[#0A0A0C] overflow-hidden" data-testid="footer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-12 gap-12 pb-16">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 text-sm text-zinc-400 leading-relaxed max-w-sm">
            Kuchoriya TechSoft is an ISO 9001:2015 certified global software and mobile app development company. Connect. Compute. Create.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[11px] font-mono2 uppercase tracking-wider text-[#F97316] font-semibold bg-[#F97316]/10 border border-[#F97316]/30 px-3 py-1 rounded-full">
              ISO 9001:2015 Certified
            </span>
            <span className="text-[11px] font-mono2 uppercase tracking-wider text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full">
              Est. 2009
            </span>
          </div>
          <button
            data-testid="footer-consult-cta"
            onClick={() => scrollToId("contact")}
            className="mt-7 inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors shadow-sm cursor-pointer"
          >
            Get a Free Consultation
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  data-testid={`footer-${n.id}-link`}
                  onClick={() => scrollToId(n.id)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <a
                data-testid="footer-email-link"
                href="mailto:info@kuchoriyatechsoft.com"
                className="hover:text-white transition-colors"
              >
                info@kuchoriyatechsoft.com
              </a>
            </li>
            <li>
              <a data-testid="footer-phone-us-link" href="tel:+16504887911" className="hover:text-white transition-colors">
                +1 (650) 488-7911
              </a>
              <span className="text-zinc-700"> · </span>
              <a data-testid="footer-phone-in-link" href="tel:+918003156735" className="hover:text-white transition-colors">
                +91-8003156735
              </a>
            </li>
            <li data-testid="footer-address" className="leading-relaxed">
              1100 Caven St, Suite PH11,
              <br />
              Mississauga, ON L5G 4N3, Canada
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="relative pt-12 pb-6 px-4 select-none overflow-hidden" aria-hidden="true">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <p className="font-display font-extrabold text-center leading-none tracking-tight text-[12vw] sm:text-[13.5vw] lg:text-[14.8vw] whitespace-nowrap text-zinc-100/90 selection:bg-transparent">
          KUCHORIYA
        </p>
      </div>
    </div>

    <div className="border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          © {new Date().getFullYear()} Kuchoriya TechSoft. All rights reserved.
        </p>
        <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          AI-Driven Digital Solutions · Since 2009
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
