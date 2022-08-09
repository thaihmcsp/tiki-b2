import React, { useState } from 'react'
import ShopList from './shoplist/ShopList'
import style from './Shopmanagement.module.css'
import clsx from 'clsx';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
function SetActiveButton(status){
  let active=document.querySelectorAll(`.${style.Header_ButtonActive}`)
  const arr = Array.prototype.slice.call(active)
  arr.map((value)=>{
    return value.classList.remove(`${style.ShopActive}`)
  })
  const element = arr.filter((value) => {
    if(value.innerHTML === status){ 
      return value;
    }
  })
 if(element[0]) {
    element[0].classList.add(`${style.ShopActive}`)
 }   
} 
function Shop() {
  const [ShopListdata,setShopListdata] = useState([
    {
      name : 'Shop hoa qua1 ',
      timestart: '2022/7/25',
      Shopid : '123sscc',
      status : 'pending',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg'
    },
    {
      name : 'Shop mực',
      timestart: '2022/5/20',
      Shopid : '1sd',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Shop cá',
      timestart: '2022/5/28',
      Shopid : 'ddr34',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Shop cua',
      timestart: '2022/6/25',
      Shopid : '556sd',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
    {
      name : 'Shop hoa',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Shop máy in',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Shop máy tính',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Shop điện thoại',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Shop tôm',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Shop rau',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
    {
      name : 'Shop dưa',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Shop thịt lợn',
      timestart: '2022/5/25',
      Shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
  ])
  const [Shopstatus, setShopstatus] = useState('')
  const [newListdata,setnewListdata] = useState([...ShopListdata])
  const [start,setstart] = useState(0)
  const [current,setcurrent] = useState(1)
  
  const ListShopActive = ()=> {
    setShopstatus('active')
    SetActiveButton('Đang Hoạt Động')
    setstart(0)
    setcurrent(1)
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'active' 
  })  )
  }
  const ListShopPending = ()=> {
    setShopstatus('pending')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Chờ Kích Hoạt')
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'pending' 
  })  )
  }
  const ListShopBlock = ()=> {
    setShopstatus('block')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Đã Khóa')
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'block' 
  })  )
  }
  const ListShop = ()=> {
    setShopstatus('')
    setstart(0)
    setcurrent(1)
    SetActiveButton('ok')
    setnewListdata(ShopListdata)
  }
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
  
    if (type === 'next') {
      return <a>Next</a>;
    }
  
    return originalElement;
  };
  function onChangePagination(page,pageSize){ 
    setstart(pageSize*(page-1));
    setcurrent(page)
  }
  return (
    <div className={style.ShopManage}>
        <div className={style.ShopManageHeader}>
            <div className={style.HeaderLeft}>
                  <h3 onClick={ListShop}>LIST SHOP</h3>
            </div>
            <div className= {style.HeaderRight}>
                <button onClick={ListShopActive} className = {clsx(style.Header_ButtonActive)}  >Đang Hoạt Động</button>
                <button onClick={ListShopPending} className = {clsx(style.Header_ButtonActive)}  >Chờ Kích Hoạt</button>
                <button onClick={ListShopBlock} className = {clsx(style.Header_ButtonActive)} >Đã Khóa</button>
            </div>
        </div>
        <div className={style.Shoplist}>
           <ShopList newListdata = {newListdata} Shopstatus = {Shopstatus} ShopListdata = {ShopListdata} setnewListdata = {setnewListdata} setShopstatus = {setShopstatus} start = {start}> </ShopList>
        </div>
      <div className = {style.Pagination}>
      <Pagination  itemRender={itemRender} defaultCurrent={1} current = {current} total={newListdata.length} onChange = {onChangePagination} defaultPageSize = {5} />
      </div>
    </div>
  )
}

export default Shop