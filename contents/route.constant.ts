export type Route = {
  label: string
  link: string
  emoji: string
  external: boolean
}

// 채용 문의가 우선이라 RESUME 를 첫 항목으로 둡니다.
// 이 배열 순서가 홈 바로가기 · 상단 내비 · 푸터 메뉴에 모두 그대로 적용됩니다.
export const route: Route[] = [
  { label: "resume", external: false, link: "/resume", emoji: "📕" },
  { label: "build", external: false, link: "/project", emoji: "💻" },
  { label: "contact", external: false, link: "/contact", emoji: "📮" },
  {
    label: "blog ↗",
    external: true,
    link: "https://seaweedisland.tistory.com/",
    emoji: "🔗",
  },
  {
    label: "oold works ↗",
    external: true,
    link: "https://oold-works.kang-haeun.me/",
    emoji: "🫧",
  },
]

export default route
