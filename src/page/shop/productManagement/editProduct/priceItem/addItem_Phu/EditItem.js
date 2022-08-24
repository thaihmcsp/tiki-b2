import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../../../../config/api'
import style from './addItem.module.css'
import BasicInfo from './basic/BasicInfo'
import FooterAdd from './footerAdditem/FooterAdd'
import ProductInfor from './inforProduct/ProductInfor'
import RightAddItem from './rightAddItem/RightAddItem'


function EditItem() {
  const [product,setProduct]= useState([])
  useEffect(function(){
    getAPI('/product/get-one-product/62da5f60bc070a53bcbc3220')
      .then((data=>{
        setProduct(data.data.product)
      }))
      .catch((error=>{
        console.log(error)
      }))
  },[])
  console.log(product)
  return (
      <div className={style.AddItem}>
        <div className={style.AddItem_left}>
          <BasicInfo/>
          <ProductInfor/>
          <FooterAdd/>
        </div>
        <div className={style.AddItem_right}>
          <RightAddItem/>
        </div>
      </div>
  )
}

export default EditItem