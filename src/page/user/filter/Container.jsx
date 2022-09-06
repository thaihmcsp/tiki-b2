import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Modall from './Modall';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination as Pagination2, Navigation } from "swiper";
import { Rate } from 'antd';
import { List1 } from './List1';
import { Pagination, Stack } from '@mui/material';
// import  from '@mui/material/Stack';
import 'antd/dist/antd.css';
import style from './container.module.css'
import "./styles.css";
import { VapeFreeOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
const Container = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const [show, setShow] = useState(false)
  return (
    <div className={style.container}>
      <h2 className={style.title}>Làm Đẹp - Sức Khỏe</h2>
      <div className={style.slider}>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // centeredSlides={show}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1.4}
            allowSlideNext={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination2, Navigation]}
            loop={true}
            loopPreventsSlide={true}
            className="mySwiper_fillter"

          >
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/70/86/fb/b1b62d6f222959307972189d6c7c946e.jpg.webp' alt='' className={style.img} />
            </SwiperSlide>
            <SwiperSlide><img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img} /></SwiperSlide>
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/a4/02/80/486cc9da76ecaf6e78d0089eaacc28c2.png.webp' alt='' className={style.img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/0c/2b/ca/43d933bc0a53a15f58a66cb836a64bec.png.webp' alt='' className={style.img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/33/c2/73/95e85a9098f07a25569e98c0f1a4f757.png.webp' alt='' className={style.img} />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/06/37/79/6e63d637ff9346f787cc4fa891b77f1b.png.webp' alt='' className={style.img} />
            </SwiperSlide>

          </Swiper>
        </>
      </div>
      <div className={style.select}>
        <span className={[style.select_name, style.select_active].join(' ')}>Phổ Biến</span>
        <span className={style.select_name}>Bán Chạy</span>
        <span className={style.select_name}>Hàng Mới</span>
        <span className={style.select_name}>Giá Thấp</span>
        <span className={style.select_name}>Giá Cao</span>
      </div>
      <Modall />
      <div className={style.products}>
        {List1.map(val => {
          return (
            <div className={style.products_item} key={val.id}>
              <div className={style.products_thumbnail}>
                <img src={val.image} alt='' className={style.image_img} />
                <img src={val.thumbnail} alt='' className={style.thumbnail_img} />
              </div>
              <div className={style.products_info}>
                <span className={style.ad}>Ad</span>
                <h4 className={style.products_title}>{val.title}</h4>
                <div className={style.products_rating}>
                  <Rate allowHalf defaultValue={3} style={{ fontSize: '0.7rem' }} />
                  <span className={style.products_sold}>đã bán {val.sold}</span>
                </div>
                <div className={style.products_price_box}>
                  <span className={style.products_price}>{val.price} đ</span>
                  <span className={style.products_discount}>-14%</span>
                </div>
                <div>
                  <img src={val.badge_under} alt='' className={style.badge_under} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ float: 'right', margin: '20px 0' }} className={style.Pagination}>
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </div>
    </div>
  )
}

export default Container