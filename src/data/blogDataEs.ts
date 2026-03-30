/**
 * Spanish translations for blog post metadata (titles, excerpts).
 * Full article content falls back to English via blogDataFull.ts.
 */

const BLOG_IMG = "https://zrlonqczjzkgzmxiwdcl.supabase.co/storage/v1/object/public/blog-images";

import type { BlogPost, BlogFilterCategoryId, MajorCategoryId } from "./blogData";
import { blogPosts } from "./blogData";

export const categoriesEs: { id: BlogFilterCategoryId; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "Comparisons & Analysis", label: "Comparaciones y análisis" },
  { id: "Discoveries & Beginings", label: "Descubrimientos e inicios" },
  { id: "Film Business School", label: "Escuela de negocios cinematográficos" },
  { id: "Film Maker Interviews", label: "Entrevistas a cineastas" },
  { id: "How-Tos & Insights", label: "Guías y perspectivas" },
  { id: "News & Updates", label: "Noticias y actualizaciones" },
  { id: "Production & Producing", label: "Producción y realización" },
  { id: "Art of Film", label: "El arte del cine" },
];

export const majorCategoriesEs: { id: MajorCategoryId; slug: string; description: string }[] = [
  { id: "Industry Insights", slug: "industry-insights", description: "Análisis basados en datos, comparaciones y profundizaciones en la industria cinematográfica." },
  { id: "Production Tips", slug: "production-tips", description: "Consejos prácticos, actualizaciones de producto y trucos de flujo de trabajo para cineastas modernos." },
  { id: "Filmmaker Interviews", slug: "filmmaker-interviews", description: "Conversaciones con cineastas compartiendo sus historias, trayectorias y oficio." },
];

// Reuse English blog posts with same slugs — content falls back to English
export const blogPostsEs: BlogPost[] = blogPosts.map(post => ({ ...post }));
