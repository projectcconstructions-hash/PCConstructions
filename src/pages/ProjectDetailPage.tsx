import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useProject } from "../hooks/useProjects";
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
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    key: "area",
    title: "Location",
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
  const { project, loading } = useProject(id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lightboxPrev = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  }, [project]);

  const lightboxNext = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  }, [project]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, lightboxPrev, lightboxNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) lightboxNext();
      else lightboxPrev();
    } else if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Loading project...</p>
        </div>
      </div>
    );
  }

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

  const categoryRaw = project.category[0] || "project";
  const categoryLabel =
    categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1).toLowerCase();

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
              className="w-full aspect-[16/9] object-cover cursor-pointer"
              onClick={() => openLightbox(activeIndex)}
            />

            {/* Fullscreen button */}
            <button
              onClick={() => openLightbox(activeIndex)}
              className="absolute top-3 right-3 lg:top-4 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="View fullscreen"
            >
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>

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
      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
                e.preventDefault();
                closeLightbox();
              }}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close fullscreen"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm lg:text-base font-medium z-10">
              {lightboxIndex + 1} / {project.gallery.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous image"
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

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={project.gallery[lightboxIndex]}
              alt={`${project.name} - Fullscreen ${lightboxIndex + 1}`}
              className="max-w-[92vw] max-h-[80vh] lg:max-w-[85vw] lg:max-h-[85vh] object-contain rounded-lg select-none"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next image"
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

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 lg:gap-2 max-w-[90vw] overflow-x-auto pb-1 px-2">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`shrink-0 w-12 h-9 lg:w-16 lg:h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    i === lightboxIndex
                      ? "border-primary opacity-100 scale-105"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
