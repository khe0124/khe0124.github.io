/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import icon01 from "../images/skill_js.svg"
import icon02 from "../images/skill_ts.svg"
import icon03 from "../images/skill_react.svg"
import icon04 from "../images/skill_vue.svg"
import icon05 from "../images/skill_html.svg"
import icon06 from "../images/skill_css.svg"
const SkillBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 0.4rem;
    overflow: hidden;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.06);
    img {
      width: 100%;
      height: 100%;
    }
  }
`

const SkillBox = () => {
  const imageList = [
    { src: icon01, label: "JavaScript" },
    { src: icon02, label: "TypeScript" },
    { src: icon03, label: "React" },
    { src: icon04, label: "Vue.js" },
    { src: icon05, label: "HTML" },
    { src: icon06, label: "CSS" },
  ]
  return (
    <SkillBoxWrapper>
      {imageList &&
        imageList.map(e => (
          <div key={e.src}>
            <img src={e.src} alt={`${e.label} 아이콘`} />
          </div>
        ))}
    </SkillBoxWrapper>
  )
}

export default SkillBox
