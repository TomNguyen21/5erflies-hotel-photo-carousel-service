import React, { useState, useEffect } from 'react';
import { SocialmediaModal, Underline, Logo, Wrappingdiv, Closingbutton, CountHeader, ModalImage, ArrowButton } from './style.jsx';

const Modal = ({ list, closeModal, clickedPhotoIdx, show }) => {

  const [photoCount, setphotoCount] = useState(clickedPhotoIdx + 1);
  // var [photoCount, setphotoCount] = useState(1);
  const [morePhotosCount, setMorePhotosCount] = useState(1);
  // var [morePhotosButtonClicked, setMorePhotosButton] = useState(false);
  const clickedButton = () => {
    // setMorePhotosButton(!morePhotosButtonClicked);
    setphotoCount(morePhotosCount);
  }
  useEffect(() => {
    setphotoCount(clickedPhotoIdx + 1);
  }, [clickedPhotoIdx]);

  const addCount = () => {
    photoCount < list.photos.length && setphotoCount(photoCount + 1);
  };

  const minusCount = () => {
    photoCount > 1 && setphotoCount(photoCount - 1);
  };

  const RightArrow = ({ addCount }) => (
    <ArrowButton right onClick={addCount}>&gt;</ArrowButton>
  );

  const LeftArrow = ({ minusCount }) => (
    <ArrowButton left onClick={minusCount}>&lt;</ArrowButton>
  );

  useEffect(() => {
    console.log("component changed");
  }, []);

  return (
    // return the photo that its index matches the photoCount
    <div>
      <Closebutton onClick={closeModal} >X Close</Closebutton>
      <Socialmedia>
      <ShareButton>
          <Logo share src="https://5erflies.s3-us-west-1.amazonaws.com/icons/heart.png"/>
          <Underline dark></Underline>
      </ShareButton>
      <ShareButton>
          <Logo share src="https://5erflies.s3-us-west-1.amazonaws.com/icons/share.png"/>
          <Underline dark></Underline>
      </ShareButton>
      </Socialmedia>
      <Wrappingdiv show>
        {/* {console.log(photoCount)} */}
        <CountHeader>{photoCount}/{list.photos.length}</CountHeader>
        <ModalImage src={list.photos[photoCount - 1]}/>
        <LeftArrow minusCount={minusCount}/>
        <RightArrow addCount={addCount}/>
      </Wrappingdiv>
    </div>
  )
};

export default Modal;
