import React from 'react'
import { useState } from 'react'
import { GlobalStyles } from '../GlobalStyles/index.js'
import { Select, Checkbox  } from 'antd'
// import ListData from '../listData/ListData.jsx'
import { listproduct } from '../listproduct.js'
import styles from './OrderContainer.module.css'
import { UserOutlined, WechatOutlined, PrinterOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { blue } from '@mui/material/colors'
import { useEffect } from 'react'
const { Option } = Select
const OrderContainer = () => {
  const [listproduct1, setListproduct1] = useState(listproduct)
  const [newData, setNewData] = useState(listproduct1)
  const [check, setCheck] = useState(true)
  useEffect(() => {
    setNewData(listproduct1)
  },[check])
  const handleChange = (value) => {
    setCheck(check => !check)
    if(value === 'lucy1'){
      setListproduct1(() => {
        const listData = listproduct
        const newData = listproduct1.order.listOrder.sort((a, b) => {
           const anew = new Date(a.updatedAt)
           const bnew = new Date(b.updatedAt)
           if(anew < bnew) {
             return -1
           }
          })
          listData.order['listOrder'] = newData
          return listData
       })
    }else if(value === 'hi') {
      setListproduct1(() => {
        const listData = listproduct
        const newData = listproduct1.order.listOrder.sort((a, b) => {
           const anew = new Date(a.updatedAt)
           const bnew = new Date(b.updatedAt)
           if(anew > bnew) {
             return -1
           }
          })
          listData.order['listOrder'] = newData
          return listData
       })
    }
  }

  const [id, setId] = useState([])

  const onChange = (id1) => {
    setId((perv) => {
        const ischeck = id.includes(id1);
        if(ischeck) {
          return id.filter(item => item !== id1);
        }else {
          return [...perv, id1];
        }
      })
  };


  const add = (id1) => {
    // if(inp.checked ===  true) {
    //   console.log(1)
    // }
  }

  useEffect(() => {
    const inp = document.querySelector(`.${'dat' + id1} input`)
    console.log(70, id)
    if(id.length > 0) {
      inp.addEventListener('cick', () =>{
        inp.checked = true
     })
    }
  },[id])

  console.log(id)

  return (
    <div className={styles.order_Container}>
     <div style={styles.header}>
    <div  className= {styles.option}>
    <div className= {styles.option_left}>
    <Checkbox onChange={onChange} style={{marginRight:'20px'}}></Checkbox>
      <span className= {styles.option_page}>Page 1, 1 - {newData.order.listOrder.length} of {newData.order.listOrder.length} items</span>
      <button className= {styles.option_btn}>Đóng gói & In</button>
      <button className= {styles.option_btn}>In danh sách chọn</button>
      <Select
      defaultValue="lucy"
      style={{
        width: 100,
      }}
      onChange={handleChange}
    >
      <Option value="lucy">export</Option>
    </Select>
   
    </div>
    <div className= {styles.option_right}>
    <>
    <Select
      defaultValue="lucy"
      style={{
        width: 250,
      }}
      onChange={handleChange}
    >
      <Option value="lucy">Lọc theo:</Option>
      <Option value="lucy1">Lọc theo: đơn hàng tạo cũ nhất</Option>
       <Option value="hi">Lọc theo: đơn hàng tạo mới nhất</Option> 
    </Select>
   
  </>
    </div>
    </div>
    </div>
    <div className={styles.order}>
    <div className={styles.order_header}>
    <p>Sản phẩm</p>
    <p>Tổng cộng</p>
    <p>Giao hàng</p>
    <p>Trạng thái</p>
    <p>Thao tác</p>
    </div>
    <ul className= {styles.order_list}>
      {newData.order.listOrder.map(value => {
        return (
          <div>
          <div className= {styles.order_item_header}>
          <div className= {styles.order_item_header_box}>
          <div className= {styles.order_item_left}>
          <Checkbox onClick = {() => add(value._id)} style={{marginRight:20}} className = {'dat' + value._id}></Checkbox>
              <Avatar size="small" icon={<UserOutlined />}/>
              <span className={styles.order_item_name}>{value.shopId.shopName}</span>
              <WechatOutlined  style={{color:'rgb(107, 107, 248)', marginRight:10}}/>
              <span>({value.listProduct.length} sản phẩm)</span>
            </div>
            <div className={styles.order_item_right}>
            <p className={styles.order_item_sdh}>Số đơn hàng: <span>{value.userOrderId}</span></p>
            <span>
              Thời gian tạo: {value.updatedAt}
            </span>
            </div>
            </div>
          </div>
         {value.listProduct.map(value1 => {
         return (
          <li key={value1._id} className= {styles.order_item}>          
          <div className= {styles.order_item_middle}>
          <div className= {styles.order_info_product}>
          <Checkbox onChange={() => onChange(value1.productDetailId.productId._id)} style={{marginTop:20}} className = {'dat' + value1.productDetailId.productId._id}></Checkbox>
          <img src={value1.productDetailId.productId.thump[0]} alt='' className={styles.order_info_img}/>
          <div className= {styles.order_info}>
            <p className={styles.order_info_title}>{value1.productDetailId.productId.productName.toLocaleUpperCase()}</p>
            <span>Nhóm màu: {value1.productDetailId.option[0].value}</span>
            <p>Mã SKU NBH: 123</p>
          </div>
          </div>
            <div className= {styles.order_info_price_box}>
            <p className= {styles.order_info_price}><span>đ</span> {value1.productDetailId.price.toLocaleString().split(",").join('.')}</p>
            <span className={styles.order_info_price_amount}>x {value1.quantity}</span>
            </div>
            <div className={styles.order_info_new}>
            <p><span>đ</span> {value1.productDetailId.price.toLocaleString().split(",").join('.')}</p>
            <span className={styles.order_info_delivery}>Nhanh</span>
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
            
          </div>
        )
      })}
      {/* <ListData  data= {listproduct}/> */}
    </ul>
    </div>
    </div>
  )
}

export default OrderContainer