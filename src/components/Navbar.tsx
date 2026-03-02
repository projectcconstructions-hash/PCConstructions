import { useState, useMemo, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, FOOTER_SOCIAL_LINKS } from "../data/navigation";
import { SITE } from "../data/content";
import { useScrollToSection } from "../hooks/useScrollToSection";

function SocialIcon({
  label,
  path,
  color,
  url,
  size = "sm",
}: {
  label: string;
  path: string;
  color?: string;
  url?: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "w-8 h-8" : "w-9 h-9";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <a
      href={url || "#"}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      className={`${sizeClasses} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
      style={color ? { backgroundColor: color } : undefined}
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
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change to prevent flicker
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  const isDetailPage = !isHomePage;

  const isProjectDetail = /^\/projects\/.+/.test(location.pathname);
  const isBlogDetail = /^\/blogs\/.+/.test(location.pathname);
  const isProjectsPage = location.pathname === "/projects";
  const isBlogsPage = location.pathname === "/blogs";
  const isContactPage = location.pathname === "/contact";

  // Scroll-spy: track which section is visible on the homepage
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["contact", "blogs", "projects", "services", "about"];
    const handleScroll = () => {
      // If near top of page, highlight Home
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      // Check which section is currently in view (from bottom to top priority)
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Consider section "active" when its top is within the upper portion of the viewport
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // On detail pages, filter out About Us and Our Services
  const visibleLinks = useMemo(() => {
    if (isDetailPage) {
      return NAV_LINKS.filter(
        (l) => l.name !== "About Us" && l.name !== "Our Services",
      );
    }
    return NAV_LINKS;
  }, [isDetailPage]);

  // Determine which link is active/highlighted
  const getIsActive = useCallback(
    (linkName: string) => {
      // On homepage: use scroll-spy
      if (isHomePage) {
        const link = NAV_LINKS.find((l) => l.name === linkName);
        if (!link) return false;
        // "Home" is active when no section is in view (top of page)
        if (linkName === "Home") return activeSection === "";
        return link.hash === activeSection;
      }

      // On other pages: match by route
      if (isProjectDetail || isProjectsPage) return linkName === "Projects";
      if (isBlogDetail || isBlogsPage) return linkName === "Blogs";
      if (isContactPage) return linkName === "Contact";
      return false;
    },
    [
      isHomePage,
      activeSection,
      isProjectDetail,
      isProjectsPage,
      isBlogDetail,
      isBlogsPage,
      isContactPage,
    ],
  );

  // Handle navigation
  const handleNavClick = (link: (typeof NAV_LINKS)[0]) => {
    // On homepage: scroll to sections for all links (including Contact)
    if (isHomePage) {
      scrollToSection(link);
      return;
    }

    // On non-homepage: Contact goes to /contact page
    if (link.name === "Contact") {
      navigate("/contact");
      return;
    }

    // On non-homepage: Home goes to /, Projects to /projects, Blogs to /blogs
    if (link.name === "Home") {
      navigate("/");
      return;
    }
    if (link.name === "Projects") {
      navigate("/projects");
      return;
    }
    if (link.name === "Blogs") {
      navigate("/blogs");
      return;
    }

    // About Us / Our Services scroll to homepage sections
    scrollToSection(link);
  };

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
            {visibleLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-[13px] font-medium tracking-wider transition-colors duration-300 uppercase bg-transparent border-none cursor-pointer ${
                  getIsActive(link.name)
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            {FOOTER_SOCIAL_LINKS.map((s) => (
              <SocialIcon
                key={s.label}
                label={s.label}
                path={s.path}
                color={s.color}
                url={s.url}
              />
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
              {visibleLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => handleNavClick(link), 350);
                    }}
                    className={`block w-full text-left py-3 text-sm font-medium tracking-wider transition-colors uppercase border-b border-white/5 bg-transparent border-x-0 border-t-0 cursor-pointer ${
                      getIsActive(link.name)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 pt-4">
                {FOOTER_SOCIAL_LINKS.map((s) => (
                  <SocialIcon
                    key={s.label}
                    label={s.label}
                    path={s.path}
                    color={s.color}
                    url={s.url}
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
