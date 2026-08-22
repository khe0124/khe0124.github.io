"use client"

export default function DownloadResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      // 실제 동작은 인쇄 대화상자 열기입니다. 라벨만으로는 결과를 알기 어려워 보충합니다.
      aria-label="이력서 인쇄하기 (인쇄 대화상자에서 PDF로 저장할 수 있습니다)"
      className="border-primary-text text-primary-text hover:bg-primary-text inline-flex items-center border px-4 py-2 font-mono text-xs tracking-[0.1em] transition-colors hover:text-white"
    >
      DOWNLOAD PDF
    </button>
  )
}
