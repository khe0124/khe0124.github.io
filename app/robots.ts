import type { MetadataRoute } from "next"
import { SITE_URL } from "@/contents/site.constant"

export const dynamic = "force-static"

/**
 * 생성형 검색(AEO/GEO)에 콘텐츠가 인용되도록 주요 AI 크롤러를 명시적으로 허용합니다.
 * `*` 규칙만으로도 허용이지만, 명시해 두면 의도가 분명해집니다.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
