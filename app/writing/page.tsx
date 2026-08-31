import type { Metadata } from "next"
import Link from "next/link"
import PageShell from "@/components/PageShell"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"
import { buildMetadata } from "@/lib/seo"
import { formatDate, getWritingsByYear } from "@/lib/writings"

const pageDescription =
  "강하은이 프론트엔드, 제품 인터페이스, 디자인, AI 개발 워크플로우에 대해 기록하는 글 모음입니다."

export const metadata: Metadata = buildMetadata({
  title: "글",
  description: pageDescription,
  path: "/writing/",
})

function WritingJsonLd() {
  const years = getWritingsByYear()
  const posts = Object.values(years).flat()
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([{ name: "글", path: "/writing/" }]),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/writing/#collectionpage`,
        ...pageBase("/writing/", `글 | ${SITE.brand}`, pageDescription),
        about: { "@id": `${SITE_URL}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: posts.map((post, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              url: `${SITE_URL}/writing/${post.slug}/`,
              author: { "@id": `${SITE_URL}/#person` },
            },
          })),
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

export default function WritingPage() {
  const years = getWritingsByYear()
  const yearEntries = Object.entries(years).sort(([a], [b]) =>
    b.localeCompare(a),
  )

  return (
    <PageShell title="WRITING" titleTag="p">
      <WritingJsonLd />

      <section className="pt-12">
        <p
          lang="en"
          className="m-0 font-mono text-xs tracking-[0.12em] text-primary-text uppercase"
        >
          Notes and essays
        </p>
        <h1 className="keep-all mt-3 mb-0 text-[1.728rem] leading-tight font-bold">
          제품 인터페이스, 디자인, 개발에 대한 기록
        </h1>
        <p className="keep-all mt-4 mb-0 leading-7 text-muted">
          프론트엔드와 제품 만들기, 디자인에서 개발로 이어진 관심사, AI를 활용한
          작업 방식에 대해 씁니다.
        </p>
        <p className="mt-4 mb-0 text-sm text-muted">
          <a href="/feed.xml" className="underline underline-offset-4">
            RSS 구독
          </a>
        </p>
      </section>

      <nav aria-label="글 목록" className="mt-12 space-y-10">
        {yearEntries.map(([year, posts]) => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <h2
              id={`year-${year}`}
              className="font-title text-primary-text mt-0 mb-4 text-[1.44rem] font-bold"
            >
              <time dateTime={year}>{year}년</time>
            </h2>
            <ol role="list" className="m-0 space-y-4 p-0">
              {posts.map(post => (
                <li
                  key={post.slug}
                  className="border-line border-b pb-4 last:border-b-0"
                >
                  <Link
                    href={`/writing/${post.slug}`}
                    className="keep-all text-ink-soft underline-offset-4 hover:text-primary-text hover:underline"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 mb-0 text-sm leading-6 text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.description ? ` · ${post.description}` : null}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </nav>
    </PageShell>
  )
}
