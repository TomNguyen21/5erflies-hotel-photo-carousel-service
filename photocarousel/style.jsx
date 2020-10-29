import styled, { keyframes, ThemeProvider } from 'styled-components';

export const theme = {
  background: '#aaa',
  color: '#24292e'
};

export const AppWrapper = styled.div`
  position: relative;
`;

export const MainWrapper = styled.div`
  width: 60% ;
  margin: 0 auto;
  margin-top: ${props => props.show ? '0px' : '40px'};
  font-family: sans-serif, Roboto;
  opacity: ${props => props.show ? 0 : 1};
`;

export const slideup = keyframes`
  0% {
    /* position relative to itself */
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-450px);
    opacity: 1;
  }
`;

export const slidedown = keyframes`
  0% {
    /* if position of itself is fixed, then relative to window, if absolute, then relative to itself */
    transform: translateY(-450px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;

export const Slider = styled.div`
/* null to prevent a slidedown / slide up without clicking button */
  /* display: ${props => props.show ? 'block' : 'none'}; */
  animation: ${props => props.show === null ? 'none' : props.show ? slideup : slidedown};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  z-index: -5;
  display: inline-block;
  position: absolute; //for overlap the gallery
  top: 450px;
`;