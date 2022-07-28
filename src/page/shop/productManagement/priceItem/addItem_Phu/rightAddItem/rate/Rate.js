import React from 'react'
import { Divider, Steps } from 'antd';
import style from './rate.module.css'
import './rate.css'
const { Step } = Steps;

function Rate() {
  return (
    <div className={style.rate}>
        <Steps progressDot current={2} direction="vertical" className='rate'>
            <Step title="Thông tin cơ bản" description="" />
            <Step title="Thông số sản phẩm" description="" />
            <Step title="Giá bán, Kho hàng và Biến thể" description="" />
            <Step title="Mô tả sản phẩm" description="" />
            <Step title="Vân chuyển và Bảo hành" description="" />
        </Steps>
    </div>
  )
}

export default Rate