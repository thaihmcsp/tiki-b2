import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import style from './allProduct.module.css'
import './allProduct.css'
import PopularProduct from './popularProduct/PopularProduct';
import data from '../../../shopProductData/data';


function AllProduct({activeKey1}) {

  const { TabPane } = Tabs;

  const onChange = (key) => {
  // console.log(key);
  };
  const [listProduct,setListProduct] = useState([])
  const [find,setFind] = useState('')
  const [listBestSale,setListBestSale] = useState([])
  const [listLowToHightPrice,setListLowToHightPrice] = useState([])
  const [listHightToLowPrice,setListHightToLowPrice] = useState([])

  useEffect(function(){
    setListProduct(()=>{
      const newData = []
      data.product.map(function(obj){
          obj.product.map(item=>{
              newData.push(item)
          })
      })
      return newData
    })
    setListBestSale(()=>{
      const newData = []
      data.product.map(function(obj){
          obj.product.map(item=>{
              newData.push(item)
          })
      })
      const Data = newData.filter(item=>{
        return item.sold >= 800
      })
      return Data
    })
 
    setListLowToHightPrice(()=>{
      const newData = []
      data.product.map(function(obj){
          obj.product.map(item=>{
              newData.push(item)
          })
      })
      const Data = newData.sort((a,b)=>{
        return a.price - b.price
      })
      return Data
    }) 

    setListHightToLowPrice(()=>{
      const newData = []
      data.product.map(function(obj){
          obj.product.map(item=>{
              newData.push(item)
          })
      })
      const Data = newData.sort((a,b)=>{
        return b.price - a.price
      })
      return Data
    })

  },[data])

  return (
    <div className={style.AllProduct}>
        <div className={style.header}>
            <p>
               <span>
                 Tất cả sản phẩm : 
               </span>
               <span>
                 1000 Sản Phẩm
               </span>
            </p>
            <div className={style.footer}>
              <div className={style.img}>
                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/TikiNow.svg' />
              </div>
              <p className={style.address}>
                <span>
                  Giao đến
                </span>
                <span>
                  <b>
                    <u>
                        Q.Hoàn Kiếm,P.Đống Đa,Hà Nội -
                    </u>
                  </b>
                </span>
                <a>
                  Đổi địa chỉ
                </a>
              </p>
            </div>
        </div>
        <div className={style.productTabs}>
          <Tabs defaultActiveKey={activeKey1} onChange={onChange} className='productTabs'>
            <TabPane tab="Phổ biến" key="1">
              <PopularProduct listProduct={listProduct} />       
            </TabPane>
            <TabPane tab="Bán chạy" key="2">
              <PopularProduct listProduct={listBestSale}/> 
            </TabPane>
            <TabPane tab="Hàng mới" key="3">
              <PopularProduct listProduct={listProduct}/> 
            </TabPane>
            <TabPane tab="Giá thấp đến cao" key="4">
              <PopularProduct listProduct={listLowToHightPrice}/> 
            </TabPane>
            <TabPane tab="Giá cao đến thấp" key="5">
              <PopularProduct listProduct={listHightToLowPrice}/> 
            </TabPane>
          </Tabs>
        </div>
    </div>
  )
}

export default AllProduct