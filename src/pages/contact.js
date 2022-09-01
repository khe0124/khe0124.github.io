import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import extlink from "../contents/contact.constant"
import SquareButton from "../components/SquareButton"
import FishIcon from "../components/FishIcon"
import Seo from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const btnList = extlink || []
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="project" />
      <div>
        <FishIcon isContact={true} />
        <p>열대섬 해초속의 작은 개발자</p>
        <p>편하신 수단을 통해서 연락주시기 바랍니다. 감사합니다.</p>
      </div>
      <div className="contact-links">
        {btnList &&
          btnList.map(n => {
            return (
              <SquareButton
                external={true}
                emoji={n.emoji}
                link={n.link}
                key={n.label}
                label={n.label.toUpperCase()}
              ></SquareButton>
            )
          })}
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
