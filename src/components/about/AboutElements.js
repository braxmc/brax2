import styled from 'styled-components';

export const AboutWrap = styled.div`
   background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: 'zilla slab', sans-serif;
  font-size: 80px;
  color: #EBEBEB;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 795px) {
    margin-top: 2em;
  }

  @media screen and (max-width: 400px) {
   padding-bottom: 1em;
  }
`

export const Header2 = styled.h2`
  font-family: 'zilla slab', sans-serif;
  display: flex;
  justify-content: center;
`

export const Description = styled.p`
  font-family: 'hind siligury', sans-serif;
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  margin-right: 8em;
  margin-left: 8em;

  @media screen and (max-width: 765px) {
    background: rgba(210,210,210,.3);
    padding: 1em;
    border-radius: 10px;
    font-size: 1.05em;
  }

  @media screen and (max-width: 600px) {
    background: rgba(210,210,210,.3);
    padding: 1em;
    border-radius: 10px;
    font-size: 0.85em;
    margin-bottom: 0.5em;
    margin-left: 4em;
    margin-right: 4em;
  }

  @media screen and (max-width: 400px) {
   margin-bottom: 30em;
  }
`

export const Description1 = styled.p`
  font-family: 'hind siligury', sans-serif;
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-right: 8em;
  margin-left: 8em;
  margin-bottom: 17em;

  @media screen and (max-width: 765px) {
    background: rgba(210,210,210,.3);
    padding: 1em;
    border-radius: 10px;
    font-size: 1.05em;
  }

  @media screen and (max-width: 600px) {
    background: rgba(210,210,210,.3);
    padding: 1em;
    border-radius: 10px;
    font-size: 0.85em;
    margin-bottom: 16em;
    margin-left: 4em;
    margin-right: 4em;
  }

  @media screen and (max-width: 400px) {
   display: none;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: 100px;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`