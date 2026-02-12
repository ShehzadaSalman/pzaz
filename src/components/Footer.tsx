import React from "react";
import pzazLogo from "@/assets/pzaz-logo.png";

const footerLinks = {
  Product: ["Studio", "Budget", "Storyboard", "Pricing"],
  Resources: ["Documentation", "Guides", "Community", "Support"],
  Company: ["About", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
  Social: ["YouTube", "Instagram", "Facebook", "LinkedIn"],
};

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-[#e0e0e0] bg-[#F8F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 md:px-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={pzazLogo} alt="Pzaz" className="h-8" />
            </a>
            <p className="text-sm font-normal leading-relaxed text-[#4E2273]">
              One intelligent workflow from script to shoot. Pzaz is <i>where films are made.</i>
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[14px] text-[#20124D] mb-4 align-middle">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] font-normal text-[#20124D] hover:text-foreground transition-colors align-middle">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#e0e0e0] flex items-center">
          <p className="text-[12px] leading-[12px] font-normal align-middle text-[#20124D]" style={{ fontFamily: "'Open Sans', sans-serif" }}>© {new Date().getFullYear()} Pzaz.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
