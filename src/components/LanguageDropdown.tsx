import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import globeIcon from "@/assets/icon-globe.svg";
import { useLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/hooks/use-locale";

const languageLabels: Record<SupportedLocale, string> = {
  en: "English",
  ur: "اردو",
};

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { locale, navigateToLocale } = useLocale();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors"
      >
        <img src={globeIcon} alt="" className="w-4 h-4" />
        <span className="text-[14px] font-normal text-[#3E3A4D] font-['Lato',sans-serif] align-middle">
          {languageLabels[locale]}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#3E3A4D]" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-40 rounded-md border border-border bg-background shadow-md z-50 py-1">
          {SUPPORTED_LOCALES.map((code) => (
            <button
              key={code}
              onClick={() => {
                navigateToLocale(code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-[14px] transition-colors hover:bg-muted/50 ${
                locale === code
                  ? "text-[#20124D] font-medium"
                  : "text-[#989BA0] font-normal"
              }`}
            >
              {languageLabels[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
