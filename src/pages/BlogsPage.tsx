import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ALL_BLOGS } from "../data/blogs";
import { BLOGS_PAGE_CONTENT } from "../data/content";
import Pagination from "../components/shared/Pagination";

const PER_PAGE = BLOGS_PAGE_CONTENT.perPage;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPages = Math.max(1, Math.ceil(ALL_BLOGS.length / PER_PAGE));
  const blogs = ALL_BLOGS.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="relative bg-[#333] pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333]/80 to-[#333]/95" />
        <div className="relative max-w-7xl mx-auto px-7 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-extrabold text-white tracking-wider uppercase mb-3"
          >
            {BLOGS_PAGE_CONTENT.heroTitle}
          </motion.h1>
          <div className="w-10 h-1 bg-primary mx-auto mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-white text-sm lg:text-base italic max-w-md mx-auto"
          >
            {BLOGS_PAGE_CONTENT.heroSubtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-7 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden group"
              >
                <Link to={`/blogs/${blog.slug}`} className="block">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Date Badge - angled triangle shape */}
                    <div className="absolute bottom-0 left-0">
                      <svg
                        width="110"
                        height="64"
                        viewBox="0 0 110 64"
                        fill="none"
                        className="block"
                      >
                        <path d="M0 0H90L110 64H0V0Z" fill="url(#badge-grad)" />
                        <defs>
                          <linearGradient
                            id="badge-grad"
                            x1="0"
                            y1="0"
                            x2="110"
                            y2="64"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#f19719" />
                            <stop offset="1" stopColor="#f16319" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pr-3">
                        <span className="text-white text-xl lg:text-2xl font-extrabold leading-none">
                          {blog.date.day}
                        </span>
                        <span className="text-white text-xs lg:text-sm font-medium ml-1.5 mt-0.5">
                          {blog.date.month}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pt-5 pb-4 lg:px-6 lg:pt-6 lg:pb-5">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block text-[10px] lg:text-[11px] font-semibold tracking-wider text-gray-500 uppercase border border-gray-300 px-3 py-1 bg-[#f5f5f5]">
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base lg:text-lg font-extrabold text-dark uppercase leading-snug mb-5 tracking-wide">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              previousLabel={BLOGS_PAGE_CONTENT.previous}
              nextLabel={BLOGS_PAGE_CONTENT.next}
            />
          )}
        </div>
      </section>
    </main>
  );
}
