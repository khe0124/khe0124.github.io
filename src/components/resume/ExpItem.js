import * as React from "react"
import styled from "styled-components"

const ExpWrapper = styled.div`
  padding: 28px 0;
  border-top: 1px solid var(--color-grey-d);

  /* PC / Tablet: 좌(회사명·기간) / 우(롤·설명·이력) 2단 */
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 24px;
  }
`

const ExpAside = styled.div`
  h3 {
    font-size: 20px;
    margin: 0;
    padding: 0 0 8px;
    word-break: keep-all;
  }
  p.period {
    font-size: 14px;
    color: var(--color-grey-9);
    margin: 0;
  }
`

const ExpBody = styled.div`
  p.role {
    color: var(--color-primary);
    font-weight: var(--fontWeight-bold);
    margin: 0;
  }
  p.desc {
    font-size: 14px;
    color: var(--color-grey-3);
    line-height: 1.7;
    word-break: keep-all;
    margin: 8px 0 0;
  }
  p.stacks {
    font-size: 14px;
    color: var(--color-grey-9);
    word-break: keep-all;
    margin: 12px 0 0;
  }
  p.stacks span {
    color: var(--color-primary);
    font-weight: var(--fontWeight-bold);
    margin-right: 8px;
  }

  /* 모바일에서는 회사명 아래로 자연스럽게 이어지도록 여백 */
  @media screen and (max-width: 766px) {
    padding-top: 12px;
  }
`

const ExpTaskList = styled.div`
  ul {
    margin: 0;
    padding: 20px 0 4px 16px;
  }
  li {
    font-size: 14px;
    margin-bottom: 8px;
    word-break: keep-all;
  }
`

const ProjectList = styled.div`
  padding-top: 8px;
`

const ProjectItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px dotted var(--color-grey-d);
  &:last-child {
    border-bottom: none;
  }
  h4 {
    font-size: 16px;
    margin: 0;
    padding: 4px 0;
    color: var(--color-grey-1);
  }
  p.stacks {
    font-size: 13px;
    color: var(--color-grey-9);
    margin: 0;
    word-break: keep-all;
  }
  ul {
    margin: 0;
    padding: 12px 0 4px 16px;
  }
  li {
    font-size: 14px;
    margin-bottom: 8px;
    word-break: keep-all;
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

const ExpItem = ({
  company,
  desc,
  period,
  images,
  role,
  stacks,
  tasks,
  projects,
}) => {
  return (
    <ExpWrapper>
      <ExpAside>
        <h3>{company}</h3>
        {period && <p className="period">{period}</p>}
      </ExpAside>
      <ExpBody>
        {role && <p className="role">{role}</p>}
        {desc && <p className="desc">{desc}</p>}
        {stacks && (
          <p className="stacks">
            <span>Stacks</span>
            {stacks}
          </p>
        )}
        {images && (
          <ImageWrapper>
            {images.map((img, i) => (
              <div key={img}>
                <img src={img} alt={`${company} 프로젝트 화면 ${i + 1}`} />
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
        {projects && (
          <ProjectList>
            {projects.map(project => (
              <ProjectItem key={project.name}>
                <h4>{project.name}</h4>
                {project.stacks && <p className="stacks">{project.stacks}</p>}
                {project.tasks && (
                  <ul>
                    {project.tasks.map(task => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                )}
              </ProjectItem>
            ))}
          </ProjectList>
        )}
      </ExpBody>
    </ExpWrapper>
  )
}

export default ExpItem
