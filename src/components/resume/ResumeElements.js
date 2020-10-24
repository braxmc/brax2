import styled from 'styled-components';

export const ResumeWrap = styled.div`
  background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
`;

export const Header = styled.h1`
  font-family: 'zilla slab', sans-serif;
  font-size: 80px;
  color: #EBEBEB;
  display: flex;
  justify-content: center;
  

  @media screen and (max-width: 795px) {
   font-size: 50px;
   padding-bottom: 0;
  }
`;

export const Image = styled.img`
  height: 85vh;

  @media screen and (max-width: 795px) {
    width: 85%;
    padding-top: 1em;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 500px) {
    height: 75vh;
    padding-top: 1em;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
`