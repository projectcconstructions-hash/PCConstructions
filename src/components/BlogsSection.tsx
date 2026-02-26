import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogPost {
  image: string;
  date: { day: string; month: string };
  author: string;
  comments: number;
  title: string;
}

const BLOGS: BlogPost[] = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    date: { day: "07", month: "FEB" },
    author: "AUTHOR 1",
    comments: 2,
    title: "PLANNING YOUR RENOVATION: WHAT TO CONSIDER BEFORE YOU BUILD",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    date: { day: "06", month: "FEB" },
    author: "AUTHOR 2",
    comments: 3,
    title: "KEY CONSTRUCTION TRENDS EVERY PROPERTY OWNER SHOULD KNOW",
  },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 lg:mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block btn-gradient text-white text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-md mb-4"
            >
              BLOGS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xl lg:text-3xl font-extrabold text-dark tracking-wide uppercase"
            >
              INSIGHTS &amp; EXPERT PERSPECTIVES
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 lg:mt-2"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-dark font-semibold text-xs lg:text-sm border border-dark rounded-md px-4 lg:px-5 py-2 hover:bg-dark hover:text-white transition-all duration-300"
            >
              VIEW ALL BLOGS
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
          </motion.div>
        </div>

        {/* Blog Cards - Alternating Layout */}
        <div className="flex flex-col gap-0 lg:gap-0">
          {BLOGS.map((blog, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden aspect-[16/10] ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Date badge */}
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-primary text-white rounded-lg px-2.5 py-1.5 lg:px-3 lg:py-2 text-center leading-tight">
                    <span className="block text-sm lg:text-lg font-bold">
                      {blog.date.day}
                    </span>
                    <span className="block text-[8px] lg:text-[10px] font-semibold tracking-wider">
                      {blog.date.month}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-[#f5f5f5] p-5 lg:p-10 flex flex-col justify-center ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3 lg:mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gray-300" />
                      <span className="text-[10px] lg:text-xs font-semibold text-dark tracking-wide">
                        {blog.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                      <span className="text-[10px] lg:text-xs font-semibold text-primary">
                        {blog.comments} COMMENT
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm lg:text-xl font-extrabold text-dark tracking-wide uppercase mb-4 lg:mb-6 leading-snug">
                    {blog.title}
                  </h3>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary-dark font-semibold text-[10px] lg:text-xs border border-primary-dark rounded-md px-3.5 py-1.5 hover:bg-primary-dark hover:text-white transition-all duration-300 w-fit"
                  >
                    READ MORE
                    <span className="flex items-center gap-0.5">
                      <span className="w-5 h-[1.5px] bg-current inline-block" />
                      <svg
                        className="w-3.5 h-3.5"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
