import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
function ProductRight(props) {
  // const element = document.getElementsByClassName("color");
  // element.addEventListener("onClick", myfunction());
  // function myfunction(key) {
  //   const key = element.getAttribute("id");
  //   console.log(key);
  // }

  // element.setAttribute("onclick", "changecolor()");
  // console.log(element);
  // function changecolor(id) {
  //   console.log(id);
  // let imgPath = document.getElementById(id).getAttribute("src");
  // console.log(imgPath);
  // }
  // function addEvent(id) {
  //   console.log(id);
  // }
  // addEvent("than");
  // function changecolor() {
  //   console.log(1);
  // }

  return (
    <div className="productright">
      <div className="header">
        <div className="brand">
          <span className="brand-and-author ">
            Thương hiệu : <a href={props.brand}>OEM &nbsp;</a>
          </span>
          <div class=" gXZfKO"></div>
          <div className="bestseller">
            <p>
              <span>Đứng thứ 3 trong </span>
              <a href={props.bestseller}>
                Top 1000 Áo thun nam dài tay bán chạy tháng này
              </a>
            </p>
          </div>
        </div>
        <h1 className="title">
          áo thun nam dài tay áo thể thao nam body giữ nhiệt
        </h1>
        <div className="below-title">
          <div>
            <div className="rate">
              <a className="number">(Xem 25 đánh giá)</a>
              <div class=" gXZfKO"></div>
            </div>
            <div className="quantity">Đã bán 147</div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <div className="price-and-icon">
            <div className="price-discount">
              <div className="current-price">{props.price}</div>
              <div className="list-price">{props.listprice}</div>
              <div className="discount">{props.discount}</div>
            </div>
            <div className="item">
              <img src={props.icon}></img>
            </div>
          </div>

          <div className="selectproduct">
            <div className="select-color">
              <p className="detail-color">
                <p id="detail-color">Màu: {props.colorDetail.name}</p>
              </p>
              <div className="product-color">
                <div
                  id="than"
                  className="color"
                  onClick={() => props.changecolor("than")}
                >
                  {props.productColor[0]} {props.color[0]}
                  {props.tich}
                </div>
                <div
                  id="white"
                  className="color"
                  onClick={() => props.changecolor("white")}
                >
                  {props.productColor[1]} {props.color[1]}
                  {props.tich}
                </div>
                <div
                  id="blue"
                  className="color"
                  onClick={() => props.changecolor("blue")}
                >
                  {props.productColor[2]} {props.color[2]}
                  {props.tich}
                </div>
                <div
                  id="gray"
                  className="color"
                  onClick={() => props.changecolor("gray")}
                >
                  {props.productColor[3]} {props.color[3]}
                  {props.tich}
                </div>
                <div
                  id="black"
                  className="color"
                  onClick={() => props.changecolor("black")}
                >
                  {props.productColor[4]} {props.color[4]}
                  {props.tich}
                </div>
                <div
                  id="red"
                  className="color"
                  onClick={() => props.changecolor("red")}
                >
                  {props.productColor[5]} {props.color[5]}
                  {props.tich}
                </div>
              </div>
            </div>
            <div className="select-size">
              <p id="detail-size">Size</p>
              <div className="size">
                <button onClick={() => props.selectSize("M")}>
                  {props.size[0]}
                  {props.tich}
                </button>
                <button onClick={() => props.selectSize("L")}>
                  {props.size[1]}
                  {props.tich}
                </button>
                <button onClick={() => props.selectSize("XL")}>
                  {props.size[2]}
                  {props.tich}
                </button>
                <button onClick={() => props.selectSize("XXL")}>
                  {props.size[3]}
                  {props.tich}
                </button>
              </div>
            </div>
          </div>
          <div className="delivery">
            <div>
              <span>Giao đến</span>
              <span className="address">
                Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
              </span>
              -<span className="address-change">Đổi địa chỉ</span>
            </div>
          </div>
          <div className="addtocard">
            <div className="amoutn">
              <p>Số lượng</p>
              <div className="group-input">
                <button
                  id="amoutn-down"
                  onClick={() => props.AmoutnDown()}
                  disabled={props.isDisabled}
                >
                  {props.amoutn[0]}
                </button>
                <div className="amoutn-value">
                  <span id="amoutn-value">1</span>
                </div>
                <button id="amoutn-up" onClick={() => props.AmoutnUp()}>
                  {props.amoutn[1]}
                </button>
              </div>
              <div className="group-button">
                <button>Chọn mua</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="info-shop">
            <div className="seller-info">
              <a className="overview">
                <picture className="overview-left">
                  <img className="logo" src={props.logo}></img>
                </picture>
                <div className="overview-right">
                  <span>FASHION TREND</span>
                </div>
              </a>
            </div>
            <div className="seller-detail">
              <div className="item review">
                <div className="title">
                  <span>
                    3.5 / 5 <StarOutlined />
                  </span>
                </div>
                <div className="sub-title">4k+</div>
              </div>
              <div className="border-left"></div>
              <div className="item normal">
                <div className="title">
                  <span>1.2k+</span>
                </div>
                <div className="sub-title">Theo dõi</div>
              </div>
              <div className="border-left"></div>
              <div className="item chat">
                <div className="title">
                  <span>58%</span>
                </div>
                <div className="sub-title">Phản hồi Chat</div>
              </div>
            </div>
            <div className="seller-action">
              <a className="action">
                {props.action[0]}
                <span>Xem shop</span>
              </a>
              <div className="follow">
                {props.action[1]}
                <span>Theo dõi</span>
              </div>
            </div>
          </div>
          <div className="insurance">
            <div>
              <span>Hướng dẫn bảo hành</span>
              <span>Xem chi tiết</span>
            </div>
          </div>
          <div className="refund">
            <div className="benefit-item">
              {props.refund[0]}
              <span>
                Đổi trả trong <br></br> <b>7 ngày </b> <br></br>nếu sp lỗi
              </span>
            </div>
            <div className="benefit-item">
              {props.refund[1]}
              <span>
                Đổi trả trong <br></br>
                <b>7 ngày </b>nếu sp <br></br>lỗi
              </span>
            </div>
            <div className="benefit-item">
              {props.refund[2]}
              <span>
                Đổi trả trong<br></br> <b>7 ngày </b>
                <br></br>nếu sp lỗi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRight;
