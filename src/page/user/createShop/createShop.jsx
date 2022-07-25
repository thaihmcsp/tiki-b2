import React from 'react'
import {listBranch} from './listBranch'
import "./createShop.css"
function createShop() {
  return (
    <div className='user-createShop'>
            <h1>BẠN CẦN ĐƯỢC TƯ VẤN?</h1>
            <div className='user-createShop-container' >
                    <form action="">
                        <div className='user-createShop-input'>
                            <p>Họ và tên người liên hệ</p>
                            <input type="text" id="" placeholder='Họ và tên người liên hệ '/>
                        </div>
                        <div className='user-createShop-input'>
                            <p>SĐT liên hệ</p>
                            <input type="text" id="" placeholder='Nhập SĐT liên hệ '/>
                        </div>
                        <div className='user-createShop-input'>
                            <p>Email liên hệ</p>
                            <input type="text" id="" placeholder='Nhập Email liên hệ'/>
                        </div>
                        <div className='user-createShop-input'>
                            <p>Ngành hàng chủ lực của Anh/Chị?</p>
                            <select name="" id="" className='user-createShop-select'>  
                                <option value="">Vui lòng chọn</option>
                                {listBranch.map((branch,index) => {
                                    return (
                                        <option value="" key={index}>{branch}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='user-createShop-input'>
                            <p> Cửa hàng doanh nghiệp của Anh/Chị đã đăng ký kinh doanh chưa?</p>
                            <select name="" id="" className='user-createShop-select'>
                                <option value="" >Vui lòng chọn</option>
                                <option value="" >Đã đăng ký rồi</option>
                                <option value="" >Chưa đăng ký</option>
                            </select>
                        </div>
                        <button>Gửi yêu cầu tư vấn</button>
                    </form>
            </div>
    </div>
  )
}

export default createShop