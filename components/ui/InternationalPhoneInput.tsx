"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  format: string;
}

export const COUNTRIES: Country[] = [
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧", format: "7123 456789" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳", format: "98765 43210" },
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸", format: "(555) 000-0000" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪", format: "50 123 4567" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺", format: "412 345 678" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦", format: "(555) 000-0000" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪", format: "151 2345678" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷", format: "6 12 34 56 78" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬", format: "8123 4567" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦", format: "50 123 4567" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭", format: "78 123 45 67" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱", format: "6 12345678" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪", format: "85 123 4567" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦", format: "82 123 4567" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿", format: "21 123 4567" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸", format: "612 34 56 78" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹", format: "312 345 6789" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾", format: "12-345 6789" },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦", format: "3312 3456" },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼", format: "5012 3456" },
];

interface InternationalPhoneInputProps {
  value: string;
  countryCode: string;
  onChange: (phone: string, countryCode: string, normalizedPhone: string) => void;
  error?: string;
  required?: boolean;
}

export function InternationalPhoneInput({
  value,
  countryCode,
  onChange,
  error,
  required = false,
}: InternationalPhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    COUNTRIES.find((c) => c.code === countryCode) || COUNTRIES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.dialCode.includes(searchQuery) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^\d\s()-]/g, "");
    const cleanDigits = rawVal.replace(/\D/g, "");
    const normalized = cleanDigits ? `${selectedCountry.dialCode}${cleanDigits}` : "";
    onChange(rawVal, selectedCountry.code, normalized);
  };

  const handleSelectCountry = (country: Country) => {
    const cleanDigits = value.replace(/\D/g, "");
    const normalized = cleanDigits ? `${country.dialCode}${cleanDigits}` : "";
    onChange(value, country.code, normalized);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center rounded-xl border bg-slate-50/50 transition-all ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20"
        }`}
      >
        {/* Country Selector Button */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100/80 rounded-l-xl transition-colors border-r border-slate-200"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label="Select country code"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="font-mono text-slate-700">{selectedCountry.dialCode}</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5" />
          </button>

          {/* Searchable Dropdown Popover */}
          {isOpen && (
            <div className="absolute left-0 top-full mt-1.5 w-64 max-h-64 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 overflow-hidden flex flex-col animate-fade-in">
              <div className="p-2 border-b border-slate-100 bg-slate-50">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search country or code..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-500 text-slate-900"
                    autoFocus
                  />
                </div>
              </div>

              <div className="overflow-y-auto flex-1 p-1" role="listbox">
                {filteredCountries.length === 0 ? (
                  <p className="p-3 text-xs text-slate-400 text-center">
                    No country found
                  </p>
                ) : (
                  filteredCountries.map((c) => {
                    const isSelected = c.code === selectedCountry.code;
                    return (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => handleSelectCountry(c)}
                        className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs transition-colors ${
                          isSelected
                            ? "bg-blue-50 text-blue-700 font-bold"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-base">{c.flag}</span>
                          <span className="truncate">{c.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          <span className="font-mono text-slate-500 text-[11px]">
                            {c.dialCode}
                          </span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-blue-600" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Raw Phone Number Input */}
        <input
          type="tel"
          id="whatsapp"
          required={required}
          value={value}
          onChange={handlePhoneChange}
          placeholder={selectedCountry.format}
          className="w-full px-3 py-2 text-xs text-slate-900 bg-transparent focus:outline-hidden rounded-r-xl"
        />
      </div>

      {error && <p className="mt-1 text-[11px] text-red-500 font-medium">{error}</p>}
    </div>
  );
}
