import { SITE, SITE_URL } from "@/contents/site.constant"
import { getAllWritings } from "@/lib/writings"

export const dynamic = "force-static"

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export function GET() {
  const posts = getAllWritings()
  const latest = posts[0]?.date ?? new Date().toISOString().slice(0, 10)
  const items = posts
    .map(post => {
      const url = `${SITE_URL}/writing/${post.slug}/`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00+09:00`).toUTCString()}</pubDate>
      ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`
    })
    .join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${SITE.name} Writing`)}</title>
    <link>${SITE_URL}/writing/</link>
    <description>${escapeXml("강하은이 프론트엔드, 제품 인터페이스, 디자인, AI 개발 워크플로우에 대해 기록하는 글 모음입니다.")}</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date(`${latest}T00:00:00+09:00`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
