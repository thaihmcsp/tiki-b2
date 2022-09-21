import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../../../config/api';
import style from './hotitem.module.css'
import ListItem from './listItem/ListItem'
function HotItem() {
  const [listCategories, setListCategories] = useState([]);
  useEffect(function () {
    getAPI("/category/get-all-categories")
      .then((data) => {
        const datanew = data.data.listCategories
        setListCategories(() => {
            const newData = datanew.slice(0 ,20)
            return newData
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.HotItem} id='hotItem_Shop__Home'>
        <h5>Danh Mục Nổi Bật</h5>
        <ListItem  data = {listCategories}/>
    </div>
  )
}

export default HotItem