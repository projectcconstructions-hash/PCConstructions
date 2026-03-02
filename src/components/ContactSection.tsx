import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { CONTACT_CONTENT, SITE } from "../data/content";
import ArrowIcon from "./shared/ArrowIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    projectType: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[+]?[\d\s()-]{7,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid mobile number";
    }
    if (!formData.projectType) newErrors.projectType = "Select a project type";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@pcconstructions.ca",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            "Project Type": formData.projectType,
            subject: formData.subject,
            message: formData.message,
            _subject: `New Contact Form: ${formData.subject}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        toast.success("Your message has been sent to info@pcconstructions.ca");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          projectType: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="self-start btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-md mb-5">
              {CONTACT_CONTENT.badge}
            </span>
            <h2 className="text-2xl lg:text-[34px] font-extrabold text-dark tracking-wide uppercase leading-tight mb-4">
              {CONTACT_CONTENT.heading}
            </h2>
            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-8 max-w-md">
              {CONTACT_CONTENT.description}
            </p>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="py-5 sm:pr-5 flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center shrink-0">
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
                  <div className="min-w-0">
                    <p className="text-gray-400 text-[10px] lg:text-xs">
                      {CONTACT_CONTENT.labels.mobile}
                    </p>
                    <p className="text-dark font-bold text-xs lg:text-sm">
                      {SITE.phone}
                    </p>
                  </div>
                </div>
                <div className="py-5 sm:pl-5 flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center shrink-0">
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
                  <div className="min-w-0">
                    <p className="text-gray-400 text-[10px] lg:text-xs">
                      {CONTACT_CONTENT.labels.email}
                    </p>
                    <p className="text-dark font-bold text-xs lg:text-sm break-all">
                      {SITE.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 flex items-center gap-3">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white flex items-center justify-center shrink-0">
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
                    {CONTACT_CONTENT.labels.address}
                  </p>
                  <p className="text-dark font-bold text-xs lg:text-sm">
                    {SITE.address.full}
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
              placeholder={CONTACT_CONTENT.placeholders.name}
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs -mt-2">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder={CONTACT_CONTENT.placeholders.email}
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs -mt-2">{errors.email}</p>
            )}
            <input
              type="tel"
              name="mobile"
              placeholder={CONTACT_CONTENT.placeholders.mobile}
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full bg-white border ${errors.mobile ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs -mt-2">{errors.mobile}</p>
            )}
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full bg-white border ${errors.projectType ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none ${
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
                {CONTACT_CONTENT.placeholders.projectType}
              </option>
              {CONTACT_CONTENT.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-xs -mt-2">{errors.projectType}</p>
            )}
            <input
              type="text"
              name="subject"
              placeholder={CONTACT_CONTENT.placeholders.subject}
              value={formData.subject}
              onChange={handleChange}
              className={`w-full bg-white border ${errors.subject ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs -mt-2">{errors.subject}</p>
            )}
            <textarea
              name="message"
              placeholder={CONTACT_CONTENT.placeholders.message}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-gray-200"} rounded-lg px-4 py-3 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs -mt-2">{errors.message}</p>
            )}
            <div className="flex-1" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gradient text-white font-semibold text-sm tracking-wider py-3.5 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "SENDING..." : CONTACT_CONTENT.submitButton}
              {!isSubmitting && <ArrowIcon className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
