import React, { useEffect, useState } from 'react'
import { ListCategory } from './ListCategory'
import styles from './category.module.css'
import { Pagination } from 'antd';
import './Category.css'
import { Button, Modal } from 'antd';
import { useOutletContext } from "react-router-dom";
import 'antd/dist/antd.css';
import { getAPI, postAPI} from '../../../config/api'
function Category() {
  const data = useOutletContext()
  const [pagination,setPagination] = useState([])
  const [listData, setListData] = useState([])
  const [pageSize, setPageSize] = useState(6)
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getAPI("/category/get-all-categories")
    .then(data => {
      setListData(data.data.listCategories)
      console.log(data.data.listCategories)
      }
      )
      .catch((error) => {
        console.log(error)
      }) 
  
  },[])

  useEffect(() => {
    setPagination(() => {
      const newData1 = listData.slice(0, pageSize)
      return newData1
    })
  },[listData])
  
  useEffect(() => {
    setListData(function() {
      const newData =  ListCategory.filter(function(item) {
        return item.name.toLowerCase().includes(data)
      })
      return newData
    })  
  },[data])
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
  
    if (type === 'next') {
      return <a>Next</a>;
    }
  
    return originalElement;
  };
  function SoListData(page, pageSize){
    let start = (page - 1) * pageSize;
    let end = page * pageSize;
    setPagination(listData.slice(start, end)) 
  }
  const onChange = (key) => {
    console.log(key);
  };
  const showModal = () => {
    console.log(isModalVisible)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const add = () => {
    const thump = document.querySelector('#anh').value
    const categoryName = document.querySelector('#sp').value
    console.log(80, thump,categoryName)
    postAPI("/category/get-all-categories", {thump,categoryName})
    .then((data) => {
      console.log(data.data.listCategories)
    })
  }
  return (
    <div>
      <div className={styles.category}> 
      <div>
      <Modal title="Admin Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
      footer= {
        <div>
          <button className={styles.categorybutton}>update</button>
          <button className={styles.categorybutton} onClick={add}>Changer</button>
          <button className={styles.categorybutton}> delete</button>
          <button className={styles.categorybutton}>cancel</button>
        </div>
      }>
        <input type="text" className={styles.modalInput} placeholder='Ảnh' id='anh'/>
        <input type="text" className={styles.modalInput} placeholder='Tên sản phẩm' id='sp'/>
      </Modal>
      </div>
        <div className={styles.PageCategory}>Categories</div>
        <div className={styles.listProductCategory}>
        {pagination.map((value, index) =>{
            return (
              <div className={styles.listCategory}>
                  <div className={styles.imageName}>
                      <img className={styles.img} src={value.thump} alt='' />
                      <p className={styles.name}>{value.categoryName}</p>
                  </div>
                  <div>
                      <button onClick={showModal} className={styles.button} >Add</button>
                      <button onClick={showModal} className={styles.button}>Changer</button>
                      <button className={styles.button}>Delete</button> 
                  </div>
              </div>
            )
          })}
          </div>
          <Pagination className={styles.pagination} total={listData.length} itemRender={itemRender} defaultPageSize={6} onChange={SoListData} defaultCurrent={1} />;
      </div>     
    </div>
  )
}

export default Category