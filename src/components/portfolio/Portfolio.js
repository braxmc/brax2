import React from 'react';

import { PortWrap, Header, Description, ProjectWrap, ProjectContainer, Header2 } from './PortfolioElements';

const Portfolio = () => {

  return (
    <PortWrap id='portfolio' >
      <Header>Portfolio</Header>
      <Header2>links:</Header2>
      <ProjectContainer>
        <ProjectWrap href='https://trvlr.netlify.app/' target='_blank'>
            <Description>trvlr</Description>
        </ProjectWrap>
        <ProjectWrap href='https://plantopia-brax.herokuapp.com/' target='_blank'>
          <Description>Plantopia</Description>
        </ProjectWrap>
        <ProjectWrap href='https://breakingbadlookup.netlify.app' target='_blank'>
          <Description>Breaking Bad Lookup</Description>
        </ProjectWrap>
      </ProjectContainer>
    </PortWrap>
  )
}

export default Portfolio;