import type { MetadataRoute } from "next"
import { SITE_URL } from "@/contents/site.constant"

export const dynamic = "force-static"

/**
 * 일반 검색엔진 크롤링은 허용하되, 모델 학습·AI 데이터 수집 목적의 크롤러는 차단합니다.
 * robots.txt는 협조적 크롤러를 위한 신호이므로, 악의적/비준수 봇을 기술적으로 막는 장치는 아닙니다.
 */
const AI_TRAINING_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
  "Meta-ExternalAgent",
  "FacebookBot",
  "cohere-ai",
  "AI2Bot",
  "Diffbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_TRAINING_CRAWLERS, disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
