import { useState } from "react";
import { motion } from "framer-motion";

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
              className={`w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none ${
                formData.projectType ? "text-dark" : "text-gray-400"
              }`}
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
