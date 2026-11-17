import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Reveal } from "./Reveal";

/* -------------------------------------------------------------
 * Authentic Tech SVG Logos
 * ----------------------------------------------------------- */
const TechLogo = ({ name }) => {
  switch (name) {
    // --- AI LOGOS ---
    case "GPT-4":
    case "Whisper":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 fill-current">
          <path d="M22.28 10.42c-.22-.84-.66-1.6-1.28-2.2-.42-.42-.92-.75-1.46-.98.08-.85-.06-1.7-.42-2.47-.4-.87-1.06-1.57-1.89-2.02-.82-.45-1.76-.64-2.69-.53-.47-.54-1.07-.95-1.74-1.21-.86-.33-1.8-.4-2.7-.22-.9.18-1.73.63-2.39 1.28-.7-.27-1.46-.35-2.22-.24-.87.13-1.68.52-2.32 1.13-.64.6-1.07 1.39-1.25 2.25-.77.34-1.41.9-1.85 1.62-.48.78-.7 1.69-.64 2.61.06.92.39 1.8.96 2.53-.16.84-.08 1.71.22 2.5.34.89.94 1.64 1.72 2.16.27.75.76 1.4 1.4 1.89.77.58 1.7.9 2.66.92.83.02 1.65-.2 2.37-.63.49.53 1.1.92 1.79 1.15.86.29 1.79.31 2.66.07.87-.24 1.66-.74 2.27-1.44.7.23 1.45.26 2.18.1.85-.18 1.63-.62 2.22-1.27.59-.65.97-1.47 1.1-2.35.74-.38 1.34-.97 1.74-1.71.43-.81.6-1.73.5-2.65-.1-.91-.48-1.76-1.1-2.44z" />
        </svg>
      );
    case "DeepSeek AI":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1D63FF]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18c0 .55-.45 1-1 1s-1-.45-1-1v-1.07c-2.83-.48-5-2.94-5-5.93 0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.99-2.17 5.45-5 5.93zM12 8c-2.21 0-4 1.79-4 4 0 1.86 1.28 3.41 3 3.86V12c0-.55.45-1 1-1s1 .45 1 1v3.86c1.72-.45 3-2 3-3.86 0-2.21-1.79-4-4-4z" />
        </svg>
      );
    case "PaLM-2":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#EA4335" d="M12 2L9 8h6z" />
          <path fill="#4285F4" d="M4 14l6-3-3-6z" />
          <path fill="#FBBC05" d="M20 14l-6-3 3-6z" />
          <path fill="#34A853" d="M12 22l-4-8h8z" />
        </svg>
      );
    case "Claude":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#D97706]">
          <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5z" />
        </svg>
      );
    case "DALL·E 2":
      return (
        <div className="w-5 h-5 rounded bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[8px] font-bold text-white shrink-0">
          D·2
        </div>
      );
    case "Stable Diffusion":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#06B6D4]">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      );
    case "Microsoft Phi-2":
      return (
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
          <span className="bg-[#F25022] rounded-xs" />
          <span className="bg-[#7FBA00] rounded-xs" />
          <span className="bg-[#00A4EF] rounded-xs" />
          <span className="bg-[#FFB900] rounded-xs" />
        </div>
      );
    case "Google Gemini":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4285F4]">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
        </svg>
      );
    case "Vicuna":
      return (
        <div className="w-5 h-5 rounded-full bg-amber-700 flex items-center justify-center text-[10px] text-white font-bold shrink-0">
          🦙
        </div>
      );

    // --- FRONTEND LOGOS ---
    case "Vue.js":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#41B883" d="M2 3h3.5L12 15 18.5 3H22L12 21z" />
          <path fill="#35495E" d="M6.5 3h3L12 7.5 14.5 3h3L12 12z" />
        </svg>
      );
    case "JavaScript":
      return (
        <div className="w-5 h-5 bg-[#F7DF1E] text-black font-extrabold text-[10px] rounded flex items-center justify-center shrink-0">
          JS
        </div>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E34F26]">
          <path d="M3 2l1.6 18.1L12 22l7.4-1.9L21 2H3zm14.7 6.4h-7.3l.2 2.3h7l-.6 6.3-5 1.4-5-1.4-.3-3.6h2.2l.2 1.8 2.9.8 2.9-.8.3-3.1H6.6l-.7-7.8h12.1l-.3 2.1z" />
        </svg>
      );
    case "Meteor":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#DE4F4F]">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 11l-3 4-2-2-3 4-1-3 4-4 2 2 3-1z" />
        </svg>
      );
    case "Nextjs":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.3 14.5L9.5 8h1.8l4 5.8V8H17v8.5h-1.7z" />
        </svg>
      );
    case "React":
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#61DAFB]">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case "Angular":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#DD0031]">
          <path d="M12 2L2 6l1.6 12L12 22l8.4-4L22 6 12 2zm0 3.2l5.4 12.1h-2.2l-1.1-2.8h-4.2l-1.1 2.8H6.6L12 5.2zm2.1 7.2l-2.1-5-2.1 5h4.2z" />
        </svg>
      );
    case "TypeScript":
      return (
        <div className="w-5 h-5 bg-[#3178C6] text-white font-bold text-[9px] rounded flex items-center justify-center shrink-0">
          TS
        </div>
      );
    case "Nuxt.js":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00DC82]">
          <path d="M10.5 4.5l-8 14h6.5l4.5-8 3 5.5h5.5l-6-11.5z" />
        </svg>
      );

    // --- BACKEND LOGOS ---
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933]">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
        </svg>
      );
    case "Express":
      return (
        <div className="w-5 h-5 font-mono font-bold text-xs flex items-center justify-center text-zinc-800 shrink-0">
          ex
        </div>
      );
    case "Django":
      return (
        <div className="w-5 h-5 bg-[#092E20] text-white font-serif font-bold text-[10px] rounded flex items-center justify-center shrink-0">
          dj
        </div>
      );
    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF2D20]">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm6.5 13.5l-6.5 3.6-6.5-3.6V8.5L12 5l6.5 3.5v7z" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#3776AB" d="M11.9 2c-4 0-3.8 1.7-3.8 1.7v1.8h3.9v.6H4.8S2 5.9 2 9.9s2.4 3.9 2.4 3.9h1.4v-2c0-2.3 2-2.3 2-2.3h3.9c1.9 0 1.9-1.8 1.9-1.8V3.8S13.8 2 11.9 2zm-1.1 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" />
          <path fill="#FFD43B" d="M12.1 22c4 0 3.8-1.7 3.8-1.7v-1.8h-3.9v-.6h7.2s2.8.2 2.8-3.8-2.4-3.9-2.4-3.9h-1.4v2c0 2.3-2 2.3-2 2.3h-3.9c-1.9 0-1.9 1.8-1.9 1.8v3.9s-.2 1.8 1.7 1.8zm1.1-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
        </svg>
      );
    case "Java":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E76F00]">
          <path d="M4 19c3.5 1 12.5 1 16 0-3.5-1-12.5-1-16 0zm4-3c2.5.5 9.5.5 12 0-2.5-.5-9.5-.5-12 0zm3-4c1 2 4 3 6 1-1.5 2-4.5 2-6-1zM9 8c2-2 4-2 6 0-1-1-3-1-6 0z" />
        </svg>
      );
    case "Spring Boot":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#6DB33F]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
        </svg>
      );
    case "PHP":
      return (
        <div className="w-5 h-5 bg-[#777BB4] text-white font-bold text-[8px] rounded-full flex items-center justify-center shrink-0">
          PHP
        </div>
      );
    case "Ruby on Rails":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#CC0000]">
          <path d="M12 2L2 7l2 13h16l2-13-10-5zm0 3.5l6 3-1 9H7l-1-9 6-3z" />
        </svg>
      );
    case "ASP.NET":
      return (
        <div className="w-5 h-5 bg-[#512BD4] text-white font-bold text-[7px] rounded flex items-center justify-center shrink-0">
          .NET
        </div>
      );

    // --- MOBILE LOGOS ---
    case "Flutter":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#02569B]">
          <path d="M14.3 2L4.5 11.8l3.1 3.1 9.8-9.8zm-.1 10.5l-4.7 4.7 4.7 4.7h6.2l-7.8-7.8 7.8-7.8h-6.2z" />
        </svg>
      );
    case "Swift":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05138]">
          <path d="M21.5 15.3c-.5 1-1.5 2-2.8 2.8 2.2-3.1 1.7-6.9 1.7-6.9-1.2 1.9-3 3.3-5.2 4.1 2.2-2.5 2.6-5.8 2.6-5.8-2 2-4.6 3.2-7.5 3.5 1.5-1.5 2.5-3.5 2.7-5.7C10.2 9 8 11.5 6.7 14.5c-.8 2-1 4.2-.7 6.3C4.2 19 3 16.8 3 14.3c0-5.4 4.5-9.8 10-9.8 2.3 0 4.4.8 6.1 2.1-1.4.3-2.6 1.1-3.4 2.2 2.3-.5 4.7.1 6.3 1.6-1.5.8-2.6 2.1-3.1 3.7 1.4-.4 2.8-.2 4 .6-.5.3-.9.5-1.4.6z" />
        </svg>
      );
    case "Kotlin":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#7F52FF" d="M22 22H2V2h20L12 12z" />
          <path fill="#C711E1" d="M2 22l10-10L2 2z" />
          <path fill="#E4485D" d="M12 12l10 10H2z" />
        </svg>
      );
    case "Dart":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0175C2]">
          <path d="M4 4l8 8-8 8V4zm9 3l7 7-7 7V7z" />
        </svg>
      );
    case "Xamarin":
      return (
        <div className="w-5 h-5 bg-[#3498DB] text-white font-bold text-xs rounded flex items-center justify-center shrink-0">
          X
        </div>
      );
    case "Ionic":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3880FF]">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#3880FF" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "Unity":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <path d="M12 2l8 5v10l-8 5-8-5V7l8-5zm0 3.2L6 8.5v7l6 3.3 6-3.3v-7L12 5.2z" />
        </svg>
      );
    case "Objective-C":
      return (
        <div className="w-5 h-5 font-mono text-[9px] font-bold text-zinc-700 flex items-center justify-center shrink-0">
          [C]
        </div>
      );

    // --- DATABASES LOGOS ---
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#47A248]">
          <path d="M12 2C11.5 2.5 6 9.5 6 14.5 6 18 8.7 21 12 22c3.3-1 6-4 6-7.5C18 9.5 12.5 2.5 12 2zm0 18.5c-2.5-.8-4.5-3-4.5-6 0-3.5 3.5-8.5 4.5-10 1 1.5 4.5 6.5 4.5 10 0 3-2 5.2-4.5 6z" />
        </svg>
      );
    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4479A1]">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 3.86 2.45 7.14 5.9 8.38.48.09.65-.21.65-.46v-1.63c-2.39.52-2.89-1.15-2.89-1.15-.39-.99-.95-1.25-.95-1.25-.78-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.77 1.31 2.01.93 2.5.71.08-.56.3-.93.55-1.15-1.91-.22-3.92-.95-3.92-4.25 0-.94.34-1.71.89-2.31-.09-.22-.39-1.1.08-2.28 0 0 .72-.23 2.37.88.69-.19 1.42-.29 2.15-.29.73 0 1.46.1 2.15.29 1.65-1.11 2.36-.88 2.36-.88.47 1.18.17 2.06.08 2.28.56.6 1 1.37 1 2.31 0 3.31-2.02 4.02-3.94 4.24.31.27.59.8.59 1.61v2.39c0 .26.17.56.66.46C18.56 19.13 21 15.86 21 12c0-4.97-4.03-9-9-9z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4169E1]">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-2-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-4z" />
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#DC382D]">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 6 12 2.5 19.5 6 12 9.5zm-10 4l10 5 10-5v3l-10 5-10-5v-3z" />
        </svg>
      );
    case "SQLite":
      return (
        <div className="w-5 h-5 bg-[#003B57] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          SQL
        </div>
      );
    case "MariaDB":
      return (
        <div className="w-5 h-5 bg-[#003545] text-white font-bold text-[7px] rounded flex items-center justify-center shrink-0">
          MARIA
        </div>
      );
    case "Oracle":
      return (
        <div className="w-5 h-5 bg-[#F80000] text-white font-extrabold text-[8px] rounded flex items-center justify-center shrink-0">
          ORA
        </div>
      );
    case "SQL Server":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#CC292B]">
          <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 6c0-1.66 3.58-3 8-3s8 1.34 8 3v4c0 1.66-3.58 3-8 3s-8-1.34-8-3v-4z" />
        </svg>
      );
    case "Cassandra":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1479A4]">
          <circle cx="12" cy="12" r="8" fill="none" stroke="#1479A4" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#1479A4" />
        </svg>
      );
    case "DynamoDB":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4053D6]">
          <rect x="3" y="4" width="18" height="5" rx="1" />
          <rect x="3" y="10" width="18" height="5" rx="1" />
          <rect x="3" y="16" width="18" height="5" rx="1" />
        </svg>
      );

    // --- DEVOPS LOGOS ---
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2496ED]">
          <path d="M13 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm14.5 7c-.3-1-1.2-1.8-2.2-2-.3 0-.6.1-.9.2-.5-.8-1.4-1.2-2.4-1.2h-1V7h-3v3H2c-.6 0-1 .4-1 1v4c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-.7-.1-1.4-.5-2z" />
        </svg>
      );
    case "Kubernetes":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#326CE5]">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z" />
        </svg>
      );
    case "Jenkins":
      return (
        <div className="w-5 h-5 bg-[#D33833] text-white font-bold text-[8px] rounded-full flex items-center justify-center shrink-0">
          JK
        </div>
      );
    case "GitHub Actions":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      );
    case "GitLab CI":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FC6D26]">
          <path d="M12 21.5l4-12.2H8L12 21.5zm8.5-12.2l-1.3-4c-.1-.3-.6-.3-.7 0L16 9.3h4.5zM3.5 9.3h4.5L5.5 5.3c-.1-.3-.6-.3-.7 0l-1.3 4z" />
        </svg>
      );
    case "CircleCI":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <circle cx="12" cy="12" r="8" fill="none" stroke="black" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" fill="black" />
        </svg>
      );
    case "Travis CI":
      return (
        <div className="w-5 h-5 bg-[#CB3837] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          TR
        </div>
      );
    case "Ansible":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
          <circle cx="12" cy="12" r="10" />
          <path fill="white" d="M12 4L6 18h2.5l1.5-3.5h4L15.5 18H18L12 4zm0 4.5l1.3 3.5h-2.6L12 8.5z" />
        </svg>
      );
    case "Terraform":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#844FBA]">
          <path d="M3 3h5.5v5.5H3zm6.5 0H15v5.5H9.5zm6.5 0H21v5.5H16zM3 9.5h5.5V15H3zm6.5 6.5H15v5.5H9.5z" />
        </svg>
      );
    case "Vagrant":
      return (
        <div className="w-5 h-5 bg-[#1563FF] text-white font-bold text-[9px] rounded flex items-center justify-center shrink-0">
          V
        </div>
      );

    // --- PLATFORMS & CLOUD DB ---
    case "Shopify":
      return (
        <div className="w-5 h-5 bg-[#96BF48] text-white font-bold text-[9px] rounded flex items-center justify-center shrink-0">
          S
        </div>
      );
    case "Magento":
      return (
        <div className="w-5 h-5 bg-[#EE672F] text-white font-bold text-[9px] rounded flex items-center justify-center shrink-0">
          M
        </div>
      );
    case "WooCommerce":
      return (
        <div className="w-5 h-5 bg-[#96588A] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          WOO
        </div>
      );
    case "WordPress":
      return (
        <div className="w-5 h-5 bg-[#21759B] text-white font-bold text-[9px] rounded-full flex items-center justify-center shrink-0">
          W
        </div>
      );
    case "Salesforce":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00A1E0]">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    case "AWS":
    case "AWS RDS":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF9900]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z" />
        </svg>
      );
    case "Google Cloud":
    case "BigQuery":
    case "Google Cloud Spanner":
      return (
        <div className="w-5 h-5 bg-[#4285F4] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          GCP
        </div>
      );
    case "Microsoft Azure":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0089D6]">
          <path d="M12 2L2 19h7l3-6 3 6h7L12 2z" />
        </svg>
      );
    case "Stripe":
      return (
        <div className="w-5 h-5 bg-[#635BFF] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          S
        </div>
      );
    case "Twilio":
      return (
        <div className="w-5 h-5 bg-[#F22F46] text-white font-bold text-[8px] rounded-full flex items-center justify-center shrink-0">
          T
        </div>
      );
    case "Firebase Firestore":
      return (
        <div className="w-5 h-5 bg-[#FFA611] text-white font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          FB
        </div>
      );
    case "Supabase":
      return (
        <div className="w-5 h-5 bg-[#3ECF8E] text-black font-bold text-[8px] rounded flex items-center justify-center shrink-0">
          ⚡
        </div>
      );
    case "Snowflake":
      return (
        <div className="w-5 h-5 bg-[#29B5E8] text-white font-bold text-[10px] rounded flex items-center justify-center shrink-0">
          ❄
        </div>
      );
    case "CockroachDB":
    case "PlanetScale":
    case "Neo4j":
    case "CouchDB":
      return (
        <div className="w-5 h-5 bg-zinc-800 text-white font-bold text-[7px] rounded flex items-center justify-center shrink-0">
          DB
        </div>
      );

    default:
      return (
        <div className="w-5 h-5 rounded bg-zinc-200 text-zinc-700 flex items-center justify-center text-[10px] font-bold shrink-0">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};

/* -------------------------------------------------------------
 * Full Tech Stack Data from Screenshots
 * ----------------------------------------------------------- */
const STACK = {
  "AI & LLMs": [
    "GPT-4",
    "DeepSeek AI",
    "PaLM-2",
    "Claude",
    "DALL·E 2",
    "Whisper",
    "Stable Diffusion",
    "Microsoft Phi-2",
    "Google Gemini",
    "Vicuna",
  ],
  Frontend: [
    "Vue.js",
    "JavaScript",
    "HTML5",
    "Meteor",
    "Nextjs",
    "React",
    "Angular",
    "TypeScript",
    "Nuxt.js",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Django",
    "Laravel",
    "Python",
    "Java",
    "Spring Boot",
    "PHP",
    "Ruby on Rails",
    "ASP.NET",
  ],
  Mobile: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Java",
    "Dart",
    "Xamarin",
    "Ionic",
    "Unity",
    "Objective-C",
  ],
  Databases: [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "SQLite",
    "MariaDB",
    "Oracle",
    "SQL Server",
    "Cassandra",
    "DynamoDB",
  ],
  DevOps: [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "CircleCI",
    "Travis CI",
    "Ansible",
    "Terraform",
    "Vagrant",
  ],
  Platforms: [
    "Shopify",
    "Magento",
    "WooCommerce",
    "WordPress",
    "Salesforce",
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Stripe",
    "Twilio",
  ],
  "Cloud DB": [
    "AWS RDS",
    "Google Cloud Spanner",
    "Firebase Firestore",
    "Supabase",
    "Snowflake",
    "BigQuery",
    "PlanetScale",
    "CockroachDB",
    "Neo4j",
    "CouchDB",
  ],
};

const TABS = Object.keys(STACK);

export const TechStack = () => {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section 
      id="stack" 
      className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-zinc-200" 
      data-testid="stack-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header matching user image */}
        <div className="mb-10">
          <SectionHeading
            dark={true}
            eyebrow="Our Tech Stack"
            title={
              <>
                <span className="text-[#F97316]">Battle-Tested</span> Technologies, <span className="text-[#F97316]">Enterprise-Grade</span> Delivery
              </>
            }
          />
        </div>

        {/* Horizontal Category Pill Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 sm:gap-3" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                data-testid={`tech-tab-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setActive(t)}
                className={`font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                  active === t
                    ? "bg-[#F97316] text-white border-[#F97316] font-semibold shadow-md shadow-[#F97316]/25"
                    : "text-zinc-600 border-zinc-300/80 bg-zinc-50 hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-400"
                }`}
              >
                <span>{t}</span>
                <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full ${active === t ? "bg-white/20 text-white" : "bg-zinc-200/80 text-zinc-600 font-medium"}`}>
                  {STACK[t].length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Technology Pills Grid matching the exact card style with authentic logos */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3" role="tabpanel" data-testid="tech-grid">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2.5 sm:gap-3 w-full"
            >
              {STACK[active].map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#FFFFFF] border border-zinc-200/90 hover:border-[#F97316] rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-zinc-900 shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:bg-orange-50/20 transition-all duration-200 cursor-default group"
                >
                  <TechLogo name={tech} />
                  <span className="group-hover:text-[#F97316] transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
