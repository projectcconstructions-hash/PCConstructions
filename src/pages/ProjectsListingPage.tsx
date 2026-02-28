import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ALL_PROJECTS,
  PROJECT_TYPE_OPTIONS,
  SERVICE_CATEGORY_OPTIONS,
  LOCATION_OPTIONS,
} from "../data/projects";
import { PROJECTS_PAGE_CONTENT } from "../data/content";
import Pagination from "../components/shared/Pagination";

const { totalPages: TOTAL_PAGES } = PROJECTS_PAGE_CONTENT;

function SelectDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="w-full sm:flex-1 sm:min-w-0">
      <label className="block text-[10px] lg:text-xs font-bold text-dark uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-9 text-xs lg:text-sm font-medium text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ProjectsListingPage() {
  const navigate = useNavigate();
  const [projectType, setProjectType] = useState<string>("all");
  const [serviceCategory, setServiceCategory] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (
      serviceCategory !== "all" &&
      !p.category.includes(serviceCategory as "commercial" | "residential")
    )
      return false;
    return true;
  });

  const handleClearFilters = () => {
    setProjectType("all");
    setServiceCategory("all");
    setLocation("all");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > TOTAL_PAGES) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-[#333] pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333]/70 to-[#333]/90" />
        <div className="relative max-w-7xl mx-auto px-7 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-extrabold text-white tracking-wider uppercase mb-3"
          >
            {PROJECTS_PAGE_CONTENT.heroTitle}
          </motion.h1>
          <div className="w-10 h-1 bg-primary mx-auto mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-white/80 text-sm lg:text-base italic max-w-md mx-auto"
          >
            {PROJECTS_PAGE_CONTENT.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white relative z-10 pt-8 lg:pt-10">
        <div className="max-w-7xl mx-auto px-7 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl border border-gray-100 px-5 py-5 lg:px-8 lg:py-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              <SelectDropdown
                label={PROJECTS_PAGE_CONTENT.filterLabels.projectType}
                options={PROJECT_TYPE_OPTIONS}
                value={projectType}
                onChange={setProjectType}
              />
              <SelectDropdown
                label={PROJECTS_PAGE_CONTENT.filterLabels.serviceCategory}
                options={SERVICE_CATEGORY_OPTIONS}
                value={serviceCategory}
                onChange={setServiceCategory}
              />
              <SelectDropdown
                label={PROJECTS_PAGE_CONTENT.filterLabels.location}
                options={LOCATION_OPTIONS}
                value={location}
                onChange={setLocation}
              />
              <div className="flex items-end">
                <button
                  onClick={handleClearFilters}
                  className="w-full btn-gradient text-white font-bold text-xs lg:text-sm tracking-wider px-7 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer uppercase"
                >
                  {PROJECTS_PAGE_CONTENT.clearButton}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-7 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const categoryLabel = project.category.includes("commercial")
                  ? "CONSTRUCTION"
                  : "INTERIOR";
                const projectName = project.name.toUpperCase();
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="group cursor-pointer overflow-hidden rounded-lg"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Label bar */}
                    <div className="bg-white border border-t-0 border-gray-200 px-3 py-2.5 lg:px-4 lg:py-3 flex items-center justify-between">
                      <div>
                        <span className="block text-[8px] lg:text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                          {categoryLabel}
                        </span>
                        <span className="block text-xs lg:text-sm font-extrabold text-dark uppercase tracking-wide">
                          {projectName}
                        </span>
                      </div>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full btn-gradient flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white"
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
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={handlePageChange}
            previousLabel={PROJECTS_PAGE_CONTENT.previous}
            nextLabel={PROJECTS_PAGE_CONTENT.next}
          />
        </div>
      </section>
    </main>
  );
}
