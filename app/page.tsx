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
  "산업디자인에서 출발해 UI/UX를 거쳐 프론트엔드 개발자로 일해왔습니다. React, Next.js, TypeScript로 LCA/LCCI, VCM Registry, 탄소 크레딧, Web3, IoT, STO처럼 복잡한 B2B 제품의 화면과 흐름을 만들었고, 최근에는 AI를 활용해 백엔드 구현까지 작업 범위를 넓히고 있습니다."

const strengths = [
  {
    label: "Product Interfaces",
    title: "복잡한 도메인의 제품 인터페이스를 만듭니다",
    desc: "탄소시장, LCA, Web3처럼 설명이 어려운 업무 규칙을 사용자가 따라갈 수 있는 화면과 흐름으로 정리합니다.",
  },
  {
    label: "Frontend Systems",
    title: "반복 가능한 프론트엔드 구조를 만듭니다",
    desc: "Data Grid, form validation, 상태 기반 ActionBar, 차트·리포트 UI처럼 운영 제품에 필요한 UI 패턴을 다뤄왔습니다.",
  },
  {
    label: "AI-assisted Tools",
    title: "AI를 활용해 빠르게 실험하고 구현합니다",
    desc: "프론트엔드를 중심으로 하되 AI 개발 워크플로우를 활용해 Spring Boot 기반 백엔드 도메인 구현과 테스트까지 확장하고 있습니다.",
  },
]

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
          <p
            lang="en"
            className="m-0 text-[1.44rem] leading-9 font-semibold text-ink-soft"
          >
            I build product interfaces
            <br />
            for complex domains.
          </p>
          <p className="m-0 mt-3 leading-7">
            산업디자인에서 출발해 UI/UX를 거쳐{" "}
            <Link href="/resume" className="underline underline-offset-4">
              프론트엔드 개발자
            </Link>
            로 일해왔습니다. 복잡한 아이디어를 사용자가 따라갈 수 있는 제품
            화면과 흐름으로 만듭니다.
          </p>
        </div>
      </section>

      <Reveal as="section" className="px-2 pb-6">
        <h2 className="mt-0 mb-4 text-[1.44rem] font-bold">Introduce.</h2>
        <p className="keep-all m-0 leading-relaxed text-muted">{introduce}</p>
      </Reveal>

      <Reveal as="section" className="px-2 pb-6" delay={40}>
        <h2 className="mt-0 mb-4 text-[1.44rem] font-bold">Things I make.</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {strengths.map(item => (
            <article
              key={item.label}
              className="border-primary/60 bg-primary-pale/20 border p-4"
            >
              <p
                lang="en"
                className="m-0 font-mono text-[11px] tracking-[0.12em] text-primary-text uppercase"
              >
                {item.label}
              </p>
              <h3 className="keep-all mt-3 mb-0 text-[1rem] leading-snug font-bold">
                {item.title}
              </h3>
              <p className="keep-all mt-3 mb-0 text-sm leading-6 text-muted">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
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
