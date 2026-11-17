import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Smartphone,
  Code2,
  RefreshCcw,
  Workflow,
  Cloud,
  Users,
  ShoppingCart,
  Compass
} from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const BADGES = {
  "ai-development": [
    // 3D Robot
    {
      id: "ai-robot",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="12" y="14" width="24" height="22" rx="8" fill="#F1F5F9" stroke="#0284C7" strokeWidth="2" />
          <rect x="18" y="21" width="4" height="6" rx="2" fill="#0284C7" />
          <rect x="26" y="21" width="4" height="6" rx="2" fill="#0284C7" />
          <path d="M24 6 V14 M20 6 H28" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="6" y="20" width="4" height="8" rx="2" fill="#38BDF8" />
          <rect x="38" y="20" width="4" height="8" rx="2" fill="#38BDF8" />
          <path d="M20 30 Q24 33 28 30" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    // AI Processor Chip
    {
      id: "ai-chip",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="14" y="14" width="20" height="20" rx="4" fill="#FDF2F8" stroke="#EC4899" strokeWidth="2" />
          <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="900" fill="#BE185D" fontFamily="sans-serif">AI</text>
          <line x1="20" y1="8" x2="20" y2="14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="8" x2="28" y2="14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="34" x2="20" y2="40" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="34" x2="28" y2="40" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="20" x2="14" y2="20" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="28" x2="14" y2="28" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="20" x2="40" y2="20" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="28" x2="40" y2="28" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    // Bot with Screen AI
    {
      id: "ai-screen",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="10" y="12" width="28" height="20" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
          <text x="24" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8" fontFamily="sans-serif">AI</text>
          <circle cx="16" cy="22" r="1.5" fill="#3B82F6" />
          <circle cx="32" cy="22" r="1.5" fill="#3B82F6" />
          <path d="M14 36 L18 32 H30 L34 36" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" fill="none" />
          <line x1="24" y1="8" x2="24" y2="12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="7" r="2" fill="#F59E0B" />
        </svg>
      ),
    },
    // Neural Sphere AI
    {
      id: "ai-sphere",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="15" fill="#581C87" />
          <circle cx="24" cy="24" r="9" fill="#9333EA" opacity="0.8" />
          <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FDE047" fontFamily="sans-serif">AI</text>
          <circle cx="24" cy="11" r="1.5" fill="#F472B6" />
          <circle cx="35" cy="18" r="1.5" fill="#F472B6" />
          <circle cx="35" cy="30" r="1.5" fill="#F472B6" />
          <circle cx="24" cy="37" r="1.5" fill="#F472B6" />
          <circle cx="13" cy="30" r="1.5" fill="#F472B6" />
          <circle cx="13" cy="18" r="1.5" fill="#F472B6" />
        </svg>
      ),
    },
  ],
  "app-development": [
    // Android
    {
      id: "app-android",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M16 19 C16 13 32 13 32 19 Z" fill="#3DDC84" />
          <line x1="18" y1="12" x2="16" y2="9" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="12" x2="32" y2="9" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="16" r="1.5" fill="#FFFFFF" />
          <circle cx="28" cy="16" r="1.5" fill="#FFFFFF" />
          <rect x="16" y="21" width="16" height="15" rx="3" fill="#3DDC84" />
          <rect x="11" y="22" width="3.5" height="11" rx="1.75" fill="#3DDC84" />
          <rect x="33.5" y="22" width="3.5" height="11" rx="1.75" fill="#3DDC84" />
          <rect x="19" y="37" width="3" height="6" rx="1.5" fill="#3DDC84" />
          <rect x="26" y="37" width="3" height="6" rx="1.5" fill="#3DDC84" />
        </svg>
      ),
    },
    // Apple
    {
      id: "app-apple",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M26.5 13.5 C28 11.5 27.5 9 27.5 9 C25.5 9.2 23.5 11 23 13 C24.8 13.2 26.5 13.5 26.5 13.5 Z" fill="#18181B" />
          <path d="M24 16 C20.5 16 17 19.5 17 25 C17 31.5 22 38 25 38 C26.2 38 27.5 37 29 37 C30.5 37 31.5 38 33 38 C36 38 40.5 32 38.5 27 C37 23 34.5 22.5 33 22.5 C30.5 22.5 29 24 27.5 24 C26 24 25.5 22.5 24 22.5 Z" fill="#18181B" />
        </svg>
      ),
    },
    // React Native
    {
      id: "app-react",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="3.5" fill="#00D8FF" />
          <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#00D8FF" strokeWidth="1.8" />
          <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#00D8FF" strokeWidth="1.8" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="17" ry="6.5" fill="none" stroke="#00D8FF" strokeWidth="1.8" transform="rotate(120 24 24)" />
        </svg>
      ),
    },
    // Flutter
    {
      id: "app-flutter",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M34 8 L18 24 L23 29 L39 13 Z" fill="#42A5F5" />
          <path d="M24 30 L18 36 L24 42 L39 42 L28 31 Z" fill="#0D47A1" />
          <path d="M23 29 L28 34 L39 23 L28 23 Z" fill="#29B6F6" />
        </svg>
      ),
    },
    // Node.js
    {
      id: "app-node",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <polygon points="24,9 37,16.5 37,31.5 24,39 11,31.5 11,16.5" fill="#539E43" />
          <polygon points="24,10 36,17 36,31 24,38 12,31 12,17" fill="#68A063" />
          <polygon points="24,11 24,24 35,30 35,17" fill="#417E38" opacity="0.4" />
        </svg>
      ),
    },
  ],
  "software-development": [
    // Java
    {
      id: "soft-java",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M20 10 Q24 7 24 13 Q24 17 21 19" stroke="#E76F51" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M26 9 Q30 6 29 12 Q28 16 26 18" stroke="#E76F51" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M14 24 Q18 20 30 20 Q36 20 38 25 C39 28 37 31 32 32 Q23 34 16 33" stroke="#264DE4" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M16 28 Q24 30 32 28" stroke="#264DE4" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 36 Q24 40 35 36" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    // PHP
    {
      id: "soft-php",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <ellipse cx="24" cy="24" rx="19" ry="12" fill="#777BB4" />
          <text x="24" y="28" textAnchor="middle" fontSize="12" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">php</text>
        </svg>
      ),
    },
    // Python
    {
      id: "soft-python",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M23 10 C17 10 16 13 16 16 L16 20 L24 20 L24 22 L14 22 C11 22 9 24 9 29 C9 34 12 34 15 34 L17 34 L17 31 C17 27 20 25 24 25 L29 25 C31 25 33 23 33 21 L33 16 C33 12 29 10 23 10 Z" fill="#3776AB" />
          <circle cx="19" cy="14" r="1.5" fill="#FFFFFF" />
          <path d="M25 38 C31 38 32 35 32 32 L32 28 L24 28 L24 26 L34 26 C37 26 39 24 39 19 C39 14 36 14 33 14 L31 14 L31 17 C31 21 28 23 24 23 L19 23 C17 23 15 25 15 27 L15 32 C15 36 19 38 25 38 Z" fill="#FFD43B" />
          <circle cx="29" cy="34" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    // Angular
    {
      id: "soft-angular",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <polygon points="24,6 38,11 36,33 24,41 12,33 10,11" fill="#DD0031" />
          <polygon points="24,6 38,11 36,33 24,41 24,6" fill="#C3002F" />
          <polygon points="24,13 17,29 20.5,29 22,25 26,25 27.5,29 31,29" fill="#FFFFFF" />
          <polygon points="24,19 22.8,22 25.2,22" fill="#DD0031" />
        </svg>
      ),
    },
    // .NET
    {
      id: "soft-dotnet",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="6" y="10" width="36" height="28" rx="8" fill="#512BD4" />
          <text x="24" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">.NET</text>
        </svg>
      ),
    },
  ],
  "digital-transformation": [
    // Multi-layer Area Chart
    {
      id: "dt-chart",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="10" width="32" height="28" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M10 32 Q16 22 24 27 T38 20 L38 36 L10 36 Z" fill="#38BDF8" opacity="0.6" />
          <path d="M10 27 Q18 16 26 22 T38 14 L38 36 L10 36 Z" fill="#F43F5E" opacity="0.5" />
          <path d="M10 22 Q16 14 26 18 T38 10 L38 36 L10 36 Z" fill="#FBBF24" opacity="0.5" />
        </svg>
      ),
    },
    // Blue Gear with Sparkles
    {
      id: "dt-gear",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="22" cy="26" r="10" fill="#60A5FA" />
          <circle cx="22" cy="26" r="4.5" fill="#FFFFFF" />
          <path d="M22 13 L22 17 M22 35 L22 39 M9 26 L13 26 M31 26 L35 26" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <path d="M34 11 L35.5 15 L39.5 16.5 L35.5 18 L34 22 L32.5 18 L28.5 16.5 L32.5 15 Z" fill="#2563EB" />
          <path d="M38 27 L39 29 L41 30 L39 31 L38 33 L37 31 L35 30 L37 29 Z" fill="#60A5FA" />
        </svg>
      ),
    },
    // Speech Chat Bubbles
    {
      id: "dt-chat",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M12 14 C12 10 26 10 26 14 C26 18 20 18 18 20 L15 22 L15 19 C13 19 12 17 12 14 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
          <path d="M20 22 C20 18 34 18 34 22 C34 26 28 26 26 28 L23 31 L23 27 C21 27 20 25 20 22 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8" />
          <circle cx="25" cy="22" r="1" fill="#1E293B" />
          <circle cx="28" cy="22" r="1" fill="#1E293B" />
          <circle cx="31" cy="22" r="1" fill="#1E293B" />
        </svg>
      ),
    },
    // Network / Sync Circular Nodes
    {
      id: "dt-sync",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="12" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="24" cy="12" r="3" fill="#8B5CF6" />
          <circle cx="36" cy="24" r="3" fill="#EC4899" />
          <circle cx="24" cy="36" r="3" fill="#3B82F6" />
          <circle cx="12" cy="24" r="3" fill="#10B981" />
          <path d="M22 24 L26 24 M24 22 L24 26" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ],
  "business-automation": [
    // Yellow Bar Chart
    {
      id: "ba-chart",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="10" y="26" width="6" height="12" rx="2" fill="#F59E0B" />
          <rect x="18" y="20" width="6" height="18" rx="2" fill="#FBBF24" />
          <rect x="26" y="14" width="6" height="24" rx="2" fill="#F59E0B" />
          <rect x="34" y="8" width="6" height="30" rx="2" fill="#D97706" />
        </svg>
      ),
    },
    // Purple Atom / Hexagon Network
    {
      id: "ba-network",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <polygon points="24,10 36,17 36,31 24,38 12,31 12,17" fill="none" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="24" cy="10" r="2.5" fill="#A855F7" />
          <circle cx="36" cy="17" r="2.5" fill="#A855F7" />
          <circle cx="36" cy="31" r="2.5" fill="#A855F7" />
          <circle cx="24" cy="38" r="2.5" fill="#A855F7" />
          <circle cx="12" cy="31" r="2.5" fill="#A855F7" />
          <circle cx="12" cy="17" r="2.5" fill="#A855F7" />
          <circle cx="24" cy="24" r="4" fill="#6B21A8" />
        </svg>
      ),
    },
    // Cloud with Circuit PCB
    {
      id: "ba-cloud",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M14 30 C11 30 9 27 10 24 C10 20 13 18 16 18 C17 14 22 12 26 14 C29 12 34 14 35 17 C38 17 40 20 39 23 C41 26 39 30 35 30 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <circle cx="24" cy="22" r="2" fill="#0284C7" />
          <line x1="24" y1="24" x2="24" y2="34" stroke="#0284C7" strokeWidth="2" />
          <line x1="18" y1="28" x2="18" y2="34" stroke="#0284C7" strokeWidth="2" />
          <line x1="30" y1="28" x2="30" y2="34" stroke="#0284C7" strokeWidth="2" />
        </svg>
      ),
    },
    // Sync Circular Arrows
    {
      id: "ba-sync",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="14" fill="#06B6D4" opacity="0.15" />
          <path d="M24 14 A10 10 0 0 1 34 24" fill="none" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="34,20 37,25 31,25" fill="#0891B2" />
          <path d="M24 34 A10 10 0 0 1 14 24" fill="none" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="14,28 11,23 17,23" fill="#0891B2" />
        </svg>
      ),
    },
  ],
  "cloud-implementation": [
    // DigitalOcean / Cloud Infinity
    {
      id: "cloud-do",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="10" width="32" height="28" rx="8" fill="#0080FF" />
          <circle cx="24" cy="24" r="8" fill="#FFFFFF" />
          <rect x="22" y="22" width="8" height="8" fill="#0080FF" />
        </svg>
      ),
    },
    // Google Cloud Platform
    {
      id: "cloud-gcp",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M20 20 C18 18 15 19 14 21 C12 24 14 27 16 28 L30 28 C33 28 35 26 35 23 C35 20 33 18 30 18 C29 15 26 14 23 15 C21 16 20 18 20 20 Z" fill="#4285F4" />
          <path d="M14 28 L20 28 L18 22 Z" fill="#EA4335" />
          <path d="M22 28 L28 28 L26 21 Z" fill="#FBBC05" />
          <path d="M28 28 L34 28 L32 23 Z" fill="#34A853" />
        </svg>
      ),
    },
    // Microsoft Azure
    {
      id: "cloud-azure",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <polygon points="12,36 22,12 28,12 18,36" fill="#007FFF" />
          <polygon points="23,24 27,15 36,36 29,36" fill="#005BA1" />
        </svg>
      ),
    },
  ],
  "staff-augmentation": [
    // Microsoft 4-square
    {
      id: "staff-msft",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="12" y="12" width="11" height="11" fill="#F25022" />
          <rect x="25" y="12" width="11" height="11" fill="#7FBA00" />
          <rect x="12" y="25" width="11" height="11" fill="#00A4EF" />
          <rect x="25" y="25" width="11" height="11" fill="#FFB900" />
        </svg>
      ),
    },
    // Python
    {
      id: "staff-python",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M23 10 C17 10 16 13 16 16 L16 20 L24 20 L24 22 L14 22 C11 22 9 24 9 29 C9 34 12 34 15 34 L17 34 L17 31 C17 27 20 25 24 25 L29 25 C31 25 33 23 33 21 L33 16 C33 12 29 10 23 10 Z" fill="#3776AB" />
          <circle cx="19" cy="14" r="1.5" fill="#FFFFFF" />
          <path d="M25 38 C31 38 32 35 32 32 L32 28 L24 28 L24 26 L34 26 C37 26 39 24 39 19 C39 14 36 14 33 14 L31 14 L31 17 C31 21 28 23 24 23 L19 23 C17 23 15 25 15 27 L15 32 C15 36 19 38 25 38 Z" fill="#FFD43B" />
          <circle cx="29" cy="34" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    // Adobe
    {
      id: "staff-adobe",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="10" y="10" width="28" height="28" rx="4" fill="#FA0F00" />
          <polygon points="15,14 15,34 21,34 25,23 29,34 33,34 33,14" fill="#FFFFFF" />
        </svg>
      ),
    },
    // Oracle
    {
      id: "staff-oracle",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="16" width="32" height="16" rx="8" fill="#F80000" />
          <rect x="14" y="20" width="20" height="8" rx="4" fill="#FFFFFF" />
        </svg>
      ),
    },
    // Infinity Loop
    {
      id: "staff-infinity",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M16 24 C16 20 20 18 24 24 C28 30 32 28 32 24 C32 20 28 18 24 24 C20 30 16 28 16 24 Z" fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ],
  "ecommerce-development": [
    // Desktop monitor with SEO
    {
      id: "ecom-desktop",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="12" width="32" height="20" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
          <line x1="20" y1="32" x2="16" y2="38" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="32" x2="32" y2="38" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="38" x2="34" y2="38" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          <text x="24" y="25" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0EA5E9" fontFamily="sans-serif">SEO</text>
        </svg>
      ),
    },
    // Magento
    {
      id: "ecom-magento",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <polygon points="24,9 37,16.5 37,31.5 24,39 11,31.5 11,16.5" fill="#EE672F" />
          <polygon points="24,14 31,18 31,30 27,27 27,21 24,19 21,21 21,27 17,30 17,18" fill="#FFFFFF" />
        </svg>
      ),
    },
    // Smartphone with app grid
    {
      id: "ecom-phone",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="14" y="8" width="20" height="32" rx="4" fill="#FFFFFF" stroke="#334155" strokeWidth="2" />
          <circle cx="24" cy="36" r="1.5" fill="#334155" />
          <rect x="18" y="14" width="4" height="4" rx="1" fill="#EF4444" />
          <rect x="26" y="14" width="4" height="4" rx="1" fill="#3B82F6" />
          <rect x="18" y="22" width="4" height="4" rx="1" fill="#10B981" />
          <rect x="26" y="22" width="4" height="4" rx="1" fill="#F59E0B" />
        </svg>
      ),
    },
    // Shopify
    {
      id: "ecom-shopify",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M31 15 L28 11 L24 13 L24 15 Z" fill="#5E8E3E" />
          <path d="M16 17 L21 16 L24 37 L14 33 Z" fill="#95BF47" />
          <path d="M21 16 L34 18 L32 37 L24 37 Z" fill="#7AB55C" />
          <text x="26" y="27" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">S</text>
        </svg>
      ),
    },
  ],
  "cto-services": [
    // GitHub Octocat
    {
      id: "cto-github",
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="16" fill="#181717" />
          <path d="M24 12 C17.4 12 12 17.4 12 24 C12 29.3 15.4 33.8 20.2 35.4 C20.8 35.5 21 35.1 21 34.8 L21 32.7 C17.7 33.4 17 31.1 17 31.1 C16.5 29.7 15.7 29.3 15.7 29.3 C14.6 28.5 15.8 28.5 15.8 28.5 C17 28.6 17.7 29.8 17.7 29.8 C18.8 31.6 20.5 31.1 21.2 30.8 C21.3 30 21.6 29.5 22 29.1 C19.3 28.8 16.5 27.8 16.5 23.2 C16.5 21.9 17 20.8 17.7 20 C17.6 19.7 17.2 18.5 17.8 16.8 C17.8 16.8 18.8 16.5 21.1 18.1 C22.1 17.8 23.1 17.7 24.1 17.7 C25.1 17.7 26.1 17.8 27.1 18.1 C29.4 16.5 30.4 16.8 30.4 16.8 C31 18.5 30.6 19.7 30.5 20 C31.3 20.8 31.7 21.9 31.7 23.2 C31.7 27.8 28.9 28.8 26.2 29.1 C26.7 29.5 27.1 30.3 27.1 31.5 L27.1 34.8 C27.1 35.1 27.3 35.5 27.9 35.4 C32.6 33.8 36 29.3 36 24 C36 17.4 30.6 12 24 12 Z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ],
};

const OFFERINGS = [
  {
    id: "ai-development",
    shortTitle: "AI Development",
    icon: BrainCircuit,
    title: "Artificial Intelligence Development",
    desc: "Revolutionize your operations with our AI development services. From intelligent automation to predictive analytics and chatbot integration, our custom AI solutions empower smarter, faster decisions. We deliver scalable artificial intelligence solutions tailored for startups, enterprises, and global brands.",
    subServices: [
      "AI Chatbot Development",
      "AI Development",
      "Generative AI development",
      "AI Agent Development",
      "AI Consulting",
      "ML Development",
      "Computer Vision Software Development",
    ],
  },
  {
    id: "app-development",
    shortTitle: "Application Development",
    icon: Smartphone,
    title: "Application Development",
    desc: "We provide end-to-end application development services that help startups and enterprises build robust, scalable, and user-friendly mobile and web apps. Our expert mobile app developers use the latest tools to deliver high-performance, cross-platform solutions that align with your business goals.",
    subServices: [
      "Mobile App Development services",
      "React Native App Development",
      "Android App Development Services",
      "IOS App Development Services",
      "Flutter App Development Services",
      "Progressive Web App Development",
      "Wearable App Development",
    ],
  },
  {
    id: "software-development",
    shortTitle: "Software Development",
    icon: Code2,
    title: "Software Development",
    desc: "Unlock business potential with our custom software development services designed to streamline workflows and boost productivity. From ERP and CRM systems to SaaS and enterprise software, we build scalable and secure solutions for growing businesses.",
    subServices: [
      "Enterprise Software",
      "Custom Software Development",
      "SaaS Development",
      "Software Integration",
      "Software Testing Services",
    ],
  },
  {
    id: "digital-transformation",
    shortTitle: "Digital Transformation",
    icon: RefreshCcw,
    title: "Digital Transformation",
    desc: "Embrace the future with our digital transformation services that drive innovation and improve customer experiences. We implement modern tech stacks, AI solutions, and cloud-native strategies to evolve your business digitally.",
    subServices: [
      "Digital Strategy Consulting",
      "Process Optimization",
      "Customer Experience Enhancement",
      "Technology Implementation",
      "Change Management",
    ],
  },
  {
    id: "business-automation",
    shortTitle: "Business Automation",
    icon: Workflow,
    title: "Business Automation",
    desc: "Automate repetitive tasks and optimize workflows with our robust business automation solutions. From RPA (Robotic Process Automation) to intelligent data workflows, we help reduce costs and improve operational efficiency.",
    subServices: [
      "Workflow Automation",
      "RPA (Robotic Process Automation)",
      "CRM Automation",
      "Supply Chain Automation",
      "Document Management Systems",
    ],
  },
  {
    id: "cloud-implementation",
    shortTitle: "Cloud Implementation",
    icon: Cloud,
    title: "Cloud Implementation",
    desc: "Seamlessly migrate to the cloud with our expert cloud implementation services. We ensure secure, scalable, and efficient cloud environments that boost flexibility, performance, and business continuity.",
    subServices: [
      "Cloud Strategy and Consulting",
      "Cloud Migration",
      "Cloud Security Solutions",
      "Multi-Cloud Management",
      "Cloud Infrastructure Optimization",
    ],
  },
  {
    id: "staff-augmentation",
    shortTitle: "Staff Augmentation",
    icon: Users,
    title: "Staff Augmentation",
    desc: "Boost your team's capabilities with our staff augmentation services. We provide skilled professionals to fill gaps and support your projects efficiently.",
    subServices: [
      "IT Staffing Solutions",
      "Project-Based Augmentation",
      "On-Demand Expertise",
      "Team Expansion",
      "Skills Gap Analysis",
    ],
  },
  {
    id: "ecommerce-development",
    shortTitle: "E-commerce Development",
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Launch and scale your online store with our custom e-commerce solutions, payment integrations, and seamless user experience.",
    subServices: [
      "Shopify Development",
      "eCommerce ERP & CRM Integration Company",
      "eCommerce Development",
      "Magento Development",
    ],
  },
  {
    id: "cto-services",
    shortTitle: "CTO Services",
    icon: Compass,
    title: "CTO Services",
    desc: "Get strategic technology leadership and guidance for your business with our experienced CTO services. Our dedicated CTOs help organizations align their technology vision with business goals, ensuring that every decision drives innovation and sustainable growth.",
    subServices: [
      "Technology Consulting",
      "Team Building",
      "Product Strategy & Roadmapping",
      "Architecture Design & Review",
      "Digital Transformation Leadership",
      "Vendor & Tool Evaluation",
    ],
  },
];

export const Services = () => {
  const [activeTabId, setActiveTabId] = useState(OFFERINGS[0].id);

  const activeOffering = OFFERINGS.find((o) => o.id === activeTabId) || OFFERINGS[0];
  const activeBadges = BADGES[activeTabId] || [];

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200/90 relative" 
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono font-semibold">
              Our Offerings
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Our Offerings to{" "}
            <span className="text-[#F97316]">
              Accelerate Digital Transformation
            </span>{" "}
            and Innovation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto font-normal leading-relaxed">
            We specialize in <span className="text-[#F97316] font-semibold">custom software</span>, <span className="text-[#F97316] font-semibold">mobile app development</span>, web solutions, <span className="text-[#F97316] font-semibold">AI integration</span>, blockchain, and agile execution—empowering businesses to scale, automate, and innovate.
          </p>
        </div>

        {/* Master Box Container matching screenshots */}
        <div className="bg-[#FFFFFF] text-zinc-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-200/90" data-testid="services-master-box">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Sidebar: 9 Vertical Domain Tabs (Horizontally scrollable on mobile/tablet) */}
            <div className="lg:col-span-4 xl:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-3 lg:pb-0 no-scrollbar">
              {OFFERINGS.map((offering) => {
                const Icon = offering.icon;
                const isActive = offering.id === activeTabId;

                return (
                  <button
                    key={offering.id}
                    onClick={() => setActiveTabId(offering.id)}
                    data-testid={`service-nav-${offering.id}`}
                    className={`shrink-0 lg:w-full text-left px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                      isActive
                        ? "bg-[#F97316] text-white shadow-md font-semibold"
                        : "bg-white hover:bg-zinc-50 text-zinc-800 hover:text-zinc-950 border border-zinc-200/80"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center shrink-0 ${
                        isActive ? "text-white" : "text-zinc-900 group-hover:text-[#F97316]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {offering.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Domain Title, Description Box, Orange Sub-services, and Badges */}
            <div className="lg:col-span-8 xl:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffering.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Category Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    {activeOffering.title}
                  </h3>

                  {/* Description Box with dashed border */}
                  <div className="bg-[#F8FAFC] border border-dashed border-zinc-300 rounded-2xl p-5 sm:p-6 text-zinc-600 leading-relaxed text-sm">
                    {activeOffering.desc}
                  </div>

                  {/* Sub-services List in 2 Columns with Vibrant Orange Text matching screenshots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 pt-1">
                    {activeOffering.subServices.map((name, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToId("contact")}
                        className="text-left font-display font-semibold text-base sm:text-[17px] text-[#F97316] hover:text-[#d95c10] transition-colors leading-snug cursor-pointer hover:underline underline-offset-4"
                      >
                        {name}
                      </button>
                    ))}
                  </div>

                  {/* Visual Technology / Service Badges for each Category */}
                  {activeBadges.length > 0 && (
                    <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                      {activeBadges.map((badge) => (
                        <div
                          key={badge.id}
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-2 flex items-center justify-center shadow-2xs hover:scale-105 transition-transform select-none"
                        >
                          {badge.svg}
                        </div>
                      ))}
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
