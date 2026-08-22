import Link from "next/link"
import { SITE } from "@/contents/site.constant"
import route from "@/contents/route.constant"

/**
 * 빈 <footer> 랜드마크는 스크린리더에서 의미 없는 구역으로 남습니다.
 * 사이트 정보와 내부 링크를 담아 랜드마크 역할과 내부 링크 구조를 함께 살립니다.
 */
export default function SiteFooter() {
  return (
    <footer className="print-hidden text-muted mt-16 border-t border-[--color-line] pt-6 text-sm">
      <nav aria-label="푸터 메뉴">
        <ul role="list" className="flex flex-wrap gap-x-5 gap-y-2">
          {route.map(item => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="group"
                >
                  <span className="underline-swipe">
                    {item.label.toUpperCase()}
                  </span>
                  <span className="sr-only"> (새 창에서 열림)</span>
                </a>
              ) : (
                <Link href={item.link} className="group">
                  <span className="underline-swipe">
                    {item.label.toUpperCase()}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-5 mb-0">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <p className="mt-1 mb-0">
        © {SITE.name} · <span lang="en">{SITE.tagline}</span>
      </p>
    </footer>
  )
}
