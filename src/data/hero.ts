export interface HeroSlide {
  image: string;
  alt: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction professionals at work",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    alt: "Commercial building construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern architecture project",
  },
];

export const AUTO_PLAY_INTERVAL = 5000;
