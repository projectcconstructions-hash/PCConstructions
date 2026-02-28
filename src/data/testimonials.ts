export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    name: "CLIENT ONE",
    role: "HOUSE OWNER",
    text: "Project C Constructions delivered exceptional quality and attention to detail from start to finish. The team maintained clear communication, followed timelines strictly, and ensured every aspect of the project met our expectations.",
    rating: 5,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    name: "CLIENT TWO",
    role: "CAFE OWNER",
    text: "Working with Project C Constructions was a smooth and professional experience. Their expertise, workmanship, and commitment to quality were evident throughout the project. The space was delivered exactly as promised, both in design and functionality.",
    rating: 5,
  },
];
