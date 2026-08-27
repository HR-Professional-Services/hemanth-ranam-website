import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-9 h-9", text: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-12 h-12", text: "text-2xl", sub: "text-xs" },
  };

  const { icon, text, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric HR Monogram Badge */}
      <div className={`relative flex items-center justify-center rounded-xl bg-slate-950 p-1.5 shadow-sm border border-slate-800 group-hover:border-blue-600 transition-all duration-300 ${icon}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="logoGradAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          
          {/* H Left Stem */}
          <rect x="18" y="20" width="13" height="60" rx="6.5" fill="url(#logoGrad)" />
          {/* H Crossbar */}
          <rect x="18" y="43.5" width="32" height="13" rx="6.5" fill="url(#logoGrad)" />
          {/* Central Stem (Shared) */}
          <rect x="42" y="20" width="13" height="60" rx="6.5" fill="#FFFFFF" />
          
          {/* R Upper Curve */}
          <path d="M48 20 H65 C76 20 83 27 83 37 C83 47 76 54 65 54 H48 Z" fill="url(#logoGradAccent)" />
          <path d="M55 31 H64 C67 31 70 33 70 37 C70 41 67 43 64 43 H55 Z" fill="#020617" />
          
          {/* R Diagonal Leg */}
          <path d="M59 50 L77 77 C79 80 76 83 73 81 L53 59 Z" fill="url(#logoGrad)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-semibold tracking-tight text-slate-900 ${text}`}>
            Hemanth <span className="text-blue-600">Ranam</span>
          </span>
          <span className={`font-medium tracking-wider text-slate-500 uppercase ${sub}`}>
            Systems & Tech
          </span>
        </div>
      )}
    </div>
  );
}
