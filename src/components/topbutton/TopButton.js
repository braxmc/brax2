import React from 'react'

import { Top, ButtonWrap } from './TopButtonElements';

const TopButton = () => {
  return (
    <ButtonWrap>
      <Top to='home' smooth={true} duration={500} spy={true} exact='true'>Top ↑</Top>
    </ButtonWrap>
  )
}

export default TopButton
