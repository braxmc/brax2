import React from 'react';

import { ContactWrap, SocialWrap, Header, Description, Image } from './ContactElements';

import icon1 from '../../images/github-icon.png';
import icon2 from '../../images/instagram-icon.png';
import icon3 from '../../images/linkedin-icon.png';

const Contact = () => {

  return (
    <ContactWrap id='contact'>
      <Header>Contact</Header>
      <Description>thebraxmc@gmail.com</Description>
      <Description>801-898-3661</Description>
      <SocialWrap>
        <a href='https://www.linkedin.com/in/braxton-mcclellan-a886a21b3/' target='_blank'>
          <Image src={icon3} />
        </a>
        <a href='https://github.com/braxmc' target='_blank'>
          <Image src={icon1} />
        </a>
        <a href="https://www.instagram.com/brax_mc/" target="_blank">
          <Image src={icon2} />
        </a>
      </SocialWrap>
    </ContactWrap>
  )
}

export default Contact;