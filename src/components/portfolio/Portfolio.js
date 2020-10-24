import React from 'react';

import { PortWrap, Header, Description, ProjectWrap, ProjectContainer } from './PortfolioElements';

const Portfolio = () => {

  return (
    <PortWrap id='portfolio' >
      <Header>Portfolio</Header>
      <ProjectContainer>
        <ProjectWrap>
          <Description>trvlr</Description>
        </ProjectWrap>
        <ProjectWrap>
          <Description>Plantopia</Description>
        </ProjectWrap>
        <ProjectWrap>
          <Description>API Project</Description>
        </ProjectWrap>
      </ProjectContainer>
    </PortWrap>
  )
}

export default Portfolio;