import React from "react";
import { listBranch } from "./listBranch";
import "./CreateShop.css";
import { useSelector } from "react-redux";
import { patchAPI } from "../../../config/api";
function CreateShop() {
  const shop = useSelector((state) => state.user);
  console.log(7, shop);
  async function handleClick() {
    try {
      const shopName = document.querySelector("#ShopName");
      const res = await patchAPI("/shop/create-shop/" + shop._id, {
        shopName: shopName,
      });
      console.log(12, res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="user-createShop">
      <h1>BẠN CẦN ĐƯỢC TƯ VẤN?</h1>
      <div className="user-createShop-container">
        <form action="">
          <div className="user-createShop-input">
            <p>Shop Name</p>
            <input type="text" id="ShopName" placeholder="Shop Name" />
          </div>
          <div className="user-createShop-input">
            <p>SĐT liên hệ</p>
            <input type="text" id="" placeholder="Nhập SĐT liên hệ " />
          </div>
          <div className="user-createShop-input">
            <p>Email </p>
            <input type="text" id="" placeholder="Nhập Email" />
          </div>
          <div className="user-createShop-input">
            <p>Ngành hàng chủ lực của Anh/Chị?</p>
            <select name="" id="" className="user-createShop-select">
              <option value="">Vui lòng chọn</option>
              {listBranch.map((branch, index) => {
                return (
                  <option value="" key={index}>
                    {branch}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="user-createShop-input">
            <p>
              {" "}
              Cửa hàng doanh nghiệp của Anh/Chị đã đăng ký kinh doanh chưa?
            </p>
            <select name="" id="" className="user-createShop-select">
              <option value="">Vui lòng chọn</option>
              <option value="">Đã đăng ký rồi</option>
              <option value="">Chưa đăng ký</option>
            </select>
          </div>
          <button onClick={handleClick}>Gửi yêu cầu tư vấn</button>
        </form>
      </div>
    </div>
  );
}

export default CreateShop;
