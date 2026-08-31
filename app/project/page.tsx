import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import PageShell from "@/components/PageShell"
import BulletList from "@/components/resume/BulletList"
import { others, selected, side } from "@/contents/project.constant"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"

const pageDescription =
  "강하은이 만든 제품 인터페이스, 프론트엔드 시스템, 사이드 프로젝트 기록입니다. VCM Registry, LCA/LCCI, 탄소 크레딧, 체육영역 등 복잡한 도메인을 제품 화면과 흐름으로 구현한 경험을 소개합니다."

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
            ...selected.map((project, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "CreativeWork",
                name: project.label,
                description: project.summary,
                keywords: project.stacks,
                author: { "@id": `${SITE_URL}/#person` },
              },
            })),
            ...side.map((project, idx) => ({
              "@type": "ListItem",
              position: selected.length + idx + 1,
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
              position: selected.length + side.length + idx + 1,
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
    <PageShell title="BUILD" width="wide">
      <ProjectJsonLd />

      <section className="pt-12">
        <p
          lang="en"
          className="m-0 font-mono text-xs tracking-[0.12em] text-primary-text uppercase"
        >
          Selected Works
        </p>
        <h2 className="keep-all mt-3 mb-0 max-w-3xl text-[1.728rem] leading-tight font-bold">
          복잡한 B2B 도메인을 사용자가 따라갈 수 있는 제품 흐름으로 바꾼 작업들
        </h2>
        <p className="keep-all mt-4 max-w-3xl text-sm leading-7 text-muted">
          제품 인터페이스, 프론트엔드 시스템, 사이드 프로젝트를 중심으로 직접
          만들었던 것들을 기록합니다. 공개 가능한 화면 자료가 제한된 실무
          프로젝트는 문제, 역할, 구현 방식, 결과 중심의 케이스 스터디로
          정리했습니다.
        </p>

        <div className="mt-8 space-y-5">
          {selected.map(project => (
            <article
              key={project.label}
              className="border-primary/50 bg-primary-pale/20 border p-5 md:p-7"
            >
              <div className="grid gap-5 md:grid-cols-[240px_1fr] md:gap-8">
                <div>
                  <h3
                    lang="en"
                    className="keep-all m-0 text-[1.25rem] leading-tight font-bold"
                  >
                    {project.label}
                  </h3>
                  <p className="keep-all mt-3 mb-0 text-sm leading-6 font-semibold text-primary-text">
                    {project.role}
                  </p>
                  <p className="mt-3 mb-0 font-mono text-[11px] leading-5 text-faint">
                    {project.scope}
                  </p>
                </div>

                <div>
                  <p className="keep-all m-0 text-[0.95rem] leading-7 text-ink-soft">
                    {project.summary}
                  </p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h4 className="m-0 mb-2 text-[0.85rem] font-semibold text-primary-text">
                        Problem
                      </h4>
                      <p className="keep-all m-0 text-sm leading-6 text-muted">
                        {project.problem}
                      </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <h4 className="m-0 mb-2 text-[0.85rem] font-semibold text-primary-text">
                          Solution
                        </h4>
                        <BulletList
                          items={project.solution}
                          idPrefix={`${project.label}-solution`}
                        />
                      </div>
                      <div>
                        <h4 className="m-0 mb-2 text-[0.85rem] font-semibold text-primary-text">
                          Impact
                        </h4>
                        <BulletList
                          items={project.impact}
                          idPrefix={`${project.label}-impact`}
                        />
                      </div>
                    </div>
                  </div>

                  <p
                    lang="en"
                    className="keep-all mt-5 mb-0 font-mono text-[11px] leading-5 text-primary-text"
                  >
                    {project.stacks}
                  </p>
                  {project.note ? (
                    <p className="keep-all mt-4 mb-0 border-l-2 border-primary pl-3 text-xs leading-6 text-faint">
                      {project.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-14">
        <p
          lang="en"
          className="m-0 font-mono text-xs tracking-[0.12em] text-primary-text uppercase"
        >
          Side Projects
        </p>
        <h2 className="m-0 mt-3 text-[1.728rem] font-bold">체육영역</h2>

        <div className="mt-6 space-y-0">
          {side.map(project => (
            <article
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
                <p className="keep-all m-0 mt-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-primary-text">문제 </span>
                  {project.problem}
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
                  <h4 className="sr-only">주요 구현</h4>
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
