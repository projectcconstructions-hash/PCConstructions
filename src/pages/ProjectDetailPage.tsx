import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { PROJECT_DETAIL_CONTENT } from "../data/content";

const INFO_CARDS = [
  {
    icon: (
      <svg
        className="w-7 h-7 lg:w-8 lg:h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75m0-3H18"
        />
      </svg>
    ),
    key: "scope",
    title: PROJECT_DETAIL_CONTENT.infoCards.scope,
  },
  {
    icon: (
      <svg
        className="w-7 h-7 lg:w-8 lg:h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    key: "area",
    title: PROJECT_DETAIL_CONTENT.infoCards.area,
  },
  {
    icon: (
      <svg
        className="w-7 h-7 lg:w-8 lg:h-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    key: "duration",
    title: PROJECT_DETAIL_CONTENT.infoCards.duration,
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">
            {PROJECT_DETAIL_CONTENT.notFoundTitle}
          </h1>
          <button
            onClick={() => navigate("/")}
            className="btn-gradient text-white px-6 py-2 rounded-md"
          >
            {PROJECT_DETAIL_CONTENT.goHome}
          </button>
        </div>
      </div>
    );
  }

  const categoryLabel = project.category.includes("commercial")
    ? "COMMERCIAL"
    : "RESIDENTIAL";

  const infoValues: Record<string, string> = {
    scope: project.scope,
    area: project.area,
    duration: project.duration,
  };

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Banner */}
      <section className="relative h-[200px] lg:h-[320px] overflow-hidden">
        <img
          src={project.gallery[0]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block btn-gradient text-white text-[9px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-md mb-3">
            {categoryLabel}
          </span>
          <h1 className="text-xl lg:text-4xl font-extrabold text-white uppercase tracking-wide mb-3">
            {project.name}
          </h1>
          <p className="text-white/80 text-[10px] lg:text-sm max-w-xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          {/* Main image with arrows */}
          <div className="relative rounded-xl overflow-hidden mb-4">
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={project.gallery[activeIndex]}
              alt={`${project.name} - Image ${activeIndex + 1}`}
              className="w-full aspect-[16/9] object-cover"
            />

            {/* Left arrow */}
            <button
              onClick={goToPrev}
              className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full icon-gradient flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={goToNext}
              className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full icon-gradient flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 w-20 h-16 lg:w-28 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">
            {INFO_CARDS.map((card, index) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#FFF7F2] rounded-2xl p-6 lg:p-8"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full icon-gradient flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-base lg:text-lg font-extrabold text-dark tracking-wide mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                  {infoValues[card.key]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
