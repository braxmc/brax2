import styled from 'styled-components';

export const ContactWrap = styled.div`
  background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  background: rgba(99,99,99,0.4);
  margin-top: 1.7em;
  margin-bottom: 8em;
  border-radius: 10px;
  width: 550px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: rgba(99,99,99,0.8);
    color: #EBEBEB;
  }

  @media screen and (max-width: 795px) {
    width: 350px;
    margin-bottom: 8em;
  }  
`

export const Header = styled.h1`
  font-family: 'zilla slab', sans-serif;
  font-size: 80px;
  color: #EBEBEB;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 795px) {
   font-size: 50px;
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
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
  background: rgba(99,99,99,0.4);
  margin-top: 1em;
  margin-bottom: 0.5em;
  padding: 1.4em 0;
  border-radius: 10px;
  width: 550px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: rgba(99,99,99,0.8);
    color: #EBEBEB;
  }

  @media screen and (max-width: 795px) {
    font-size: 20px;
    width: 350px;
    margin-bottom: 1em;
  }
`

export const Image = styled.img`
padding: 2em;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 795px) {
    width: 3em;
  }
`