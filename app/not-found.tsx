import type { Metadata } from "next"
import Link from "next/link"
import PageShell from "@/components/PageShell"

export const metadata: Metadata = {
  title: "404: 페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <PageShell title="404">
      <div className="py-12">
        <h2 className="mt-0 text-[1.728rem] font-bold">
          페이지를 찾을 수 없어요 :(
        </h2>
        <p className="text-muted">
          주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
        </p>
        <Link href="/" className="font-title">
          <span className="underline-swipe">홈으로 돌아가기</span>
        </Link>
      </div>
    </PageShell>
  )
}
