import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './brand.module.css'
function Brand() {
  return (
    <div className={style.Brand}>
        <h2>
            Thông số sản phẩm
        </h2>
        <p>
        Thêm thuộc tính để gia tăng khả năng hiển thị
        </p>
        <div className={style.detail}>
            <label className={style.input_label}>
                <span>*</span> Thương hiệu
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Nhập thương hiệu sản phẩm...'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Xuất sứ
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Xuất sứ...'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chất liệu
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chất liệu sản phẩm...'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Độ tuổi sử dụng
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Từ .... đến ....'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chi tiết
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chi tiết thông tin sản phẩm'
                />
            </label>
        </div>
        <a className={style.showmore}>Show more <ArrowDropDownIcon/></a>
    </div>
  )
}

export default Brand