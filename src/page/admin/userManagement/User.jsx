import React, { useState } from 'react'
import UserList from '.././userManagement/userlist/UserList'
import style from '../userManagement/UserManagement.module.css'
import clsx from 'clsx';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
function SetActiveButton(status){
  let active=document.querySelectorAll(`.${style.Header_ButtonActive}`)
  const arr = Array.prototype.slice.call(active)
  arr.map((value)=>{
    return value.classList.remove(`${style.UserActive}`)
  })
  const element = arr.filter((value) => {
    if(value.innerHTML === status){ 
      return value;
    }
  })
 if(element[0]) {
    element[0].classList.add(`${style.UserActive}`)
 }   
} 
function User() {
  const [UserListdata,setUserListdata] = useState([
    {
      name : 'Nguyễn Văn An ',
      datejoin: '2022/7/4',
      Userid : '123sscc',
      status : 'active',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg'
    },
    {
      name : 'Hồ Câu Cá',
      Userid : '1sd',
      datejoin: '2022/5/27',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Nguyễn Công Phượng',
      Userid : 'ddr34',
      datejoin: '2022/6/12',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Nguyễn Tuấn Tài',
      Userid : '556sd',
      datejoin: '2022/4/1',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Đặng Văn Lâm',
      Userid : '1ht7d',
      datejoin: '2022/5/1',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Trần  Nguyên Mạnh',
      Userid : '1ht7d',
      datejoin: '2022/4/19',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Nguyễn Thành Chung',
      Userid : '1ht7d',
      datejoin: '2022/2/10',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'User điện thoại',
      Userid : '1ht7d',
      datejoin: '2022/3/30',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'Bùi Hoàng Việt Anh',    
      Userid : '1ht7d',
      datejoin: '2022/5/18',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'block',
    },
    {
      name : 'Quês Ngọc Hải',     
      Userid : '1ht7d',
      datejoin: '2022/6/12',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'User dưa',    
      Userid : '1ht7d',
      datejoin: '2022/5/20',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
    {
      name : 'User thịt lợn',
      Userid : '1ht7d',
      datejoin: '2022/4/15',
      avatar : 'https://salt.tikicdn.com/cache/200x200/ts/product/de/ca/61/7690cda47aded2e53106f5239b32a287.jpg',
      status : 'active',
    },
  ])
  const [Userstatus, setUserstatus] = useState('')
  const [newListdata,setnewListdata] = useState([...UserListdata])
  const [start,setstart] = useState(0)
  const [current,setcurrent] = useState(1)
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
  
    if (type === 'next') {
      return <a>Next</a>;
    }
  
    return originalElement;
  };
  const ListUserActive = ()=> {
    setUserstatus('active')
    SetActiveButton('Đang Hoạt Động')
    setstart(0)
    setcurrent(1)
    setnewListdata(UserListdata.filter((value)=> {
      return  value.status === 'active' 
  })  )
  }
  const ListUserBlock = ()=> {
    setUserstatus('block')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Đã Khóa')
    setnewListdata(UserListdata.filter((value)=> {
      return  value.status === 'block' 
  })  )
  }
  const ListUser = ()=> {
    setUserstatus('')
    setstart(0)
    setcurrent(1)
    SetActiveButton('ok')
    setnewListdata(UserListdata)
  }
  function onChangePagination(page,pageSize){
    setcurrent(page)
    setstart(pageSize*(page-1));
  }
  return (
    <div className={style.UserManage}>
        <div className={style.UserManageHeader}>
            <div className={style.HeaderLeft}>
                  <h3 onClick={ListUser}>LIST USER</h3>
            </div>
            <div className= {style.HeaderRight}>
                <button onClick={ListUserActive} className = {clsx(style.Header_ButtonActive)}  >Đang Hoạt Động</button>
                <button onClick={ListUserBlock} className = {clsx(style.Header_ButtonActive)} >Đã Khóa</button>
            </div>
        </div>
        <div className={style.Userlist}>
           <UserList newListdata = {newListdata} Userstatus = {Userstatus} UserListdata = {UserListdata} setnewListdata = {setnewListdata} setUserstatus = {setUserstatus} start = {start}> </UserList>
        </div>
      <div className = {style.Pagination}>
          <Pagination  itemRender={itemRender} defaultCurrent={1} current = {current} total={newListdata.length} onChange = {onChangePagination} defaultPageSize = {5} />
      </div>
    </div>
  )
}

export default User