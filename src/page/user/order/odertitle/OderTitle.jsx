import React from 'react'
import styles from '../odertitle/OderTitle.module.css'
import clsx from 'clsx';
function OderTitle(props) {
  
  function ShowDataTitle (data,Title){
      let Oder_Check = document.querySelectorAll(`.${styles.User_Oder_Title}`);
      const arr = Array.prototype.slice.call(Oder_Check)
      arr.map((value)=>{
        return value.classList.remove(`${styles.active}`)
      })
      const element = arr.filter((value) => {
        if(value.innerHTML === Title){ 
          return value;
        }
      })
      element[0].classList.add(`${styles.active}`)

      let check = false;
      data.setstatus(data.Title)   
      if( data.Title === 'Tất cả đơn'){
        data.setnewListdata(data.newListdata)
        data.setdataInputSeach(data.newListdata)
        check = true;
      } else {

        const newdata = data.newListdata.filter(value=> {
          return value.status === data.Title;             
      })
      data.setdataInputSeach(newdata)
      if(newdata.length > 0) {
        check = true;
      }     
        data.setnewListdata(newdata)
     

  }
  if(!check) {
    props.setemptyOder('https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png')
  } else {
    props.setemptyOder('')
  }
}
  return (
    <div className={clsx(styles.User_Oder_Title)}  onClick = {()=> {ShowDataTitle(props,props.Title)}}>
        {props.Title}
    </div>
  )
}

export default OderTitle