import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/use-locale";
import pzazLogo from "@/assets/pzaz-logo.png";

const socialLinks: Record<string, string> = {
  "YouTube": "https://www.youtube.com/@pzazofficial",
  "Facebook": "https://www.facebook.com/pzazofficial",
  "Instagram": "https://www.instagram.com/pzazofficial",
  "LinkedIn": "https://www.linkedin.com/company/pzazofficial/",
  "TikTok": "https://www.tiktok.com/@pzazio",
  "X": "https://x.com/pzazofficial",
};

const Footer = () => {
  const { t } = useTranslation('common');
  const { prefix } = useLocale();
  const p = prefix;

  const footerLinks: Record<string, { label: string; route?: string; social?: string }[]> = {
    [t("footer.product")]: [
      { label: t("footer.breakdown"), route: `${p}/breakdown` },
      { label: t("footer.imagine"), route: `${p}/imagine` },
      { label: t("footer.collaborate"), route: `${p}/collaborate` },
      { label: t("footer.pzaz_project"), route: `${p}/pzaz-project` },
      { label: t("footer.sell"), route: `${p}/sell` },
      { label: t("footer.shoot"), route: `${p}/shoot` },
      { label: t("footer.visualise"), route: `${p}/visualise` },
      { label: t("footer.write"), route: `${p}/write` },
    ],
    [t("footer.resources")]: [
      { label: t("footer.blog"), route: `${p}/producer-blog` },
      { label: t("footer.pzaz_vs_fd"), route: `${p}/pzaz-vs-final-draft` },
      { label: t("footer.knowledge_base"), route: `${p}/knowledge-base` },
      
    ],
    [t("footer.company")]: [
      { label: t("footer.sales_team"), route: `${p}/sales-team` },
      { label: t("footer.brand"), route: `${p}/brand` },
      { label: t("footer.culture"), route: `${p}/culture` },
      { label: t("footer.schools"), route: `${p}/film-schools-software` },
      { label: t("footer.screenwriters"), route: `${p}/screenwriting-software` },
      { label: t("footer.tv_series"), route: `${p}/tv-series-production-software` },
      { label: t("footer.investors"), route: `${p}/film-investment-software` },
    ],
    [t("footer.legal")]: [
      { label: t("footer.privacy"), route: `${p}/privacy` },
      { label: t("footer.terms"), route: `${p}/terms-of-use` },
    ],
    [t("footer.social")]: [
      { label: t("footer.youtube"), social: socialLinks["YouTube"] },
      { label: t("footer.instagram"), social: socialLinks["Instagram"] },
      { label: t("footer.facebook"), social: socialLinks["Facebook"] },
      { label: t("footer.linkedin"), social: socialLinks["LinkedIn"] },
      { label: t("footer.tiktok"), social: socialLinks["TikTok"] },
      { label: t("footer.x"), social: socialLinks["X"] },
    ],
  };

  return (
    <footer className="pt-16 pb-8 border-t border-[#e0e0e0] bg-[#F8F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href={`${p}/`} className="flex items-center gap-2 mb-4">
              <img src={pzazLogo} alt="Pzaz" className="h-8" width="109" height="32" loading="lazy" />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[14px] text-[#20124D] mb-4 align-middle">{category}</h4>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.label}>
                    {item.route ? (
                      <Link to={item.route} className="text-[14px] font-normal text-[#20124D] hover:text-foreground transition-colors align-middle">
                        {item.label}
                      </Link>
                    ) : item.social ? (
                      <a href={item.social} target="_blank" rel="noopener noreferrer" className="text-[14px] font-normal text-[#20124D] hover:text-foreground transition-colors align-middle">
                        {item.label}
                      </a>
                    ) : (
                      <a href="#" className="text-[14px] font-normal text-[#20124D] hover:text-foreground transition-colors align-middle">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#e0e0e0] flex items-center">
          <p className="text-[12px] leading-[12px] font-normal align-middle text-[#20124D]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
