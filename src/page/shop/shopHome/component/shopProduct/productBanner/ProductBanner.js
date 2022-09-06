
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import style from './productbanner.module.css'
import { Pagination,Autoplay,Navigation } from "swiper";

function ProductBanner({shopInfor}) {
  const [space,setSpace] = useState(20)
  const [baner,setBaner] = useState([])
  console.log(17,shopInfor)
  useEffect(function(){
    if(shopInfor.description){
      setBaner(()=>{
        let newData
        shopInfor.description.map(item=>{
          if(item.key=='banner'){
            console.log('hello')
             newData = item.value.split(',')
            }
          })
          return newData
      })
    }
  },[shopInfor])


  useEffect(function(){
    console.log(window.innerWidth)
    if(window.innerWidth <= 768){
      console.log('hello')
      setSpace(5)
    }else{
      setSpace(20)
    }
  },[window.innerWidth])

  return (
    <div className={style.ProductBanner}>
      <>
        <Swiper
        loopAdditionalSlides={2}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={space}
          pagination={{
            clickable: true,
          }}
          speed={500}
          slidesPerGroup={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination,Autoplay,Navigation]}
          className="mySwiper_productBanner"
        >
          {
            baner.length>=1?
            baner.map((image,index)=>{
              return(
                <SwiperSlide key={index}>
                   <img src={image} />
                </SwiperSlide>
              )
            }):
            <SwiperSlide >
           
          </SwiperSlide>
          }
        </Swiper>
      </>
    </div>
  )
}

export default ProductBanner