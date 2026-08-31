import { SITE, SITE_URL } from "@/contents/site.constant"
import {
  description,
  experience,
  highlights,
  spec,
} from "@/contents/resume.constant"
import { others, selected, side } from "@/contents/project.constant"
import { skills } from "@/contents/skill.constant"
import { getAllWritings } from "@/lib/writings"

export const dynamic = "force-static"

/**
 * llms.txt — AI 크롤러(AEO)용 사이트 요약.
 * 이력서·프로젝트 상수에서 생성하므로 콘텐츠가 사이트와 어긋나지 않습니다.
 */
function buildLlmsTxt(): string {
  const lines: string[] = []

  lines.push(
    `# ${SITE.name} (${SITE.nameEn}) — ${SITE.jobTitles.join(" · ")}`,
    "",
  )
  // 사이트 대표 소개는 SITE.description 을 씁니다(메타 description 과 동일한 문장).
  lines.push(`> ${SITE.description}`, "")

  lines.push("## 프로필", "")
  lines.push(`- 이름: ${SITE.name} (${SITE.nameEn})`)
  lines.push(
    `- 직무: ${SITE.jobTitles.join(" · ")} (Frontend Developer · AI-assisted Product Builder)`,
  )
  lines.push(`- 위치: ${SITE.location}`)
  lines.push(`- 사이트: ${SITE_URL}/`)
  lines.push(`- 이메일: ${SITE.email}`)
  lines.push(`- 경력 요약: ${description}`)
  lines.push(`- 핵심 역량: ${highlights.join(", ")}`, "")

  lines.push("## 기술 스택", "")
  lines.push(`- 주요 언어·프레임워크: ${skills.map(s => s.label).join(", ")}`)
  lines.push(`- 관심 분야: ${SITE.knowsAbout.join(", ")}`, "")

  lines.push("## 경력", "")
  for (const company of experience) {
    const heading = [company.company, company.role, company.year]
      .filter(Boolean)
      .join(" — ")
    lines.push(`### ${heading}`, "")

    for (const project of company.projects) {
      lines.push(`#### ${project.title}`, "")
      lines.push(`- 기술: ${project.skills}`)
      if (project.description) lines.push(`- 개요: ${project.description}`)

      for (const category of project.categories ?? []) {
        lines.push(`- ${category.name}`)
        for (const item of category.items) lines.push(`  - ${item}`)
      }
      for (const work of project.works ?? []) lines.push(`  - ${work}`)
      lines.push("")
    }
  }

  lines.push("## 대표 프로젝트", "")
  for (const project of selected) {
    lines.push(`### ${project.label}`, "")
    lines.push(`- 역할: ${project.role}`)
    lines.push(`- 범위: ${project.scope}`)
    lines.push(`- 기술: ${project.stacks}`)
    lines.push(`- 개요: ${project.summary}`)
    lines.push(`- 문제: ${project.problem}`)
    lines.push("- 해결")
    for (const item of project.solution) lines.push(`  - ${item}`)
    lines.push("- 결과")
    for (const item of project.impact) lines.push(`  - ${item}`)
    if (project.note) lines.push(`- 공개 범위: ${project.note}`)
    lines.push("")
  }

  lines.push("## 사이드 프로젝트", "")
  for (const project of side) {
    lines.push(`### ${project.label}`, "")
    lines.push(`- 역할: ${project.role}`)
    lines.push(`- 기술: ${project.stacks}`)
    lines.push(`- 개요: ${project.desc}`)
    for (const task of project.tasks) lines.push(`  - ${task}`)
    lines.push("")
  }

  lines.push("## 그 외 작업", "")
  for (const work of others) {
    lines.push(
      `- ${work.label} (${work.period}) — ${work.value} / ${work.stacks}`,
    )
  }
  lines.push("")

  const writings = getAllWritings()
  lines.push("## 글", "")
  for (const post of writings) {
    lines.push(
      `- ${post.title} (${post.date}) — ${post.description} / ${SITE_URL}/writing/${post.slug}/`,
    )
  }
  lines.push("")

  lines.push("## 학력 / 자격", "")
  lines.push(`- ${spec.education.name} (${spec.education.year})`)
  lines.push(`- ${spec.certificate.name} (${spec.certificate.year})`, "")

  lines.push("## 링크", "")
  for (const url of SITE.sameAs) lines.push(`- ${url}`)
  lines.push(`- Email: ${SITE.email}`, "")

  lines.push("## 페이지", "")
  lines.push(`- 홈: ${SITE_URL}/`)
  lines.push(`- 이력서: ${SITE_URL}/resume/`)
  lines.push(`- Build: ${SITE_URL}/project/`)
  lines.push(`- 글: ${SITE_URL}/writing/`)
  lines.push(`- RSS: ${SITE_URL}/feed.xml`)
  lines.push(`- 연락처: ${SITE_URL}/contact/`)
  lines.push("")

  return lines.join("\n")
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
