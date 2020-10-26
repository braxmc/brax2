import styled from 'styled-components';

export const ResumeWrap = styled.div`
  background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Header = styled.h1`
  font-family: 'zilla slab', sans-serif;
  font-size: 80px;
  color: #EBEBEB;
  order: 1;

  @media screen and (max-width: 765px) {
   font-size: 50px;
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 75px;
  }
`;

export const Image = styled.img`
  height: 75vh;

  &:hover {
      transform: scale(1.1);
    }

  @media screen and (max-width: 765px) {
    display: flex;
    width: 85%;
  }

  @media screen and (max-width: 650px) {
    display: none;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const ImageWrap = styled.a`
  display: flex;
  justify-content: center;
  order: 2;
`

export const SmallScreen = styled.div`
  display: none;
  order: 2;
  padding-bottom: 130px;

  @media screen and (max-width: 649px) {
    display: flex;
  }

  @media screen and (max-width: 450px) {

  }  
`

export const Resumepdf = styled.a`
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: #EBEBEB;
  border: 1px solid black;
  border-radius: 10px;
  padding: 3em;
  background: rgba(99,99,99,0.4);

  &:hover {
    background: rgba(99,99,99,0.8);
    color: #EBEBEB;
  }
`