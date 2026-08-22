"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** 등장 지연(ms). 목록을 순차적으로 나타낼 때 사용합니다. */
  delay?: number
}

/**
 * 스크롤 시 요소를 부드럽게 등장시킵니다.
 * 기존 AOS 라이브러리를 IntersectionObserver 기반으로 대체해 의존성을 제거했습니다.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      node.dataset.visible = "true"
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          window.setTimeout(() => {
            node.dataset.visible = "true"
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
