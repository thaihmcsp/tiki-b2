import { Button, Modal } from 'antd';
import SideBar from './SideBar';
import React, { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import "./styles.css";
const Modall = () => {
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
    <div className="filter">
      <Button type="primary" className='btn'>
      <FilterOutlined style={{color: 'black'}} onClick={showModal} /><span style={{color: 'black', marginLeft: '2px', fontSize: '20px', }}>Lọc</span>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
      <SideBar />
      </Modal>
    </div>
  )
}

export default Modall