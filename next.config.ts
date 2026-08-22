import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // GitHub Pages(khe0124.github.io)는 정적 호스팅이므로 전체를 정적 내보내기합니다.
  output: "export",
  // Gatsby가 만들던 /resume/ 형태의 URL을 그대로 유지해 기존 색인을 보존합니다.
  trailingSlash: true,
  // 정적 내보내기에서는 next/image 최적화 서버를 쓸 수 없습니다.
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
