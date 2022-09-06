import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
import {useSelector} from 'react-redux'
function FooterAdd() {
  const [listDetail,setListDetail] = useState([])
  const Detail = useSelector(state=>{
    return {
      newDetail:state.subItemProduct.detail,
      data: state.eidtProduct,
      varient:state.subItemProduct.varient
    }
  })

  const handleSubmitEditItem = ()=>{  
      const listDe = document.querySelectorAll('.optionVarientALL')
      const newList  =  [...listDe]
      console.log(15,Detail)
        let totalStorage = 0
        let data = [...Detail.newDetail]
        console.log(22,data)
        if(Detail.varient[0].option.length>0){
          newList.map((item,index)=>{
            const priceMain = item.querySelector('.Add_price__varient .hello_ant-input-number-input').value
            const totalStorege = item.querySelector('.Add_storege-btn .hello_ant-input-number-input').value
            const pubLic = item.querySelector('#SellupPulish').getAttribute('aria-checked')
            console.log(priceMain,totalStorege,pubLic)
            if(priceMain&&totalStorege){
              data[index]= {
                ...data[index],
                price:priceMain
              }
              data[index]= {
                ...data[index],
                storage:totalStorege
              }
              data[index]= {
                ...data[index],
                publish:pubLic
              }          
            }
          })
          data.map(item=>{
            totalStorage+= item.storage*1
          })
            const newProduct = {
              about:Detail.data.about,
              categoryId:Detail.data.categoryId,
              productDetailId:data,
              productName: Detail.data.productName,
              public:Detail.data.public,
              shopId:Detail.data.shopId,
              sold: Detail.data.sold,
              totalStorage:totalStorage>0?totalStorage:Detail.data.totalStorege,
              _id:Detail.data._id
            }
            console.log(36,newProduct,totalStorage)
        }else{
          const priceMain = newList[0].querySelector('.Add_price__varient .hello_ant-input-number-input').value
          const totalStorege = newList[0].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
          const pubLic = newList[0].querySelector('#SellupPulish').getAttribute('aria-checked')
          if(priceMain&&totalStorege){
            const newProduct = {
              about:Detail.data.about,
              categoryId:Detail.data.categoryId,  
              productDetailId:[],
              productName: Detail.data.productName,
              public:Detail.data.public,
              shopId:Detail.data.shopId,
              sold: Detail.data.sold,
              totalStorage:totalStorege,
              price:priceMain,
              _id:Detail.data._id
            }
            console.log(37,newProduct)
          }
        }
  } 
  return (
    <div className={style.FooterAdd}>
        <Button className={style.Button}>Lưu Bản Nháp</Button>
        <Button type="primary" className={style.Button_primary} onClick={handleSubmitEditItem}>Gửi Đi</Button>
    </div>
  )
}

export default FooterAdd