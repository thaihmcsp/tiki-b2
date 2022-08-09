import { Button, Modal } from "antd";
import React, { useState } from "react";
import ShopForm from "./ShopForm";
import ShopSteps from "./ShopSteps";
function ShopModal() {
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
    <>
      <Button className="ShopModal" type="primary" onClick={showModal}>
        <span>Sửa đổi</span>
      </Button>
      <Modal
        title="Sửa đổi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ShopSteps />
        <ShopForm />
      </Modal>
    </>
  );
}

export default ShopModal;
