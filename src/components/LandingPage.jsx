import React from 'react';
import { Carousel } from 'antd';

const images = [
  {
    id: 1,
    src: './college/clg1.HEIC',
    alt: 'Image 1',
    caption: 'First Slide',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/800x160?text=Image+2',
    alt: 'Image 2',
    caption: 'Second Slide',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/800x160?text=Image+3',
    alt: 'Image 3',
    caption: 'Third Slide',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/800x160?text=Image+4',
    alt: 'Image 4',
    caption: 'Fourth Slide',
  },
];

const imageStyle = {
  width: '100%',
  height: '160px',
};

const captionStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
  lineHeight: '30px',
};

const LandingPage = () => (
  <Carousel autoplay>
    {images.map((image) => (
      <div key={image.id} style={{ position: 'relative' }}>
        <img src={image.src} alt={image.alt} style={imageStyle} />
        <div style={captionStyle}>{image.caption}</div>
      </div>
    ))}
  </Carousel>
);

export default LandingPage;
