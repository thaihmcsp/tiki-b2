import React, { useEffect, useState } from 'react'
import Navigation from './navigation/Navigation'
import PruductList from './productList/PruductList'
import style from './suggesstProduct.module.css'
function SuggestProduct() {
  
  const [distance,setDistance] = useState(0)
  const [mobile,setMobile] = useState(false)

  useEffect(function(){
    const header = document.querySelector(`.${style.sugguest}`)
    setDistance(header.offsetTop)
  },[mobile])

  window.addEventListener('scroll', (event) => {
    console.log(15,distance,window.scrollY)
    const header = document.querySelector(`.${style.sugguest}`)
    const productList = document.querySelector(`.${style.product_list}`)
  
    if(window.scrollY >= distance){
      header.classList.add(style.active)
      productList.classList.add(style.active)
    }else{
      header.classList.remove(style.active)
      productList.classList.remove(style.active)
    }
  });   

  window.addEventListener('resize', (event)=>{
    console.log('resize')
    if(window.innerWidth <= 768){
      setMobile(true)
    }else{
      setMobile(false)
    }
  })
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