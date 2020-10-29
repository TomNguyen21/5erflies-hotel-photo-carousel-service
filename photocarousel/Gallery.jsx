import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';
import { RoundedCorner, Imagery, MainWrapper, SubWrapper, Grid } from './style.jsx';

const Gallery = ({list, openModal, closeModal, show}) => (

  <RoundedCorner>
    <MainWrapper>
      <Imgagery src={list.photos[0]} onClick={(e) => openModal(0)}/>
    </MainWrapper>
    <SubWrapper>
      {list.photos.slice(1, 5).map((photo, index) => {
        return (<Grid picIndex={index}>
            <Imgagery src={photo} key={index} onClick={(e) => openModal(index + 1)}/>
        </Grid>)
      })}
      <Button
        openModal={openModal}
        closeModal={closeModal}
        show={show}
        list={list}
      />
    </SubWrapper>
  </RoundedCorner>
);

export default Gallery;
