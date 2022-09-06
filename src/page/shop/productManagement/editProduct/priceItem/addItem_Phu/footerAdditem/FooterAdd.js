import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
import { getAPI, patchAPI, postAPI ,deleteAPI} from '../../../../../../../config/api';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loadDefault } from '../../../EditProductSlice';
import { loadDetailChange } from '../inforProduct/varient/listVarient/subListVarient/library/SubitemSlice';
function FooterAdd() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const [listDetail,setListDetail] = useState([])
  const Detail = useSelector(state=>{
    return {
      newDetail:state.subItemProduct.detail,
      data: state.eidtProduct,
      varient:state.subItemProduct.varient
    }
  })
  const defaultDetail = Detail.data.productDetailId
  const newDetail = Detail.newDetail
  const ID = Detail.data._id
  const image = useSelector(state=>state.imageUpdate)
  // console.log(15,ID,defaultDetail,newDetail)
  const handleSubmitEditItem = async function(){  
      const listDe = document.querySelectorAll('.optionVarientALL')
      const newList  =  [...listDe]
      console.log(15,Detail)
        let totalStorage = 0
        let data = [...Detail.newDetail]
        console.log(22,data)
        let checked = true
        if(Detail.varient[0].option.length>0){
          newList.map((item,index)=>{
            const priceMain = item.querySelector('.Add_price__varient .hello_ant-input-number-input').value
            const totalStorege = item.querySelector('.Add_storege-btn .hello_ant-input-number-input').value
            const pubLic = item.querySelector('#SellupPulish').getAttribute('aria-checked')
            console.log(priceMain,totalStorege,pubLic)
            if(priceMain.trim()!=''&&totalStorege.trim()!=''){
              data[index]= {
                ...data[index],
                price:priceMain*1
              }
              data[index]= {
                ...data[index],
                storage:totalStorege*1
              }
              data[index]= {
                ...data[index],
                publish:JSON.parse(pubLic)
              }          
            }else{
              checked = false
            }
          })
          data.map(item=>{
            totalStorage+= item.storage*1
          })
            const newProduct = {
              about:Detail.data.about,
              categoryId:Detail.data.categoryId,
              // productDetailId:[],
              thump:[],
              productName: Detail.data.productName,
              public:Detail.data.public,
              shopId:Detail.data.shopId,
              sold: Detail.data.sold,
              totalStorage:totalStorage>0?totalStorage:Detail.data.totalStorege,
              _id:ID
            }
            console.log(36,newProduct,data)

            if(checked===true){
              await patchAPI(`/product/update-product-info/${ID}`,newProduct)
              if(image.length>0){
                await Promise.all(image.map(async(item,index)=>{
                  const formData = new FormData();
                  formData.append('thump', JSON.parse(item))
                  await patchAPI(`/product/add-product-thump/${ID}`,formData)
                  .then(data=>{
                    console.log('up ảnh ok');
                  })
                  .catch(error=>console.log(error))
                }))
              }
              console.log(86,defaultDetail,data)
              if(defaultDetail.length>0){
                  await Promise.all(defaultDetail.map(async(item)=>{
                    const index = data.findIndex(subitem=>subitem._id== item._id)
                    if(index == -1){
                      console.log('xoá biến thể')
                      await deleteAPI(`/product-detail/delete-one-detail/${item._id}`)
                            .then(data=>console.log('delete ok'))
                            .catch(error=>console.log(error))
                    }
                  }))
                  await Promise.all(data.map(async(item)=>{
                    const newDetail = {
                      price: item.price,
                      storage: item.storage,
                      option: item.option
                    }
                    console.log(newDetail,item._id,ID)
                    const index = defaultDetail.findIndex(subitem=>subitem._id== item._id)
                    if(index == -1){
                      console.log('Thêm biến thể')
                      await postAPI(`/product-detail/add-product-detail/product/${ID}`,newDetail)
                              .then(data=>console.log('add detail ok'))
                              .catch(error=>console.log(error))
                    }else{
                      console.log('Update biến thể')
                      await patchAPI(`/product-detail/update-product-detail-info/${item._id}/product/${ID}`,newDetail)
                              .then(data=>console.log('update detail ok'))
                              .catch(error=>console.log(error))
                    }

                  }))
                  dispatch(loadDefault({}))
                  dispatch(loadDetailChange({}))
                  nav('/adminShop/Product')
                
              }else if(defaultDetail.length == 0){
                await Promise.all(data.map(async(item)=>{
                  const newDetail = {
                    price: item.price,
                    storage: item.storage,
                    option: item.option
                  }
                  console.log(newDetail)
                  await postAPI(`/product-detail/add-product-detail/product/${ID}`,newDetail)
                        .then(data=>console.log('add detail ok'))
                        .catch(error=>console.log(error))
                }))
              }
              nav('/adminShop/Product')
            }
           
        }else if(Detail.varient[0].option.length==0){
          const priceMain = newList[0].querySelector('.Add_price__varient .hello_ant-input-number-input').value
          const totalStorege = newList[0].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
          const pubLic = newList[0].querySelector('#SellupPulish').getAttribute('aria-checked')
          if(priceMain&&totalStorege){
            const newProduct = {
              about:Detail.data.about,
              categoryId:Detail.data.categoryId,  
              productDetailId:[],
              thump:[],
              productName: Detail.data.productName,
              public:Detail.data.public,
              shopId:Detail.data.shopId,
              sold: Detail.data.sold,
              totalStorage:totalStorege,
              price:priceMain,
              _id:ID
            }

            await patchAPI(`/product/update-product-info/${ID}`,newProduct)
            if(image.length>0){
              await Promise.all(image.map(async(item,index)=>{
                const formData = new FormData();
                formData.append('thump', JSON.parse(item))
                await patchAPI(`/product/add-product-thump/${ID}`,formData)
                .then(data=>{
                  console.log('up ảnh ok');
                })
                .catch(error=>console.log(error))
              }))
            }
            dispatch(loadDefault({}))
            dispatch(loadDetailChange({}))
            nav('/adminShop/Product')
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