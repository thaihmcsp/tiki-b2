import React from "react";
import InforShop from "./InforShop";
import ProfileShop from "./ProfileShop";
import "antd/dist/antd.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ShopModal from "./ShopModal";

function ShopProfile() {
  return (
    <div>
      <div className="shop-profile">
        <ProfileShop title="Trang chủ " />
        <ProfileShop plus="> " />
        <ProfileShop title="Cài Đặt " />
        <ProfileShop plus="> " />
        <ProfileShop title="Hồ Sơ Nhà Bán Hàng" />
        <ProfileShop decription="Hồ Sơ Nhà Bán Hàng" />
      </div>
      <div>
        <InforShop title="ID của nhà bán hàng" decription="VN33VZRFGC" />
        <InforShop
          title="Họ và Tên"
          icon={<ExclamationCircleOutlined />}
          decription="Nguyễn Văn Giáp"
        />
        <InforShop
          title="Email để đăng nhập"
          icon={<ExclamationCircleOutlined />}
          decription="nguyengiap4344@gmail.com"
        />
        <ShopModal />
        <InforShop
          title="Số điện thoại liên hệ"
          icon={<ExclamationCircleOutlined />}
          decription="+84 81373331"
        />
        <ShopModal />
        <InforShop
          title="Tên hiển thị"
          icon={<ExclamationCircleOutlined />}
          decription="Giáp"
        />
        <ShopModal />
      </div>
    </div>
  );
}

export default ShopProfile;
