import React from "react";
import logoImg from "@/logo.png";

export const Logo = ({ compact = false, className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`} data-testid="nav-brand-logo">
    <img
      src={logoImg}
      alt="Kuchoriya TechSoft - Connect. Compute. Create."
      className="h-8 sm:h-9 w-auto object-contain select-none mix-blend-screen"
    />
  </span>
);

export default Logo;
