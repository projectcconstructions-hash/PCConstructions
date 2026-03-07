import { useState, useEffect, useMemo } from "react";
import type { Project, Category } from "../data/projects";

const API_URL = "https://pcconstructions.ca/admin/api/gallery.php";

interface GalleryProject {
  folder: string;
  title: string;
  description: string | null;
  location: string | null;
  address: string | null;
  type: string | null;
  style: string | null;
  year: string | null;
  image_count: number;
  images: string[];
}

interface GalleryApiResponse {
  success: boolean;
  total_projects: number;
  projects: GalleryProject[];
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function extractFolderFromImages(images: string[]): string {
  if (!images.length) return "unknown";
  const match = images[0].match(/\/gallery\/([^/]+)\//);
  return match ? match[1] : "unknown";
}

function transformGalleryProject(gp: GalleryProject): Project {
  const folder = gp.folder || extractFolderFromImages(gp.images);
  const categoryValue = (gp.type || "commercial").toLowerCase();
  const styleLower = (gp.style || "construction").toLowerCase();
  const locationVal = (gp.location || "").toLowerCase();

  return {
    id: folder.toLowerCase(),
    name: gp.title.split(" - ")[0].trim(),
    image: gp.images[0] || "",
    category: [categoryValue] as Category[],
    description: gp.description || "",
    gallery: gp.images,
    scope: `Complete ${categoryValue} ${styleLower} renovation including custom interior design, signage, and finishing works.`,
    area: gp.address
      ? `${gp.address}, ${capitalize(gp.location || "")}`
      : capitalize(gp.location || ""),
    duration: gp.year ? `Completed in ${gp.year}` : "",
    type: styleLower,
    location: locationVal,
    year: gp.year || "",
    address: gp.address || "",
    style: gp.style || "",
  };
}

let cachedProjects: Project[] | null = null;
let fetchPromise: Promise<Project[]> | null = null;

async function fetchProjectsFromApi(): Promise<Project[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data: GalleryApiResponse = await response.json();
  if (!data.success) throw new Error("Gallery API returned an error");
  return data.projects.map(transformGalleryProject);
}

function getProjects(): Promise<Project[]> {
  if (cachedProjects) return Promise.resolve(cachedProjects);
  if (!fetchPromise) {
    fetchPromise = fetchProjectsFromApi()
      .then((projects) => {
        cachedProjects = projects;
        fetchPromise = null;
        return projects;
      })
      .catch((err) => {
        fetchPromise = null;
        throw err;
      });
  }
  return fetchPromise;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(cachedProjects || []);
  const [loading, setLoading] = useState(!cachedProjects);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedProjects) return;

    let cancelled = false;
    getProjects()
      .then((data) => {
        if (!cancelled) {
          setProjects(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, error };
}

export function useLocationOptions(projects: Project[]) {
  return useMemo(() => {
    const locations = [
      ...new Set(projects.map((p) => p.location).filter(Boolean) as string[]),
    ];
    return [
      { label: "All Locations", value: "all" },
      ...locations.map((loc) => ({
        label: capitalize(loc),
        value: loc,
      })),
    ];
  }, [projects]);
}

export function useCategoryTabs(projects: Project[]) {
  return useMemo(() => {
    const categories = [
      ...new Set(projects.flatMap((p) => p.category).filter(Boolean)),
    ];
    return [
      { label: "ALL", value: "all" as Category },
      ...categories.map((cat) => ({
        label: cat.toUpperCase(),
        value: cat as Category,
      })),
    ];
  }, [projects]);
}

export function useServiceCategoryOptions(projects: Project[]) {
  return useMemo(() => {
    const categories = [
      ...new Set(projects.flatMap((p) => p.category).filter(Boolean)),
    ];
    return [
      { label: "All Services", value: "all" },
      ...categories.map((cat) => ({
        label: capitalize(cat),
        value: cat,
      })),
    ];
  }, [projects]);
}

export function useProjectTypeOptions(projects: Project[]) {
  return useMemo(() => {
    const types = [
      ...new Set(projects.map((p) => p.type).filter(Boolean) as string[]),
    ];
    return [
      { label: "All Types", value: "all" },
      ...types.map((t) => ({
        label: capitalize(t),
        value: t,
      })),
    ];
  }, [projects]);
}

export function useProject(id: string | undefined) {
  const { projects, loading, error } = useProjects();
  const project = id ? projects.find((p) => p.id === id) : undefined;
  return { project, loading, error };
}
