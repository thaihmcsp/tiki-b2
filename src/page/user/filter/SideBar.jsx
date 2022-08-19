import React, { useEffect, useState, useRef } from 'react'

import { List1 } from './List1'
// import { listAddress } from './listAddress'
// import { listSupplier } from './listSupplier'
import styles from './SideBar.module.css'
import { DownOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import './styles.css'

const SideBar = ({setData,setInp, listProducts}) => {
  const [address, setAddress] = useState([])
  const [price200, setPrice200] = useState(0)
  const [brand, setBrand] = useState([])
  const [provider, setProvider] = useState([])
  const [data1, setData1] = useState([]);
  const [listdata, setListData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [check, setCheck] = useState(0);
  const [check1, setCheck1] = useState(0);
  const [check2, setCheck2] = useState(0);
  const [dem1, setDem1] = useState(false)
  const [dem2, setDem2] = useState(false)
  const [dem3, setDem3] = useState(false)
const [listAddress, setTListAddress] = useState([])
  const [listsupplier, setListsupplier] = useState([])
  const [listtrademark, setListTrademark] = useState([])
  useEffect(() => {
    setListsupplier(() => { 
      const newData = []
      listProducts.map(value => {
        if(!newData.includes(value.shopId.shopName)) {
          newData.push(value.shopId.shopName)
        }
      })
      return newData
    })
  },[listProducts])
  
  useEffect(() => {
    setListTrademark(() => {
      const newData1 = []
      listProducts.map(value => {
        if(!newData1.includes(value.brandId.brandName)) {
          newData1.push(value.brandId.brandName)
        }
      })
      return newData1
    })
  },[listProducts])
  
  useEffect(() => {
    setTListAddress(() => { 
      const newData = []
      listProducts.map(value => {
        if(!newData.includes(value.shopId.address)) {
          newData.push(value.shopId.address)
        }
      })
      return newData
    })
  },[listProducts])
  

  useEffect(() => {
    const newData = listAddress.slice(0, 5)
    setData1(newData)
    const newData1 = listtrademark.slice(0, 5)
    setListData(newData1)
    const newData2 = listsupplier.slice(0, 5)
    setSupplier(newData2)
  },[listsupplier,listAddress,listtrademark])

  const handleClick = () => {
    const hide = document.querySelector('.list_products__btn3')
    const icon_sidebar = document.querySelector('.icon-sidebar')
    icon_sidebar.classList.toggle('mystyle1_sidebar')
   if(check === 0) {
    setData1(listAddress)
    hide.textContent = 'Thu gọn';
    setCheck(1)
   }else {
    const newData = listAddress.slice(0, 5)
    newData.slice(0, 5)
    setData1(newData)
    setCheck(0)
      hide.textContent = 'Xem thêm';
   }
  }


  
  const handleClick1 = () => {
    const hide1 = document.querySelector('.list_products__btn1')
    const icon_sidebar = document.querySelector('.icon-sidebar1')
    icon_sidebar.classList.toggle('mystyle2_sidebar')
   if(check1 === 0) {
    setListData(listtrademark)
    setCheck1(1)
    hide1.textContent = 'Thu gọn';
   }else {
    const newData = listtrademark.slice(0, 5)
    newData.slice(0, 5)
    setListData(newData)
    setCheck1(0)
    hide1.textContent = 'Xem thêm';
   }
  }
  
  const handleClick2 = () => {
    const hide2 = document.querySelector('.list_products__btn2')
    const icon_sidebar2 = document.querySelector('.icon-sidebar2')
    icon_sidebar2.classList.toggle('mystyle_sidebar')
   if(check2 === 0) {
    setSupplier(listsupplier)
    setCheck2(1)
    hide2.textContent = 'Thu gọn';
   }else {
    const newData = listsupplier.slice(0, 5)
    newData.slice(0, 5)
    setSupplier(newData)
    setCheck2(0)
    hide2.textContent = 'Xem thêm';
   }
  }


  const handleCheck = (val) => {
    setAddress((perv) => {
      const ischeck = address.includes(val);
      if(ischeck) {
        return address.filter(item => item !== val);
      }else {
        return [...perv, val];
      }
    })
  }

  const handleCheck1 = (val) => {
    setBrand((perv) => {
      const ischeck = brand.includes(val);
      if(ischeck) {
        return brand.filter(item => item !== val);
      }else {
        return [...perv, val];
      }
    })
  }

  const handleCheck2 = (val) => {
    setProvider((perv) => {
      const ischeck = provider.includes(val);
      if(ischeck) {
        return provider.filter(item => item !== val);
      }else {
        return [...perv, val];
      }
    })
  }

  useEffect(() => {
      setData({address:address, brandName:brand, shopName:provider, price: price200})
  }, [address, brand, provider, price200]);

  const handleprice = () => {
      const inp1 = document.querySelector('#min-input')
      const inp2 = document.querySelector('#max-input')
      setInp({min:inp1.value, max:inp2.value})
      inp1.value =''
      inp2.value= ''
  }

  const handle200 = () => {
    const filter_sidebar200 = document.querySelector('.filter-sidebar200')
    if(!dem3) {
      filter_sidebar200.style.backgroundColor = 'rgba(27, 168, 255, 0.1)';
      setPrice200([200000])
    }else {
      filter_sidebar200.style.backgroundColor = 'rgb(238, 238, 238)';
      setPrice200([])
    }
    setDem3(dem3 => !dem3)
  }

  const handle7500 = () => {
    const filter_sidebar700 = document.querySelector('.filter-sidebar700')
    if(!dem2) {
      filter_sidebar700.style.backgroundColor = 'rgba(27, 168, 255, 0.1)';
      setPrice200([{min:200000, max:750000}])
    }else {
      filter_sidebar700.style.backgroundColor = 'rgb(238, 238, 238)';
      setPrice200([])
    }
    setDem2(dem2 => !dem2)
  }

  const handle8500 = () => {
    const filter_sidebar750 = document.querySelector('.filter-sidebar750')
    if(!dem1) {
      filter_sidebar750.style.backgroundColor = 'rgba(27, 168, 255, 0.1)';
      setPrice200([750000])
    }else {
      filter_sidebar750.style.backgroundColor = 'rgb(238, 238, 238)';
      setPrice200([])
    }
    setDem1(dem1 => !dem1)
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
    <h3 className={styles.title}>NƠI BÁN</h3>
     <ul className= {styles.nav__list}>
    {data1.map((val, index) => {
      const id1 = uuidv4()
      return (
       <li key = {index} className= {styles.list_products_item}>
       <input type='checkbox' id= {id1} checked={address.includes(val)} onChange={() => handleCheck(val)}/>
            <label className= {styles.list_products__name} htmlFor={id1}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <div className= 'btn__box'>
    <span onClick={handleClick} className= {[styles.list_products__btn, 'list_products__btn3'].join(' ')}>xem thêm</span>
    <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px',color:'blue'}} className={[styles.icon, 'icon-sidebar'].join(' ')}/>
    </div>
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
    <p onClick ={handle200} className = 'filter-sidebar200'>Dưới 200.000</p>
    <p onClick = {handle7500} className = 'filter-sidebar700'>Từ 200.000 đến 750.000</p>
    <p onClick={handle8500} className = 'filter-sidebar750' >Trên 750.000</p>
    <label>Chọn khoảng giá</label>
    <div className={styles.gourp}>
      <input type="number" placeholder='0' id='min-input'/>
      <span className={styles.seperate}>-</span>
      <input type="number" placeholder='0'  id='max-input'/>
    </div>
      <button className={styles.btn} onClick = {handleprice}>Áp dụng</button>
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
        <input type='checkbox' className={styles.list_products__name} id={id} checked={brand.includes(val)} onChange={() => handleCheck1(val)}/>
            <label className= {styles.list_products__name} htmlFor={id}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <div className= 'btn__box'>
    <span onClick={handleClick1} className= {[styles.list_products__btn, 'list_products__btn1'].join(' ')}>xem thêm</span>
    <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px',color:'blue'}} className={[styles.icon, 'icon-sidebar1'].join(' ')}/>
    </div>
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
        <input type='checkbox' id={id1} checked={provider.includes(val)} onChange={() => handleCheck2(val)}/>
            <label className= {styles.list_products__name} htmlFor={id1}>{val}</label>      
        </li>
      )
    })}
    </ul>
    <div className= 'btn__box'>
    <span onClick={handleClick2} className= {[styles.list_products__btn, 'list_products__btn2'].join(' ')}>xem thêm</span>
    <DownOutlined style={{fontSize:'0.6rem', marginLeft:'1px',color:'blue'}} className={[styles.icon, 'icon-sidebar2'].join(' ')}/>
    </div>
    </div>
    </div>
   </div>
  )
}

export default SideBar