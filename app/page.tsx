import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
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

const introduce =
  "산업디자인을 전공하고 UI/UX 디자이너로 일하다가, 화면을 그리는 데서 멈추지 않고 직접 동작하게 만들고 싶어 프론트엔드 개발자가 됐습니다. 이후 7년간 React, Next.js, TypeScript를 중심으로 LCA/LCCI, 탄소 크레딧, VCM 레지스트리, Web3, IoT, STO 같은 도메인에서 입력·검증·시각화·리포트·운영 화면을 설계하고 구현했습니다. 복잡한 업무 규칙을 사용자가 실제로 따라갈 수 있는 흐름으로 바꾸는 일에 강점이 있고, 대규모 입력·검증 UI, Flow Editor, API 전환, i18n, 공통 컴포넌트 구축 경험을 쌓았습니다. 최근에는 AI를 활용해 백엔드 도메인 구현까지 작업 범위를 넓히며, 제품 전체를 만드는 개발자로 확장해 나가고 있습니다."

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
  return (
    <PageShell>
      <HomeJsonLd />
      <section className="px-2 pb-6">
        <div className="flex items-baseline">
          <h1 className="m-0 pr-4 text-[2.986rem] font-black">
            <span lang="en" className="text-gradient">
              Kang Haeun
            </span>
          </h1>
          <span className="animate-fish h-10 w-10 shrink-0 rounded-full shadow-[0_4px_4px_0_rgba(0,47,134,0.2)]">
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
          <p className="m-0">
            산업디자인에서 출발해 UI/UX를 거쳐 7년간{" "}
            <Link href="/resume">프론트엔드 개발</Link>을 해왔습니다.
          </p>
          <p className="m-0">
            현재는 AI를 활용하여 풀스택 개발까지 범위를 확장해 나가고 있습니다.
          </p>
        </div>
      </section>

      <Reveal as="section" className="px-2 pb-6">
        <h2 className="mt-0 mb-4 text-[1.44rem] font-bold">Introduce.</h2>
        <p className="keep-all m-0 leading-relaxed text-muted">{introduce}</p>
      </Reveal>

      <Reveal as="section" className="px-2 pb-6" delay={80}>
        <nav aria-label="바로가기">
          <h2 className="sr-only">바로가기</h2>
          <div className="grid gap-1.5 py-6 md:grid-cols-2">
            {route.map(item => (
              <SquareButton
                key={item.label}
                label={item.label.toUpperCase()}
                link={item.link}
                external={item.external}
                emoji={item.emoji}
              />
            ))}
          </div>
        </nav>
      </Reveal>
    </PageShell>
  )
}
