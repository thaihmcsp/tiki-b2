import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../config/api'

import BannerShop from './bannerShop/BannerShop'
import style from './shopHome.module.css'
function ShopHome() {
  const [shopData,setShopData] = useState([])
  const [shopInfor,setShopInfor] = useState([])
  useEffect(function(){
    getAPI('/product/get-product-by-shopId/62ece78420a301d53e54add3')
        .then((data) => {
            setShopData(data.data.product)
        })
        .catch((error) =>{
            console.log(error)
        })
    getAPI('/shop/get-one-shop/62ece78420a301d53e54add3')
        .then(data=>{
          console.log(19,data)  
          setShopInfor(data.data.shop)
        })
        .catch(error=>{
          console.log(error)
        })
  },[])
  console.log(26,shopInfor)
  return (
    <div className={style.container}>
      <div className={style.shopHome}>
        <BannerShop allProduct={shopData} shopInfor={shopInfor}/>
      </div>
    </div>
  )
}

export default ShopHome