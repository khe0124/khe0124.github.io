import Image from "next/image"
import Link from "next/link"

type FishIconProps = {
  /** contact 페이지에서는 채워지지 않은 라인 아이콘을 사용합니다. */
  variant?: "filled" | "lined"
  /**
   * false 면 홈 링크가 아니라 순수 장식으로 렌더링합니다.
   * 한 페이지에 같은 목적지의 링크가 중복되면 스크린리더 탐색이 번거로워집니다.
   */
  asLink?: boolean
  className?: string
}

export default function FishIcon({
  variant = "filled",
  asLink = true,
  className = "",
}: FishIconProps) {
  const src =
    variant === "filled" ? "/images/fish_filled.svg" : "/images/fish.svg"
  const box = `animate-fish flex h-10 w-10 shrink-0 rounded-full shadow-[0_4px_4px_0_rgba(0,47,134,0.2)] ${className}`
  const img = (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      priority
      className="h-full w-full"
    />
  )

  if (!asLink) {
    return (
      <span aria-hidden className={box}>
        {img}
      </span>
    )
  }

  return (
    <Link href="/" aria-label="홈으로 이동" className={box}>
      {img}
    </Link>
  )
}
