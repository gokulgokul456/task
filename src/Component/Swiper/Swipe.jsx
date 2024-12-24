import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Swipe.css';

import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='content'>
                <h6>RENEW YOUR LOOK</h6>
                <h1>A TRADITION OF</h1>
                <h1>QUALITY OF CLEANING</h1>
                <button className='Swipe-Btn'>contact us</button>   
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='content'>
                <h6>RENEW YOUR LOOK</h6>
                <h1>WE ARE THE</h1>
                <h1>BEST LAUNDRY SERVICES</h1>
                <button className='Swipe-Btn'>contact us</button>   
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='content'>
                <h6>RENEW YOUR LOOK</h6>
                <h1>EXPERT CLEANER</h1>
                <h1>AFFORDABLE PRICE</h1>
                <button className='Swipe-Btn'>contact us</button>   
            </div>
        </SwiperSlide>
       

      </Swiper>
    </>
  );
}
