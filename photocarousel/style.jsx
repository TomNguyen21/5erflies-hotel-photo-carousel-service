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

export const PhotoButton = styled.button`
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

export const RoundedCorner = styled.div`
  border-radius: 13px;
  overflow: hidden;
  /* height: 372px; */
  display: flex;
`;

export const Imgagery = styled.img`
  width: 100%;
  /* height: auto; */
  height: 100%;
  cursor: pointer;
  display: block;
  &: hover {
    -webkit-filter: brightness(85%);
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  };
`;

export const GalleryWrapper = styled.div`
  max-width: 1120px;
  flex: 1;
  /* float: left; */
  /* width: 49.3%; */
  margin-right: 0.7%;
`;

export const SubWrapper = styled.div`
  display: flex;
  /* width: 50%; */
  flex-flow: wrap;
  position: relative;
  flex: 1;
`;

export const Grid = styled.div`
  margin-right: ${props => props.picIndex % 2 === 0 ? '1.3%' : '0'};
  width: 49.35%;
  margin-bottom: ${props => props.picIndex < 2 ? '1.3%' : '0'};
  height: 49%;
  float: left;
  overflow: hidden;
`;

export const HeaderTheme = {
  titleColor: '#000',
  subColor: '#6e6d6d',
  padding: '4em'
}

export const HeaderWrapper = styled.div`
  /* margin-top: 40px */
  margin-bottom: 20px;
`;

export const InfoData = styled.div`
  display: inline-block;
  font-size: 14px;
  padding-top: 15px;
  color: ${props => props.theme.color};
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
`;

export const Socialmedia = styled.div`
  display: inline-block;
  float: right;
  margin-top: 13px;
`;

export const PaddingInner = styled.div`
  padding-right: 0.25rem;
`;

export const TitleBlock = styled.section`
  width: 100%;
  margin: 0 auto;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: ${props => props.theme.titleColor};
  font-size: 26px;
`;

export const RatingSpan = styled.span`
  color: ${props => props.theme.titleColor};
  padding: 0em 0.15em;
`;

export const SubColor = styled.span`
  color: ${props => props.theme.subColor};
  padding: 0em 0.15em;
`;

export const Underline = styled.span`
  text-decoration: underline;
  color: ${props => props.dark ? 'black' : props.theme.subColor};
  padding: 0em 0.35em;
  float: right;
  cursor: pointer;
  margin-top: ${props => props.location ? '3px' : 'none'};
`;

export const Dot = styled.span`
  padding: 0em 0.50em;
  color: ${props => props.theme.subColor};
`
export const Logo = styled.img`
width: ${props => props.host ? '10px' : '17px'};
height: ${props => props.host ? '16px' : 'none'};
padding-right: 7px;
float: ${props => props.share ? 'right' : 'none'};
cursor: pointer;
&: hover {
  background-color: #f2f4f5;
  padding: 5px 6px;
  border: none;
  border-radius: 8px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
`;

export const ShareButton = styled.button`
  float: right;
  border: none;
  background-color: white;
  padding: 5px 6px;
  cursor: pointer;
  &: hover {
    background-color: #f2f4f5;
    padding: 5px 6px;
    border: none;
    border-radius: 8px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;

export const SocialmediaModal = styled.div`
  display: inline-block;
  float: right;
  margin-top: 13px;
  margin-right: 70px;
`;

export const Wrappingdiv = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 980px;
  display: ${props => props.show ? 'block' : 'none'};
`;

export const Closebutton = styled.button`
  display: inline;
  float: left;
  top: 40px;
  left: 40px;
  position: absolute;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0a6;;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #222222e3;
  &: hover {
    background-color: #e0e0e0;
  }
`;

export const CountHeader = styled.div`
  /* display: inline; */
  font-size: 1em;
  font-family: Arial;
  margin-top: 45px;
  font-family: Circular, Roboto, "Helvetica Neue",sans-serif;
  letter-spacing: 0.7px;
`;

export const ModalImage = styled.img`
  width: 90%;
  margin-top: 40px;
`;

export const ArrowButton = styled.button`
  border-radius: 50%
  border: 1px solid  #C5C5C5;
  font-size: 16px;
  background-color: white;
  position: fixed;
  top: 43%;
  left: ${props => props.right ? 'none' : '25px'};
  right: ${props => props.left ? 'none' : '45px'};
  padding: 14px 18px;
  cursor: pointer;
`;