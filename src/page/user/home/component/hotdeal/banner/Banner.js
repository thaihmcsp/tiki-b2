import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import style from './banner.module.css'
import { Pagination, Navigation } from "swiper";
import Item from "./item/Item";
function Banner({data}) {
    
  return (
    <div className={style.silder}>
        <Swiper
        hideOnClick={true}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={false}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper4"
      >
        {
            data.length > 0 && data.map(function(item){
                let number = Math.round(Math.random() * 10)
                return(
                    <SwiperSlide id="list__item_header">
                        <Item 
                             id = {item._id} 
                              img={item.thump[0]} 
                              price={item.price} 
                              discount={number}
                              sold={item.sold}
                              total={item.totalStorage}
                        />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  )
}

export default Banner