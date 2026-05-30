export const experience = [
  {
    company: "Greenery (그리너리)",
    desc: "LCA/LCCI와 탄소 크레딧을 중심으로 한 B2B/산업 도메인 제품 프론트엔드를 개발합니다. 복잡한 업무 규칙을 입력·검증·시각화·리포트·운영 화면으로 연결하고, Web3·STO·에너지 IoT 등 인접 도메인의 사용자 화면과 Admin Console을 함께 구현했습니다.",
    period: "2022.08 ~ 재직중",
    role: "프론트엔드 개발자",
    projects: [
      {
        name: "LCA/LCCI Platform",
        stacks:
          "React, Redux, Redux Toolkit, React Flow, MUI, Data Grid Pro, Tailwind CSS, Storybook, Webpack, Vite",
        tasks: [
          "전과정평가(LCA) 생성 → 공정별 데이터 입력 → Mass Balance → LCI DB 연동 → Cut-off → 공정 흐름도 → 결과 검증으로 이어지는 다단계 의존 비즈니스 플로우를 프론트엔드에서 설계·구현",
          "복잡한 LCA 도메인 개념을 사용자가 입력·검증할 수 있는 화면 구조와 상태 흐름으로 재구성",
          "Data Grid Pro 기반 대용량 입력 화면과 공통 그리드 패턴 구축, 반복 입력/검증 패턴 표준화",
          "Excel 업로드/다운로드·Key-in·Grid 등 3개 입력 채널을 단일 상태로 통합하고 필수값·Null·중복 등 업무형 Validation 처리",
          "Canvas 기반 공정 흐름도 에디터 구현 (노드 생성·삭제·자동 배치·드래그·스타일 변경·저장/불러오기·이미지 다운로드)",
          "LCA 상세·요약·PDF/Excel 리포트 다운로드까지 연결해 산출물 생성을 제품 내 일관된 경험으로 제공",
          "Storybook 기반 공통 컴포넌트 카탈로그화, ESLint/Prettier·라우팅 등 FE 개발 환경 정비",
          "저장 실패·트리 동기화·무한 렌더링·라우팅 오류 등 운영 이슈 해결로 QA 안정성 향상",
        ],
      },
      {
        name: "POPLE Carbon Credit / Marketplace / Registry",
        stacks: "React, Next.js, Nest.js, MUI, Chakra UI, Context API, Google Maps, i18next",
        tasks: [
          "탄소 크레딧 발행·거래·레지스트리가 연결된 B2B 플랫폼의 사용자 화면 및 Admin Console 개발·운영",
          "Marketplace·Credit·Registry·User·Payment 등 5개+ 도메인의 API 전환 담당",
          "회원가입·사업 등록·크레딧 발행/이전·감축량 인증·결제 등 핵심 비즈니스 플로우 리팩토링",
          "크레딧 상세, 목록 Excel Export, PDF Viewer, 문서 다운로드, 상태별 UI 제어 기능 개발",
          "i18n 인프라 구축 및 한/영 풀커버 영문화 작업으로 운영 가능한 다국어 구조 개선",
          "무한 루프·중복 요청·파일 업로드·지도 입력 등 운영 이슈 해결로 실서비스 안정성 개선",
        ],
      },
      {
        name: "Web3 Asset Management Service",
        stacks: "React, Next.js, Metamask, Web3.js, Amplitude",
        tasks: [
          "Metamask 연결·지갑 주소 검증·로그인/서명/지갑 정보 조회 API 연동 등 지갑 기반 사용자 플로우 구현",
          "폴링 기반 메시징 구조로 트랜잭션 상태 변경 알림을 제품 경험에 연결",
          "사용자 자산·연결·거래내역·세금 페이지 및 Admin 유저 관리 메뉴 개발",
          "Amplitude 이벤트 트래킹과 Event Mapping 설계 적용",
        ],
      },
      {
        name: "STO Trading Platform",
        stacks: "React, Next.js, NextAuth, Redux Toolkit, Chakra UI, Storybook",
        tasks: [
          "NextAuth 기반 일반/기업 회원 로그인 구현",
          "Project·News 등 CRUD API 연동",
          "Slider·Text Animation 등 인터랙션 효과와 반응형 UI 개발",
        ],
      },
      {
        name: "Energy IoT App",
        stacks: "React Native, Expo, Redux, Redux Saga",
        tasks: [
          "사용자 소유 전자기기 목록 API 연동",
          "ENode 기반 EV App 연동 기능 구현",
        ],
      },
    ],
  },
  {
    company: "H-Energy (에이치에너지)",
    desc: "Vue 기반 에너지/투자 서비스의 사용자 화면과 공식 웹사이트를 개발했습니다. 지도·차트·소셜 공유·반응형 UI 등 서비스 전반의 사용자 경험과 데이터 시각화, 외부 API 연동을 담당했습니다.",
    period: "2020.05 ~ 2022.08",
    role: "프론트엔드 개발자",
    stacks: "Vue, Quasar, Vue3, Pug, Stylus, JavaScript, Chart.js, Kakao Map, Firebase",
    tasks: [
      "REST API 연동 및 Pug, Stylus 기반 전체 서비스 UI 개발",
      "Chart.js를 활용해 출자수량·전력량·발전량 등 주요 통계 그래프 구현",
      "Kakao Map API와 SVG 그래픽 지도를 활용한 옥상 위치 표시 기능 개발",
      "Kakao·Facebook 등 소셜 공유 기능 개발",
      "Vue3 기반 반응형 공식 웹사이트·프로모션 랜딩 페이지 개발 및 Firebase 정적 배포 환경 구성",
    ],
  },
  {
    company: "Geeks Family (긱스패밀리)",
    desc: "JavaScript·jQuery·HTML/CSS 기반의 어드민 UI 개발을 담당하며 프론트엔드 화면 구조, 스타일링, 데이터 시각화 경험을 쌓았습니다.",
    period: "2019.12 ~ 2020.04",
    role: "프론트엔드 개발자",
    stacks: "JavaScript, jQuery, HTML/CSS, SCSS, PHP/Laravel",
    tasks: [
      "어드민 서비스 전반의 HTML/CSS UI 구현",
      "Chart.js 기반 주문·배달량 통계 페이지 UI 개발",
    ],
  },
  {
    company: "FineInsight (파인인사이트)",
    desc: "편집 디자인, Web UI 디자인, App UI 디자인을 담당했습니다. 정보 구조와 사용자 화면 설계 관점에서 제품을 바라보는 역량을 키워 프론트엔드 개발자 전환의 기반이 된 경험입니다.",
    period: "2016.08 ~ 2019.01",
    role: "인하우스 디자이너",
    tasks: [
      "사내 서비스 및 프로젝트의 편집 디자인 업무 수행",
      "Web UI 디자인 및 화면 구조 설계",
      "App UI 디자인 및 모바일 사용자 흐름 설계",
      "디자인 산출물을 실제 구현 가능한 화면 구조로 정리",
    ],
  },
  {
    company: "Yanolja (야놀자)",
    desc: "콘텐츠 본부에서 디자인 인턴으로 근무하며 콘텐츠 기반 디자인 업무를 경험했습니다. 빠른 운영 환경에서 콘텐츠 목적과 사용자 접점을 고려한 디자인 산출물을 제작했습니다.",
    period: "2015.06 ~ 2015.12",
    role: "콘텐츠 본부 디자인 인턴",
    tasks: [
      "콘텐츠 본부 디자인 업무 보조 및 운영 디자인 제작",
      "서비스 콘텐츠 목적에 맞춘 시각 자료 구성",
      "실무 디자인 프로세스와 협업 방식 경험",
    ],
  },
]

export const skills = [
  {
    label: "Frontend",
    value:
      "React, Next.js, TypeScript, JavaScript, Redux, Redux Toolkit, React Flow, Vue2/Vue3, React Native",
  },
  {
    label: "UI/Style",
    value:
      "MUI, Data Grid Pro, Chakra UI, Tailwind CSS, Styled-components, SCSS, Storybook",
  },
  { label: "Markup", value: "HTML/CSS, Pug, Stylus" },
  {
    label: "Backend",
    value: "Node.js, Nest.js, Python, Web3.js, Firebase",
  },
  {
    label: "Tools",
    value: "Vite, Webpack, i18next, Git, Figma, Zeplin, Jira, Confluence, Amplitude",
  },
]

export const education = [
  {
    title: "Education",
    content: [
      {
        label: "국민대학교",
        period: "2010 ~ 2015",
        value: "공업디자인학과 학사",
      },
      {
        label: "솔데스크 학원",
        period: "2019.05 ~ 2019.11",
        value: "자바 웹 개발자과정 수료",
      },
    ],
  },
  {
    title: "Certificate",
    content: [
      { label: "정보처리기사", period: "2019.08", value: "한국산업인력공단" },
      {
        label: "정보처리산업기사",
        period: "2019.08",
        value: "한국산업인력공단",
      },
    ],
  },
]

export const certificate = []
