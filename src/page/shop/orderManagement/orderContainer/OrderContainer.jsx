import React, { useState } from 'react'
import { Select  } from 'antd'
import { useEffect } from 'react'
import { getAPI } from '../../../../config/api.js'
import { Tabs } from 'antd';
import PendingOder from './taboderStatus/PendingOder.js'

const { Option } = Select
const OrderContainer = () => {
  const [listOder,setLisOder] = useState([])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(()=>{
      
      getAPI(`/order/get-orders-by-shop/62ece78420a301d53e54add3`)
      .then(data =>{
            const newData = data.data.listOrder
            const daTa  = []
            newData.map((value)=>{
              console.log(25,value)
              const Obj = {
                total:value.total,
                userID:value.userId,
                delivery: 'COD',
                id: value._id,
                listProducts:[]
              }
              const listProducts = []
              value.product.map((subvalue,index)=>{
                listProducts.push( {
                  id: value._id,
                  image: value.product[index].productId.thump[0],
                  title:value.product[index].productId.productName,
                  color: 'Blue',
                  code: value._id,
                  amout: value.product[index].quantity,
                  price: value.product[index].productId.price,
                  delivery: 'COD',
                  sdh: value.phone,
                  total:value.total,
                  userID:value.userId
                })
              })
              value.listProduct.map((subvalue,index)=>{
                console.log(subvalue)
                listProducts.push( {
                  id: subvalue._id,
                  image: subvalue.productDetailId.productId.thump[0],
                  title:subvalue.productDetailId.productId.productName,
                  color: 'Blue',
                  code: subvalue._id,
                  amout: subvalue.quantity,
                  price: subvalue.productDetailId.price,
                  delivery: 'COD',
                  sdh: value.phone,
                  total:value.total
                })
              })
              Obj.listProducts = listProducts
              daTa.push(Obj)
            })
            setLisOder(daTa)
      })
      .catch(error => console.log(error))
  },[])
  // const APIcall =()=>{
  console.log(71,listOder)
  // }
  return(
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Đang Xử Lí" key="1">
        <PendingOder listOder={listOder}/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Đang Giao Hàng" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Giao Hàng Thành Công" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane tab="Đơn Thất Bại" key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
    </Tabs>
  )
 
}

export default OrderContainer