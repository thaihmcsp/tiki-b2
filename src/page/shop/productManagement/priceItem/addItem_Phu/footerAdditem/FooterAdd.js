import React from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
import { useSelector } from 'react-redux';
function FooterAdd() {
  const varient = useSelector(state=>state.addItemReducerSlice)

  const handleCreatorProduct = ()=>{
    const listOption = document.querySelectorAll('.DetailListItem')
    const newList  =  [...listOption]
    const productName = document.querySelector('.input_additem').value
    const CatagoryName = document.querySelector('.ant-select-selection-search-input').value
    const BrandID = document.querySelector('#Brand_brandIDName').value
    const Origin = document.querySelector('#Brand_Origin').value
    const Material = document.querySelector('#Brand_material').value
    const Age = document.querySelector('#Brand_Age').value
    const Detail = document.querySelector('#Brand_detail').value
    const about = []
      if(Origin.trim()!= ''){
        about.push({
            "key":"Origin",
            "value":Origin
        })
      }
      if(Material.trim()!= ''){
        about.push({
          "key":"Material",
          "value":Material
        })
      }
      if(Age.trim()!= ''){
        about.push({
            "key":"Age",
            "value":Age
        })
      }
      if(Detail.trim()!= ''){
        about.push({
            "key":"Detail",
            "value":Detail
        })
      }
    if(varient[0]&&varient[0].option.length==0){
      const priceMain = newList[0].querySelector('.Add_price__varient .hello_ant-input-number-input').value
      const totalStorege = newList[0].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
      const pubLic = newList[0].querySelector('#SellupPulish')
      
      const product = {
        about:about,
        categoryId:CatagoryName,
        productDetailId:[],
        productName: productName,
        totalStorage:totalStorege,
        brandID:BrandID 
      }
      console.log(49,product)
    }

  }
  return (
    <div className={style.FooterAdd}>
        <Button className={style.Button}>Lưu Bản Nháp</Button>
        <Button type="primary" className={style.Button_primary} onClick={handleCreatorProduct}>Gửi Đi</Button>
    </div>  
  )
}

export default FooterAdd