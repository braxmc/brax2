import React from 'react';

import { ResumeWrap, Header, Image, ImageWrap, SmallScreen, Resumepdf, SmallHeader } from './ResumeElements';

import image from '../../images/resume.png';

import resume from '../../files/resume-site.pdf';

const Resume = () => {

  return (
    <ResumeWrap id='resume'>
      <Header>Resume</Header>
      <SmallHeader>Click for best resolution</SmallHeader>
      <ImageWrap href={resume} target="blank">
        <Image src={image} />
      </ImageWrap>
      <SmallScreen>
        <Resumepdf href={resume} target="blank">Click for resume</Resumepdf>
      </SmallScreen>
    </ResumeWrap>
  )
}

export default Resume;