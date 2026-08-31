export type CaseStudy = {
  label: string
  summary: string
  role: string
  stacks: string
  scope: string
  problem: string
  solution: string[]
  impact: string[]
  note?: string
}

export type SideProject = {
  label: string
  desc: string
  role: string
  stacks: string
  images: string[]
  problem: string
  tasks: string[]
  learning: string
}

export type OtherWork = {
  label: string
  period: string
  value: string
  stacks: string
}

export const selected: CaseStudy[] = [
  {
    label: "Smart City VCM Registry Platform",
    summary:
      "방법론 신청, 공개논평, 프로젝트 제출, 감축량 인증, VRC 발행·거래까지 이어지는 탄소시장 업무 플로우를 사용자 웹과 운영자 어드민으로 구현한 공공 B2B 플랫폼입니다.",
    role: "리드 프론트엔드 · 운영자 어드민 핵심 구현 · VCM/VRC 백엔드 도메인 구현",
    stacks:
      "React 18/19, Vite, TypeScript, Tailwind, Radix(shadcn/ui), TanStack Query/Table, zustand, zod, react-hook-form, ECharts/Chart.js, MSW, Vitest, Java, Spring Boot, JPA, QueryDSL",
    scope: "사용자 웹 · 운영자 어드민 · 일부 백엔드 도메인",
    problem:
      "신청자와 운영자가 긴 상태 전이, 대규모 입력, 심사·승인·정산 절차를 오류 없이 따라갈 수 있어야 했고, API와 도메인 규칙 변경도 빠르게 흡수해야 했습니다.",
    solution: [
      "신청자 라이프사이클 전 구간을 화면 플로우와 상태 기반 액션으로 구조화",
      "D-MRV 계산엔진, CSV 업로드, 계산 이력 스냅샷, 수식 빌더 등 고난도 입력·검증 UI 구현",
      "10개 도메인 feature 모듈과 공통 컴포넌트 체계를 정리해 변경에 대응하기 쉬운 구조로 개선",
      "Java/Spring Boot 기반 VCM/VRC 도메인 모델, 거래·정산 트랜잭션, 테스트까지 구현 범위 확장",
    ],
    impact: [
      "복잡한 탄소시장 절차를 신청자와 운영자가 따라갈 수 있는 제품 흐름으로 연결",
      "대량 목록, 대규모 폼, 도메인 검증, 테스트 환경을 함께 정리해 운영 안정성 강화",
      "프론트엔드 중심 역할에서 제품 전체 도메인을 구현하는 full-stack 방향으로 확장",
    ],
    note: "공공/B2B 프로젝트 특성상 실제 화면과 서비스 링크는 공개하지 않고, 담당 범위와 구현 구조 중심으로 정리했습니다.",
  },
  {
    label: "LCA/LCCI Platform",
    summary:
      "전과정평가(LCA) 생성, 데이터 입력, 검증, 공정 흐름도, 결과 요약, 리포트 다운로드까지 이어지는 핵심 사용자 흐름을 구현했습니다.",
    role: "프론트엔드 개발 · 입력/검증/시각화 UI 구조화",
    stacks:
      "React, Redux, Redux-Toolkit, React-Flow, MUI, Data Grid Pro, TailwindCSS, Storybook, Webpack/Vite",
    scope: "LCA 생성·입력·검증·시각화·리포트 UI",
    problem:
      "Mass Balance, LCI DB, Cut-off, 공정 트리처럼 개념 자체가 어려운 업무 규칙을 사용자가 실제로 입력하고 검증할 수 있는 화면으로 바꿔야 했습니다.",
    solution: [
      "LCA 생성부터 결과 검증까지 주요 플로우를 화면 구조와 상태 흐름 기준으로 재구성",
      "Data Grid Pro 기반 대용량 입력 화면과 Excel 업로드/다운로드, 필수값·중복·Null 검증 패턴 구축",
      "Canvas 기반 Flow Editor로 공정 흐름도 생성, 편집, 저장, 불러오기, 이미지 다운로드 지원",
      "Storybook, ESLint/Prettier, Webpack/Vite 환경 정리로 FE 개발 기반 개선",
    ],
    impact: [
      "복잡한 환경 평가 도메인을 입력 가능한 제품 경험으로 전환",
      "반복되는 그리드·검증·리포트 패턴을 정리해 사용성과 유지보수성 향상",
      "운영 중 발견된 렌더링, 저장 실패, 트리 동기화 이슈를 해결해 제품 신뢰도 개선",
    ],
  },
  {
    label: "POPLE Carbon Credit / Marketplace / Registry",
    summary:
      "탄소 크레딧 발행, 거래, 레지스트리, 회원·결제·문서 기능이 연결된 플랫폼에서 프론트엔드 전반 개발과 API 전환을 담당했습니다.",
    role: "프론트엔드 개발 · API 전환 · 운영 이슈 안정화",
    stacks:
      "React, Next.js, Nest.js, MUI, Chakra UI, Context API, Google Maps, i18next",
    scope: "Marketplace · Credit · Registry · User · Payment · Admin/Front",
    problem:
      "거래와 문서, 지도, 결제, 다국어가 연결된 서비스에서 API 구조 변경과 운영 이슈를 흡수하면서 사용자 플로우를 안정화해야 했습니다.",
    solution: [
      "Marketplace, Credit, Registry, User, Payment 등 주요 도메인의 API 전환 담당",
      "회원가입, 사업 등록, 크레딧 발행/이전/감축량 인증 플로우 리팩토링",
      "PDF Viewer, PageHeader, Chart Skeleton 등 반복 UI를 공통 컴포넌트로 정리",
      "i18n 인프라와 영문화 작업을 통해 운영 가능한 다국어 구조 구축",
    ],
    impact: [
      "Admin/Front 양쪽의 데이터 흐름과 화면 구조를 정비",
      "무한 루프, 중복 요청, 파일 업로드, 문서 다운로드 등 실제 사용 구간의 이슈 안정화",
      "탄소 크레딧 서비스의 사용자 접점과 운영 화면 완성도 개선",
    ],
  },
]

export const side: SideProject[] = [
  {
    label: "체육영역 시즌1",
    desc: "같이 운동할 사람을 모아주는 서비스를 구상하기 전, 설문으로 사용자의 성향을 파악하고 잘 맞는 운동을 추천하는 웹페이지입니다.",
    role: "프론트엔드 개발자",
    stacks: "React, React Hooks, Styled-components, Koa, Netlify",
    images: [
      "/images/cyyy1_01.png",
      "/images/cyyy1_02.png",
      "/images/cyyy1_03.png",
      "/images/cyyy1_04.png",
    ],
    problem:
      "운동을 시작하고 싶지만 무엇부터 고를지 모르는 사용자가 부담 없이 설문을 진행하고 결과를 공유할 수 있어야 했습니다.",
    tasks: [
      "설문 진행, 단계 이동, 결과 표시 UI 개발",
      "React Helmet 기반 SEO 메타 정보 구성",
      "Koa API와 Netlify 배포 환경 연결",
    ],
    learning:
      "가벼운 진입 경험, 결과 공유성, 모바일 화면의 리듬이 전환율에 주는 영향을 실험했습니다.",
  },
  {
    label: "체육영역 시즌2",
    desc: "초보 풋살 클래스 참가자의 성장 추이를 보여주는 개인화 페이지와 커리큘럼 종료일에 열린 대회의 소개 페이지입니다.",
    role: "프론트엔드 개발자",
    stacks: "Vue3, Vuex, SCSS, Chart.js",
    images: [
      "/images/cyyy2_01.png",
      "/images/cyyy2_02.png",
      "/images/cyyy2_03.png",
      "/images/cyyy2_04.png",
    ],
    problem:
      "클래스 참가자가 자신의 성장과 참여 이력을 쉽게 확인하고, 프로그램 종료 후 대회 참여까지 자연스럽게 이어지게 해야 했습니다.",
    tasks: [
      "Chart.js 기반 개인별 스탯 그래프 UI 개발",
      "참여 이력에 따른 출석 스탬프 UI 개발",
      "대회 소개 페이지의 Carousel 인터랙션 구현",
    ],
    learning:
      "개인화 데이터와 시각적 피드백이 참여 동기와 어떻게 연결되는지 확인한 프로젝트입니다.",
  },
]

export const others: OtherWork[] = [
  {
    label: "그리너리",
    period: "2022.07",
    value: "팝플투어 패키지 예약 UI 개발",
    stacks: "React, Redux-toolkit, Styled-Component",
  },
  {
    label: "크로센트",
    period: "2022.01",
    value: "어드민 UI 수정 및 유지보수",
    stacks: "Vue3, SCSS",
  },
]
