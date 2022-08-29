import React from 'react'
import Slider1 from './silder1/Slider1'
import style from './brand.module.css'
import Slider2 from './silder2/Slider2'
import Slider3 from './slider3/Slider3'
import Slider4 from './slider4/Slider4'

function Brand() {
  return (
    <div className={style.brand} id='Brand_Shop__Home'>
        <div className={style.header}>
            <div className={style.header_right}>
                <img src='https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png' />
                <span>Thương Hiệu Chính Hãng</span>
            </div>
            <span>
                XEM THÊM
            </span>
        </div>
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
    </div>
  )
}

export default Brand