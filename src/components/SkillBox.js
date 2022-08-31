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
  const imageList = [icon01, icon02, icon03, icon04, icon05, icon06]
  return (
    <SkillBoxWrapper>
      {imageList &&
        imageList.map(e => (
          <div>
            <img src={e} alt="" />
          </div>
        ))}
    </SkillBoxWrapper>
  )
}

export default SkillBox
