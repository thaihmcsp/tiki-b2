import React from 'react'
import BasicInfo from '../../basic/BasicInfo'
import AddVarient from './addVarient/AddVarient'
import style from './varient.module.css'


function Varient() {
  return (
    <div className={style.Varient}>
        <h2>
          Giá bán, Kho hàng và Biến thể
        </h2>
        <p>
        Thêm các biến thể khi sản phẩm có các phiên bản khác nhau, chẳng hạn như màu sắc và kích thước
        </p>
        <AddVarient />
    </div>
  )
}

export default Varient