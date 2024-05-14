import React, { useState, useEffect } from "react";
import {
  PhotoGalleryContainer,
  GalleryImage,
  LeftButton,
  RightButton,
} from "./style.js";

const PhotoGallery = ({ images, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start by fading out the current image
      setTimeout(() => {
        setCurrent((current) => (current + 1) % images.length);
        setFade(true); // Fade in the new image
      }, 1000); // this should match the CSS transition time
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextPhoto = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((current) => (current + 1) % images.length);
      setFade(true);
    }, 1000);
  };

  const prevPhoto = () => { 
    setFade(false);
    setTimeout(() => {
      setCurrent((current) => (current + images.length - 1) % images.length);
      setFade(true);
    }, 1000);
  };

  return (
    <PhotoGalleryContainer>
      <LeftButton onClick={prevPhoto}>&#10094;</LeftButton>
      <GalleryImage
        src={images[current]}
        alt="Gallery"
        style={{ opacity: fade ? 1 : 0 }}
      />
      <RightButton onClick={nextPhoto}>&#10095;</RightButton>
    </PhotoGalleryContainer>
  );
};

export default PhotoGallery;
