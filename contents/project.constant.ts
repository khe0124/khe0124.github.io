/**
 * /project (BUILD) 페이지 콘텐츠 — 업무 외 사이드 프로젝트만 담습니다.
 * 실무(그리너리) 프로젝트는 contents/resume.constant.ts 로 통합했습니다.
 */

export type SideProject = {
  label: string
  /** 프로젝트명을 보충하는 한 줄 부제 */
  subtitle: string
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

export const side: SideProject[] = [
  {
    label: "체육영역 시즌1",
    subtitle: "운동이 싫었던 게 아니라 몰랐던거야",
    desc: "같이 운동할 사람을 모아주는 서비스를 구상하기 전, 설문으로 사용자의 성향을 파악하고 잘 맞는 운동을 추천하는 웹페이지입니다.",
    role: "Frontend Developer",
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
    subtitle: "초보 풋살 클래스 대시보드",
    desc: "초보 풋살 클래스 참가자의 성장 추이를 보여주는 개인화 페이지와 커리큘럼 종료일에 열린 대회의 소개 페이지입니다.",
    role: "Frontend Developer",
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
