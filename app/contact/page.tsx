import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import FishIcon from "@/components/FishIcon"
import PageShell from "@/components/PageShell"
import SquareButton from "@/components/SquareButton"
import extlink from "@/contents/contact.constant"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"

const pageDescription =
  "프론트엔드 개발자 강하은에게 연락하기 — 이메일, GitHub, LinkedIn으로 연락하실 수 있습니다."

export const metadata: Metadata = buildMetadata({
  title: "연락처",
  description: pageDescription,
  path: "/contact/",
})

function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([{ name: "연락처", path: "/contact/" }]),
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact/#contactpage`,
        ...pageBase("/contact/", `연락처 | ${SITE.brand}`, pageDescription),
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: SITE.name,
          email: SITE.email,
          sameAs: [...SITE.sameAs],
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

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <ContactJsonLd />

      <div className="m-auto flex flex-col justify-center p-6 text-center">
        <div className="flex flex-col items-center py-9 pb-4">
          <FishIcon variant="lined" asLink={false} />
          <p className="m-0 pt-4 text-sm text-primary-text">
            복잡한 제품을 함께 풀어가는 프론트엔드 개발자
          </p>
        </div>
        <p className="keep-all m-0 whitespace-pre-wrap text-muted">
          {`복잡한 B2B 제품 UI, 데이터 입력·검증 화면,\nAI-assisted full-stack 개발 이야기를 편하게 나눌 수 있습니다.`}
        </p>
        <ul className="keep-all mt-3 mb-0 space-y-1 pt-4 text-sm leading-6 text-muted">
          <li>- 프론트엔드 포지션</li>
          <li>- UI/UX 디자인</li>
          <li>- 제품 UI 구조화와 운영 화면</li>
          <li>- 사이드 프로젝트와 협업</li>
        </ul>
      </div>
      <div className="m-auto flex flex-col items-center gap-2 py-3">
        {extlink.map(item => (
          <SquareButton
            key={item.label}
            label={item.label.toUpperCase()}
            link={item.link}
            external
            emoji={item.emoji}
            icon={item.icon}
          />
        ))}
      </div>
    </PageShell>
  )
}
