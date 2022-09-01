import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ExpWrapper = styled.div`
  padding-top: 20px;
`
const ExpHeader = styled.div`
  h3 {
    font-size: 20px;
    margin: 0;
    padding: 8px 0;
  }
  p {
    font-size: 14px;
    color: var(--color-grey-9);
    word-break: keep-all;
    margin: 0;
  }
`
const ExpBody = styled.div``
const ExpImage = styled.div``
const ExpTaskList = styled.div`
  ul {
    margin: 0;
    /* list-style: none; */
    padding: 24px 0 16px 16px;
  }
  li {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding-top: 24px;
  div {
    border-radius: 10px;
    overflow: hidden;
    max-height: 310px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const ItemTableWrapper = styled.div`
  padding-top: 16px;
`

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  border-bottom: 1px dotted var(--color-grey-d);
  padding: 16px 0;
`

const ItemTitle = styled.div`
  color: var(--color-primary);
  font-weight: var(--fontWeight-bold);
`
const ItemContent = styled.div`
  padding: 0 16px;
  p {
    color: var(--color-grey-3);
    font-weight: var(--fontWeight-bold);
    margin: 0;
  }

  p.period {
    color: var(--color-grey-9);
    font-weight: var(--fontWeight-light);
    font-size: 14px;
  }
`

const ExpItem = ({ company, desc, period, images, role, stacks, tasks }) => {
  return (
    <ExpWrapper>
      <ExpHeader>
        <h3>{company}</h3>
        <p>{desc}</p>
      </ExpHeader>
      <ExpBody>
        <ItemTableWrapper>
          <ItemRow>
            <ItemTitle>Role</ItemTitle>
            <ItemContent>
              <p className="period">{period}</p>
              <p>{role}</p>
            </ItemContent>
          </ItemRow>
          {stacks && (
            <ItemRow>
              <ItemTitle>Stacks</ItemTitle>
              <ItemContent>
                <p>{stacks}</p>
              </ItemContent>
            </ItemRow>
          )}
        </ItemTableWrapper>
        {images && (
          <ImageWrapper>
            {images.map(img => (
              <div>
                <img src={img} alt="" />
              </div>
            ))}
          </ImageWrapper>
        )}
        {tasks && (
          <ExpTaskList>
            <ul>
              {tasks.map(task => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </ExpTaskList>
        )}
      </ExpBody>
    </ExpWrapper>
  )
}

export default ExpItem
