// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImgCarousal.css';

const images = [
  'https://imaginationsoup.net/wp-content/uploads/2023/05/GOOD-MYSTERY-BOOKS-FOR-KIDS-1.jpg',
  'https://www.sciencefriday.com/wp-content/uploads/2022/11/2022KidsBooks-main.jpg',
  'https://miro.medium.com/v2/resize:fit:1200/1*iReJleUEZCcL0BKqofM2iQ.jpeg',
  'https://imaginationsoup.net/wp-content/uploads/2023/07/Scary-Stories-for-Kids.jpg',
  'https://blog.mindresearch.org/hubfs/Education/Summer_Learning/mathbooksforkids_header.jpg',
  'https://preschoolinspirations.com/wp-content/uploads/2021/10/Feelings-Books-1.jpg'
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300 // Change image every 3 seconds
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
