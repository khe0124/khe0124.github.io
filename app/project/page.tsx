import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import PageShell from "@/components/PageShell"
import BulletList from "@/components/resume/BulletList"
import { others, side } from "@/contents/project.constant"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"

const pageDescription =
  "강하은이 업무 외에 직접 만든 사이드 프로젝트 기록입니다. 체육영역 시즌1·2처럼 아이디어를 화면으로 옮기고 배포까지 해본 작업과, 그 과정에서 배운 점을 정리했습니다. 실무 경력은 이력서 페이지에 있습니다."

export const metadata: Metadata = buildMetadata({
  title: "Build",
  description: pageDescription,
  path: "/project/",
})

function ProjectJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([{ name: "Build", path: "/project/" }]),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/project/#collectionpage`,
        ...pageBase("/project/", `Build | ${SITE.brand}`, pageDescription),
        about: { "@id": `${SITE_URL}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            ...side.map((project, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "CreativeWork",
                name: project.label,
                description: project.desc,
                keywords: project.stacks,
                author: { "@id": `${SITE_URL}/#person` },
              },
            })),
            ...others.map((work, idx) => ({
              "@type": "ListItem",
              position: side.length + idx + 1,
              item: {
                "@type": "CreativeWork",
                name: work.label,
                description: `${work.value} · ${work.period}`,
                keywords: work.stacks,
                author: { "@id": `${SITE_URL}/#person` },
              },
            })),
          ],
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

export default function ProjectPage() {
  return (
    <PageShell title="Build" width="wide">
      <ProjectJsonLd />

      <section className="pt-12">
        <p
          lang="en"
          className="m-0 font-mono text-xs tracking-normal text-primary-text uppercase"
        >
          Side Projects
        </p>
        <h2 className="keep-all mt-3 mb-0 max-w-3xl text-[1.728rem] leading-tight font-bold">
          사이드 프로젝트들
        </h2>
        <p className="keep-all mt-4 max-w-3xl text-sm leading-7 text-muted">
          아이디어를 화면으로 구현하고 배포까지 해본 작업들입니다.
        </p>
      </section>

      <section className="pt-10">
        <h3 className="m-0 text-[1.25rem] font-bold">체육영역</h3>

        <div className="mt-6 space-y-0">
          {side.map(project => (
            <article
              key={project.label}
              className="grid gap-5 border-t border-line py-7 md:grid-cols-[200px_1fr] md:gap-6"
            >
              <div>
                <h4 className="keep-all m-0 text-[1.05rem] font-bold">
                  {project.label}
                </h4>
                {/* 역할 표기도 이력서의 회사 열과 동일한 위치·스타일을 씁니다. */}
                <p lang="en" className="m-0 mt-1 text-[0.85rem] text-faint">
                  {project.role}
                </p>
              </div>

              <div>
                {/* 프로젝트명 → 기술 스택 순서와 스타일을 이력서 페이지와 맞춥니다. */}
                <h5 className="keep-all m-0 text-[0.95rem] leading-snug font-medium text-ink">
                  {project.subtitle}
                </h5>
                <p
                  lang="en"
                  className="keep-all m-0 mt-1 font-mono text-[11px] leading-5 text-primary-text"
                >
                  {project.stacks}
                </p>
                <p className="keep-all m-0 mt-2 text-sm leading-7 text-ink-soft">
                  {project.desc}
                </p>
                <p className="keep-all m-0 mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-primary-text">문제 </span>
                  {project.problem}
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-6 sm:grid-cols-4">
                  {project.images.map((img, i) => (
                    <div
                      key={img}
                      className="relative aspect-[3/4] max-h-[310px] overflow-hidden rounded-[10px]"
                    >
                      <Image
                        src={img}
                        alt={`${project.label} 프로젝트 화면 ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 220px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-5">
                  <h6 className="sr-only">주요 구현</h6>
                  <BulletList
                    items={project.tasks}
                    idPrefix={`${project.label}-task`}
                  />
                </div>
                <p className="keep-all m-0 mt-4 text-sm leading-6 text-muted">
                  <span className="font-semibold text-primary-text">
                    배운 점{" "}
                  </span>
                  {project.learning}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-12">
        <h2 lang="en" className="m-0 text-[1.728rem] font-bold">
          Other Works
        </h2>

        <div className="mt-6">
          {others.map(work => (
            <article
              key={`${work.label}-${work.period}`}
              className="border-t border-line py-4"
            >
              <div className="flex items-baseline gap-2">
                <h3 className="m-0 py-2 text-[1.25rem] font-bold">
                  {work.label}
                </h3>
                <p className="m-0 text-sm text-muted">{work.period}</p>
              </div>
              <p className="keep-all m-0 text-ink-soft">{work.value}</p>
              <p
                lang="en"
                className="keep-all m-0 mt-1 font-mono text-[11px] leading-5 text-primary-text"
              >
                {work.stacks}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
