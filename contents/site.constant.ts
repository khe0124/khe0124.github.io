/** 사이트 전역 메타 정보. SEO 메타태그·JSON-LD·sitemap·robots가 모두 이 값을 참조합니다. */
export const SITE_URL = "https://khe0124.github.io"

export const SITE = {
  url: SITE_URL,
  /** <title> 및 og:site_name 에 쓰이는 브랜드 이름 */
  brand: "강하은 포트폴리오",
  name: "강하은",
  nameEn: "Kang Haeun",
  jobTitle: "프론트엔드 개발자",
  /** 화면에 노출되는 정체성 라벨 (푸터 등) */
  tagline: "AI Builder",
  /**
   * 구조화 데이터용 직함 목록.
   * "프론트엔드 개발자"는 실제 검색되는 키워드라 남기고, 새 포지셔닝을 함께 노출합니다.
   */
  jobTitles: ["프론트엔드 개발자", "AI Builder"],
  locale: "ko_KR",
  lang: "ko",
  email: "khe0124@gmail.com",
  location: "Seoul, South Korea",
  title: "프론트엔드 개발자 강하은 | 열대섬 해초 속 개발자",
  description:
    "산업디자인에서 출발해 UI/UX를 거쳐 7년간 프론트엔드를 개발해온 강하은입니다. React, Next.js, TypeScript로 LCA/LCCI, 탄소 크레딧, Web3 등 복잡한 B2B 도메인을 제품 UI로 만들고, 최근에는 AI를 활용해 풀스택으로 범위를 넓히고 있습니다.",
  ogImage: "/images/thumb.png",
  sameAs: [
    "https://github.com/khe0124",
    "https://www.linkedin.com/in/khe0124",
    "https://seaweedisland.tistory.com/",
  ],
  keywords: [
    "프론트엔드 개발자",
    "강하은",
    "Kang Haeun",
    "React",
    "Next.js",
    "TypeScript",
    "B2B SaaS",
    "Admin Console",
    "LCA",
    "탄소 크레딧",
    "풀스택 개발",
    "AI 활용 개발",
    "UI/UX",
    "포트폴리오",
    "이력서",
  ],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "React Native",
    "Vue.js",
    "B2B SaaS",
    "Admin Console",
    "LCA/LCCI",
    "Carbon Credit",
    "Web3",
    "Data Visualization",
    "UI/UX Design",
    "Industrial Design",
    "Full-stack Development",
    "Spring Boot",
    "AI-assisted Development",
  ],
} as const
