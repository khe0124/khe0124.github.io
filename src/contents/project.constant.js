import cyyy1_01 from "../images/cyyy1_01.png"
import cyyy1_02 from "../images/cyyy1_02.png"
import cyyy1_03 from "../images/cyyy1_03.png"
import cyyy1_04 from "../images/cyyy1_04.png"
import cyyy2_01 from "../images/cyyy2_01.png"
import cyyy2_02 from "../images/cyyy2_02.png"
import cyyy2_03 from "../images/cyyy2_03.png"
import cyyy2_04 from "../images/cyyy2_04.png"

export const side = [
  {
    label: "체육영역 시즌1",
    desc: "같이 운동할 사람을 모아주는 체육영역이라는 서비스를 구상하기에 앞서, 몇 가지 설문을 통해 얻어낸 유저의 성향에 따라 잘 맞는 운동을 추천해주는 웹페이지",
    // period: "2020.05 ~ 2022.08",
    role: "프론트엔드 개발자",
    stacks: "React, React-hook, Styled-component,Koa, Netlify",
    images: [cyyy1_01, cyyy1_02, cyyy1_03, cyyy1_04],
    tasks: [
      "설문진행 및 결과 표시 UI 개발",
      "React Helmet으로 SEO 최적화",
      "Netlify로 배포",
    ],
  },
  {
    label: "체육영역 시즌2",
    desc: "여성체육활동을 독려하고자 오픈한 초보풋살클래스에 참여한 참가자들의 실력성장추이를 보여주는 개인화페이지와 커리큘럼 종료일에 개최된 대회의 소개 페이지",
    // period: "2020.05 ~ 2022.08",
    role: "프론트엔드 개발자",
    stacks: "Vue3, Vuex, SCSS",
    images: [cyyy2_01, cyyy2_02, cyyy2_03, cyyy2_04],
    tasks: [
      "Chart.js로 스탯그래프 UI 개발",
      "참여에 따라 출석스탬프 UI 개발",
      "Carousel 슬라이드 구현",
    ],
  },
]

export const others = [
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

export const education = [
  {
    label: "국민대학교",
    period: "2019.12 ~ 2020.04",
    value: "공업디자인학과 학사",
  },
  {
    label: "솔데스크 학원",
    period: "2019.05 ~ 2019.11",
    value: "자바 웹 개발자과정 수료",
  },
]

export const certificate = [
  { label: "정보처리기사", period: "2019.08", value: "한국산업인력공단" },
  { label: "정보처리산업기사", period: "2019.08", value: "한국산업인력공단" },
]
