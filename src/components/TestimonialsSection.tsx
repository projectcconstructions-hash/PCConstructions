import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../data/content";
import SectionDivider from "./shared/SectionDivider";

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    name: "CLINET ONE",
    role: "HOUSE OWNER",
    text: "Project C Constructions delivered exceptional quality and attention to detail from start to finish. The team maintained clear communication, followed timelines strictly, and ensured every aspect of the project met our expectations.",
    rating: 5,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    name: "CLIENT TWO",
    role: "CAFE OWNER",
    text: "Working with Project C Constructions was a smooth and professional experience. Their expertise, workmanship, and commitment to quality were evident throughout the project. The space was delivered exactly as promised, both in design and functionality.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${
            i < count ? "text-primary" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-7 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
          >
            {TESTIMONIALS_CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl lg:text-3xl font-extrabold text-dark tracking-wide uppercase mb-4"
          >
            {TESTIMONIALS_CONTENT.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-xs lg:text-sm max-w-lg mx-auto leading-relaxed"
          >
            {TESTIMONIALS_CONTENT.subtitle}
          </motion.p>
          <SectionDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#FFF7F2] rounded-2xl p-5 lg:p-8 relative overflow-hidden"
            >
              <div className="flex gap-4 lg:gap-6 mb-5 lg:mb-6">
                <div className="shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-28 h-32 lg:w-36 lg:h-40 rounded-lg object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex items-center">
                  <p className="text-gray-500 text-[11px] lg:text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-6">
                  <StarRating count={testimonial.rating} />
                  <div>
                    <h4 className="text-xs lg:text-sm font-bold text-dark tracking-wide">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] lg:text-[11px] tracking-wider font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <span className="text-4xl lg:text-5xl font-serif text-primary leading-none select-none">
                  &ldquo;
                </span>
              </div>

              <div className="absolute bottom-0 left-6 right-6 lg:left-8 lg:right-8 h-[3px] bg-gradient-to-r from-[#f19719] to-[#f16319] rounded-t" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
