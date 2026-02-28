import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, NAVBAR_SOCIAL_LINKS } from "../data/navigation";
import { SITE } from "../data/content";
import { useScrollToSection } from "../hooks/useScrollToSection";

function SocialIcon({
  label,
  path,
  size = "sm",
}: {
  label: string;
  path: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "w-8 h-8" : "w-9 h-9";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <a
      href="#"
      className={`${sizeClasses} rounded-full icon-gradient flex items-center justify-center hover:opacity-80 transition-opacity`}
      aria-label={label}
    >
      <svg
        className={`${iconSize} text-white`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-lg lg:text-xl tracking-[0.15em]">
              {SITE.logoText}{" "}
              <span className="text-gradient">{SITE.logoHighlight}</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link)}
                className="text-white text-[13px] font-medium tracking-wider hover:text-primary transition-colors duration-300 uppercase bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            {NAVBAR_SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.label} label={s.label} path={s.path} />
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 w-full bg-white origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-white"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 w-full bg-white origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#111111] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      // Delay scroll until menu close animation finishes
                      setTimeout(() => scrollToSection(link), 350);
                    }}
                    className="block w-full text-left py-3 text-sm font-medium tracking-wider text-white hover:text-primary transition-colors uppercase border-b border-white/5 bg-transparent border-x-0 border-t-0 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 pt-4">
                {NAVBAR_SOCIAL_LINKS.map((s) => (
                  <SocialIcon
                    key={s.label}
                    label={s.label}
                    path={s.path}
                    size="md"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
