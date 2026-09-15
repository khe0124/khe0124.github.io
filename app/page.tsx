import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Baskervville } from "next/font/google"
import PageShell from "@/components/PageShell"
import Reveal from "@/components/Reveal"
import SquareButton from "@/components/SquareButton"
import route from "@/contents/route.constant"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { pageBase } from "@/lib/jsonld"

export const metadata: Metadata = buildMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
})

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

/** 홈 페이지 구조화 데이터. 전역 Person/WebSite 노드에 연결해 실체를 하나로 묶습니다. */
function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    ...pageBase("/", SITE.title, SITE.description),
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function HomePage() {
  const primaryRoutes = route.filter(item => !item.external)
  const externalRoutes = route.filter(item => item.external)

  return (
    <PageShell>
      <HomeJsonLd />
      <section className="p-2">
        <div className="flex items-baseline">
          <h1 className="m-0 pr-4 text-[2.986rem] font-black">
            <span lang="en" className="text-gradient">
              Kang Haeun
            </span>
          </h1>
          <span className="h-10 w-10 shrink-0 rounded-full shadow-[0_4px_4px_0_rgba(0,47,134,0.2)]">
            <Image
              src="/images/fish_filled.svg"
              alt=""
              width={40}
              height={40}
              priority
              className="h-full w-full"
            />
          </span>
        </div>

        <div className="keep-all py-6 text-muted">
          <p
            lang="en"
            className={`${baskervville.className} text-[1.44rem] leading-7 pb-1 font-normal text-ink-soft`}
          >
            I build product interfaces
            <br />
            for complex domains.
          </p>
          <p className="keep-all m-0 mt-3 break-normal text-[0.9rem] leading-[inherit]">
            산업디자인에서 출발해 UI/UX를 거쳐 프론트엔드 개발자로 일해왔습니다.<br />
            React, Next.js, TypeScript로 LCA/LCCI, VCM Registry, 탄소 크레딧,
            Web3, IoT, STO처럼 복잡한 B2B 제품의 화면과 흐름을 만들었고,
            최근에는 AI를 활용해 백엔드 구현까지 작업 범위를 넓히고 있습니다.
          </p>
        </div>
      </section>
      <Reveal as="section" className="px-2 pb-6" delay={80}>
        <nav aria-label="바로가기">
          <h2 className="sr-only">바로가기</h2>
          <div className="space-y-1.5 py-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className={`mb-4 text-base ${baskervville.className}`}>Works</p>
                <div className="flex flex-col gap-1.5">
                  {primaryRoutes.map(item => (
                    <SquareButton
                      key={item.label}
                      label={item.label.toUpperCase()}
                      link={item.link}
                      external={item.external}
                      emoji={item.emoji}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-4 text-base ${baskervville.className}`}>Links</p>
                <div className="flex flex-col gap-1.5">
                  {externalRoutes.map(item => (
                    <SquareButton
                      key={item.label}
                      label={item.label.toUpperCase()}
                      link={item.link}
                      external={item.external}
                      emoji={item.emoji}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Reveal>
    </PageShell>
  )
}
