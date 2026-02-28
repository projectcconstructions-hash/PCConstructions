import {
  QUICK_MENU,
  FOOTER_SOCIAL_LINKS,
  INSTAGRAM_IMAGES,
  WORKING_HOURS,
} from "../data/navigation";
import { FOOTER_CONTENT, SITE } from "../data/content";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-[#1b1b1b] text-white">
      <div className="max-w-7xl mx-auto px-7 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              {FOOTER_CONTENT.getInTouch}
            </h4>
            <div className="space-y-1 mb-5">
              <p className="text-white text-sm">{SITE.address.line1}</p>
              <p className="text-white text-sm">{SITE.address.line2}</p>
              <p className="text-white text-sm">{SITE.address.pincode}</p>
            </div>
            <div className="flex items-center gap-2.5">
              {FOOTER_SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: s.color }}
                  aria-label={s.label}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              {FOOTER_CONTENT.quickMenu}
            </h4>
            <ul className="space-y-3">
              {QUICK_MENU.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              {FOOTER_CONTENT.workingHours}
            </h4>
            <ul className="space-y-3">
              {WORKING_HOURS.map((hours, i) => (
                <li key={i} className="text-white text-sm">
                  {hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              {FOOTER_CONTENT.instagram}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {INSTAGRAM_IMAGES.map((img, i) => (
                <a
                  key={i}
                  href="#"
                  className="aspect-square rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #f19719, #f16319)",
        }}
      >
        <div className="max-w-7xl mx-auto px-7 lg:px-8 py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs lg:text-sm">
            &copy; {SITE.copyright}
          </p>
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="#"
              className="text-white/90 text-xs lg:text-sm hover:text-white transition-colors"
            >
              {FOOTER_CONTENT.termsOfUse}
            </a>
            <a
              href="#"
              className="text-white/90 text-xs lg:text-sm hover:text-white transition-colors"
            >
              {FOOTER_CONTENT.privacyPolicy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
