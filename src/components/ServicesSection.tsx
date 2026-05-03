import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES_CONTENT } from "../data/content";
import SectionDivider from "./shared/SectionDivider";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    image:
      "src/assets/images/services/custom_interiors.jpg",
    title: "CUSTOM INTERIORS",
    description:
      "Complete interior design and renovation solutions crafted to enhance functionality, comfort, and visual appeal.",
  },
  {
    image:
      "src/assets/images/services/legal_basement.jpg",
    title: "LEGAL BASEMENTS",
    description:
      "Professional basement finishing and legal conversions designed to maximize space, safety, and property value.",
  },
  {
    image:
      "src/assets/images/services/custom_kitchen.jpg",
    title: "CUSTOM KITCHENS",
    description:
      "Thoughtfully designed kitchen renovations combining practicality, premium materials, and modern aesthetics.",
  },
  {
    image:
      "src/assets/images/services/custom_bathroom.jpg",
    title: "CUSTOM BATHROOMS",
    description:
      "Refined bathroom renovations delivering comfort, durability, and elegant finishes.",
  },
  {
    image:
      "src/assets/images/services/flooring.jpg",
    title: "FLOORING",
    description:
      "Expert installation of hardwood, laminate, tile, and vinyl flooring for lasting performance and style.",
  },
  {
    image:
      "src/assets/images/services/decks_and_fences.jpg",
    title: "DECKS & FENCES",
    description:
      "Custom-built decks and fencing solutions designed to elevate outdoor living spaces.",
  },
  {
    image:
      "src/assets/images/services/Interlocking.jpg",
    title: "INTERLOCKING",
    description:
      "Precision interlocking stone installation for driveways, walkways, and patios.",
  },
  {
    image:
      "src/assets/images/services/sign_boards.jpg",
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
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-7 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
          >
            {SERVICES_CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl lg:text-4xl font-bold text-dark tracking-wide uppercase mb-4"
          >
            {SERVICES_CONTENT.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto italic leading-relaxed"
          >
            {SERVICES_CONTENT.subtitle}
          </motion.p>
          <SectionDivider />
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
            className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #f19719 0%, #f16319 100%)",
            }}
          >
            <Link
              to="/contact"
              className="flex items-center lg:items-end justify-center lg:justify-end w-full h-full min-h-[200px]"
            >
              <div className="p-6 lg:p-8 text-white w-full">
                <h3 className="text-xl lg:text-2xl font-bold tracking-wide uppercase mb-2">
                  {SERVICES_CONTENT.estimateCard.title}
                </h3>
                <p className="text-white/90 text-xs lg:text-sm leading-relaxed mb-4">
                  {SERVICES_CONTENT.estimateCard.description
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
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
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
