import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <section className="resume">
        <section className="resume-item">
          <h2>Experience</h2>
          <article>
            <h3>(주)에이치에너지</h3>
            <p>
              공유옥상을 통해 태양광 발전으로 얻은 수익을 시민에게 공유하는
              플랫폼 모햇과 태양광 발전량 예측 및 입찰하는 VPP를 서비스하는
              스타트업
            </p>
            <ul>
              <li>RestAPI Frontend 개발</li>
              <li>Chart.js로 발전량 그래프 개발</li>
              <li>전반적인 서비스 UI 개발</li>
            </ul>
          </article>
        </section>
        <section className="resume-item">
          <h2>Education & Certificate</h2>
          <article>
            <h3>국민대학교</h3>
            <p>2010.03 ~ 2015.02</p>
            <p>공업디자인학과 학사졸</p>
          </article>
          <article>
            <h3>정보처리기사</h3>
            <p>2019. 08</p>
            <p>자격증 취득</p>
          </article>
          <article>
            <h3>정보처리산업기사</h3>
            <p>2019. 08</p>
          </article>
        </section>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
