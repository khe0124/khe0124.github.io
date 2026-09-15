"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import route from "@/contents/route.constant"

const internalRoutes = route.filter(item => !item.external)
const externalRoutes = route.filter(item => item.external)

export default function Nav() {
  const pathname = usePathname()

  const isActive = (link: string) =>
    pathname === link || pathname === `${link}/`

  // 외부 링크는 한 단계 작은 글자로 내려 사이트 내부 메뉴와 비중을 구분합니다.
  const itemClass = (active: boolean, size: "sm" | "xs" = "sm") =>
    `group font-title inline-block py-2 no-underline ${
      size === "xs" ? "text-xs" : "text-sm"
    } ${active ? "text-primary-text" : "text-ink-soft"}`

  return (
    <nav aria-label="주요 메뉴" className="border-line border-b py-4">
      {/*
       * 사이트 안의 페이지(왼쪽)와 바깥으로 나가는 링크(오른쪽)를 갈라
       * 같은 비중으로 읽히지 않게 합니다.
       */}
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1">
        <ul role="list" className="flex flex-wrap gap-x-5 gap-y-1">
          {internalRoutes.map(item => {
            const active = isActive(item.link)

            return (
              <li key={item.label}>
                <Link
                  href={item.link}
                  aria-current={active ? "page" : undefined}
                  className={itemClass(active)}
                >
                  <span className="underline-swipe">
                    {item.label.toUpperCase()}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <ul role="list" className="flex flex-wrap gap-x-5 gap-y-1">
          {externalRoutes.map(item => (
            <li key={item.label}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer me"
                className={itemClass(false, "xs")}
              >
                <span className="underline-swipe">
                  {item.label.toUpperCase()}
                </span>
                <span className="sr-only"> (새 창에서 열림)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
