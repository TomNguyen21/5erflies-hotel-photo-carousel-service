import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';
import { RoundedCorner, Imgagery, GalleryWrapper, SubWrapper, Grid } from './style.jsx';

const Gallery = ({list, openModal, closeModal, show}) => (

  <RoundedCorner>
    <GalleryWrapper>
      <Imgagery src={list.photos[0]} onClick={(e) => openModal(0)}/>
    </GalleryWrapper>
    <SubWrapper>
      {list.photos.slice(1, 5).map((photo, index) => {
        console.log(list)
        console.log(photo, 'photo')
        console.log(index, 'index')
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
