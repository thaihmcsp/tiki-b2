import React from "react";
import styled from "styled-components";

const ProductSpecificationsContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 15px;
  border-radius: 18px;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 4%);
  position: relative;
  .text-h2 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 0;
    font-weight: 600;
  }
  .text-weakness {
    font-size: 13px;
    color: #999;
  }
  .product-main {
    margin-top: 20px;
    .product-layout {
      flex: 1 1 0%;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      .product-layout-item {
        .product-layout-item-label {
        }
        .product-layout-item-control {
          .product-trademark {
            .product-trademark-input {
              vertical-align: middle;
              display: inline-table;
              border-collapse: separate;
              font-size: 14px;
              line-height: 1;
              width: 100%;
              border-spacing: 0;
              transition: all 0.3s ease-out;
              border: 1px solid #cbced5;
              background-color: #fff;
              height: 36px;
              border-radius: 8px;
              input {
                width: 100%;
                background-color: transparent;
                cursor: inherit;
                height: 100%;
                border-radius: 8px;
                border: none;
              }
            }
          }
        }
      }
    }
  }
  .button-addItem {
    display: flex;
    justify-content: flex-end;
    .btn-addItem {
      color: #fff;
      border-style: solid;
      background-color: #1a71ff;
      border-color: transparent;
      border-radius: 8px;
      padding: 0 12px;
      height: 36px;
      line-height: 34px;
      font-size: 14px;
      border-width: 1px;
      margin-top: 20px;
    }
  }
`;

const ProductSpecifications = () => {
  return (
    <div>
      <ProductSpecificationsContainer>
        <h2 className="text-h2">Thông số sản phẩm</h2>
        <span className="text-weakness">Thêm thuộc tính để gia tăng khả năng hiển thị</span>
        <div className="product-main">
          <div className="product-layout">
            <div className="product-layout-item">
              <div className="product-layout-item-label">
                <label>Thương hiệu</label>
              </div>
              <div className="product-layout-item-control">
                <div className="product-trademark">
                  <div className="product-trademark-input">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout-item">
              <div className="product-layout-item-label">
                <label>Tên sản phẩm</label>
              </div>
              <div className="product-layout-item-control">
                <div className="product-trademark">
                  <div className="product-trademark-input">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout-item">
              <div className="product-layout-item-label">
                <label>Phân loại</label>
              </div>
              <div className="product-layout-item-control">
                <div className="product-trademark">
                  <div className="product-trademark-input">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-addItem">
          <button className="btn-addItem">Tạo sản phẩm</button>
        </div>
      </ProductSpecificationsContainer>
    </div>
  );
};

export default ProductSpecifications;
