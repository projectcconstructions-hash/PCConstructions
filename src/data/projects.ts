export type Category = "all" | "commercial" | "residential";
export type ProjectType = "all" | "interior" | "construction";
export type ServiceCategory = "all" | "residential" | "commercial";
export type LocationFilter = "all" | "location-1" | "location-2" | "location-3";

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
  type?: ProjectType;
}

export const PROJECT_TYPE_OPTIONS: { label: string; value: ProjectType }[] = [
  { label: "All Types", value: "all" },
  { label: "Interior", value: "interior" },
  { label: "Construction", value: "construction" },
];

export const SERVICE_CATEGORY_OPTIONS: {
  label: string;
  value: ServiceCategory;
}[] = [
  { label: "All Services", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
];

export const LOCATION_OPTIONS: { label: string; value: LocationFilter }[] = [
  { label: "All Locations", value: "all" },
  { label: "Location 1", value: "location-1" },
  { label: "Location 2", value: "location-2" },
  { label: "Location 3", value: "location-3" },
];

export const CATEGORY_TABS: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "COMMERCIAL", value: "commercial" },
  { label: "RESIDENTIAL", value: "residential" },
];

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

export const ALL_PROJECTS: Project[] = [
  ...PROJECTS,
  {
    id: "project-7",
    name: "Project One",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description:
      "Modern residential interior renovation with premium finishes.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Interior renovation with premium furnishings.",
    area: "Total project area of 1,200 sq. ft.",
    duration: "Completed within a 6-week timeline.",
    type: "interior",
  },
  {
    id: "project-8",
    name: "Project Two",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&q=80",
    category: ["commercial"],
    description: "Commercial space renovation with modern design.",
    gallery: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Complete commercial fit-out.",
    area: "Total project area of 2,800 sq. ft.",
    duration: "Completed within a 14-week timeline.",
    type: "construction",
  },
  {
    id: "project-9",
    name: "Project One",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description: "Luxury bathroom renovation project.",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Bathroom renovation with premium fixtures.",
    area: "Total project area of 600 sq. ft.",
    duration: "Completed within a 4-week timeline.",
    type: "interior",
  },
  {
    id: "project-10",
    name: "Project Two",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    category: ["commercial"],
    description: "Office space redesign and renovation.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Complete office renovation.",
    area: "Total project area of 3,000 sq. ft.",
    duration: "Completed within a 12-week timeline.",
    type: "construction",
  },
  {
    id: "project-11",
    name: "Project One",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description: "Residential living space transformation.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Living room and dining area renovation.",
    area: "Total project area of 1,400 sq. ft.",
    duration: "Completed within a 7-week timeline.",
    type: "interior",
  },
  {
    id: "project-12",
    name: "Project Two",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    category: ["residential"],
    description: "Premium residential kitchen renovation.",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    scope: "Kitchen redesign with premium appliances.",
    area: "Total project area of 500 sq. ft.",
    duration: "Completed within a 5-week timeline.",
    type: "construction",
  },
];
