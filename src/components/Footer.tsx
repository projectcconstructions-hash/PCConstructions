import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    color: "#1877F2",
  },
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    color: "#333",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z",
    color: "#0A66C2",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    color: "#FF0000",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    color: "#E4405F",
  },
];

const QUICK_MENU = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Projects", path: "/#projects" },
  { name: "Blogs", path: "/blogs" },
];

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=200&q=80",
];

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-white">
      <div className="max-w-7xl mx-auto px-[28px] lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              GET IN TOUCH
            </h4>
            <div className="space-y-1 mb-5">
              <p className="text-white text-sm">Address Line 1</p>
              <p className="text-white text-sm">Complete Address</p>
              <p className="text-white text-sm">Pincode</p>
            </div>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: s.color }}
                  aria-label={s.label}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              QUICK MENU
            </h4>
            <ul className="space-y-3">
              {QUICK_MENU.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
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
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              WORKING HOURS
            </h4>
            <ul className="space-y-3">
              <li className="text-white text-sm">
                Monday - Friday 09:00 - 22:00
              </li>
              <li className="text-white text-sm">Saturday 11:00 - 00:00</li>
              <li className="text-white text-sm">Sunday 11:00 - 23:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm lg:text-base font-bold tracking-wider uppercase mb-5">
              INSTAGRAM
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {INSTAGRAM_IMAGES.map((img, i) => (
                <a
                  key={i}
                  href="#"
                  className="aspect-square rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src={img}
                    alt={`Instagram post ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #f19719, #f16319)",
        }}
      >
        <div className="max-w-7xl mx-auto px-[28px] lg:px-8 py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs lg:text-sm">
            &copy; Copyright Project C. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="#"
              className="text-white/90 text-xs lg:text-sm hover:text-white transition-colors"
            >
              Terms Of Use
            </a>
            <a
              href="#"
              className="text-white/90 text-xs lg:text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
