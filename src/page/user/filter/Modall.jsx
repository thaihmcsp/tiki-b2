import { Button, Modal } from 'antd';
import SideBar from './SideBar';
import React, { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import "./styles.css";
const Modall = ({className}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

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
<<<<<<< HEAD
    <>
      <Button type="primary" className = {className}>
      <FilterOutlined style={{color: 'black'}} onClick={showModal} /><span style={{color: 'black', marginLeft: '2px' }}>Lọc</span>
=======
    <div className="filter">
      <Button type="primary" className='btn'>
      <FilterOutlined style={{color: 'black'}} onClick={showModal} /><span style={{color: 'black', marginLeft: '2px', fontSize: '20px', }}>Lọc</span>
>>>>>>> d22136af27879ef67dee30f6a2e57a7a2d26ff5f
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} className="filter-modall">
      <SideBar />
      </Modal>
    </div>
  )
}

export default Modall