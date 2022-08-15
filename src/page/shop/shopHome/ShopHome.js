import React from 'react'

import BannerShop from './bannerShop/BannerShop'
import style from './shopHome.module.css'
function ShopHome() {
  return (
    <div className={style.container}>
      <div className={style.shopHome}>
        <BannerShop/>
      </div>
    </div>
  )
}

export default ShopHome