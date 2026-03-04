export type Category = "all" | "commercial" | "residential" | (string & {});
export type ProjectType = "all" | "interior" | "construction" | (string & {});
export type ServiceCategory =
  | "all"
  | "residential"
  | "commercial"
  | (string & {});
export type LocationFilter = "all" | (string & {});

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
  location?: string;
  year?: string;
  address?: string;
  style?: string;
}
