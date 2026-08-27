import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-xs sm:text-sm", sub: "text-[9px] sm:text-[10px]" },
    md: { icon: "w-8 h-8", text: "text-sm sm:text-base", sub: "text-[10px] sm:text-[11px]" },
    lg: { icon: "w-10 h-10", text: "text-base sm:text-lg", sub: "text-xs" },
  };

  const { icon, text, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Geometric HR Monogram Badge - Blue on White */}
      <div className={`relative flex items-center justify-center rounded-xl bg-white border border-slate-200/90 shadow-xs group-hover:border-blue-500 group-hover:shadow-sm transition-all duration-200 shrink-0 ${icon}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-[82%] h-[82%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="logoSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          
          {/* H Left Stem */}
          <rect x="18" y="18" width="14" height="64" rx="7" fill="url(#logoBlueGrad)" />
          {/* H Crossbar */}
          <rect x="18" y="43" width="34" height="14" rx="7" fill="url(#logoBlueGrad)" />
          {/* Central Stem (Shared) */}
          <rect x="42" y="18" width="14" height="64" rx="7" fill="url(#logoBlueGrad)" />
          
          {/* R Upper Curve */}
          <path d="M48 18 H66 C77 18 84 25 84 36 C84 47 77 54 66 54 H48 Z" fill="url(#logoSkyGrad)" />
          <path d="M56 29 H65 C68 29 71 31 71 36 C71 40 68 43 65 43 H56 Z" fill="#FFFFFF" />
          
          {/* R Diagonal Leg */}
          <path d="M60 50 L78 78 C80 81 77 84 74 82 L54 59 Z" fill="url(#logoBlueGrad)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-tight text-slate-900 ${text}`}>
            Hemanth <span className="text-blue-600">Ranam</span>
          </span>
          <span className={`font-semibold text-slate-500 tracking-tight mt-0.5 ${sub}`}>
            Business Systems & Tech
          </span>
        </div>
      )}
    </div>
  );
}
