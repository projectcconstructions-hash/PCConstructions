import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import type { Category } from "../data/projects";
import { useProjects, useCategoryTabs } from "../hooks/useProjects";
import { PROJECTS_CONTENT } from "../data/content";
import ArrowIcon from "./shared/ArrowIcon";
import SectionDivider from "./shared/SectionDivider";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const navigate = useNavigate();
  const { projects, loading } = useProjects();
  const categoryTabs = useCategoryTabs(projects);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab));

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-7 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
          >
            {PROJECTS_CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl lg:text-4xl font-extrabold text-dark tracking-wide uppercase mb-4"
          >
            {PROJECTS_CONTENT.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-xs lg:text-sm max-w-lg mx-auto leading-relaxed"
          >
            {PROJECTS_CONTENT.subtitle}
          </motion.p>
          <SectionDivider />
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 max-w-xs mx-auto lg:max-w-none lg:flex lg:items-center lg:justify-center lg:gap-3 mb-8 lg:mb-10"
        >
          {categoryTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`text-[10px] lg:text-xs font-semibold tracking-wider px-3 lg:px-5 py-2.5 lg:py-2 rounded-md border text-center transition-all duration-300 ${
                activeTab === tab.value
                  ? "btn-gradient text-white border-transparent shadow-md"
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-gray-200 animate-pulse"
              />
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.image}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="aspect-[4/3] rounded-xl overflow-hidden group relative cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                      {/* Camera icon + photo count */}
                      <div className="flex items-center gap-1.5">
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
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                          />
                        </svg>
                        <span className="text-white text-xs lg:text-sm font-bold">
                          {project.gallery.length} Photos
                        </span>
                      </div>
                      {/* Click to Explore */}
                      <span className="text-white/90 text-[10px] lg:text-xs font-medium tracking-wide uppercase">
                        Click to Explore
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 btn-gradient text-white font-semibold text-xs lg:text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            {PROJECTS_CONTENT.viewMore}
            <ArrowIcon withLine className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
