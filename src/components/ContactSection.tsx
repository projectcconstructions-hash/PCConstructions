import { useState } from "react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

const PROJECT_TYPES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Renovation",
  "Basement Finishing",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring",
  "Decks & Fences",
  "Interlocking",
  "Sign Boards",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectType: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="self-start btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-md mb-5">
              CONTACT US
            </span>
            <h2 className="text-2xl lg:text-[34px] font-extrabold text-dark tracking-wide uppercase leading-tight mb-4">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL
            </h2>
            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-8 max-w-md">
              Have a project in mind? Get in touch with Project C Constructions
              to discuss your residential or commercial construction needs. Our
              team is ready to guide you with expert advice, clear timelines,
              and quality-driven solutions.
            </p>

            <div>
              <div className="border-t border-gray-200" />
              <div className="grid grid-cols-2">
                <div className="py-5 pr-5 flex items-center gap-3 border-r border-gray-200">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-4 h-4 text-primary-dark"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] lg:text-xs">
                      Mobile
                    </p>
                    <p className="text-dark font-bold text-xs lg:text-sm">
                      +91 99999 77777
                    </p>
                  </div>
                </div>
                <div className="py-5 pl-5 flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-4 h-4 text-primary-dark"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] lg:text-xs">
                      Email
                    </p>
                    <p className="text-dark font-bold text-xs lg:text-sm">
                      info@projectc.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200" />
              <div className="py-5 flex items-center gap-3">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-4 h-4 text-primary-dark"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] lg:text-xs">
                    Address
                  </p>
                  <p className="text-dark font-bold text-xs lg:text-sm">
                    Address Line 1, Complete Address, 999222
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1" />
            <div>
              <p className="text-gray-500 text-sm font-medium mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-10 h-10 rounded-full icon-gradient flex items-center justify-center hover:scale-110 transition-transform duration-300"
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
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "16px",
              }}
            >
              <option value="" disabled>
                Project Type
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <div className="flex-1" />
            <button
              type="submit"
              className="w-full btn-gradient text-white font-semibold text-sm tracking-wider py-3.5 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              SUBMIT MESSAGE
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
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
