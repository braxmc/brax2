import React from 'react';

import { PortWrap, Header, Description, ProjectWrap, ProjectContainer, Header2 } from './PortfolioElements';

const Portfolio = () => {

  return (
    <PortWrap id='portfolio' >
      <Header>Portfolio</Header>
      <Header2>links below</Header2>
      <ProjectContainer>
        <ProjectWrap>
            <Description href='https://trvlr.netlify.app/' target='_blank'>trvlr</Description>
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