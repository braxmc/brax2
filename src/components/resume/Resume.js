import React from 'react';

import { ResumeWrap, Header, Image, ImageWrap } from './ResumeElements';

import image from '../../images/resume.png';

const Resume = () => {

  return (
    <ResumeWrap id='resume'>
      <Header>Resume</Header>
      <ImageWrap>
        <Image src={image} />
      </ImageWrap>
    </ResumeWrap>
  )
}

export default Resume;