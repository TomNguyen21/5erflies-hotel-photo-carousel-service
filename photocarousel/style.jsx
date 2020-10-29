import styled, { keyframes, ThemeProvider } from 'styled-components';

const theme = {
  background: '#aaa',
  color: '#24292e'
};

const AppWrapper = styled.div`
  position: relative;
`;

const MainWrapper = styled.div`
  width: 60% ;
  margin: 0 auto;
  margin-top: ${props => props.show ? '0px' : '40px'};
  font-family: sans-serif, Roboto;
  opacity: ${props => props.show ? 0 : 1};
`;

const slideup = keyframes`
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

const slidedown = keyframes`
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

const Slider = styled.div`
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

const PhotoButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 30px;
  width: 146px;
  cursor: pointer;
  letter-spacing: 0.2px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 450;
  border-radius: 7px;
  color: #000;
  height: 30px;
  background-color: #F7F7F7;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border-width: 1px;
`;

