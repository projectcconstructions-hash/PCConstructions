import { motion } from "framer-motion";
import specializedExpertiseIcon from "../assets/icons/specialized-expertise.png";
import precisionExecutionIcon from "../assets/icons/precision-execution.png";
import reliableDeliveryIcon from "../assets/icons/reliable-delivery.png";
import wsibLogo from "../assets/icons/wsib-insured.png";

interface Feature {
  icon: string;
  title: string;
  desc: string;
  variant: "gradient" | "light";
}

const FEATURES: Feature[] = [
  {
    icon: specializedExpertiseIcon,
    title: "SPECIALIZED EXPERTISE",
    desc: "Commercial restaurant renovations, custom sign boards, and residential construction solutions.",
    variant: "gradient",
  },
  {
    icon: precisionExecutionIcon,
    title: "PRECISION EXECUTION",
    desc: "Thoughtful planning and detailed workmanship at every stage.",
    variant: "light",
  },
  {
    icon: reliableDeliveryIcon,
    title: "RELIABLE DELIVERY",
    desc: "Projects completed with clear timelines and transparent coordination.",
    variant: "light",
  },
  {
    icon: wsibLogo,
    title: "WSIB INSURED",
    desc: "Fully WSIB insured for complete peace of mind.",
    variant: "gradient",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const isGradient = feature.variant === "gradient";
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`rounded-[20px] p-5 lg:p-6 w-full h-[180px] lg:h-[292px] flex flex-col justify-between ${
        isGradient ? "icon-gradient text-white" : "bg-white shadow-sm"
      }`}
    >
      <img
        src={feature.icon}
        alt={feature.title}
        className={`w-12 h-12 lg:w-20 lg:h-20 ${
          isGradient ? "brightness-0 invert" : ""
        }`}
      />
      <div>
        <h3
          className={`text-xs lg:text-sm font-extrabold tracking-wider mb-1 lg:mb-2 ${
            isGradient ? "text-white" : "text-dark"
          }`}
        >
          {feature.title}
        </h3>
        <p
          className={`text-[11px] sm:text-xs lg:text-[13px] leading-relaxed ${
            isGradient ? "text-white/80" : "text-gray-500"
          }`}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 lg:pt-24 pb-0 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:order-2"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 btn-gradient text-white px-4 py-1.5 rounded-full">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-dark leading-tight mb-5">
              BUILDING WITH
              <br />
              <span className="text-gradient italic">PRECISION & PURPOSE</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8">
              Project C Constructions is a premier construction and interior
              design company specializing in commercial restaurant renovations,
              custom sign boards, and residential upgrades. We deliver
              well-planned, high-quality solutions aligned with your vision,
              budget, and timeline. Our experienced team focuses on creating
              functional, refined spaces through precision execution and
              attention to detail — from concept to completion.
            </p>

            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              {FEATURES.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative lg:order-1 lg:pt-10"
          >
            <div className="grid grid-cols-12 gap-2 sm:gap-3 items-end">
              <div className="col-span-3 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                  alt="Modern residential building"
                  className="w-full h-40 sm:h-56 lg:h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="col-span-5 -mt-6 lg:-mt-16 rounded-xl overflow-hidden shadow-2xl border-t-4 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury modern construction"
                  className="w-full h-52 sm:h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="col-span-4 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80"
                  alt="Contemporary house exterior"
                  className="w-full h-52 sm:h-60 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
