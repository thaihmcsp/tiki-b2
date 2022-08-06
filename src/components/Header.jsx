import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './Header.css'
// import { Link } from "react-router-dom";


function Header() {
  const [DataHeader,setDataHeader] = useState(['Thịt','Rau củ','Nhà cửa','Điện tử','Thiết Bị Số','Điện thoại','Mẹ & Bé'])
  return (
   <div>
    <div className="Header" id='Header_Shop__Home'>
    <div className = 'HeaderBody'>
        <div className = 'HeaderTop'>
            <div className="HeaderTopContainer">
              <div className="HeaderTopLeft">
              <div className="HeaderTopContainerLogo cursorPoiter">
               <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="" />
               </div>
               <div className="HeaderTopContainerInput">
                  <div className="InputCover">
                      <input type="text" name="" id="" className = 'componentHeaderInput' placeholder = 'Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...' />
                      <div className="ShowCoverInput">
                            <a href=""className='HeaderCoverInput'>
                                <span className='HeaderCoverInputText'>Săn Sale Công Nghệ</span>
                                <img src="https://salt.tikicdn.com/cache/140x28/ts/banner/ec/32/4e/2227fe4869feaf2a75598c0ab0a8cf29.png" alt="" />
                            </a>
                            <div className="HistorySeach">
                                   <p className='ListHistorySeach'>
                                      <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="" witdth = '40px' height= '40px' />
                                      tai  nghe blutool
                                  </p>                          
                                   <p  className='ListHistorySeach'>
                                      <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt=""  witdth = '40px' height= '40px'/>
                                    iphone13 Promax
                                  </p>                          
                                   <p  className='ListHistorySeach'>
                                      <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt=""  witdth = '40px' height= '40px'/>
                                      Điều hòa không khí
                                  </p>                          
                            </div>
                            <div className="CoverInputListItems">
                                <div className="InputCoverItemTop">
                                  <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt=""  width='27px' height='25px'  />
                                  <p >Tìm Kiếm Phổ Biến</p>
                                </div>
                                <div className="ShowCoverInputListItem">
                               {/* {CoverInputItems.map((data)=> {
                                  return <div>
                                    <img src="{data.img}" alt="" />
                                    <span>{data.ten}</span>
                                  </div>
                               })} */}
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/41/78/c4/a4425d3a9679273ea7675c59a3264aba.png" alt=""  witdth= '50px' height='50px'/>
                                    <p>Sét Đồ Nữ</p>
                                  </a>
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/5c/57/85/312c7a38df0312e7525a18f61c5a0fbc.jpg" alt="" witdth= '50px' height='50px'/>
                                    <p>Điện Thoại Xiaomi</p>
                                  </a>
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/63/20/7a/86a64e68a0b46f31485428f5665ebded.jpg" alt="" witdth= '50px' height='50px' />
                                    <p>Ôp Lưng Iphone</p>
                                  </a>
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/50/db/4d/fe17aa78bc1ab2adb45b06140c945033.jpg" alt=""  witdth= '50px' height='50px'/>
                                    <p>Dép trong nhà</p>
                                  </a>
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/55/25/7f/1d055982a3231bfaec4a059c5b5b3a66.jpg" alt="" witdth= '50px' height='50px' />
                                    <p>Quần đùi nam</p>
                                  </a>
                                  <a href="" className='InputCoverLists'>
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/29/ee/bb/c2dfe5c42f265250352b434c4dd73b1e.jpg" alt="" witdth= '50px' height='50px'/>
                                    <p>Aó CrosTop Nữ</p>
                                  </a>
                                </div>
                                <div className="CatogoryAttenion">
                                    <a href="" className="CatogoryList">
                                      <div className='CatogoryListTitle'>
                                      <img src="https://salt.tikicdn.com/ts/category/15/23/95/e2da53c1fadff812db3f6ecb7c950675.png" alt="" witdth = '64.5px' height='64.5px' />
                                     
                                      <p >Trái Cây</p>
                                      </div>
                                    </a>
                                   
                                    <a href=""className="CatogoryList">
                                        <div className='CatogoryListTitle'>
                                          <img src="https://salt.tikicdn.com/ts/category/fb/83/30/b1a511c06ebc74d1b9e198073bb5762b.png" alt=""  witdth = '64.5px' height='64.5px'/>
                                            <p>Sữa, bơ, phô mai</p>
                                        </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                      <div className='CatogoryListTitle'>
                                          <img src="https://salt.tikicdn.com/cache/280x280/ts/product/35/6c/4b/709aef22ee52628dcdbdc857ba1bc46c.jpg" alt=""  witdth = '64.5px' height='64.5px'/>
                                          <p>Điện thoại Smartphone</p>
                                      </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                    <div className='CatogoryListTitle'>
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/6b/bb/91/9114806fba6f0ecf0d0a247ae28317ba.jpg" alt=""  witdth = '64.5px' height='64.5px'/>
                                        <p>Bình, ly uống trà và phụ kiện</p>
                                      </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                        <div className='CatogoryListTitle'> 
                                            <img src="https://salt.tikicdn.com/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png" alt=""  witdth = '64.5px' height='64.5px'/>
                                            <p>Giày - Dép nữ</p>
                                        </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                      <div className='CatogoryListTitle'> 
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/51/c1/28/80704f786a6064376698c010f7a5891c.jpg" alt=""  witdth = '64.5px' height='64.5px'/>
                                        <p>Bao Da - Ốp Lưng Điện Thoại Oppo</p>
                                      </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                      <div className='CatogoryListTitle'> 
                                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg" alt=""  witdth = '64.5px' height='64.5px'/>
                                        <p>Tai Nghe Bluetooth Nhét Tai</p>
                                      </div>
                                    </a>
                                    <a href="" className="CatogoryList">
                                      <div className='CatogoryListTitle'> 
                                          <img src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" alt=""  witdth = '64.5px' height='64.5px'/>
                                          <p>Đồ Chơi - Mẹ & Bé</p>
                                      </div>
                                    </a>
                                </div>
                            </div>
                      </div>
                  </div>
                  <button className = 'HeaderbuttonSeach cursorPoiter'>
                    <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className = 'icon-seach' alt="" />
                    Tìm Kiếm
                  </button>
               </div>
              </div>
            <div className="HeaderTopContainerRight">
            
               <div className="HeaderTopContainerUser cursorPoiter">
                <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" className = 'HeaderUserImg' />
                <div className="HeaderUserLoginContainer">
                <span className="HeaderUserLogin">Đăng Nhập / Đăng Ký</span>
                <span>
                  <span className="HeaderUserLoginUser">  Tài khoản</span>
                  <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt=""  className = 'HeaderUserImgdown'/>
                </span>
                </div>
               </div>
               <div className="HeaderTopContainerCart">
                <div className="HeaderTopContainerCartWallet cursorPoiter">
                  <div className="HeaderWalletCart">
                  <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className = 'HeaderCart' />
                    <span className = 'HeaderCartTitle'>0</span>
                  </div>
                    <span className = 'HeaderCartText'>Giỏ Hàng</span>
                </div>
               
               </div>
            </div>
            </div>
        </div>
        <div className="HeaderMiddle">
          <a href='' >
              <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height= '12' witdth = '83' />
          </a>
          <div className="HeaderMiddleListData">
            <a href=" ">trái cây</a>
            <a href=" ">thịt, trứng</a>
            <a href=" ">rau củ quả</a>
            <a href="">sữa, bơ, phô mai</a>
            <a href="">hải sản</a>
            <a href="">đồ uống, bia rượu</a>
            <a href="">bánh kẹo</a>
          </div>
          <a href="" className='HeaderSeller'>
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
              alt="" />
              <span className="HeaderSellerText">Bán hàng cùng Tiki</span>
          </a>
        </div>

    </div>

    <div className="HeaderMobie">
      <div className="HeaderMobieTop">
          <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height="10px" witdth = '12px' />
         
            <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt=""height="15px" witdth = '18px' className='HeaderMobieLogo' />
       
           
           
            <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" height="10px" witdth = '12px'  />
           
       
      </div>
      <div className="HeaderMobieMidle">
        <input type="text" name="" id="" placeholder="Bạn tìm gì hôm nay ?" className='HeaderMobieText'/>
      </div>
      <div className="HeaderMobieBottom">
        <a href="">nhà cửa</a>
        <a href="">điện tử</a>
        <a href="">điện thoại</a>
        <a href="">Mẹ và bé</a>
        <a href="">Làm đẹp</a>
        <a href="">Gia dụng</a>
        <a href="">Thời trang</a>
      </div>
    </div>
</div>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default Header
