export interface BlogPostSummary {
  id: number;
  slug: string;
  image: string;
  date: { day: string; month: string };
  category: string;
  title: string;
  comments: number;
}

export interface BlogPostFull extends BlogPostSummary {
  intro: string;
  content: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export interface HomeBlogPost {
  image: string;
  date: { day: string; month: string };
  author: string;
  comments: number;
  title: string;
  slug: string;
}

export const HOME_BLOGS: HomeBlogPost[] = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    date: { day: "07", month: "FEB" },
    author: "AUTHOR 1",
    comments: 2,
    title: "PLANNING YOUR RENOVATION: WHAT TO CONSIDER BEFORE YOU BUILD",
    slug: "top-renovation-trends-transforming-modern-homes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    date: { day: "06", month: "FEB" },
    author: "AUTHOR 2",
    comments: 3,
    title: "KEY CONSTRUCTION TRENDS EVERY PROPERTY OWNER SHOULD KNOW",
    slug: "how-to-plan-a-successful-home-renovation-budget",
  },
];

export const ALL_BLOGS: BlogPostSummary[] = [
  {
    id: 1,
    slug: "top-renovation-trends-transforming-modern-homes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "TOP RENOVATION TRENDS TRANSFORMING MODERN HOMES",
    comments: 2,
  },
  {
    id: 2,
    slug: "how-to-plan-a-successful-home-renovation-budget",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "CONSTRUCTION",
    title: "HOW TO PLAN A SUCCESSFUL HOME RENOVATION: BUDGET",
    comments: 2,
  },
  {
    id: 3,
    slug: "commercial-renovation-guide-what-business-owners-need",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "COMMERCIAL RENOVATION GUIDE: WHAT BUSINESS OWNERS NEED",
    comments: 2,
  },
  {
    id: 4,
    slug: "top-renovation-trends-transforming-modern-homes",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "TOP RENOVATION TRENDS TRANSFORMING MODERN HOMES",
    comments: 2,
  },
  {
    id: 5,
    slug: "how-to-plan-a-successful-home-renovation-budget",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "CONSTRUCTION",
    title: "HOW TO PLAN A SUCCESSFUL HOME RENOVATION: BUDGET",
    comments: 2,
  },
  {
    id: 6,
    slug: "commercial-renovation-guide-what-business-owners-need",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "COMMERCIAL RENOVATION GUIDE: WHAT BUSINESS OWNERS NEED",
    comments: 2,
  },
  {
    id: 7,
    slug: "top-renovation-trends-transforming-modern-homes",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "TOP RENOVATION TRENDS TRANSFORMING MODERN HOMES",
    comments: 2,
  },
  {
    id: 8,
    slug: "how-to-plan-a-successful-home-renovation-budget",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "CONSTRUCTION",
    title: "HOW TO PLAN A SUCCESSFUL HOME RENOVATION: BUDGET",
    comments: 2,
  },
  {
    id: 9,
    slug: "commercial-renovation-guide-what-business-owners-need",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "COMMERCIAL RENOVATION GUIDE: WHAT BUSINESS OWNERS NEED",
    comments: 2,
  },
];

export const BLOG_ARTICLES: BlogPostFull[] = [
  {
    id: 1,
    slug: "top-renovation-trends-transforming-modern-homes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "TOP RENOVATION TRENDS TRANSFORMING MODERN HOMES",
    comments: 2,
    intro:
      "Home renovation continues to evolve as homeowners seek smarter layouts, energy efficiency, and refined aesthetics. In 2026, the focus has shifted toward functionality, sustainability, and long-term value. Whether planning a full renovation or selective upgrades, understanding the latest trends can help you make informed decisions.",
    content: [
      {
        heading: "1. Open-Concept Living with Defined Zones",
        paragraphs: [
          "Open layouts remain popular, but modern designs now incorporate subtle zoning techniques. Instead of completely open spaces, homeowners are using:",
        ],
        bullets: [
          "Glass partitions",
          "Half walls",
          "Feature shelving",
          "Decorative panels",
        ],
      },
      {
        heading: "2. Smart Home Integration",
        paragraphs: [
          "Technology is becoming a standard part of renovation projects. Modern homes now include:",
        ],
        bullets: [
          "Smart lighting systems",
          "Automated climate control",
          "Smart security and surveillance",
          "Voice-controlled appliances",
          "Integrating smart systems during renovation improves convenience, security, and energy efficiency.",
        ],
      },
      {
        heading: "3. Sustainable & Energy-Efficient Upgrades",
        paragraphs: [
          "Sustainability is no longer optional — it's a priority. Homeowners are choosing:",
        ],
        bullets: [
          "Energy-efficient windows and doors",
          "LED lighting systems",
          "Insulated flooring solutions",
          "Eco-friendly materials",
          "These upgrades reduce utility costs while increasing property value.",
        ],
      },
      {
        heading: "4. Luxury Bathroom Transformations",
        paragraphs: [
          "Bathrooms are evolving into personal wellness spaces. Current trends include:",
        ],
        bullets: [
          "Walk-in showers with glass enclosures",
          "Large-format tiles",
          "Minimalist vanities",
          "Warm, neutral color palettes",
          "Modern bathrooms focus on comfort, clean lines, and high-end finishes.",
        ],
      },
      {
        heading: "5. Functional & Elegant Kitchen Designs",
        paragraphs: [
          "Kitchens remain the heart of the home. Renovation trends now emphasize:",
        ],
        bullets: [
          "Multi-functional islands",
          "Seamless cabinetry",
          "Under-cabinet lighting",
          "Integrated appliances",
          "Homeowners are prioritizing efficient layouts combined with modern aesthetics.",
        ],
      },
      {
        heading: "6. Outdoor Living Enhancements",
        paragraphs: [
          "Outdoor spaces are receiving as much attention as interiors. Popular upgrades include:",
        ],
        bullets: [
          "Custom decks",
          "Landscaping patios",
          "Privacy fencing",
          "Outdoor seating areas",
          "A well-designed outdoor space extends usable living space and enhances property appeal.",
        ],
      },
      {
        heading: "7. Legal Basement Conversions",
        paragraphs: [
          "With rising property values, homeowners are maximizing space through legal basement conversions. These projects can:",
        ],
        bullets: [
          "Create rental income opportunities",
          "Add livable living space",
          "Increase resale value",
          "Professional planning ensures compliance with safety and building regulations.",
        ],
      },
      {
        heading: "8. Minimalist & Neutral Color Palettes",
        paragraphs: [
          "Modern homes are shifting toward calm, timeless color schemes such as:",
        ],
        bullets: [
          "Warm whites",
          "Soft greys",
          "Earth tones",
          "Natural wood finishes",
          "These palettes create a clean, sophisticated appearance that ages well over time.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "how-to-plan-a-successful-home-renovation-budget",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    date: { day: "20", month: "Feb" },
    category: "CONSTRUCTION",
    title: "HOW TO PLAN A SUCCESSFUL HOME RENOVATION: BUDGET",
    comments: 2,
    intro:
      "Planning a home renovation budget is one of the most critical steps to ensure your project runs smoothly. Without a clear financial roadmap, costs can easily spiral out of control. Here's a comprehensive guide to managing your renovation budget effectively.",
    content: [
      {
        heading: "1. Define Your Renovation Goals",
        paragraphs: [
          "Start by clearly identifying what you want to achieve. Are you renovating for personal comfort, increasing property value, or both?",
        ],
        bullets: [
          "List all rooms and areas to be renovated",
          "Prioritize must-haves vs. nice-to-haves",
          "Set a realistic timeline",
        ],
      },
      {
        heading: "2. Research Costs Thoroughly",
        paragraphs: [
          "Get multiple quotes from contractors and suppliers. Understand market rates for materials and labor in your area.",
        ],
        bullets: [
          "Compare at least 3 contractor quotes",
          "Factor in material costs with 10-15% buffer",
          "Include permit and inspection fees",
        ],
      },
      {
        heading: "3. Create a Contingency Fund",
        paragraphs: [
          "Unexpected costs are inevitable in renovation projects. Set aside 15-20% of your total budget for surprises.",
        ],
        bullets: [
          "Hidden structural issues",
          "Material price fluctuations",
          "Design change requests",
          "Delay-related costs",
        ],
      },
      {
        heading: "4. Track Expenses in Real-Time",
        paragraphs: [
          "Use spreadsheets or budgeting apps to monitor every expense as it occurs. This prevents overspending and keeps you informed.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "commercial-renovation-guide-what-business-owners-need",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    date: { day: "20", month: "Feb" },
    category: "INTERIOR",
    title: "COMMERCIAL RENOVATION GUIDE: WHAT BUSINESS OWNERS NEED",
    comments: 2,
    intro:
      "Commercial renovations require careful planning, compliance with regulations, and a clear understanding of business needs. Whether you're updating a retail space, restaurant, or office, this guide covers the essentials every business owner should know.",
    content: [
      {
        heading: "1. Understand Zoning and Permits",
        paragraphs: [
          "Before starting any commercial renovation, ensure you have all necessary permits and comply with local zoning laws.",
        ],
        bullets: [
          "Building permits",
          "Fire safety compliance",
          "Accessibility requirements (ADA)",
          "Health department approvals (for food service)",
        ],
      },
      {
        heading: "2. Minimize Business Disruption",
        paragraphs: [
          "Plan renovations to minimize impact on daily operations. Consider phased construction or off-hours work.",
        ],
        bullets: [
          "Phased renovation approach",
          "Weekend and evening work schedules",
          "Temporary relocation strategies",
          "Clear communication with customers",
        ],
      },
      {
        heading: "3. Focus on Brand-Aligned Design",
        paragraphs: [
          "Your renovated space should reflect your brand identity and enhance the customer experience.",
        ],
        bullets: [
          "Consistent color schemes",
          "Strategic signage placement",
          "Customer flow optimization",
          "Lighting design for atmosphere",
        ],
      },
    ],
  },
];
