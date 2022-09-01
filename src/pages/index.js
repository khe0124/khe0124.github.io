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
    })
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
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
              UI디자인과 자바스크립트를 좋아하는
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Link to="/resume">개발자 강하은</Link>입니다.
            </p>
          </div>
        </section>
        <section className="main-item" data-aos="fade-up">
          <h2>Introduce.</h2>
          <p>
            저는 다양한 형태의 UI에 대한 이해도가 높아, 디자인을 정확하게
            화면으로 구현합니다. 능동적인 업무 자세로 기획자, 디자이너 등 유관
            부서와 협업에도 적극적이고 유연한 소통 가능하며, 끊임없는 공부와
            성장을 즐기고 있습니다.
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
