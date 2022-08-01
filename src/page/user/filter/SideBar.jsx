import React, { useEffect, useState, useRef } from 'react'

import { List1 } from './List1'
import { trademark } from './Trademark'
import { listAddress } from './listAddress'
import { listSupplier } from './listSupplier'
import styles from './SideBar.module.css'
import { DownOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const SideBar = () => {
  
  const [data, setData] = useState([]);
  const [listdata, setListData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const newData = listAddress.slice(0, 5)
    setData(newData)
    const newData1 = trademark.slice(0, 5)
    setListData(newData1)
    const newData2 = listSupplier.slice(0, 5)
    setSupplier(newData2)
  },[])
  const handleClick = () => {
   if(!check) {
    setData(listAddress)
    setCheck(true)
   }else {
    const newData = data.slice(0, 5)
    newData.slice(0, 5)
    setData(newData)
    setCheck(false)
   }
  }
  const handleClick1 = () => {
   if(!check) {
    setListData(trademark)
    setCheck(true)
   }else {
    const newData = trademark.slice(0, 5)
    newData.slice(0, 5)
    setListData(newData)
    setCheck(false)
   }
  }
  const handleClick2 = () => {
   if(!check) {
    setSupplier(listSupplier)
    setCheck(true)
   }else {
    const newData = listSupplier.slice(0, 5)
    newData.slice(0, 5)
    setSupplier(newData)
    setCheck(false)
   }
    
  }
  return (
    <div className={styles.container}>
    <div className={styles.nav}>
    <h3 className={styles.title}>DANH MỤC SẢN PHẨM</h3>
     <ul className= {styles.nav__list}>
    {List1.map((val, index) => {
      return (
       <li key = {index}>
            <a href='#' className = {styles.nav__link}>{val}</a>
        </li>
      )
    })}
    </ul>
    </div>
    <div className={styles.nav}>
    <div className={styles.list_products}>
    <h3 className={styles.title}>DANH MỤC SẢN PHẨM</h3>
     <ul className= {styles.nav__list}>
    {data.map((val, index) => {
      const id1 = uuidv4()
      return (
       <li key = {index} className= {styles.list_products_item}>
            <input type='checkbox' id= {id1}/>
            <label className= {styles.list_products__name} htmlFor={id1}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <span onClick={handleClick} className= {styles.list_products__btn}>xem thêm <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px'}}/></span>
    </div>
    </div>
    <div className={styles.nav}>
    </div>
    <div className={styles.nav}>
    <h3 className={styles.title}>ĐÁNH GIÁ</h3>
    </div>
    <div className={styles.nav}>
    <div className={styles.price}>
    <h3 className={styles.title}>GIÁ</h3>
    <p>Dưới 200.000</p>
    <p>Từ 200.000 đến 750.000</p>
    <p>Trên 750.000</p>
    <label>Chọn khoảng giá</label>
    <div className={styles.gourp}>
      <input type="text" placeholder='' value={0} />
      <span className={styles.seperate}>-</span>
      <input type="text" placeholder='' value={0}/>
    </div>
      <button className={styles.btn}>Áp dụng</button>
          </div>
    </div>
    <div className={styles.nav}>
    <div className={styles.trademark}>
    <h3 className={styles.title}>THƯƠNG HIỆU</h3>
    <ul className= {styles.nav__list}>
    {listdata.map((val, index) => {
      const id = uuidv4()
      return (
        <li key = {index} className= {styles.list_products_item}>
            <input type='checkbox' className={styles.list_products__name} id={id}/>
            <label className= {styles.list_products__name} htmlFor={id}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <span onClick={handleClick1} className= {styles.list_products__btn}>xem thêm <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px'}}/></span>
    </div>
    </div>
    <div className={styles.nav}>
    <div className={styles.supplier}>
    <h3 className={styles.title}>NHÀ CUNG CẤP</h3>
    <ul className= {styles.nav__list}>
    {supplier.map((val, index) => {
      const id1 = uuidv4()
      return (
        <li key = {index} className= {styles.list_products_item}>
            <input type='checkbox' id={id1}/>
            <label className= {styles.list_products__name} htmlFor={id1}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <span onClick={handleClick2} className= {styles.list_products__btn}>xem thêm <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px'}}/></span>
    </div>
    </div>
   </div>
  )
}

export default SideBar