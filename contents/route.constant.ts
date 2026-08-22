export type Route = {
  label: string
  link: string
  emoji: string
  external: boolean
}

export const route: Route[] = [
  { label: "resume", external: false, link: "/resume", emoji: "📕" },
  { label: "project", external: false, link: "/project", emoji: "💻" },
  { label: "contact", external: false, link: "/contact", emoji: "📮" },
  {
    label: "blog",
    external: true,
    link: "https://seaweedisland.tistory.com/",
    emoji: "🔗",
  },
]

export default route
