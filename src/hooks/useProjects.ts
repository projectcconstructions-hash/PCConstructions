import { useState, useEffect, useMemo } from "react";
import type { Project, Category } from "../data/projects";

const API_URL = "https://pcconstructions.ca/admin/api/projects.php";

interface ApiProject {
  title: string;
  images: string[];
  location: string;
  type: string;
  year: string;
  address: string;
  style: string;
  description: string;
  image_count: number;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function transformApiProject(key: string, apiProject: ApiProject): Project {
  const categoryValue = apiProject.type.toLowerCase();

  return {
    id: key.replace(/_/g, "-"),
    name: apiProject.title.split(" - ")[0].trim(),
    image: apiProject.images[0] || "",
    category: [categoryValue] as Category[],
    description: apiProject.description,
    gallery: apiProject.images,
    scope: `Complete ${categoryValue} ${apiProject.style.toLowerCase()} renovation including custom interior design, signage, and finishing works.`,
    area: `${apiProject.address}, ${capitalize(apiProject.location)}`,
    duration: `Completed in ${apiProject.year}`,
    type: apiProject.style?.toLowerCase() || "construction",
    location: apiProject.location.toLowerCase(),
    year: apiProject.year,
    address: apiProject.address,
    style: apiProject.style,
  };
}

let cachedProjects: Project[] | null = null;
let fetchPromise: Promise<Project[]> | null = null;

async function fetchProjectsFromApi(): Promise<Project[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data: Record<string, ApiProject> = await response.json();
  return Object.entries(data).map(([key, val]) =>
    transformApiProject(key, val),
  );
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
    if (cachedProjects) {
      setProjects(cachedProjects);
      setLoading(false);
      return;
    }

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
