import React from 'react';

import { AboutWrap, Header, Description, Description1, Image, ImageWrap, DescriptionWrap } from './AboutElements';

import image from '../../images/me.jpg';

const About = () => {

  return (
    <AboutWrap id='about' >
      <Header>About</Header>
      <ImageWrap>
        <Image src={image} />
      </ImageWrap>
      <DescriptionWrap>
        <Description>
          I’ve always loved tech, I just never thought I was capable. After realizing my sales days were numbered I decided it was time for a change. I had a friend who had just graduated, got a job, and loved it. After watching him and and talking to countless other graduates I used him as a referral to get into DevPoint Labs who is partnered with the University of Utah in Salt Lake City, UT. I'm keen and very passionate so I'm excited to see where this takes me.
        </Description>
        <Description1>
          Outside of coding I'm an avid gamer, currently im playing fortnite and runescape, but I play most major titles and lots of old games. I love motorsports such as dirtbiking and Harley's, and also enjoy traditional sports like lacrosse and pickleball. I'm also very passionate about traveling.
        </Description1>
      </DescriptionWrap>
    </AboutWrap>
  )
}

export default About;