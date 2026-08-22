import type { ReactNode } from "react"
import FishIcon from "@/components/FishIcon"
import Nav from "@/components/Nav"
import SiteFooter from "@/components/SiteFooter"

type PageShellProps = {
  /** 페이지 상단에 노출되는 제목. 홈에서는 생략합니다. */
  title?: string
  /**
   * 상단 제목의 태그. 페이지 본문이 더 서술적인 h1을 따로 가질 때(예: 이력서)
   * "p"로 내려 h1이 중복되지 않게 합니다.
   */
  titleTag?: "h1" | "p"
  /** 이력서·프로젝트처럼 2단 레이아웃이 필요한 페이지는 wide를 사용합니다. */
  width?: "narrow" | "wide"
  children: ReactNode
}

export default function PageShell({
  title,
  titleTag: TitleTag = "h1",
  width = "narrow",
  children,
}: PageShellProps) {
  const maxWidth = width === "wide" ? "max-w-5xl" : "max-w-2xl"

  return (
    <div className={`mx-auto w-full ${maxWidth} px-5 py-10`}>
      <a href="#main" className="skip-link">
        본문 바로가기
      </a>

      {title ? (
        <>
          <header className="print-hidden flex items-center">
            <FishIcon />
            {/* 영문 제목이라 한국어 음성으로 읽히지 않도록 언어를 표시합니다 (WCAG 3.1.2). */}
            <TitleTag
              lang="en"
              className="font-title text-primary-text m-0 pl-4 text-[2.074rem] font-black"
            >
              {title}
            </TitleTag>
          </header>
          <div className="print-hidden">
            <Nav />
          </div>
        </>
      ) : null}

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
