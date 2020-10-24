import styled from 'styled-components';

export const PortWrap = styled.div`
  background-image: linear-gradient(to bottom, #000000, #050505, #111111, #222222, #b9b9b9, #EBEBEB, #b9b9b9, #b9b9b9, #222222, #111111, #050505, #000000);
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-size: 80px;
  display: flex;
  justify-content: center;
  color: #EBEBEB;
  z-index: 3;

  @media screen and (max-width: 795px) {
   font-size: 50px;
   padding-bottom: 0;
  }
`;

export const Header2 = styled.h2`
  font-family: 'Zilla Slab', serif;
  font-size: 35px;
  display: flex;
  justify-content: center;
  color: #EBEBEB;
  z-index: 3;
  padding-bottom: .6em;
  padding-top: .5em;

  @media screen and (max-width: 795px) {
   font-size: 30px;
   padding-bottom: 0;
  }

  @media screen and (max-width: 400px) {
   font-size: 30px;
  }
`;

export const ProjectContainer = styled.div`
  margin-bottom: 11em;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 795px) {
    margin-top: 7em;
  }
`;

export const ProjectWrap = styled.div`
  border: 1px solid black;
  padding: 2em 0;
  margin: 1em 0;
  border-radius: 10px;
  background: rgba(210,210,210,.1);
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  cursor: pointer;


  &:hover {
    background: rgba(99,99,99,0.4);
    color: #EBEBEB;
    /* -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black; */
  }

  @media screen and (max-width: 795px) {
    width: 200px;
    padding: 1em 0;
  }
`

export const Description = styled.a`
  font-family: 'Hind Siliguri', sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 0 2em;
  text-decoration: none;
  color: #000000;
`

// export const Description1 = styled.p`
//     justify-content: center;
//     padding: 0 5em;
//     font-size: 15px;
//     font-family: 'Quicksand', sans-serif;
// `