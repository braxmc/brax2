import React, {useEffect, useState} from 'react';

import background1 from '../../videos/background1.mp4';

import { HomeWrap, HomeBg, VideoBg, Header, Links, Header2, LinkItem, Top } from './HomeElements';

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const changeNav = () => {
    if(window.scrollY >= 0) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  return (
    <HomeWrap id='home'>
      <HomeBg>
        <VideoBg autoPlay loop muted src={background1} type='video/mp4' />
      </HomeBg>
      <Header>Braxton McClellan</Header>
      <Header2>Web Developer</Header2>
      <LinkItem>
        <Links to='portfolio' smooth={true} duration={500} spy={true} exact='true'>Portfolio</Links>
      </LinkItem>
      <LinkItem>
        <Links to='resume' smooth={true} duration={500} spy={true} exact='true'>Resume</Links>
      </LinkItem>
      <LinkItem>
        <Links to='about' smooth={true} duration={500} spy={true} exact='true'>About</Links>
      </LinkItem>
      <LinkItem>
        <Links to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</Links>
      </LinkItem>
    </HomeWrap>
  )
}

export default Home;