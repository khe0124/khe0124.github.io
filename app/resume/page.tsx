import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import PageShell from "@/components/PageShell"
import BulletList from "@/components/resume/BulletList"
import DownloadResumeButton from "@/components/resume/DownloadResumeButton"
import { SITE, SITE_URL } from "@/contents/site.constant"
import { breadcrumbJsonLd, pageBase } from "@/lib/jsonld"
import {
  description,
  experience,
  highlights,
  spec,
} from "@/contents/resume.constant"

const pageDescription =
  "프론트엔드 개발자 강하은의 경력기술서입니다. LCA/LCCI, 탄소 크레딧, Web3, IoT, STO 도메인에서의 프로젝트 경험과 기술 스택, 학력 및 자격증을 소개합니다."

export const metadata: Metadata = buildMetadata({
  title: "이력서",
  description: pageDescription,
  path: "/resume/",
  ogType: "profile",
})

/** "2022.09" 처럼 점으로 구분된 연월을 ISO 8601("2022-09")로 바꿉니다. */
function toIsoMonth(value: string | undefined): string | undefined {
  const match = value?.trim().match(/^(\d{4})[.\-/](\d{1,2})$/)
  if (!match) return value?.trim() || undefined
  return `${match[1]}-${match[2].padStart(2, "0")}`
}

/** 이력서 구조화 데이터. 경력 각 건을 OrganizationRole 로 노출해 AI/검색이 경력을 읽을 수 있게 합니다. */
function ResumeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([{ name: "이력서", path: "/resume/" }]),
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/resume/#profilepage`,
        ...pageBase("/resume/", `이력서 | ${SITE.brand}`, pageDescription),
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: SITE.name,
          alternateName: SITE.nameEn,
          jobTitle: [...SITE.jobTitles],
          description,
          email: SITE.email,
          url: `${SITE_URL}/`,
          sameAs: [...SITE.sameAs],
          knowsAbout: [...SITE.knowsAbout],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Seoul",
            addressCountry: "KR",
          },
          hasOccupation: experience
            .filter(company => Boolean(company.year))
            .map(company => {
              const [start, end] = company.year.split(" - ")
              return {
                "@type": "OrganizationRole",
                roleName: company.role || SITE.jobTitle,
                namedPosition: company.role || SITE.jobTitle,
                // schema.org 는 ISO 8601 을 요구하므로 "2022.09" -> "2022-09" 로 변환합니다.
                startDate: toIsoMonth(start),
                ...(end && end !== "Present"
                  ? { endDate: toIsoMonth(end) }
                  : {}),
                worksFor: { "@type": "Organization", name: company.company },
                description: company.projects.map(p => p.title).join(", "),
              }
            }),
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: spec.education.name,
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: spec.certificate.name,
            dateCreated: spec.certificate.year,
          },
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

export default function ResumePage() {
  return (
    <PageShell title="RESUME" titleTag="p" width="wide">
      <ResumeJsonLd />

      <div className="resume-actions mb-8 flex items-center justify-end pt-6">
        <DownloadResumeButton />
      </div>

      <article className="resume-print">
        <header className="border-b border-line pb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                lang="en"
                className="m-0 font-mono text-[0.8rem] tracking-[0.1em] text-primary-text"
              >
                FRONTEND DEVELOPER
              </p>
              <h1 className="mt-3 text-[2rem] leading-tight font-bold text-ink">
                {SITE.name}
              </h1>
            </div>
            <div
              lang="en"
              className="font-mono text-xs leading-6 text-muted md:text-right"
            >
              <p className="m-0">{SITE.location}</p>
              <p className="m-0">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-muted no-underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="m-0">khe0124.github.io</p>
            </div>
          </div>
          <p className="keep-all mt-8 max-w-3xl text-[0.95rem] leading-7 text-ink-soft">
            {description}
          </p>
        </header>

        <section className="flex flex-col gap-5 border-b border-line py-8">
          <h2 lang="en" className="m-0 text-[1.2rem] font-medium">
            Highlights
          </h2>
          <ul role="list" className="flex list-none flex-wrap gap-2">
            {highlights.map(item => (
              <li
                key={item}
                className="keep-all border-primary border px-3 py-1.5 text-xs text-primary-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-6 border-b border-line py-8">
          <h2 lang="en" className="m-0 text-[1.2rem] font-medium">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((company, companyIdx) => (
              <div
                key={`${company.company}-${companyIdx}`}
                className="grid gap-5 border-b border-line-soft pb-8 last:border-b-0 last:pb-0 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div>
                  <h3 className="m-0 text-[1rem] font-medium text-ink">
                    {company.company}
                  </h3>
                  {company.role ? (
                    <p className="m-0 mt-1 text-[0.85rem] text-faint">
                      {company.role}
                    </p>
                  ) : null}
                  {company.year ? (
                    <p className="m-0 mt-2 font-mono text-xs text-primary-text">
                      {company.year}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {company.projects.map((project, projectIdx) => {
                    const works = project.works ?? []

                    return (
                      <section key={`${project.title}-${projectIdx}`}>
                        <h4 className="keep-all m-0 text-[0.95rem] leading-snug font-medium text-ink">
                          {project.title}
                        </h4>
                        <p
                          lang="en"
                          className="keep-all m-0 mt-1 font-mono text-[11px] leading-5 text-primary-text"
                        >
                          {project.skills}
                        </p>
                        {project.description ? (
                          <p className="keep-all m-0 mt-2 text-[0.9rem] leading-6 text-ink-soft">
                            {project.description}
                          </p>
                        ) : null}
                        {project.categories?.length ? (
                          <div className="mt-4 space-y-4">
                            {project.categories.map((category, categoryIdx) => (
                              <div
                                key={`${project.title}-category-${categoryIdx}`}
                              >
                                <h5 className="m-0 mb-1.5 text-[0.85rem] leading-6 font-semibold text-primary-text">
                                  {category.name}
                                </h5>
                                <BulletList
                                  items={category.items}
                                  idPrefix={`${project.title}-${categoryIdx}`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : works.length > 0 ? (
                          <div className="mt-3">
                            <BulletList
                              items={works}
                              idPrefix={`${project.title}-work`}
                            />
                          </div>
                        ) : null}
                      </section>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5 py-8">
          <h2 lang="en" className="m-0 text-[1.2rem] font-medium">
            Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="m-0 text-[0.95rem] font-semibold text-ink">
                {spec.education.name}
              </p>
              <p className="m-0 mt-1 font-mono text-xs text-faint">
                {spec.education.year}
              </p>
            </div>
            <div>
              <p className="m-0 text-[0.95rem] font-semibold text-ink">
                {spec.certificate.name}
              </p>
              <p className="m-0 mt-1 font-mono text-xs text-faint">
                {spec.certificate.year}
              </p>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  )
}
