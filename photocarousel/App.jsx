import React, { useState, useEffect } from 'react';
import { theme, AppWrapper, MainWrapper, slideup, slidedown, Slider } from './style.jsx';
import axios from 'axios';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';

const Photocarousel = () => {
  const [listing, setListing] = useState([]);
  const [clickedPhotoIdx, setClickedPhoto] = useState(1)
  const [showModal, setShowModal] = useState(null);
  const openModal = (index) => {
    if (typeof index === 'number') {
      setClickedPhoto(index);
    }
    setShowModal(true);
  }
  const closeModal = () => setShowModal(false);
  // console.log('clientb', listing);

  useEffect(() => { // a hooks version of componentDidMount
    let queryID = window.location.search || '?propertyId=1';
    // console.log('logged: window.location (url parameter) = ?id=10', queryID)
    let url = `/listing/${queryID}`;
    axios.get(url)
    .then((res) => {
      setListing(res.data);
    })
    .catch((err) => {
      console.log('client: failed getting db', err);
    })
  }, []);


  if (listing.length == 0) {return null;}
  return (
    <AppWrapper>
      <MainWrapper show={showModal}>
        <Header list={listing[0]}/>
        <Gallery
          list={listing[0]}
          openModal={openModal}
          closeModal={closeModal}
          show={showModal}
        />
      </MainWrapper>
      <Slider show={showModal}>
        <Modal
          list={listing[0]}
          closeModal={closeModal}
          clickedPhotoIdx={clickedPhotoIdx}
          show={showModal}
        />
      </Slider>
    </AppWrapper>
  )
}

export default Photocarousel;
