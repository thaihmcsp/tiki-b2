import {
  ShoppingOutlined,
  ProfileOutlined,
  PrinterOutlined,
  IdcardOutlined,
  DeleteOutlined,
  CloudDownloadOutlined,
  BarChartOutlined,
  FolderOpenOutlined,
  FlagOutlined,
  FireOutlined,
  GlobalOutlined,
  PayCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Product.css";
import { Outlet } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Quản lý sản phẩm", "1", <ShoppingOutlined />),
  getItem("Quản lý đơn hàng", "2", <PrinterOutlined />),
  getItem("Quản lý hồ sơ Shop", "3", <IdcardOutlined />),
  getItem("Option 4", "4", <ProfileOutlined />),
  getItem("Option 5", "5", <GlobalOutlined />),
  getItem("Option 6", "6", <FireOutlined />),
  getItem("Option 7", "7", <FlagOutlined />),
  getItem("Option 8", "8", <FolderOpenOutlined />),
  getItem("Option 9", "9", <CloudDownloadOutlined />),
  getItem("Option 10", "10", <BarChartOutlined />),
  getItem("Option 12", "11", <PayCircleOutlined />),
  getItem("Option 11", "12", <DeleteOutlined />),
];

function Product() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="db-Product" style={{ height: '100vh' }}>
      <div className="db-Product-left" style={{ height: '100vh' }}>
        {/* <button
          style={{
            width: 80,
            height: 50,
            border: "none",
            backgroundColor: "whitesmoke",
          }}
        >
          <img
            style={{ width: "65%", height: "100%" }}
            src="https://blogtietkiem.com/wp-content/uploads/2020/12/logo-mgg-tiki.png"
            alt=""
          />
        </button> */}
        <Button type="primary" style={{ width: 80 }}>
          {" "}
          <HomeOutlined />{" "}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div className="db-Product-right">
        <Outlet />
      </div>
    </div>
  );
}

export default Product;