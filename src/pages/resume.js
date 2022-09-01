import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import ExpItem from "../components/resume/ExpItem"
import ItemTable from "../components/resume/ItemTable"
import CertItemTable from "../components/resume/CertItemTable"
import { experience, education, skills } from "../contents/resume.constant"
import Seo from "../components/seo"

const ResumeItem = styled.section`
  padding-top: 60px;
`

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const expList = experience
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Resume" />
      <section className="resume">
        <ResumeItem className="resume-item">
          <h2>Experience</h2>
          {expList &&
            expList.map(exp => (
              <ExpItem
                company={exp.company}
                desc={exp.desc}
                period={exp.period}
                role={exp.role}
                stacks={exp.stacks}
                tasks={exp.tasks}
                key={exp.company}
              />
            ))}
        </ResumeItem>
        <ResumeItem className="resume-item">
          <h2>Skills</h2>
          <ItemTable list={skills}></ItemTable>
        </ResumeItem>
        <ResumeItem className="resume-item">
          <h2>Education & Certificate</h2>
          <CertItemTable list={education}></CertItemTable>
        </ResumeItem>
      </section>
    </Layout>
  )
}

export default Resume

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
