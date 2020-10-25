import React from 'react';

import { ResumeWrap, Header, Image, ImageWrap, SmallScreen, Resumepdf } from './ResumeElements';

import image from '../../images/resume.png';

import resume from '../../files/resumeapps.pdf';

const Resume = () => {

  return (
    <ResumeWrap id='resume'>
      <Header>Resume</Header>
      <ImageWrap>
        <Image src={image} />
      </ImageWrap>
      <SmallScreen>
        <Resumepdf href={resume} target="blank">Click for resume</Resumepdf>
      </SmallScreen>
    </ResumeWrap>
  )
}

export default Resume;