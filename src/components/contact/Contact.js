import React from 'react';

import { ContactWrap, SocialWrap, Header, Description } from './ContactElements';

const Contact = () => {

  return (
    <ContactWrap>
      <Header>Contact</Header>
      <Description>thebraxmc@gmail.com</Description>
      <Description>801-898-3661</Description>
      <SocialWrap>
        <p>Social Icons</p>
      </SocialWrap>
    </ContactWrap>
  )
}

export default Contact;