import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HeaderTheme, HeaderWrapper, InfoData, Socialmedia, PaddingInner, TitleBlock, RatingSpan, SubColor, Underline, Dot, Logo, ShareButton } from './style.jsx';
// import Star from '../photos/star.png';
// import Superhost from '../photos/superhost.png';
// import Heart from '../photos/heart.png';
// import Share from '../photos/share.png';

const Header = ({list}) => (
  <HeaderWrapper>
      <ThemeProvider theme={HeaderTheme}>
          <TitleBlock>{list.listingTitle}</TitleBlock>
          <InfoData>
            <Logo src="https://5erflies.s3-us-west-1.amazonaws.com/icons/star.png"/>
            <RatingSpan>{list.rating}</RatingSpan>
            <SubColor>({list.numOfReviews})</SubColor>
            <Dot><span> • </span></Dot>
            <Logo host src="https://5erflies.s3-us-west-1.amazonaws.com/icons/superhost.png"/>
            <SubColor>{list.superHost.toString() ? (<span>Superhost</span>) : 'null'}</SubColor>
            <Dot><span> • </span></Dot>
            <Underline location>{list.location}</Underline>
          </InfoData>
          <Socialmedia>
            {/* <ShareButton>
              <Logo share src="https://5erflies.s3-us-west-1.amazonaws.com/icons/heart.png"/>
              <Underline dark>Share</Underline>
            </ShareButton>
            <ShareButton>
              <Logo share src="https://5erflies.s3-us-west-1.amazonaws.com/icons/share.png"/>
              <Underline dark>Save</Underline>
            </ShareButton> */}
          </Socialmedia>
      </ThemeProvider>
  </HeaderWrapper>
)

export default Header;