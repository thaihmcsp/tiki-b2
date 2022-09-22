import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../hotitem.module.css'

function ListItem({data}) {
    const nav = useNavigate()
    const hanldeFilter = (data) =>{
        nav(`/filter?seaarch=${data}`)
    }
  return (
    <div className={style.ListItem}>
        {data.length > 0 && data.map(function(item){
            let newLink = item.thump;
                    if(!item.thump.startsWith('https')){
                        newLink = `https://tiki.thaihm.site/${item.thump}`
                    }
            return(
                <div className={style.ListItem_item} onClick = {() => hanldeFilter(item.categoryName)}>
                    <img src={newLink} alt = ''/>
                    <h4>{item.categoryName}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default ListItem