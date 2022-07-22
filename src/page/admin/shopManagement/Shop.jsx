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
      name : 'shop hoa qua1 ',
      timestart: '2022/5/25',
      shopid : '123sscc',
      status : 'pending',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg'
    },
    {
      name : 'shop hoa qua2',
      timestart: '2022/5/20',
      shopid : '1sd',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'shop hoa qua3',
      timestart: '2022/5/28',
      shopid : 'ddr34',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'shop hoa qua4',
      timestart: '2022/6/25',
      shopid : '556sd',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
    {
      name : 'shop hoa qua5',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'shop hoa qua5',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'shop hoa qua5',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'shop hoa qua5',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'shop hoa qua5',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'shop rau',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
    {
      name : 'shop dưa',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'shop thịt lợn',
      timestart: '2022/5/25',
      shopid : '1ht7d',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'pending',
    },
  ])
  const [Shopstatus, setShopstatus] = useState('')
  const [newListdata,setnewListdata] = useState([...ShopListdata])
  const ListShopActive = ()=> {
    setShopstatus('active')
    SetActiveButton('Đang Hoạt Động')
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'active' 
  })  )
  }
  const ListShopPending = ()=> {
    setShopstatus('pending')
    SetActiveButton('Chờ Kích Hoạt')
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'pending' 
  })  )
  }
  const ListShopBlock = ()=> {
    setShopstatus('block')
    SetActiveButton('Đã Khóa')
    setnewListdata(ShopListdata.filter((value)=> {
      return  value.status === 'block' 
  })  )
  }
  const ListShop = ()=> {
    setShopstatus('')
    SetActiveButton('ok')
    setnewListdata(ShopListdata)
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
        <div className={style.shoplist}>
           <ShopList newListdata = {newListdata} Shopstatus = {Shopstatus} ShopListdata = {ShopListdata} setnewListdata = {setnewListdata} setShopstatus = {setShopstatus}></ShopList>
        </div>
      <div className = {style.Pagination}>
          <Pagination defaultCurrent={1} total={ShopListdata.length} />
      </div>
    </div>
  )
}

export default Shop