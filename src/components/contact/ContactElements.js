import styled from 'styled-components';

export const ContactWrap = styled.div`
  background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  overflow: hidden;
`
export const SocialWrap = styled.div`
  background: rgba(99,99,99,0.4);
  border-radius: 10px;
  width: 60vw;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 765px) {
    width: 50vw;
    margin-bottom: 50px;
  }  
`

export const Header = styled.h1`
  font-family: 'zilla slab', sans-serif;
  font-size: 80px;
  color: #EBEBEB;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 765px) {
   font-size: 50px;
   margin-bottom: 20px;
  }
`

export const Description = styled.p`
  font-family: 'hind siligury', sans-serif;
  font-size: 30px;
  display: flex;
  justify-content: center;
  background: rgba(99,99,99,0.4);
  padding: 25px 0;
  border-radius: 10px;
  width: 60vw;
  border: 1px solid black;
  cursor: pointer;
  margin-bottom: 20px;
  color: black;

  &:hover {
    background: rgba(99,99,99,0.8);
    color: #EBEBEB;
  }

  @media screen and (max-width: 765px) {
    font-size: 20px;
    width: 50vw;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
    width: 50vw;
  }
`

export const Image = styled.img`
padding: 35px;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 765px) {
    width: 40px;
    padding: 25px;
  }

  @media screen and (max-width: 450px) {
    width: 25px;
    padding: 20px;
  }
`