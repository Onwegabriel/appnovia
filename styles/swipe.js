// "use client";
// import { useEffect } from "react";
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';


// // if (typeof window !== 'undefined'){
// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }

//   return () => {
//     TrandingSlider.destroy();
//   };
// }, []);
// });

// return () => {
//   TrandingSlider.destroy();
// };
// }, []);

import React, { useEffect } from 'react';
import Swiper from 'swiper';

const MyComponent = () => {
  useEffect(() => {
    const TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // Cleanup function if necessary
    return () => {
      TrandingSlider.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="tranding-slider">
      {/* Your slider content goes here */}
    </div>
  );
};

export default MyComponent;
