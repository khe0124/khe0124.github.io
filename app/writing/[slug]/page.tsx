import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import PageShell from "@/components/PageShell"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"
import { buildMetadata } from "@/lib/seo"
import { formatDate, getAllWritings, getWriting } from "@/lib/writings"

export const dynamic = "force-static"

export function generateStaticParams() {
  return getAllWritings().map(post => ({ slug: post.slug }))
}

type WritingDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: WritingDetailProps): Promise<Metadata> {
  const { slug } = await params
  const post = getWriting(slug)
  if (!post) return {}

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}/`,
    ogType: "article",
  })
}

function WritingDetailJsonLd({ slug }: { slug: string }) {
  const post = getWriting(slug)
  if (!post) return null

  const path = `/writing/${post.slug}/`
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "글", path: "/writing/" },
        { name: post.title, path },
      ]),
      {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}${path}#blogposting`,
        ...pageBase(path, `${post.title} | ${SITE.brand}`, post.description),
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        keywords: post.tags.join(", "),
        inLanguage: post.lang === "ko" ? "ko-KR" : "en",
        mainEntityOfPage: `${SITE_URL}${path}`,
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

export default async function WritingDetailPage({
  params,
}: WritingDetailProps) {
  const { slug } = await params
  const post = getWriting(slug)
  if (!post) notFound()

  return (
    <PageShell title="WRITING" titleTag="p">
      <WritingDetailJsonLd slug={slug} />

      <article className="pt-12">
        <Link
          href="/writing"
          className="text-sm text-primary-text underline underline-offset-4"
        >
          Writing 목록으로 돌아가기
        </Link>

        <header className="mt-8">
          <p
            lang="en"
            className="m-0 font-mono text-xs tracking-[0.12em] text-primary-text uppercase"
          >
            {post.tags.join(" · ") || "writing"}
          </p>
          <h1 className="keep-all mt-3 mb-0 text-[2.074rem] leading-tight font-bold">
            {post.title}
          </h1>
          <p className="mt-4 mb-0 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          {post.description ? (
            <p className="keep-all mt-5 mb-0 leading-7 text-muted">
              {post.description}
            </p>
          ) : null}
        </header>

        <div
          className="writing-body keep-all mt-10 leading-8 text-ink-soft"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </PageShell>
  )
}
