
import React, { useEffect, useState } from 'react'
import Card1 from '../../../Card1'
import Card from '../../../Card1'
import style from './popularProduct.module.css'

function PopularProduct({listProduct}) {

  const [listShow,setListShow] = useState([])
  const [pageSize,setPageSize] = useState(24)


  useEffect(function(){
    setListShow(()=>{
        const newData = [...listProduct]
        return newData.splice(0,pageSize)
    })
  },[listProduct,pageSize])

  
  const handleReadmore =()=>{
    if(pageSize < listProduct.length){
      setPageSize((pageSize)=>{
        return pageSize + 24
      })
    }
  }
  return (
    <>
    <div className={style.product}>
      <div className={style.Card}>
          {listShow.map(item=>{
              return(
                  <Card1 
                      img={item.avatar}
                      title={item.title}
                      sold={item.sold}
                      price={item.price}
                      discount = {item.discount}
                  />
              )
          })}
      </div>
    </div>
     <button className={style.readMore} onClick={handleReadmore}>Xem thêm</button>
     </>
  )
}

export default PopularProduct