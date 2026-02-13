import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import globeIcon from "@/assets/icon-globe.svg";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

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
        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors"
      >
        <img src={globeIcon} alt="" className="w-4 h-4" />
        <span className="text-[14px] font-normal text-[#989BA0]">
          {selected.label}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#989BA0]" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-40 rounded-md border border-border bg-background shadow-md z-50 py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-[14px] transition-colors hover:bg-muted/50 ${
                selected.code === lang.code
                  ? "text-[#20124D] font-medium"
                  : "text-[#989BA0] font-normal"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
