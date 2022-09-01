import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ItemTableWrapper = styled.div`
  padding-top: 16px;
`

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  border-bottom: 1px dotted var(--color-grey-d);
  padding: 16px 0;
`
const ItemTitle = styled.div`
  color: var(--color-primary);
  font-weight: var(--fontWeight-bold);
`
const ItemContent = styled.div`
  padding: 0 16px;
  div {
    padding-bottom: 16px;
    &:last-child {
      padding: 0;
    }
  }
  p {
    margin: 0;
    &.period {
      color: var(--color-grey-9);
      font-weight: var(--fontWeight-light);
      font-size: 14px;
    }
    &.bold {
      color: var(--color-grey-3);
      font-weight: var(--fontWeight-bold);
    }
  }
`

const CertItemTable = ({ title, list }) => {
  return (
    <ItemTableWrapper>
      {list &&
        list.map(li => (
          <ItemRow key={li.title}>
            <ItemTitle>{li.title}</ItemTitle>
            <ItemContent>
              {li.content &&
                li.content.map(c => (
                  <div key={c.label}>
                    <p className="bold">{c.label}</p>
                    <p className="period">{c.period}</p>
                    <p>{c.value}</p>
                  </div>
                ))}
            </ItemContent>
          </ItemRow>
        ))}
    </ItemTableWrapper>
  )
}

export default CertItemTable
