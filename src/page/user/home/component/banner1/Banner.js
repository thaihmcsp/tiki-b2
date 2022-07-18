import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import clsx from 'clsx'; 

import { Autoplay, Pagination, Navigation } from "swiper";
import './banner_style.css'
import styles from "./banner.module.css";


function Banner() {
  return (
    <div className={clsx(styles.slide)}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper6"
      >
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/69/1b/22/b9f503fcaa6980165e24c24b8105d18a.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/ff/3d/e6/b1951b6d91a360bd878391f02554811a.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/e1/24/ea/60aee851741ecd55cc5e4c91bad8dc11.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/96/0f/93/b1ad7d228c03d55dacd2a33943cd8599.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/90/ed/cc/64ee1e403bdc749ec033b10f77e7096d.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/34/cf/d1/07dbee758f7d85fc446361077eb7e386.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/38/5a/a9/6c9337a453a9a0145daad5e33d90131d.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/06/03/99/6838f8ffdac19c5a889454fc3173e33a.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/a1/b1/c6/ba4a068ec5a45b51de6e329d4720668e.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/06/a3/54/00a33486e8d5696bc1ebcb3c979571b0.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/07/be/16/f196b7657da8a4ac35e91d68f02c57cb.jpg.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/f1/97/59/f1d0cfe494a7833bf82e4247e40781f2.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/42/41/79/1c29800eddac55d3c558d4f412d70b61.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/20/86/58/59ed39a87df5a4c77357900817c47c6f.png.webp"></img>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner