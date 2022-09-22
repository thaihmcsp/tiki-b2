import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './item.module.css'

function Item(prop) {
    const nav = useNavigate()
    const handleTransfer = id => {
        nav(`/detail?id=${id}`)
    }
  return (
    <div className={style.Item} onClick = {() => handleTransfer(prop.id)}>
        <img src={prop.img} />
        <div className={style.price}>
            <span>
                {prop.price.toLocaleString()} <b><u>d</u></b>
            </span>
            <span>
                -{prop.discount}%
            </span>
        </div>
        <div className={style.deal}>
            <span className={prop.sold == 0?style.new : prop.sold/prop.total > 0.85 ? style.end :style.progress} ></span>
            <span>{prop.sold == 0?'vừa mở bán':prop.sold/prop.total>0.85?'Sắp bán hết':`Đã bán ${prop.sold}`}</span>
        </div>
    </div>
  )
}

export default Item