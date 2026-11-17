import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Award,
  Globe,
  Radio,
  Compass
} from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const STATS = [
  { value: "15+ Years", label: "Industry Excellence", detail: "Founded in 2009" },
  { value: "1,000+", label: "Projects Delivered", detail: "Across 50+ Countries" },
  { value: "300+", label: "Expert Engineers", detail: "Top 1% Tech Talent" },
  { value: "ISO 9001", label: "Quality Certified", detail: "2015 Global Standard" },
];

/* -------------------------------------------------------------
 * 3D Interactive Futuristic Globe & Neural Constellation
 * ----------------------------------------------------------- */
const InteractiveGlobe = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Rotation state
    let rotX = 0.25;
    let rotY = 0;
    let targetRotX = 0.25;
    let targetRotY = 0;
    let isHovered = false;

    // Special Hub Satellites
    const HUBS = [
      { name: "Generative AI", color: "#FB771F", lat: 0.35, lon: 0.6, tag: "LLM Pipeline" },
      { name: "Cloud Infrastructure", color: "#38BDF8", lat: -0.4, lon: 2.1, tag: "Kubernetes Mesh" },
      { name: "Mobile & Web", color: "#34D399", lat: 0.55, lon: 3.8, tag: "High-Performance" },
      { name: "Zero-Trust Security", color: "#A78BFA", lat: -0.5, lon: 5.1, tag: "SOC 2 Type II" },
      { name: "Big Data & BI", color: "#FBBF24", lat: 0.05, lon: 1.4, tag: "Real-Time Bus" },
    ];

    // Generate Fibonacci Sphere Particles
    const NUM_POINTS = 160;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const points = [];

    for (let i = 0; i < NUM_POINTS; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NUM_POINTS);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      points.push({ x, y, z });
    }

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetRotY = mouseX * 0.0035;
      targetRotX = Math.max(-0.6, Math.min(0.6, -mouseY * 0.0035));
    };

    const onMouseEnter = () => { isHovered = true; };
    const onMouseLeave = () => {
      isHovered = false;
      targetRotX = 0.2;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation + smoothed mouse damping
      if (!isHovered) {
        targetRotY += 0.005;
      }
      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;

      pulse += 0.035;

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.36;
      const fov = 380;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // 1. Draw Subtle Core Glowing Halo
      const haloGrad = ctx.createRadialGradient(
        centerX, centerY, radius * 0.1,
        centerX, centerY, radius * 1.3
      );
      haloGrad.addColorStop(0, "rgba(251, 119, 31, 0.12)");
      haloGrad.addColorStop(0.5, "rgba(251, 119, 31, 0.04)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Tilted Planetary Orbital Ring
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 1.25, radius * 0.42, -rotX * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(251, 119, 31, 0.22)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Orbiting satellite photon along ring
      const ringAngle = pulse * 0.7;
      const satX = centerX + Math.cos(ringAngle) * (radius * 1.25);
      const satY = centerY + Math.sin(ringAngle) * (radius * 0.42);
      ctx.beginPath();
      ctx.arc(satX, satY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#FB771F";
      ctx.shadowColor = "#FB771F";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // 3. Transform 3D Sphere Points
      const projected = points.map((p) => {
        // Rotate Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y;

        // Rotate X
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        const scale = fov / (fov + z2 * radius);
        const px = centerX + x2 * radius * scale;
        const py = centerY + y2 * radius * scale;

        return { x: px, y: py, z: z2, scale };
      });

      // 4. Draw Connecting Constellation Lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.z < -0.3) continue; // Skip back hemisphere connections for clarity

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          if (p2.z < -0.3) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 46) {
            const alpha = (1 - dist / 46) * Math.max(0, p1.z + 0.4) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // 5. Draw Sphere Particle Dots
      projected.sort((a, b) => a.z - b.z); // Render depth order
      for (const p of projected) {
        const isFront = p.z > 0;
        const alpha = isFront ? 0.35 + p.z * 0.55 : 0.12 + (p.z + 1) * 0.15;
        const size = (isFront ? 1.5 + p.z * 1.2 : 1) * p.scale;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, size), 0, Math.PI * 2);
        ctx.fillStyle = isFront
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(161, 161, 170, ${alpha})`;
        ctx.fill();
      }

      // 6. Draw Special Global Capability Hubs
      for (const hub of HUBS) {
        // Convert Lat/Lon to 3D Cartesian
        const hx = Math.cos(hub.lat) * Math.sin(hub.lon);
        const hy = Math.sin(hub.lat);
        const hz = Math.cos(hub.lat) * Math.cos(hub.lon);

        // Rotate
        const x1 = hx * cosY + hz * sinY;
        const z1 = -hx * sinY + hz * cosY;
        const y1 = hy;

        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        // Draw only if on front facing hemisphere
        if (z2 > -0.1) {
          const scale = fov / (fov + z2 * radius);
          const px = centerX + x2 * radius * scale;
          const py = centerY + y2 * radius * scale;
          const depthAlpha = Math.min(1, Math.max(0.2, (z2 + 0.3) * 1.2));

          // Pulsing Glow Ring
          const pulseR = 7 + Math.sin(pulse * 2 + hub.lon) * 2;
          ctx.beginPath();
          ctx.arc(px, py, pulseR * scale, 0, Math.PI * 2);
          ctx.strokeStyle = hub.color;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = depthAlpha * 0.6;
          ctx.stroke();

          // Hub Solid Center
          ctx.beginPath();
          ctx.arc(px, py, 3.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = hub.color;
          ctx.shadowColor = hub.color;
          ctx.shadowBlur = 12;
          ctx.globalAlpha = depthAlpha;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connecting line to tag
          const tagOffsetX = px > centerX ? 24 : -24;
          const tagOffsetY = -18;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px + tagOffsetX * 0.6, py + tagOffsetY * 0.6);
          ctx.lineTo(px + tagOffsetX, py + tagOffsetY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${depthAlpha * 0.35})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Text Label
          ctx.font = `600 ${Math.round(11 * scale)}px sans-serif`;
          ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha * 0.95})`;
          ctx.textAlign = px > centerX ? "left" : "right";
          ctx.fillText(hub.name, px + tagOffsetX + (px > centerX ? 4 : -4), py + tagOffsetY - 2);

          // Sub Tag
          ctx.font = `500 ${Math.round(9 * scale)}px monospace`;
          ctx.fillStyle = hub.color;
          ctx.globalAlpha = depthAlpha * 0.85;
          ctx.fillText(hub.tag, px + tagOffsetX + (px > centerX ? 4 : -4), py + tagOffsetY + 10);
          ctx.globalAlpha = 1;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-square max-w-[540px] mx-auto select-none cursor-grab active:cursor-grabbing flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

/* -------------------------------------------------------------
 * Hero Component
 * ----------------------------------------------------------- */
export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0A0C]"
      data-testid="hero-section"
    >
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FB771F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FB771F]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0C_82%)] pointer-events-none" />

      {/* Main Hero Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-32 sm:pt-36 lg:pt-40"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Enterprise Headlines & Copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            
            {/* Main Headline */}
            <h1 className="font-display font-extrabold tracking-tight leading-[1.08] text-white text-4xl sm:text-5xl lg:text-[3.75rem]">
              <span className="block">Transforming Ideas</span>
              <span className="block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                  into Scalable Digital
                </span>{" "}
                <span className="text-[#F97316]">Reality</span>
              </span>
              <span className="block mt-1 text-zinc-300 font-semibold">
                with <span className="text-[#F97316]">Custom Software</span> &amp; <span className="text-[#F97316]">AI</span>
              </span>
            </h1>

            {/* Executive Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-zinc-300/95 leading-relaxed max-w-xl font-normal"
            >
              <strong className="text-white font-semibold">Kuchoriya TechSoft</strong> is an <span className="text-[#F97316] font-semibold">ISO 9001:2015 certified</span> global software and <span className="text-[#F97316] font-semibold">mobile app development</span> company founded in 2009. We engineer high-performance mobile applications, enterprise web platforms, <span className="text-[#F97316] font-semibold">generative AI pipelines</span>, and cloud solutions for <span className="text-[#F97316] font-semibold">startups, SMEs, and Fortune 500</span> enterprises.
            </motion.p>

            {/* Strategic Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                data-testid="hero-schedule-cta"
                onClick={() => scrollToId("contact")}
                className="group relative inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.35)] hover:gap-3.5"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                data-testid="hero-explore-cta"
                onClick={() => scrollToId("services")}
                className="inline-flex items-center gap-2.5 border border-zinc-700/80 bg-zinc-900/60 text-zinc-200 hover:text-white text-sm font-medium px-6 py-4 rounded-full hover:border-zinc-500 hover:bg-zinc-800/60 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Capabilities</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: 3D Interactive Futuristic Globe & Neural Constellation */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FB771F]/20 via-orange-500/10 to-blue-500/10 rounded-full blur-3xl opacity-70 pointer-events-none" />

            {/* Globe Canvas Container */}
            <InteractiveGlobe />

          </div>
        </div>
      </motion.div>

      {/* Bottom Key Metric Indicators Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 w-full mt-16 lg:mt-24 border-t border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 lg:py-8 pr-6 ${
                i > 0 ? "border-l border-zinc-800/80 pl-6" : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-zinc-800/80" : ""} ${
                i === 2 ? "pl-0 lg:pl-6 border-l-0 lg:border-l" : ""
              }`}
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-[#F97316] tracking-tight">
                {s.value}
              </p>
              <p className="font-medium text-xs sm:text-sm text-zinc-200 mt-1">
                {s.label}
              </p>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 mt-0.5">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
