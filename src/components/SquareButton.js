/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import arrow from "../images/arrow.svg"
const SquareButtonWrapper = styled(Link)`
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
  font-family: var(--fontFamily-title);
  border: 1px solid var(--color-primary-pale);
  color: var(--color-grey-3);
  display: grid;
  grid-template-columns: 40px 1fr 16px;
  margin-bottom: 6px;
  transition: all 0.5s;
  @media screen and (min-width: 767px) {
    width: 300px;
  }
  .arrow-box {
    padding: 0.1rem;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    opacity: 0.5;
  }
  span {
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0px;
      z-index: -1;
      background: rgba(54, 248, 63, 1);
      transition: width 0.3s;
    }
  }
  &:hover,
  &:active {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    span {
      &::after {
        width: 100%;
      }
    }
    img {
      opacity: 1;
    }
  }
`

const SquareButtonWrapperOuterLink = styled.a`
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
  font-family: var(--fontFamily-title);
  border: 1px solid var(--color-primary-pale);
  color: var(--color-grey-3);
  display: grid;
  grid-template-columns: 40px 1fr 16px;
  margin-bottom: 6px;
  transition: all 0.5s;
  @media screen and (min-width: 767px) {
    width: 300px;
  }
  .arrow-box {
    padding: 0.1rem;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    .image-wrap {
      width: 18px;
      height: 18px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .arrow-box img {
    opacity: 0.5;
  }
  span {
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 5px;
      position: absolute;
      left: 0;
      bottom: 0px;
      z-index: -1;
      background: rgba(54, 248, 63, 1);
      transition: width 0.3s;
    }
  }
  &:hover,
  &:active {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    span {
      &::after {
        width: 100%;
      }
    }
    img {
      opacity: 1;
    }
  }
`

const SquareButton = ({ emoji, icon, external, link, isOut, label }) => {
  if (external) {
    return (
      <SquareButtonWrapperOuterLink href={link}>
        {emoji && <div className="flex-center">{emoji}</div>}
        {icon && (
          <div className="flex-center">
            <div className="image-wrap">
              <img src={icon} alt="" />
            </div>
          </div>
        )}
        <div>
          <span>{label}</span>
        </div>
        <div className="arrow-box flex-center">
          <img src={arrow} alt="" />
        </div>
      </SquareButtonWrapperOuterLink>
    )
  }
  return (
    <SquareButtonWrapper to={link}>
      <div className="flex-center">{emoji}</div>
      <div>
        <span>{label}</span>
      </div>
      <div className="arrow-box flex-center">
        <img src={arrow} alt="" />
      </div>
    </SquareButtonWrapper>
  )
}

export default SquareButton
