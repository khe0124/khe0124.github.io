"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import route from "@/contents/route.constant"

export default function Nav() {
  const pathname = usePathname()

  const isActive = (link: string) =>
    pathname === link || pathname === `${link}/`

  return (
    <nav aria-label="주요 메뉴" className="border-line border-b py-4">
      <ul role="list" className="flex flex-wrap gap-x-5 gap-y-2">
        {route.map(item => {
          const active = !item.external && isActive(item.link)
          const className = `group font-title inline-block py-2 no-underline ${
            active ? "text-primary-text" : "text-ink-soft"
          }`

          return (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className={className}
                >
                  <span className="underline-swipe">{item.label}</span>
                  <span className="sr-only"> (새 창에서 열림)</span>
                </a>
              ) : (
                <Link
                  href={item.link}
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  <span className="underline-swipe">{item.label}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
