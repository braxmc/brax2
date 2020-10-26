import styled from 'styled-components';

export const AboutWrap = styled.div`
   background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
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

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }

`

export const Header2 = styled.h2`
  font-family: 'zilla slab', sans-serif;
`

export const DescriptionWrap = styled.div`
  order: 3;
  height: 50vh;
  width: 80vw;
  border-radius: 10px;
`

export const Description = styled.p`
  font-family: 'hind siligury', sans-serif;
  font-size: 1.1em;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 10px;

  @media screen and (max-width: 765px) {
    font-size: 1em;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.85em;
  }

  @media screen and (max-width: 400px) {
    background: none;
  }
`

export const Description1 = styled.p`
  font-family: 'hind siligury', sans-serif;
  font-size: 1.1em;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;

  @media screen and (max-width: 765px) {
    font-size: 1em;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.85em;
  }

  @media screen and (max-width: 400px) {
   display: none;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  
  @media screen and (max-width: 765px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  order: 2;
`