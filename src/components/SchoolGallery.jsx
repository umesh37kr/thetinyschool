import React, { useRef, useState } from 'react';
// import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/components/SchoolGallery.css';

import { Autoplay, Pagination, Navigation, Virtual } from "swiper";

// const widthSize = window.matchMedia("(max-width: 768px)");
// // call listener function at call time
// myJsMedia(widthSize)
// // attach listener function on state change
// widthSize.addEventListener("change", myJsMedia)
const SchoolGallery = () => {
    return (
      <>
      <Swiper
      // slidesPerView={3}
      breakpoints={{
        // slidesPerView: 3,
        // when window width is <= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
        // when window width is <= 468px
        468: {
          width: 468,
          slidesPerView: 2,
        },
      }}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        // virtual
        modules={[Autoplay, Pagination, Navigation, Virtual]}
        className="swiper-extended"
      >
        <SwiperSlide><img src="./images/gallery17.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="banner3.jpg" alt="hero banner3" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery5.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery6.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery8.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery9.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="banner5.jpg" alt="hero banner5" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery10.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery11.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery12.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery13.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery14.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery15.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery16.jpg" alt="hero banner1" /></SwiperSlide>
        <SwiperSlide><img src="./images/gallery1.jpg" alt="hero banner1" /></SwiperSlide>
      </Swiper>
      </>
    );
}

export default SchoolGallery