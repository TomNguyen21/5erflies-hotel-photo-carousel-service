import React, { useState, useEffect } from 'react';
import { PhotoButton } from './style.jsx';

// refactored class component to use hooks
const Button = ({list, openModal, show}) => {
  return (
    <PhotoButton onClick={openModal}>Show all photos</PhotoButton>
  )
}

export default Button;