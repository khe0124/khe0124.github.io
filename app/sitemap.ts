import type { MetadataRoute } from "next"
import { SITE_URL } from "@/contents/site.constant"
import { getAllWritings } from "@/lib/writings"

export const dynamic = "force-static"

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/resume/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/project/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/writing/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.6 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = routes.map(route => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const writings = getAllWritings().map(post => ({
    url: `${SITE_URL}/writing/${post.slug}/`,
    lastModified: new Date(`${post.date}T00:00:00+09:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...writings]
}
