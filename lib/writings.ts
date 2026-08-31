import fs from "node:fs"
import path from "node:path"

const WRITINGS_DIR = path.join(process.cwd(), "contents", "writings")

export type WritingMeta = {
  slug: string
  title: string
  description: string
  date: string
  lang: "ko" | "en"
  tags: string[]
}

export type Writing = WritingMeta & {
  content: string
  html: string
}

type Frontmatter = Record<string, string | string[]>

function ensureWritingsDir() {
  if (!fs.existsSync(WRITINGS_DIR)) return []
  return fs
    .readdirSync(WRITINGS_DIR)
    .filter(file => file.endsWith(".md") || file.endsWith(".mdx"))
}

function parseFrontmatter(source: string): {
  meta: Frontmatter
  content: string
} {
  if (!source.startsWith("---")) return { meta: {}, content: source.trim() }

  const end = source.indexOf("\n---", 3)
  if (end === -1) return { meta: {}, content: source.trim() }

  const frontmatter = source.slice(3, end).trim()
  const content = source.slice(end + 4).trim()
  const meta: Frontmatter = {}
  let activeKey: string | null = null

  for (const rawLine of frontmatter.split("\n")) {
    const line = rawLine.trimEnd()
    if (!line.trim()) continue

    if (activeKey && line.trim().startsWith("- ")) {
      const current = meta[activeKey]
      const value = line
        .trim()
        .slice(2)
        .trim()
        .replace(/^['"]|['"]$/g, "")
      meta[activeKey] = Array.isArray(current) ? [...current, value] : [value]
      continue
    }

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!match) continue

    const [, key, rawValue] = match
    activeKey = key

    if (!rawValue) {
      meta[key] = []
      continue
    }

    const value = rawValue.trim()
    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key] = value
        .slice(1, -1)
        .split(",")
        .map(item => item.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean)
      continue
    }

    meta[key] = value.replace(/^['"]|['"]$/g, "")
  }

  return { meta, content }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    )
    .replace(/\[([^\]]+)\]\((\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
}

export function markdownToHtml(source: string) {
  const blocks: string[] = []
  const lines = source.split("\n")
  let paragraph: string[] = []
  let list: string[] = []
  let code: string[] | null = null

  const flushParagraph = () => {
    if (!paragraph.length) return
    blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`)
    paragraph = []
  }

  const flushList = () => {
    if (!list.length) return
    blocks.push(
      `<ul>${list.map(item => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`,
    )
    list = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()

    if (line.startsWith("```")) {
      if (code) {
        blocks.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`)
        code = null
      } else {
        flushParagraph()
        flushList()
        code = []
      }
      continue
    }

    if (code) {
      code.push(rawLine)
      continue
    }

    if (!line.trim()) {
      flushParagraph()
      flushList()
      continue
    }

    if (line.startsWith("### ")) {
      flushParagraph()
      flushList()
      blocks.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`)
      continue
    }

    if (line.startsWith("## ")) {
      flushParagraph()
      flushList()
      blocks.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`)
      continue
    }

    if (line.startsWith("> ")) {
      flushParagraph()
      flushList()
      blocks.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`)
      continue
    }

    if (line.startsWith("- ")) {
      flushParagraph()
      list.push(line.slice(2))
      continue
    }

    paragraph.push(line.trim())
  }

  flushParagraph()
  flushList()
  if (code)
    blocks.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`)

  return blocks.join("\n")
}

function toWriting(file: string): Writing {
  const slug = file.replace(/\.mdx?$/, "")
  const source = fs.readFileSync(path.join(WRITINGS_DIR, file), "utf8")
  const { meta, content } = parseFrontmatter(source)
  const tags = Array.isArray(meta.tags) ? meta.tags : []
  const lang = meta.lang === "en" ? "en" : "ko"

  return {
    slug,
    title: String(meta.title ?? slug),
    description: String(meta.description ?? ""),
    date: String(meta.date ?? "1970-01-01"),
    lang,
    tags,
    content,
    html: markdownToHtml(content),
  }
}

export function getAllWritings(): Writing[] {
  return ensureWritingsDir()
    .map(toWriting)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getWriting(slug: string): Writing | undefined {
  return getAllWritings().find(post => post.slug === slug)
}

export function getWritingsByYear() {
  return getAllWritings().reduce<Record<string, Writing[]>>((acc, post) => {
    const year = post.date.slice(0, 4)
    acc[year] = [...(acc[year] ?? []), post]
    return acc
  }, {})
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00+09:00`))
}
