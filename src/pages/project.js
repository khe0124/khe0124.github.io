import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ExpItem from "../components/resume/ExpItem"
import ItemTable from "../components/resume/ItemTable"
import CertItemTable from "../components/resume/CertItemTable"
import { side, others } from "../contents/project.constant"
import Seo from "../components/seo"

const ResumeItem = styled.section`
  padding-top: 60px;
`

const OtherItemWrapper = styled.div``

const OtherItem = styled.div`
  padding: 16px 0;
  div.item-header {
    display: flex;
    align-items: baseline;
    h3 {
      font-size: 20px;
      font-family: var(--fontFamily-sans);
      margin: 0;
      padding: 8px 4px 8px 0;
    }
    p {
      font-size: 14px;
      color: var(--color-grey-6);
    }
  }
  p {
    margin: 0;
  }
`

const Project = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const sideList = side
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <section className="resume">
        <ResumeItem className="resume-item">
          <h2>Side Projects</h2>
          {sideList &&
            sideList.map(obj => (
              <ExpItem
                company={obj.label}
                desc={obj.desc}
                role={obj.role}
                images={obj.images}
                stacks={obj.stacks}
                tasks={obj.tasks}
                key={obj.label}
              />
            ))}
        </ResumeItem>
        <ResumeItem className="resume-item">
          <h2>Other Works</h2>
          <OtherItemWrapper>
            {others &&
              others.map(obj => (
                <OtherItem>
                  <div className="item-header">
                    <h3>{obj.label}</h3>
                    <p>{obj.period}</p>
                  </div>
                  <p>{obj.value}</p>
                  <p>{obj.stacks}</p>
                </OtherItem>
              ))}
          </OtherItemWrapper>
        </ResumeItem>
      </section>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
