import React, { useEffect, useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { color } from "@mui/system";
import { getAPI } from "../../../../config/api";
function ProductRight(props) {
  const listProduct = props.Product.product.productDetailId;
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [listproduct, setListProducts] = useState([]);
  console.log(listproduct);
  useEffect(() => {
    setCount(0);
    for (let i = 0; i < listProduct.length; i++) {
      if (
        props.myColor === listProduct[i].option[0].value &&
        props.mySize === listProduct[i].option[1].value
      ) {
        setIndex(i);
        setCount(1);
      }
    }
  }, [props.myColor, props.mySize]);
  console.log(count, index);

  //get Data
  useEffect(() => {
    getAPI("/product/get-all-products")
      .then((data) => {
        setListProducts(data.data.listProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <h1 className="title">{props.Product.product.productName}</h1>
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
              <div className="current-price">
                {props.mySize == undefined || props.myColor == undefined ? (
                  <>{listProduct[0].price}</>
                ) : count == 1 ? (
                  <>{listProduct[index].price.toLocaleString()}₫</>
                ) : (
                  "Hết hàng"
                )}
              </div>
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
                <p id="detail-color">
                  Màu: <span id="color-select">{props.colorDetail.name}</span>
                </p>
              </p>
              <div className="product-color">
                {props.imgproduct.map((item, index) => {
                  return (
                    <div
                      className="option1"
                      id={item.name}
                      onClick={() => props.hanldeColor(item.name)}
                    >
                      <img src={item.img} width={50} height={50}></img>
                      <span>{item.name}</span>
                      {props.tich}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="select-size">
              <p id="detail-size">
                Size: <span id="size-select">{props.colorDetail.size}</span>
              </p>
              <div className="size">
                {props.size.map((item, index) => {
                  return (
                    <button
                      className="option2"
                      id={item}
                      key={index}
                      onClick={() => props.hanldeSize(item)}
                    >
                      <span>{item}</span>
                      {props.tich}
                    </button>
                  );
                })}
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
                <button onClick={() => props.buyProduct()}>Chọn mua</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="info-shop">
            <div className="seller-info">
              <a className="overview">
                <picture className="overview-left">
                  <img
                    className="logo"
                    src={props.Product.product.shopId.logo}
                  ></img>
                </picture>
                <div className="overview-right">
                  <span>{props.Product.product.shopId.shopName}</span>
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
