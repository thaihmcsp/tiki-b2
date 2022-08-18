import React from 'react'
import AllProduct from './allProduct/AllProduct'
import ProductBanner from './productBanner/ProductBanner'
import style from './shopHome.module.css'

function ShopProduct() {
  return (
    <div className={style.ShopProduct}>
        <ProductBanner/>
        <AllProduct activeKey1={'1'}/>
    </div>
  )
}

export default ShopProduct