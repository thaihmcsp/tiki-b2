import React, { useState } from 'react'
import { GlobalStyles } from '../GlobalStyles/index.js'
import { Select, Checkbox  } from 'antd'
import ListData from '../listData/ListData.jsx'
import { listproduct } from '../listproduct.js'
import styles from './OrderContainer.module.css'
import Headerr from './oederheader/Headerr'
import { UserOutlined, WechatOutlined, PrinterOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { blue } from '@mui/material/colors'
import { useEffect } from 'react'
import { getAPI } from '../../../../config/api.js'


const { Option } = Select
const OrderContainer = () => {
  const [listOder,setLisOder] = useState([])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(async()=>{

    try{
      
      // const res1 = await getAPI(`/order/get-orders-by-shop/62fde7d19549b8b708773a0d`)
      // console.log(12234,res1)
      // const newdata1 = res1.data.listOrder
      // console.log(2345,newdata1)
      // const data1 = newdata1.map((value)=>{
      //   return {
      //     id: value._id,
      //     image: value.product[0].productId.thump[0],
      //     title:value.product[0].productId.productName,
      //     color: 'Blue',
      //     code: value._id,
      //     amout: value.product[0].quantity,
      //     price: value.product[0].productId.price,
      //     delivery: 'COD',
      //     sdh: value.phone,
      //     total:value.total
      //   }
      // })
      const res = await getAPI(`/order/get-orders-by-shop/62ece78420a301d53e54add3`)
      const newData = res.data.listOrder
      const daTa  = []
      newData.map((value)=>{
        value.product.map((subvalue,index)=>{
          daTa.push( {
          id: value._id,
          image: value.product[index].productId.thump[0],
          title:value.product[index].productId.productName,
          color: 'Blue',
          code: value._id,
          amout: value.product[index].quantity,
          price: value.product[index].productId.price,
          delivery: 'COD',
          sdh: value.phone,
          total:value.total
          })
        })
        
      })
      setLisOder(daTa)
    }catch(e){
      console.log(e)
    }; 
  },[])
  console.log(21,listproduct)
  return (
    <div className={styles.order_Container}>
    <Headerr/>
    <div className={styles.order}>
    <div className={styles.order_header}>
    <p>Sản phẩm</p>
    <p>Tổng cộng</p>
    <p>Giao hàng</p>
    <p>Trạng thái</p>
    <p>Thao tác</p>
    </div>
    <ul className= {styles.order_list}>
      {listOder.length>0 && listOder.map(value => {
        return (
          <li key={value.id} className= {styles.order_item}>
          <div className= {styles.order_item_header}>
          <div className= {styles.order_item_header_box}>
          <div className= {styles.order_item_left}>
          <Checkbox onChange={onChange} style={{marginRight:20}}></Checkbox>
              <Avatar size="small" icon={<UserOutlined />}/>
              <span className={styles.order_item_name}>Ngoconghieu</span>
              <WechatOutlined  style={{color:'rgb(107, 107, 248)', marginRight:10}}/>
              <span>(1 sản phẩm)</span>
            </div>
            <div className={styles.order_item_right}>
            <p className={styles.order_item_sdh}>Số đơn hàng: <span>{value.sdh}</span></p>
            <span>
              Thời gian tạo: 08 Jul 2022 10:18
            </span>
            </div>
            </div>
          </div>
          <div className= {styles.order_item_middle}>
          <div className= {styles.order_info_product}>
          <Checkbox onChange={onChange} style={{marginTop:20}}></Checkbox>
          <img src={value.image} alt='' className={styles.order_info_img}/>
          <div className= {styles.order_info}>
            <p className={styles.order_info_title}>{value.title}</p>
            <span>Nhóm màu: {value.color}</span>
            <p>Mã SKU NBH: {value.code}</p>
          </div>
          </div>
            <div className= {styles.order_info_price_box}>
            <p className= {styles.order_info_price}><span>đ</span> {value.price}</p>
            <span className={styles.order_info_price_amount}>x 1</span>
            </div>
            <div className={styles.order_info_new}>
            <p><span>đ</span> {value.total}</p>
            <span className={styles.order_info_delivery}>{value.delivery}</span>
            </div>
            <p className={styles.order_info_standard}>Tiêu chuẩn</p>
            <div>
              <p className={styles.order_info_standard}>Chờ Xử lý</p>
              <p className={styles.order_info_hrs}>80.5 hrs</p>
              <div>
              <span><PrinterOutlined style={{marginRight:7}}/>Mã đơn hàng</span>
              <span style={{marginLeft:10}}><PrinterOutlined style={{marginRight:7}}/>Hóa đơn</span>
              <p><PrinterOutlined style={{marginRight:7}}/>Danh sách chọn</p>

              </div>
            </div>
            <div>
              <button className={styles.order_info_btn}>Đóng gói & In</button>
              <Select
      defaultValue="lucy"
      style={{
        width: 150,color: 'blue'
      }}
      onChange={handleChange}
    >
      <Option value="lucy">export</Option>
    </Select>
            </div>
          </div>
          </li>
        )
      })}
      <ListData  data= {listproduct}/>
    </ul>
    </div>
    </div>
  )
}

export default OrderContainer