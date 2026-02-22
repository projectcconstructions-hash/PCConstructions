import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    title: "CUSTOM INTERIORS",
    description:
      "Complete interior design and renovation solutions crafted to enhance functionality, comfort, and visual appeal.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
    title: "LEGAL BASEMENTS",
    description:
      "Professional basement finishing and legal conversions designed to maximize space, safety, and property value.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    title: "CUSTOM KITCHENS",
    description:
      "Thoughtfully designed kitchen renovations combining practicality, premium materials, and modern aesthetics.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
    title: "CUSTOM BATHROOMS",
    description:
      "Refined bathroom renovations delivering comfort, durability, and elegant finishes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80",
    title: "FLOORING",
    description:
      "Expert installation of hardwood, laminate, tile, and vinyl flooring for lasting performance and style.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=600&q=80",
    title: "DECKS & FENCES",
    description:
      "Custom-built decks and fencing solutions designed to elevate outdoor living spaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
    title: "INTERLOCKING",
    description:
      "Precision interlocking stone installation for driveways, walkways, and patios.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=600&q=80",
    title: "SIGN BOARDS",
    description:
      "Custom commercial signage design and installation for restaurants and business spaces.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-[#FFF7F2] rounded-2xl p-3 lg:p-4 hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="pt-4 lg:pt-5 px-1 pb-2">
        <h3 className="text-sm lg:text-lg font-extrabold text-dark tracking-wide mb-2">
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs lg:text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <Link
          to="#"
          className="inline-flex items-center gap-2 text-primary-dark font-semibold text-[11px] lg:text-xs border border-primary-dark rounded-md px-3.5 py-1.5 hover:bg-primary-dark hover:text-white transition-all duration-300"
        >
          READ MORE
          <span className="flex items-center gap-0.5">
            <span className="w-4 h-[1.5px] bg-current inline-block" />
            <svg
              className="w-3.5 h-3.5"
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
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl lg:text-4xl font-bold text-dark tracking-wide uppercase mb-4"
          >
            COMPREHENSIVE CONSTRUCTION &amp; RENOVATION SOLUTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto italic leading-relaxed"
          >
            Delivering expertly planned residential and commercial renovation
            services with a focus on quality, precision, and long-term value.
          </motion.p>
          <div className="flex flex-col items-center mt-6 gap-2">
            <span className="w-[2px] h-6 bg-primary" />
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden relative flex items-center lg:items-end justify-center lg:justify-end"
            style={{
              background: "linear-gradient(135deg, #f19719 0%, #f16319 100%)",
            }}
          >
            <div className="p-6 lg:p-8 text-white w-full">
              <h3 className="text-xl lg:text-2xl font-bold tracking-wide uppercase mb-2">
                GET FREE ESTIMATE
              </h3>
              <p className="text-white/90 text-xs lg:text-sm leading-relaxed mb-4">
                Request a no-obligation estimate
                <br />
                tailored to your project requirements.
              </p>
            </div>
            <Link
              to="/contact"
              className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-primary-dark"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
