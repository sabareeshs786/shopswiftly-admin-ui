import React, { useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper.min.css';

// Import Swiper Navigation styles
import 'swiper/components/navigation/navigation.min.css';

const useSwiper = (selector, options) => {
  useEffect(() => {
    const swiper = new Swiper(selector, options);

    // Cleanup Swiper instance on component unmount
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount
};

export default useSwiper;
