import type { Metadata } from "next"
import { SITE, SITE_URL } from "@/contents/site.constant"

type PageMetaInput = {
  /** <title> 에 들어갈 페이지 제목. 루트 template 에 의해 브랜드명이 붙습니다. */
  title: string
  description: string
  /** 슬래시로 끝나는 경로. 예: "/resume/" */
  path: string
  ogType?: "website" | "profile" | "article"
  /** 홈처럼 title 템플릿을 적용하지 않아야 하는 경우 사용합니다. */
  absoluteTitle?: boolean
}

const ogImage = {
  url: SITE.ogImage,
  width: 1200,
  height: 630,
  alt: `${SITE.name} 포트폴리오`,
}

/**
 * 페이지별 메타데이터를 만듭니다.
 * Next의 metadata는 openGraph/twitter 를 페이지에서 선언하면 루트 값을 상속하지 않으므로,
 * 이미지·사이트명·locale 처럼 매번 필요한 값을 이 헬퍼에서 항상 채워 넣습니다.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE.brand}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      siteName: SITE.brand,
      locale: SITE.locale,
      url,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SITE.ogImage],
    },
  }
}
