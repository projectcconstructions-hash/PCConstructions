import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Construction professionals at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[28px] lg:px-8 pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/90 text-[14px] lg:text-[40px] font-semibold tracking-[0.2em] mb-2 lg:mb-3"
          >
            BUILD BETTER{" "}
            <span className="text-gradient italic">SPACES</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[24px] lg:text-[70px] font-bold text-white leading-[1.15] mb-3 lg:mb-4"
          >
            RESIDENTIAL & COMMERCIAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/80 text-[14px] lg:text-[40px] tracking-[0.15em] font-light mb-8 lg:mb-10"
          >
            PROJECT C CONSTRUCTIONS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold text-xs sm:text-sm tracking-wider px-4 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              GET FREE ESTIMATE
              <svg
                className="w-4 h-4"
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
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white hover:text-dark font-semibold text-xs sm:text-sm tracking-wider px-4 sm:px-7 py-3 sm:py-3.5 rounded-[5px] transition-all duration-300"
            >
              CONTACT US
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
