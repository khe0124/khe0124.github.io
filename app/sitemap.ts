import type { MetadataRoute } from "next"
import { SITE_URL } from "@/contents/site.constant"

export const dynamic = "force-static"

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/resume/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/project/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.6 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(route => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
