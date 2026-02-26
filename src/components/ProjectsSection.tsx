import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

type Category = "all" | "commercial" | "residential";

export interface Project {
  id: string;
  name: string;
  image: string;
  category: Category[];
  description: string;
  gallery: string[];
  scope: string;
  area: string;
  duration: string;
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    name: "Project Name One",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description:
      "A showcase of our residential and commercial projects, delivered with precision, quality workmanship, and attention to detail. A showcase of our residential and commercial projects, delivered with precision, quality workmanship, and attention to detail.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    scope:
      "Complete interior and exterior renovation including structural, finishing, and detailing works.",
    area: "Total project area of 2,400 sq. ft. Optimized for functionality and layout efficiency.",
    duration:
      "Completed within a 12-week timeline. Delivered with structured planning and execution.",
  },
  {
    id: "project-2",
    name: "Project Name Two",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description:
      "A showcase of our residential and commercial projects, delivered with precision, quality workmanship, and attention to detail.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Full kitchen and bathroom remodel with premium finishes.",
    area: "Total project area of 1,800 sq. ft.",
    duration: "Completed within an 8-week timeline.",
  },
  {
    id: "project-3",
    name: "Project Name Three",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    category: ["commercial"],
    description:
      "Commercial restaurant renovation with custom interiors and signage.",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    scope:
      "Complete commercial fit-out including HVAC, electrical, and interior design.",
    area: "Total project area of 3,200 sq. ft.",
    duration: "Completed within a 16-week timeline.",
  },
  {
    id: "project-4",
    name: "Project Name Four",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description:
      "Modern residential bathroom renovation with premium fixtures.",
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Bathroom renovation with waterproofing, tiling, and custom vanity.",
    area: "Total project area of 800 sq. ft.",
    duration: "Completed within a 6-week timeline.",
  },
  {
    id: "project-5",
    name: "Project Name Five",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    category: ["commercial"],
    description:
      "Commercial office space renovation with modern design elements.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    scope:
      "Full office renovation including partitioning and electrical works.",
    area: "Total project area of 2,000 sq. ft.",
    duration: "Completed within a 10-week timeline.",
  },
  {
    id: "project-6",
    name: "Project Name Six",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description: "Luxury residential living room and kitchen transformation.",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Open-concept living and kitchen renovation with premium flooring.",
    area: "Total project area of 1,600 sq. ft.",
    duration: "Completed within a 9-week timeline.",
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "COMMERCIAL", value: "commercial" },
  { label: "RESIDENTIAL", value: "residential" },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const navigate = useNavigate();

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(activeTab));

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#FFF7F2]">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
          >
            OUR PROJECTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl lg:text-4xl font-extrabold text-dark tracking-wide uppercase mb-4"
          >
            CRAFTED SPACES. PROVEN RESULTS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-xs lg:text-sm max-w-lg mx-auto leading-relaxed"
          >
            A showcase of our residential and commercial projects, delivered
            with precision, quality workmanship, and attention to detail.
          </motion.p>

          {/* Decorative divider */}
          <div className="flex flex-col items-center mt-5 gap-2">
            <span className="w-[2px] h-6 bg-primary" />
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8 lg:mb-10"
        >
          {TABS.map((tab) => (
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
            VIEW MORE
            <span className="flex items-center gap-0.5">
              <span className="w-5 h-[1.5px] bg-current inline-block" />
              <svg
                className="w-4 h-4"
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
      </div>
    </section>
  );
}
