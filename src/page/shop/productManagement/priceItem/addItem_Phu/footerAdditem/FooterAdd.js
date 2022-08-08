import React from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
function FooterAdd() {
  return (
    <div className={style.FooterAdd}>
        <Button className={style.Button}>Lưu Bản Nháp</Button>
        <Button type="primary" className={style.Button_primary}>Gửi Đi</Button>
    </div>
  )
}

export default FooterAdd