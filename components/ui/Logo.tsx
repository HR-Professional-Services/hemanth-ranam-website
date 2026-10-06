import React from "react";

export interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
  size?: "sm" | "md";
  showText?: boolean;
}

/**
 * Canonical brand logo for Hemanth Ranam.
 * Single source of truth used across Navbar, Mobile Drawer, and Footer.
 */
export function Logo({
  className = "",
  theme = "light",
  size = "md",
  showText = true,
}: LogoProps) {
  const isSm = size === "sm";

  return (
    <div className={`flex items-center gap-3 select-none shrink-0 ${className}`}>
      {/* Canonical HR Monogram Badge with Gradient Border & White Inner Canvas */}
      <div
        className={`${
          isSm ? "w-7 h-7 rounded-lg" : "w-9 h-9 rounded-xl"
        } bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-[1.5px] shadow-sm ${
          theme === "light" ? "group-hover:shadow-blue-500/25" : ""
        } transition-all shrink-0`}
      >
        <div
          className={`w-full h-full bg-white ${
            isSm ? "rounded-[6.5px]" : "rounded-[10px]"
          } flex items-center justify-center`}
        >
          <span
            className={`font-extrabold ${
              isSm ? "text-[10px]" : "text-xs"
            } tracking-wider bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent`}
          >
            HR
          </span>
        </div>
      </div>

      {/* Brand Name & Canonical Subtitle */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold ${
              isSm ? "text-xs" : "text-sm"
            } tracking-tight transition-colors leading-none ${
              theme === "dark"
                ? "text-white group-hover:text-blue-400"
                : "text-slate-900 group-hover:text-blue-600"
            }`}
          >
            Hemanth Ranam
          </span>
          <span
            className={`text-[11px] font-normal leading-tight mt-1 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Business Systems &amp; Automation
          </span>
        </div>
      )}
    </div>
  );
}
