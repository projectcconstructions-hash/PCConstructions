import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BLOG_ARTICLES, type BlogPostFull } from "../data/blogs";
import { BLOG_DETAIL_CONTENT } from "../data/content";

function RecentPostCard({ blog }: { blog: BlogPostFull }) {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="bg-white border border-gray-200 rounded-sm overflow-hidden group block"
    >
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0">
          <svg
            width="90"
            height="52"
            viewBox="0 0 90 52"
            fill="none"
            className="block"
          >
            <path d="M0 0H74L90 52H0V0Z" fill="url(#sidebar-badge)" />
            <defs>
              <linearGradient
                id="sidebar-badge"
                x1="0"
                y1="0"
                x2="90"
                y2="52"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f19719" />
                <stop offset="1" stopColor="#f16319" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center pr-2">
            <span className="text-white text-base font-extrabold leading-none">
              {blog.date.day}
            </span>
            <span className="text-white text-[10px] font-medium ml-1 mt-0.5">
              {blog.date.month}
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 lg:p-4 bg-[#f5f5f5]">
        <div className="mb-2">
          <span className="inline-block text-[9px] lg:text-[10px] font-semibold tracking-wider text-gray-500 uppercase border border-gray-300 px-2 py-0.5">
            {blog.category}
          </span>
        </div>
        <h4 className="text-xs lg:text-sm font-bold text-dark uppercase leading-snug mb-2 tracking-wide">
          {blog.title}
        </h4>
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="text-[10px] lg:text-xs text-gray-500 font-medium">
              {blog.comments < 10 ? `0${blog.comments}` : blog.comments}{" "}
              Comments
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = BLOG_ARTICLES.find((b) => b.slug === slug);
  const recentPosts = BLOG_ARTICLES.filter((b) => b.slug !== slug).slice(0, 3);

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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_366px] gap-8 lg:gap-10">
            {/* Main Content */}
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

            {/* Sidebar - Recent Blog Posts */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <h3 className="text-base lg:text-lg font-extrabold text-dark uppercase tracking-wide mb-5">
                {BLOG_DETAIL_CONTENT.recentPosts}
              </h3>
              <div className="space-y-5">
                {recentPosts.map((post) => (
                  <RecentPostCard key={post.id} blog={post} />
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
