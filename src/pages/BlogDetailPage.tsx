import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BLOG_ARTICLES } from "../data/blogs";
import { BLOG_DETAIL_CONTENT } from "../data/content";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = BLOG_ARTICLES.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">
            {BLOG_DETAIL_CONTENT.notFoundTitle}
          </h1>
          <button
            onClick={() => navigate("/blogs")}
            className="btn-gradient text-white px-6 py-2 rounded-md cursor-pointer"
          >
            {BLOG_DETAIL_CONTENT.backButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-16 lg:pt-20">
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-7 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md">
                  {BLOG_DETAIL_CONTENT.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl lg:text-3xl font-extrabold text-dark uppercase tracking-wide mb-4 lg:mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Intro */}
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8">
                {blog.intro}
              </p>

              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-lg mb-8 lg:mb-10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="space-y-6 lg:space-y-8">
                {blog.content.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-sm lg:text-base font-extrabold text-dark mb-2 lg:mb-3">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-2"
                      >
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc list-inside space-y-1 pl-2 lg:pl-4">
                        {section.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="text-gray-600 text-xs lg:text-sm leading-relaxed"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </main>
  );
}
