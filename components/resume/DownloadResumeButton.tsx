"use client"

export default function DownloadResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-primary-text text-primary-text hover:bg-primary-text inline-flex items-center border px-4 py-2 font-mono text-xs tracking-[0.1em] transition-colors hover:text-white"
      title="인쇄 대화상자에서 PDF로 저장할 수 있습니다"
    >
      PRINT / SAVE AS PDF
    </button>
  )
}
