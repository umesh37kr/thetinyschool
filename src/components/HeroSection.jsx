import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import '../styles/components/components.css'
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
const HeroSection = () => {
  return (
    <>
    <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><img src="banner1.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="banner2.jpg" alt="hero banner2" /></SwiperSlide>
        <SwiperSlide><img src="banner3.jpg" alt="hero banner3" /></SwiperSlide>
        <SwiperSlide><img src="banner4.jpg" alt="hero banner4" /></SwiperSlide>
        <SwiperSlide><img src="banner5.jpg" alt="hero banner5" /></SwiperSlide>
        <SwiperSlide><img src="banner6.jpg" alt="hero banner6" /></SwiperSlide>
        <SwiperSlide><img src="banner7.jpg" alt="hero banner7" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default HeroSection