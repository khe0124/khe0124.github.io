import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import fishicon_filled from "../images/fish_filled.svg"
import fishicon from "../images/fish.svg"
const FishIconWrapper = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 47, 134, 0.2);
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`
const FishIcon = ({ isContact = false }) => {
  return (
    <FishIconWrapper className="fish-icon" to="/">
      <img src={isContact ? fishicon : fishicon_filled} alt="" />
    </FishIconWrapper>
  )
}

export default FishIcon
