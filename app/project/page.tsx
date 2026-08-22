import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import PageShell from "@/components/PageShell"
import BulletList from "@/components/resume/BulletList"
import { others, side } from "@/contents/project.constant"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"

const pageDescription =
  "프론트엔드 개발자 강하은이 진행한 사이드 프로젝트와 외주 작업물 모음입니다. 체육영역 시즌1·2를 비롯한 React·Vue 기반 프로젝트를 소개합니다."

export const metadata: Metadata = buildMetadata({
  title: "프로젝트",
  description: pageDescription,
  path: "/project/",
})

function ProjectJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([{ name: "프로젝트", path: "/project/" }]),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/project/#collectionpage`,
        ...pageBase("/project/", `프로젝트 | ${SITE.brand}`, pageDescription),
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
                name: work.value,
                description: `${work.label} · ${work.period}`,
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
    <PageShell title="PROJECT" width="wide">
      <ProjectJsonLd />

      <section className="pt-12">
        <h2 lang="en" className="m-0 text-[1.728rem] font-bold">
          Side Project
        </h2>

        <div className="mt-6 space-y-0">
          {side.map(project => (
            <div
              key={project.label}
              className="grid gap-5 border-t border-line py-7 md:grid-cols-[200px_1fr] md:gap-6"
            >
              <div>
                <h3 className="keep-all m-0 pb-2 text-[1.25rem] font-bold">
                  {project.label}
                </h3>
              </div>

              <div>
                <p className="m-0 font-bold text-primary-text">
                  {project.role}
                </p>
                <p className="keep-all m-0 mt-2 text-sm leading-7 text-ink-soft">
                  {project.desc}
                </p>
                <p className="keep-all m-0 mt-3 text-sm text-faint">
                  <span lang="en" className="mr-2 font-bold text-primary-text">
                    Stacks
                  </span>
                  <span lang="en">{project.stacks}</span>
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
                  <BulletList
                    items={project.tasks}
                    idPrefix={`${project.label}-task`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-12">
        <h2 lang="en" className="m-0 text-[1.728rem] font-bold">
          Other Works
        </h2>

        <div className="mt-6">
          {others.map(work => (
            <div
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
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
