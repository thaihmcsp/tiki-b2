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
    <div>
      {/* <Button type="primary" className = {className}/> */}
    <div className="filter">
      <Button type="primary" className={className}>
      <FilterOutlined style={{color: 'black'}} onClick={showModal} /><span>Lọc</span>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} className="filter-modall">
      <SideBar />
      </Modal>
    </div>
    </div>
  )
}

export default Modall