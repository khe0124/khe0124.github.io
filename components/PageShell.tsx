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
  /** 기존 호출 호환을 위해 유지하며, PC 콘텐츠 폭은 모든 페이지에서 동일합니다. */
  width?: "narrow" | "wide"
  children: ReactNode
}

export default function PageShell({
  title,
  titleTag: TitleTag = "h1",
  children,
}: PageShellProps) {
  const maxWidth = "max-w-2xl"

  return (
    <div className={`mx-auto w-full ${maxWidth} px-5 py-10`}>
      <a href="#main" className="skip-link">
        본문 바로가기
      </a>

      {title ? (
        <>
          <header className="site-header print-hidden flex h-10 min-h-10 items-center">
            <FishIcon />
            {/* 영문 제목이라 한국어 음성으로 읽히지 않도록 언어를 표시합니다 (WCAG 3.1.2). */}
            <TitleTag
              lang="en"
              className="font-title text-primary-text m-0 pl-4 text-[2.074rem] font-black"
            >
              {title}
            </TitleTag>
          </header>
          <div className="site-nav print-hidden min-h-[65px]">
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
