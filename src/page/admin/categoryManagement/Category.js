import React, { useEffect, useState } from 'react'
import { ListCategory } from './ListCategory'
import styles from './category.module.css'
import { Pagination } from 'antd';
import './Category.css'
import { Button, Modal } from 'antd';
import { useOutletContext } from "react-router-dom";
import 'antd/dist/antd.css';
function Category() {
  const data = useOutletContext()
  console.log(data)
  const [pagination,setPagination] = useState([])
  const [listData, setListData] = useState(ListCategory)
  const [pageSize, setPageSize] = useState(6)
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className={styles.category}> 
      <>
      <Modal title="Admin Modal" 
      footer= {
        <div>
          <button className={styles.categorybutton}>update</button>
          <button className={styles.categorybutton}>Changer</button>
          <button className={styles.categorybutton}> delete</button>
          <button className={styles.categorybutton}>cancel</button>
        </div>
      }
      visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" className={styles.modalInput} placeholder='Ảnh'/>
        <input type="text" className={styles.modalInput} placeholder='Tên sản phẩm'/>
        <input type="text" className={styles.modalInput} placeholder='ID'/>
      </Modal>
      </>
        <div className={styles.PageCategory}>Categories</div>
        <div className={styles.listProductCategory}>
        {pagination.map((value, index) =>{
            return (
              <div className={styles.listCategory}>
                  <div className={styles.imageName}>
                      <img className={styles.img} src={value.img} alt='' />
                      <p className={styles.name}>{value.name}</p>
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