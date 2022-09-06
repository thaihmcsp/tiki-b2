import React, { useEffect, useState } from 'react'
import Navigation from './navigation/Navigation'
import PruductList from './productList/PruductList'
import style from './suggesstProduct.module.css'
function SuggestProduct() {
  window.addEventListener('scroll', (event) => {
    const header = document.querySelector(`.${style.sugguest}`)
    const Addvetisement_Shop__Home = document.querySelector('#Addvetisement_Shop__Home').offsetHeight
    const HeaderShopHome = document.querySelector('#Header_Shop__Home').offsetHeight    
    const productList = document.querySelector(`.${style.product_list}`)
    if(window.scrollY >= Addvetisement_Shop__Home + HeaderShopHome + 15){
      header.classList.add(style.active)
      productList.classList.add(style.active)
    }else{
      header.classList.remove(style.active)
      productList.classList.remove(style.active)
    }
  });   
  // window.addEventListener('resize', (event)=>{
  //   if(window.innerWidth <= 768){
  //     setMobile(true)
  //   }else{
  //     setMobile(false)
  //   }
  // })
  return (  
    <div className={style.SuggestProduct}>
        <div className={style.sugguest}>
            <div className={style.header}>
                <h3>Gợi Ý Hôm Nay</h3>
            </div>
            <Navigation/>
        </div>
        <div className={style.product_list}>
          <PruductList />
        </div>
    </div>
  )
}

export default SuggestProduct