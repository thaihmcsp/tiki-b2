import {
  CloseOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import ComponentTableProducts from "../componentDataTableAdmin/ComponentTableProducts";
import "./ManagementProduct.css";
import { Tabs } from "antd";
import FilterProducts from "../componentDataTableAdmin/FilterProducts";
import {  useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
function ManagementProduct() {
  const nav = useNavigate()
  function handleClick(){
      nav('/user')
  }
  const [value, setValue] = useState('')
  console.log(value)
  function handleClose(){
    const close = document.querySelector(".mgm-product-notification");
    close.innerHTML= ''
    close.style.backgroundColor = 'unset'
  }
  return (
    <div className="mgm-product">
      <p>
        Trang chủ <RightOutlined /> <b>Quản lý sản phẩm</b>
      </p>
      <div className="mgm-products-header">
        <div className="mgm-products-left">
          <h3>Quản lý sản phẩm</h3>
        </div>
        <div className="mgm-products-right">
          <select name="" id="">
            <option value="">Quản lý số lượng lớn</option>
          </select>
          <button onClick={handleClick}>
            <PlusOutlined />
            Thêm sản phẩm
          </button>
        </div>
      </div>
      <div className="mgm-product-notification">
        <span>
          <ExclamationCircleOutlined /> Chào mừng bạn đến với trang quản lý sản
          phẩm. <a href="">Tìm hiểu thêm</a>
        </span>
        <span>
          <CloseOutlined onClick={handleClose}/>
        </span>
      </div>
      <div className="" style={{ width: "100%", margin: "24px 0" }}>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Tất cả" key="1">
              <FilterProducts setValue = {setValue}/>,
            </TabPane>
            <TabPane tab="Đang hoạt động" key="2">
              <FilterProducts />
            </TabPane>
            <TabPane tab="Hết hàng" key="3">
              <FilterProducts />
            </TabPane>
            <TabPane tab="Bản nháp" key="4">
              <FilterProducts />
            </TabPane>
            <TabPane tab="Chờ duyệt" key="5">
              <FilterProducts />
            </TabPane>
            <TabPane tab="Bị khoá" key="6">
              <FilterProducts />
            </TabPane>
            <TabPane tab="Vi phạm" key="7">
              <FilterProducts />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div>
        <ComponentTableProducts value = {value}/>
      </div>
    </div>
  );
}

export default ManagementProduct;
