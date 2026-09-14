"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { SITE } from "@/contents/site.constant"

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5.25 7.25 6.75 5.5 6.75-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      <path
        d="m6 14 6-6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 240)

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })

    return () => window.removeEventListener("scroll", updateVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      aria-label="빠른 링크"
      className={`print-hidden fixed right-5 bottom-5 z-40 flex flex-col items-center gap-2 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <a
        href={`mailto:${SITE.email}`}
        className="grid h-10 w-10 cursor-pointer place-items-center border border-line bg-white text-ink-soft shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-colors hover:border-primary-text hover:text-primary-text"
        aria-label="메일 보내기"
      >
        <MailIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/khe0124"
        target="_blank"
        rel="noopener noreferrer me"
        className="grid h-10 w-10 cursor-pointer place-items-center border border-line bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-colors hover:border-primary-text"
        aria-label="LinkedIn 열기 (새 창)"
      >
        <Image src="/images/linkedin.svg" alt="" width={18} height={18} />
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        className="grid h-10 w-10 cursor-pointer place-items-center border border-primary-text bg-primary-text text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-colors hover:bg-white hover:text-primary-text"
        aria-label="맨 위로 이동"
      >
        <ArrowUpIcon />
      </button>
    </div>
  )
}
