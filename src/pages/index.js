import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SquareButton from "../components/SquareButton"
import SkillBox from "../components/SkillBox"
import Seo from "../components/seo"
import route from "../contents/route.constant"
import FishIcon from "../images/fish_filled.svg"
import AOS from "aos"
import "aos/dist/aos.css"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const navList = route || []
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true,
    })
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="프론트엔드 개발자" pathname={location.pathname} />
      <section>
        <section className="main-item">
          <div
            className="main-heading-item"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 className="main-heading">
              <Link to="/">
                <span>{`Frontend\nDeveloper`}</span>
              </Link>
            </h1>
            <div className="fish-icon">
              <img src={FishIcon} alt="" />
            </div>
          </div>
          <div className="main-description">
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              복잡한 산업 도메인을 제품 UI로 만드는
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Link to="/resume">개발자 강하은</Link>입니다.
            </p>
          </div>
        </section>
        <section className="main-item" data-aos="fade-up">
          <h2>Introduce.</h2>
          <p>
            복잡한 산업 도메인을 실제 제품 UI로 전환하는 프론트엔드
            개발자입니다. 2019년부터 React, Next.js, TypeScript를 중심으로
            LCA/LCCI, 탄소 크레딧, Web3, IoT, STO 등 다양한 도메인에서 입력,
            검증, 시각화, 리포트, 운영 화면을 설계하고 구현했습니다. 특히 대규모
            데이터 입력·검증 UI, Flow Editor, API 전환, i18n, 공통 컴포넌트 구축,
            운영 안정화 경험이 있습니다.
          </p>
        </section>
        <section className="main-item" data-aos="fade-up">
          <h2>Skills.</h2>
          <SkillBox />
        </section>
        <section className="main-item" data-aos="fade-up">
          <div className="main-links">
            {navList &&
              navList.map(n => {
                return (
                  <SquareButton
                    emoji={n.emoji}
                    link={n.link}
                    key={n.label}
                    external={n.external}
                    label={n.label.toUpperCase()}
                  ></SquareButton>
                )
              })}
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
