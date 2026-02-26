import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction professionals at work",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial building construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern architecture project",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const doScroll = () => {
      const el = document.getElementById("contact");
      if (el) {
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 500);
    } else {
      doScroll();
    }
  };

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % SLIDES.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[457px] lg:min-h-screen flex items-end lg:items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[28px] lg:px-8 pb-12 lg:pb-0 pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/90 text-[14px] lg:text-[40px] font-semibold tracking-[0.15em] lg:tracking-[0.2em] mb-1 lg:mb-3"
          >
            BUILD BETTER <span className="text-gradient italic">SPACES</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[24px] lg:text-[70px] font-bold text-white leading-[1.15] mb-2 lg:mb-4"
          >
            RESIDENTIAL & COMMERCIAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white text-[14px] font-semibold lg:text-[40px] tracking-[0.15em] mb-6 lg:mb-10"
          >
            PROJECT C CONSTRUCTIONS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-row items-center gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToContact}
              className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold text-[11px] lg:text-sm tracking-wider px-4 lg:px-7 py-2.5 lg:py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 border-none cursor-pointer"
            >
              GET FREE ESTIMATE
              <span className="flex items-center gap-1">
                <span className="w-4 h-[2px] bg-white inline-block lg:hidden" />
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center text-white lg:bg-white/10 lg:hover:bg-white lg:hover:text-dark hover:text-primary font-semibold text-[11px] lg:text-sm tracking-wider px-4 lg:px-7 py-2.5 lg:py-3.5 lg:rounded-[5px] transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              CONTACT US
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-[3px] rounded-full transition-all duration-500 ${
              i === current
                ? "h-8 bg-primary"
                : "h-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
