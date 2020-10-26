import styled from 'styled-components';

import { Link } from 'react-scroll';

import background1 from '../../videos/background1.mp4'

export const HomeWrap = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  min-height: 625px;
  position: relative;
  z-index: 1;
  

  :before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.2) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: url(${background1});
`;

export const Header = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-size: 90px;
  color: #EBEBEB;
  z-index: 3;
  padding-bottom: 0.25em;
  order: 1;

  @media screen and (max-width: 850px) {
    font-size: 75px;
  }

  @media screen and (max-width: 765px) {
   font-size: 50px;
  }

  @media screen and (max-width: 600px) {
   font-size: 45px;
  }
`;

export const Header2 = styled.h2`
  font-family: 'Zilla Slab', serif;
  font-size: 50px;
  color: #EBEBEB;
  z-index: 3;
  padding-bottom: .5em;
  order: 2;

  @media screen and (max-width: 765px) {
   font-size: 30px;
   padding-bottom: 0;
  }

  @media screen and (max-width: 400px) {
   font-size: 30px;
  }
`;

export const Links = styled(Link)`
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
  color: #EBEBEB;
  z-index: 3;
  cursor: pointer;
  
  
  &:hover {
    text-decoration: underline;
    transform: scale(1.1)
  }

  @media screen and (max-width: 765px) {
   font-size: 20px;
   padding: 0;
  }
`;

export const LinkItem = styled.li`
  z-index: 3;
  order: 3;
  padding: 1em 0%;
`;


