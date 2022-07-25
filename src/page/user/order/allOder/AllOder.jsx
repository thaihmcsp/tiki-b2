import React, { useState } from 'react'
import style from '../allOder/AllOder.module.css'
function AllOder(props) {
  const [statusTitle,setstatusTitle] = useState()  
  if( props.newdata.length === 0) {
     // document.querySelector(`${style.OderTitle}`).setAttribute('style', 'display: none')
     // document.querySelector(`${style.EmptyOder}`).setAttribute("style", "display: flex;")
  }
    return (
    <div className={style.Alloder_Title}>
         {props.newdata.map(function (value,index){
          console.log(value);
           return <div key={index} className = {style.OderTitle}>
                <p className={style.Oder_HeaderTitle}>{value.status}</p>
               <div className={style.MidleTitle}>
                    <div className={style.MidleTitle_Left}>
                        <img src={value.img} alt="" className={style.ImageTitle} />
                        <h4 style={{opacity: 0.8}}>{value.name}</h4>
                    </div>
                   <div className={style.ImageTitleText}>
                    <p>{value.price.toLocaleString()}đ </p>
                    <p>x{value.number}</p>
                   </div>
                   
               </div>
               <div className={style.BottomTitle}>
                    <p style={{textAlign: 'right',fontSize: '16px',opacity:'0.7',marginBottom: '10px'}} >Tổng tiền : <span style={{opacity:'1', fontWeight:'bold',color:'red'}} >{ (value.price * value.number).toLocaleString()}đ</span></p>
                   <div style={{textAlign: 'right'}}>
                        <button className={style.BottomTitle_Button}>Mua lại</button>
                        <button  className={style.BottomTitle_Button}>Xem Chi Tiết</button>
                   </div>         
               </div>
              
            </div>
         })}
         <div className= {style.EmptyOder}>
               <img src={props.emptyOder} className = {style.EmptyOder_img} alt="" />    
         </div>
    </div>
  )
}

export default AllOder