export type Route = {
  label: string
  link: string
  emoji: string
  external: boolean
}

export const route: Route[] = [
  { label: "build", external: false, link: "/project", emoji: "💻" },
  { label: "resume", external: false, link: "/resume", emoji: "📕" },
  { label: "writing", external: false, link: "/writing", emoji: "✍️" },
  {
    label: "oold works ↗",
    external: true,
    link: "https://oold-works.vercel.app/",
    emoji: "🫧",
  },
  { label: "contact", external: false, link: "/contact", emoji: "📮" },
  {
    label: "blog",
    external: true,
    link: "https://seaweedisland.tistory.com/",
    emoji: "🔗",
  },
]

export default route
