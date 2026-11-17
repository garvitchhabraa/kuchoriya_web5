import React from "react";
import { Mail, MessageCircle, Video } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const FloatingContact = () => {
  return (
    <aside 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 sm:gap-2.5 select-none scale-85 sm:scale-100 origin-right"
      aria-label="Quick contact tools"
    >
      {/* Vertical 'GET IN TOUCH' Orange Tab */}
      <button
        onClick={() => scrollToId("contact")}
        data-testid="floating-get-in-touch"
        className="bg-[#F97316] hover:bg-[#ea580c] text-white text-[11px] font-mono2 font-extrabold uppercase tracking-[0.2em] px-2.5 py-4 rounded-l-xl shadow-lg transition-all duration-300 hover:pr-4 flex items-center justify-center [writing-mode:vertical-rl] rotate-180"
        title="Get In Touch with Kuchoriya TechSoft"
      >
        Get In Touch
      </button>

      {/* Floating Action Circles */}
      <div className="flex flex-col items-center gap-2 pr-1.5 sm:pr-2">
        {/* Email */}
        <a
          href="mailto:info@kuchoriyatechsoft.com"
          data-testid="floating-email-cta"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F97316] hover:bg-[#ea580c] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="Email Us: info@kuchoriyatechsoft.com"
        >
          <Mail className="w-5 h-5" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918003156735"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-cta"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="Chat on WhatsApp: +91-8003156735"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        {/* Teams / Video Consultation */}
        <button
          onClick={() => scrollToId("contact")}
          data-testid="floating-consult-cta"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6264A7] hover:bg-[#50528e] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="Schedule Video Consultation"
        >
          <Video className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default FloatingContact;
