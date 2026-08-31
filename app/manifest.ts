import type { MetadataRoute } from "next"
import { SITE } from "@/contents/site.constant"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "minimal-ui",
    background_color: "#ffffff",
    theme_color: "#718ffc",
    lang: "ko",
    icons: [
      {
        src: SITE.favicon,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
