import React, { useEffect, useState } from 'react'
import style from '../allOder/AllOder.module.css'
function AllOder(props) {
     const [statusTitle, setstatusTitle] = useState()
     const [daterender, setdaterender] = useState([...props.newdata]);
     useEffect(() => {
          setdaterender(props.newdata.slice(props.start, props.start + 3))
     }, [props.start, props.newdata])

     return (
          <div className={style.Alloder_Title}>
               {daterender.map(function (value, index) {
                    return <div key={index} className={style.OderTitle}>
                         <p className={style.Oder_HeaderTitle}>{value.status}</p>
                         <div className={style.MidleTitle}>
                              <div className={style.MidleTitle_Left}>
                                   <img src={value.img} alt="" className={style.ImageTitle} />
                                   <h4 style={{ opacity: 0.8,width: '80%' }}>{value.name}</h4>
                              </div>
                              <div className={style.ImageTitleText}>
                                   <p>{(value.price*1).toLocaleString()}đ </p>
                                   <p>x{value.sold}</p>
                              </div>

                         </div>
                         <div className={style.OrderBottomTitle}>
                              <div className={style.OderBottom_Shoplogo}>
                                   <img src={value.shopId.shoplogo.startsWith('http') ? value.shopId.shoplogo:`https://tiki.thaihm.site/${value.shopId.shoplogo}`} alt="" />
                                   <span>{value.shopId.shopname}</span>
                              </div>
                              <div className={style.BottomTitle}>
                                   <p style={{ textAlign: 'right', fontSize: '14px', opacity: '0.7', marginBottom: '5px' }} >TOTAL : <span style={{ opacity: '1', fontWeight: '500', color: 'red', textDecoration: 'underline', fontSize: '16px' }} >{(value.price * value.sold).toLocaleString()}đ</span></p>
                                   <div style={{ textAlign: 'right' }}>
                                        <button className={style.BottomTitle_Button}>Mua lại</button>
                                        <button className={style.BottomTitle_Button}>Xem Chi Tiết</button>
                                   </div>
                              </div>
                         </div>

                    </div>
               })}
               <div className={style.EmptyOder}>
                    <img src={props.emptyOder} className={style.EmptyOder_img} alt="" />
               </div>
          </div>
     )
}

export default AllOder