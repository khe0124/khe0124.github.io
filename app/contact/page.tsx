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
    <PageShell title="CONTACT">
      <ContactJsonLd />

      <div className="m-auto flex flex-col justify-center p-6 text-center">
        <div className="flex flex-col items-center py-9 pb-4">
          <FishIcon variant="lined" asLink={false} />
          <p className="m-0 pt-4 text-sm text-primary-text">
            열대섬 해초속의 작은 개발자
          </p>
        </div>
        <p className="keep-all m-0 whitespace-pre-wrap text-muted">
          {`편하신 수단을 통해서\n연락주시기 바랍니다. 감사합니다.`}
        </p>
      </div>

      <div className="m-auto flex flex-col items-center gap-2 py-6">
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
