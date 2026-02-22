import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import yearsExperienceIcon from "../assets/icons/years-experience.png";
import sqFtRenovatedIcon from "../assets/icons/sq-ft-renovated.png";
import specializedExpertiseIcon from "../assets/icons/projects-completed.png";
import clientSatisfactionIcon from "../assets/icons/client-satisfaction.png";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress >= 1) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    icon: specializedExpertiseIcon,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: yearsExperienceIcon,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: sqFtRenovatedIcon,
    value: 500,
    suffix: "K+",
    label: "Sq. Ft. Renovated",
  },
  {
    icon: clientSatisfactionIcon,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-[20px] shadow-sm p-5 sm:p-6 lg:p-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 mb-4 lg:mb-5 rounded-full icon-gradient flex items-center justify-center">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-6 h-6 lg:w-7 lg:h-7 brightness-0 invert"
                />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium italic">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
