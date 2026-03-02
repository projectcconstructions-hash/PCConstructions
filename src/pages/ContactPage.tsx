import { useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../data/content";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-[#333] pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333]/80 to-[#333]/95" />
        <div className="relative max-w-7xl mx-auto px-7 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-extrabold text-white tracking-wider uppercase mb-3"
          >
            {CONTACT_CONTENT.badge}
          </motion.h1>
          <div className="w-10 h-1 bg-primary mx-auto mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-white text-sm lg:text-base italic max-w-md mx-auto"
          >
            {CONTACT_CONTENT.description}
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </main>
  );
}
