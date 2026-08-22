import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

type SquareButtonProps = {
  label: string
  link: string
  external?: boolean
  emoji?: ReactNode
  icon?: string
}

const baseClass =
  "group border-primary text-ink-soft hover:border-primary-text hover:text-primary-text mb-1.5 grid grid-cols-[40px_1fr_16px] border px-4 py-4 font-title no-underline transition-all duration-500 md:w-[300px]"

function Inner({
  emoji,
  icon,
  label,
}: Pick<SquareButtonProps, "emoji" | "icon" | "label">) {
  return (
    <>
      {/* 이모지·아이콘은 라벨과 중복되는 장식이라 접근성 트리에서 감춥니다. */}
      <span aria-hidden className="flex items-center justify-center">
        {icon ? (
          <Image
            src={icon}
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
        ) : (
          emoji
        )}
      </span>
      <span>
        <span className="underline-swipe">{label}</span>
      </span>
      <span aria-hidden className="flex items-center justify-center p-[0.1rem]">
        <Image
          src="/images/arrow.svg"
          alt=""
          width={16}
          height={16}
          className="opacity-70 transition-opacity group-hover:opacity-100"
        />
      </span>
    </>
  )
}

export default function SquareButton({
  label,
  link,
  external = false,
  emoji,
  icon,
}: SquareButtonProps) {
  if (external) {
    const opensNewTab = link.startsWith("http")

    return (
      <a
        href={link}
        className={baseClass}
        {...(opensNewTab
          ? { target: "_blank", rel: "noopener noreferrer me" }
          : {})}
      >
        <Inner emoji={emoji} icon={icon} label={label} />
        {opensNewTab ? <span className="sr-only">(새 창에서 열림)</span> : null}
      </a>
    )
  }

  return (
    <Link href={link} className={baseClass}>
      <Inner emoji={emoji} icon={icon} label={label} />
    </Link>
  )
}
