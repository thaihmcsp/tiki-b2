import React from 'react'
import Card1 from '../../../Card1'
import style from './listDataColection.module.css'


function ListDataColection({data}) {
  
  return (
    <div className={style.ListDataColection}>
        {data.map(item=>{
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
  )
}

export default ListDataColection