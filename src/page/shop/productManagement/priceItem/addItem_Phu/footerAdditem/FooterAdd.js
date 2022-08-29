import React from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
import { useSelector } from 'react-redux';
function FooterAdd() {
  const varient = useSelector(state=>state.addItemReducerSlice)

  const handleCreatorProduct = ()=>{
    console.log(9,varient);
  }
  return (
    <div className={style.FooterAdd}>
        <Button className={style.Button}>Lưu Bản Nháp</Button>
        <Button type="primary" className={style.Button_primary} onClick={handleCreatorProduct}>Gửi Đi</Button>
    </div>  
  )
}

export default FooterAdd