export type ContactLink = {
  label: string
  link: string
  emoji?: string
  icon?: string
}

export const extlink: ContactLink[] = [
  { label: "E-MAIL", link: "mailto:khe0124@gmail.com", emoji: "✉️" },
  {
    label: "Github",
    link: "https://github.com/khe0124",
    icon: "/images/github.svg",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/khe0124",
    icon: "/images/linkedin.svg",
  },
]

export default extlink
