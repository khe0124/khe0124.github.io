import type { Metadata, Viewport } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { SITE, SITE_URL } from "@/contents/site.constant"
import "./globals.css"

// 가변 폰트로 불러옵니다. weight를 나열하면 한글 서브셋 × weight 만큼 @font-face가 생겨
// 렌더링을 막는 CSS가 수백 KB로 불어납니다.
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.brand,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.brand,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: SITE.locale,
    url: SITE_URL,
    title: SITE.brand,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} 포트폴리오`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.brand,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#718ffc",
  width: "device-width",
  initialScale: 1,
}

/** 사이트 전역 구조화 데이터 (SEO/AEO). 검색·AI 크롤러가 인물과 사이트를 식별합니다. */
function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE.brand,
        url: `${SITE_URL}/`,
        inLanguage: "ko-KR",
        description: SITE.description,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE.name,
        alternateName: SITE.nameEn,
        jobTitle: [...SITE.jobTitles],
        description: SITE.description,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${SITE.ogImage}`,
        email: SITE.email,
        sameAs: [...SITE.sameAs],
        knowsAbout: [...SITE.knowsAbout],
        worksFor: { "@type": "Organization", name: "Greenery" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "국민대학교" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seoul",
          addressCountry: "KR",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE.lang} className={notoSansKr.variable}>
      <head>
        <SiteJsonLd />
        {/* 스크롤 등장 효과는 JS로 켜집니다. JS가 없으면 콘텐츠가 숨겨지지 않도록 되돌립니다. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
