import React, {useEffect, useState} from 'react';

import background1 from '../../videos/background1.mp4'

import { HomeWrap, HomeBg, VideoBg, Header, Links, Header2, LinkItem } from './HomeElements'

import { animateScroll, Link } from 'react-scroll';

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
    <HomeWrap>
      <HomeBg>
        <VideoBg autoPlay loop muted src={background1} type='video/mp4' />
      </HomeBg>
      <Header>Braxton McClellan</Header>
      <Header2>Web Developer</Header2>
      <LinkItem>
        <Links to='portfolio' smooth={true} duration={500} spy={true} exact='true' >Portfolio</Links>
      </LinkItem>
      <LinkItem>
        <Links>Resume</Links>
      </LinkItem>
      <LinkItem>
        <Links>About</Links>
      </LinkItem>
      <LinkItem>
        <Links>Contact</Links>
      </LinkItem>
    </HomeWrap>
  )
}

export default Home;