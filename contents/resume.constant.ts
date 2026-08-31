/**
 * 이력서 콘텐츠 (정본: unkw_rv/nextjs `src/i18n/locales/ko/about.json`)
 * 내용과 구조를 그대로 옮겨왔습니다.
 */

export type CategoryItem = {
  name: string
  items: string[]
}

export type ProjectItem = {
  title: string
  skills: string
  description?: string
  works?: string[]
  categories?: CategoryItem[]
}

export type ExperienceItem = {
  company: string
  year: string
  role?: string
  projects: ProjectItem[]
}

export type SpecEntry = {
  name: string
  year: string
}

export type SpecData = {
  education: SpecEntry
  certificate: SpecEntry
}

export const title = "Career"

export const description =
  "7년 차 프론트엔드 개발자로, 복잡한 산업 도메인을 사용 가능한 제품 UI로 바꾸는 일을 해왔습니다. LCA/LCCI, 탄소 크레딧, Web3, IoT, STO처럼 개념 자체가 어려운 영역에서 입력·검증·시각화·리포트·운영 화면까지 연결되는 화면 구조를 설계하고 구현해왔고, 최근에는 AI를 활용해 백엔드 도메인 개발과 테스트까지 작업 범위를 넓히고 있습니다."

export const highlights: string[] = [
  "복잡한 도메인을 실제 사용자 플로우로 번역",
  "대규모 입력·검증·데이터 관리 UI 설계",
  "시각화·그래픽 에디터형 인터랙션 구현",
  "API 전환·공통화·FE 구조 개선 주도",
  "AI 활용 백엔드 도메인 구현으로 확장",
  "서비스 품질 안정화와 운영 이슈 해결",
]

export const experience: ExperienceItem[] = [
  {
    company: "Greenery",
    year: "2022.09 - Present",
    role: "Frontend Developer",
    projects: [
      {
        title:
          "스마트시티 VCM Registry 플랫폼 프론트엔드 (사용자 웹 · 운영자 어드민)",
        skills:
          "React 18/19, Vite, TypeScript, Tailwind, Radix(shadcn/ui), TanStack Query/Table, zustand, zod, react-hook-form, Tiptap, ECharts/Chart.js, MSW, Vitest, PWA",
        description:
          "VCM(자발적 탄소시장)과 CCM 도메인을 신청자용 사용자 웹과 운영자 어드민 두 저장소로 나눠 구축한 공공 B2B 플랫폼입니다. 사용자 웹에서는 최다 기여자이자 리드 프론트엔드로 참여했고, 어드민은 프론트엔드 전 범위를 단독에 가깝게 맡았습니다.",
        categories: [
          {
            name: "사용자 웹",
            items: [
              "방법론 신청·공개논평부터 프로젝트(PIN/PDD) 제출, 보완 재제출, 모니터링 보고서, 감축량 인증, VRC 발행·거래까지 이어지는 신청자 라이프사이클 전 구간을 화면으로 구현",
              "산식 위상정렬, 순환 의존 감지, BE/PE/LE/ER 계산 파이프라인, LOOKUP/PROCESSOR 디스패처를 갖춘 D-MRV 계산엔진을 직접 구현하고 CSV 업로드와 계산 이력 스냅샷까지 연결",
              "라우트 105개 중 54개를 lazy 코드 스플리팅으로 분리하고, 서버 페이지네이션과 URL search param 기반 상태 영속화로 대량 목록 UX를 정리",
            ],
          },
          {
            name: "운영자 어드민",
            items: [
              "심사·승인·발행·정산 흐름의 9~13단계 상태머신 ActionBar와 D-MRV 정의 편집기(2-step FieldArray, 수식 빌더) 같은 고난도 폼 UI를 구현",
              "10개 도메인 feature 모듈이 api/hooks/schemas/stores로 자기완결하는 feature 기반 아키텍처를 설계하고, 공통 요소는 _shared로 승격해 재사용 구조를 정리",
              "TanStack Query/Table과 zustand로 서버·클라이언트 상태를 분리하고 DataTable, Modal, ConfirmDialog 등 공유 컴포넌트를 CVA로 직접 구축",
            ],
          },
          {
            name: "품질·개발 파이프라인",
            items: [
              "Vitest 기반 도메인·스키마·페이지 통합 테스트와 MSW 목 핸들러로 백엔드 없이 개발과 검증이 가능한 환경을 구성",
              "zod 스키마에 한글 → enum 매핑과 도메인 규칙을 반영해 API 계약 변경을 프론트엔드에서 안전하게 흡수",
              "husky pre-commit(lint-staged)과 commitlint로 커밋 규약을 강제해 협업 저장소의 변경 이력 품질을 유지",
            ],
          },
        ],
      },
      {
        title: "스마트시티 VCM Registry 플랫폼 백엔드 – VCM/VRC 도메인 개발",
        skills:
          "Java 25, Spring Boot 4, Gradle Kotlin DSL, JPA, QueryDSL, PostgreSQL, Redis, Quartz, MapStruct, JUnit",
        description:
          "헥사고날 멀티모듈 구조의 탄소거래 백엔드에서 VCM/VRC 도메인 로직과 배출권 거래·정산 트랜잭션을 직접 구현했습니다. 인증·RBAC 등 공통 인프라 모듈은 팀이 소유하고, 그 위에 올라가는 도메인 계층을 담당했습니다.",
        categories: [
          {
            name: "도메인 설계",
            items: [
              "방법론 상태 전이(신청 → 공개논평 → 심의 → 승인/보완/반려)와 버전 이력, 프로젝트 PIN/PDD 제출 전이, 모니터링 보고서 기반 감축량 인증을 도메인 모델로 구현",
              "D-MRV parameter/formula 모델과 산식 평가 엔진, 공개논평 Quartz 자동 마감, VRC 발행과 인증서 자동발급을 담당",
              "domain / application(port) / adapter 헥사고날 레이어링을 지켜 도메인이 JPA·Spring 프레임워크에 의존하지 않도록 분리",
            ],
          },
          {
            name: "거래·정산 트랜잭션",
            items: [
              "입금확인 → 체결 → 정산 → 인증서 발급을 단일 트랜잭션으로 오케스트레이션하고, 이중 체결을 막기 위해 주문행·보유블록·시리얼 채번에 비관락(PESSIMISTIC_WRITE)을 명시 적용",
              "예약·부분체결·이전·소각·무효화를 블록으로 다루는 VRC 시리얼 단위 추적 원장을 설계하고 마켓플레이스 판매 등록과 매수 주문·취소를 구현",
            ],
          },
          {
            name: "테스트·검증",
            items: [
              "도메인 단위 테스트와 서비스·통합·컨트롤러 테스트를 함께 작성해 테스트 대비 구현 비율을 약 1:5 수준으로 유지",
              "결제 확정 처리 순서를 InOrder로 검증하고, 버그 수정 시 재현 테스트를 동반해 회귀를 방지",
            ],
          },
        ],
      },
      {
        title: "LCA/LCCI 플랫폼 프론트엔드",
        skills:
          "React, Redux, Redux-Toolkit, React-Flow, MUI, Data Grid Pro, TailwindCSS, Storybook, Webpack/Vite",
        description:
          "전과정평가(LCA) 플랫폼에서 생성, 입력, 검증, 공정 흐름도, 결과 요약, 리포트 다운로드까지 이어지는 핵심 사용자 흐름을 프론트엔드 관점에서 설계·구현했습니다.",
        categories: [
          {
            name: "대표 기여",
            items: [
              "LCA 생성부터 결과 검증까지 이어지는 주요 플로우를 화면 구조와 상태 흐름 기준으로 재구성하고 구현",
              "Mass Balance, LCI DB 연동, Cut-off, 공정 트리, 공정흐름도처럼 난도가 높은 도메인 개념을 실제 입력 가능한 UI로 변환",
              "상세/요약/리포트 다운로드(PDF/Excel)까지 포함해 결과 확인과 산출물 생성 경험을 제품 안에서 완결",
            ],
          },
          {
            name: "입력·검증·시각화 역량",
            items: [
              "Data Grid Pro 기반 대용량 입력 화면과 공통 그리드 패턴을 구축해 복잡한 데이터 입력 UX를 일관되게 정리",
              "Excel 업로드/다운로드, Key-in 입력, 필수값·중복·Null 처리 등 업무형 검증 로직을 프론트엔드에서 안정적으로 처리",
              "Canvas 기반 Flow Editor를 구현해 공정 흐름도 생성, 편집, 저장, 불러오기, 이미지 다운로드까지 지원",
            ],
          },
          {
            name: "구조 개선과 품질 안정화",
            items: [
              "Webpack/Vite 환경 설정, ESLint/Prettier 정리, Storybook 기반 공통 컴포넌트 구축으로 FE 개발 기반을 정비",
              "라우팅 구조 개선, 무한 렌더링 수정, 저장 실패 및 트리 동기화 오류 같은 운영 이슈를 해결해 실서비스 안정성 향상",
              "QA, 기획 QA, 디자인 QA 과정에서 누적된 치명적 로직 버그를 정리하며 제품 신뢰도를 높임",
            ],
          },
        ],
      },
      {
        title: "POPLE Carbon Credit / Marketplace / Registry",
        skills:
          "React, Next.js, Nest.js, MUI, Chakra UI, Context API, Google Maps, i18next",
        description:
          "탄소 크레딧 발행, 거래, 레지스트리 기능이 연결된 플랫폼에서 프론트엔드 전반 개발과 API 전환, 운영 안정화를 맡았습니다.",
        categories: [
          {
            name: "대표 기여",
            items: [
              "Marketplace, Credit, Registry, User, Payment 등 주요 도메인의 API 전환을 프론트엔드에서 전담하며 구조 변경을 흡수",
              "회원가입, 사업 등록, 크레딧 발행/이전/감축량 인증 등 핵심 비즈니스 플로우를 리팩토링해 오류를 줄이고 흐름을 정리",
              "Admin/Front 양쪽에서 API 스펙 변경에 대응하며 화면 구조와 데이터 흐름을 재정비",
            ],
          },
          {
            name: "제품 완성도 개선",
            items: [
              "PDF Viewer, PageHeader, Chart Skeleton 등 반복되는 UI를 공통 컴포넌트로 정리",
              "크레딧 상세/목록, 공지사항, 뉴스, 고객센터 등 사용자 접점이 큰 화면의 상태 기반 UI를 개선",
              "i18n 인프라 구축과 영문화 작업을 통해 운영 가능한 다국어 구조를 정리",
            ],
          },
          {
            name: "운영 이슈 해결",
            items: [
              "무한 루프, 잘못된 API 호출, 중복 요청, 파일 업로드 오류 등 구조적 문제를 찾아 해결",
              "1차·2차 QA를 거치며 결제, 구매상세, 문서 다운로드, 지도 입력 등 실제 사용 구간의 크리티컬 이슈를 안정화",
            ],
          },
        ],
      },
      {
        title: "Web3 기반 자산 관리 서비스",
        skills: "React, Next.js, Metamask, Web3.js, Amplitude",
        description:
          "지갑 연동과 트랜잭션 상태 확인이 필요한 Web3 서비스에서 사용자 기능과 운영 화면을 함께 개발했습니다.",
        categories: [
          {
            name: "대표 기여",
            items: [
              "Metamask 연결, 지갑 주소 검증, 로그인/서명/지갑 정보 조회 API 연동 등 지갑 기반 사용자 흐름 구현",
              "폴링 기반 메시징 구조를 적용해 트랜잭션 상태 변경 알림을 사용자 경험 안에 연결",
              "사용자 자산, 거래내역, 세금 페이지와 관리자 상세 화면을 함께 개발해 서비스 운영 관점까지 반영",
            ],
          },
        ],
      },
      {
        title: "에너지 IoT APP 가전 및 기기 API 연동",
        skills: "React, React Native, Redux, Redux-Saga, Expo",
        works: [
          "유저 소유 전자기기 API 연동 후 기기목록 페이지 표시",
          "ENode로 유저의 EV APP 연동",
        ],
      },
      {
        title: "STO 거래 플랫폼 프론트엔드 개발",
        skills:
          "React, Next.js, NextAuth, Redux, Redux-Toolkit, Chakra UI, Storybook",
        works: [
          "NextAuth로 일반·기업회원 로그인 개발",
          "Project, News 등 CRUD API 연동",
          "Slider, Text Animation 이펙트 적용 및 반응형 UI 개발",
        ],
      },
      {
        title: "Official Website 프론트엔드 개발",
        skills: "React, Next.js, Chakra UI, TailwindCSS",
        works: [
          "반응형 웹사이트 개발 및 News, Chart API 연동",
          "Carousel, Chart Component 개발",
        ],
      },
    ],
  },
  {
    company: "H-Energy",
    year: "2020.05 - 2022.08",
    role: "Frontend Developer",
    projects: [
      {
        title: "공유옥상 투자 플랫폼",
        skills: "Vue, Quasar, Pug, Stylus, JavaScript, Chart.js, Kakao Map",
        description:
          "지도, 통계, 공유 기능이 함께 동작하는 투자형 서비스에서 전체 사용자 화면을 구현했습니다.",
        works: [
          "REST API를 연동하고 Pug, Stylus 기반으로 서비스 전반 UI를 구현",
          "Chart.js로 출자수량, 전력량, 발전량 등 주요 통계 화면을 시각화",
          "Kakao Map 및 SVG 그래픽 지도를 활용해 위치 정보와 시각 정보를 함께 전달",
        ],
      },
      {
        title: "공식 웹사이트 및 프로모션 페이지",
        skills: "Vue3, Firebase",
        works: [
          "반응형 UI를 구현하고 정적 배포 환경까지 포함해 빠르게 운영 가능한 웹사이트를 구축",
        ],
      },
    ],
  },
  {
    company: "Geeks Family",
    year: "2019.12 - 2020.04",
    role: "Frontend Developer",
    projects: [
      {
        title: "파트너스 사이트(어드민) UI",
        skills: "JavaScript, jQuery, HTML/CSS, SCSS, PHP/Laravel",
        works: [
          "어드민 서비스 전반 UI를 구현하며 화면 구조와 스타일링의 기초를 다짐",
          "주문·배달량 통계 페이지의 차트 UI를 구현해 데이터 시각화 경험을 축적",
        ],
      },
    ],
  },
  {
    company: "Others",
    year: "",
    role: "",
    projects: [
      {
        title: "팝플투어 패키지 예약 UI 개발",
        skills: "React, Redux-Toolkit, Styled-Component",
        works: [],
      },
      {
        title: "현대 자동차 어드민 UI 수정 및 유지보수",
        skills: "Vue3, SCSS",
        works: [],
      },
    ],
  },
  {
    company: "(주)파인인사이트",
    year: "2016.08 - 2019.01",
    role: "UI/UX Designer",
    projects: [
      {
        title: "의료 서비스 UI 디자인 및 인쇄·홍보물 디자인",
        skills:
          "Mobile App UI, Web UI(PC/Mobile), 편집·인쇄 디자인, 옥외광고물",
        works: [
          "화상치료자문 모바일앱 위피아스 UI 디자인",
          "임상시험센터, 건강검진센터 등 의료웹사이트 PC, Mobile UI 디자인",
          "병원 사보, 화상예방 홍보용 책자, 브로셔 등 출판, 인쇄물 디자인",
          "홍보용 배너, 현수막 등 옥외광고물 디자인",
        ],
      },
    ],
  },
]

export const spec: SpecData = {
  education: {
    name: "국민대학교 공업디자인 학사",
    year: "2016 ~ 2019",
  },
  certificate: {
    name: "정보처리기사",
    year: "2019",
  },
}
