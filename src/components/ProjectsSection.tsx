import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS, CATEGORY_TABS, type Category } from "../data/projects";
import { PROJECTS_CONTENT } from "../data/content";
import ArrowIcon from "./shared/ArrowIcon";
import SectionDivider from "./shared/SectionDivider";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const navigate = useNavigate();

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeTab));

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
          className="flex items-center justify-center gap-3 mb-8 lg:mb-10"
        >
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`text-[10px] lg:text-xs font-semibold tracking-wider px-4 lg:px-5 py-2 rounded-md border transition-all duration-300 ${
                activeTab === tab.value
                  ? "btn-gradient text-white border-transparent"
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
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
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white flex items-center justify-center">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
