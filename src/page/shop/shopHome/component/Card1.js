import React from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css'
import style from './card.module.css'
import './card.css'

function Card1(props) {
  return (
    <div className={style.card}>
        <img src={props.img} className={style.img}/>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <div className={style.rate}>
            <Rate allowHalf defaultValue={4.5} className='RateStar' disabled/>
            <span>
              | đã bán {props.sold}
            </span>
          </div>
          <div className={style.price}>
              <span>
                {props.price.toLocaleString()} đ
              </span>
              <span>
                -{props.discount}%
              </span>
          </div>
        </div>
        <img src='https://salt.tikicdn.com/ts/upload/b9/1f/4b/557eac9c67a4466ccebfa74cde854215.png' className={style.label}/>
    </div>
  )
}

export default Card1