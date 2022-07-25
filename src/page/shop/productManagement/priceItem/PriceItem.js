import React from "react";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
const PriceContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 15px;
  margin-top: 30px;
  border-radius: 18px;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 4%);
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
  .price-main {
    margin-bottom: 0;
    padding: 0;
    background: unset;
    box-shadow: unset;
    margin-top: 20px;
    .price-addItem {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      .price-item-form-text {
        .btn-addItem {
          color: #333;
          border-style: solid;
          background-color: #fff;
          border-color: #c4c6cf;
          border-radius: 8px;
          padding: 0 12px;
          height: 36px;
          line-height: 34px;
          font-size: 14px;
          border-width: 1px;
        }
        .btn-addItem:hover {
          color: #333;
          background-color: #f2f3f7;
          border-color: #f2f3f7;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease-out;
        }
      }
    }
  }
`;

const PriceBar = styled.div`
  .tableTopToolBar {
    display: flex;
    margin-bottom: 4px;
    .next-form {
      display: flex;

      .input-field {
        margin: 0 8px 8px 0;
        width: 100%;
        display: flex;

        align-items: center;
        .next-input {
          width: 120px;
          border-collapse: separate;
          border-spacing: 0;
          line-height: 0;
          display: inline-table;
          .next-input-text {
            font-size: 14px;
            border-radius: 8px;
            border-right-width: 0;
            border-bottom-right-radius: 0 !important;
            border-top-right-radius: 0 !important;
            color: #858b9c;
            background-color: #f2f3f7;
            text-align: center;
            border: 1px solid #cbced5;
            padding: 0 8px;
            width: 1px;
            display: table-cell;
            vertical-align: middle;
            white-space: nowrap;
          }
          .next-value {
            width: 100%;
            position: relative;
            display: inline-block;
            .next-input-value {
              vertical-align: middle;
              display: inline-table;
              border-collapse: separate;
              line-height: 1;
              width: 200px;
              border-spacing: 0;
              transition: all 0.3s ease-out;
              border: 1px solid #cbced5;
              background-color: #fff;
              height: 36px;
              width: 100%;
              border-top-right-radius: 8px;
              border-bottom-right-radius: 8px;
              input {
                padding-right: 2px;
                border-bottom-right-radius: 8px;
                height: 34px;
                line-height: 34px \0;
                padding: 0 8px;
                font-size: 14px;
                width: 100%;
                border: none;
                outline: none;
                padding: 0;
                margin: 0;
                font-weight: 400;
                vertical-align: middle;
                background-color: transparent;
                color: #333;
              }
            }
            .with-especially {
              width: 162px !important;
            }
          }
          .with-seller {
            width: 132px !important;
          }
        }
        .boder-warehouse {
          border-top-left-radius: 8px !important;
          border-bottom-left-radius: 8px !important;
        }
      }
    }
    .addon {
      button {
        margin-right: 0;
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
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
      button:hover {
        color: #fff;
        background-color: #478af8;
        border-color: transparent;
        text-decoration: none;
      }
    }
  }
`;

const PriceItem = () => {
  return (
    <div>
      <PriceContainer>
        <h2 className="text-h2">Giá bán, Kho hàng và Biến thể</h2>
        <span className="text-weakness">Thêm các biến thể khi sản phẩm có các phiên bản khác nhau, chẳng hạn như màu sắc và kích thước</span>
        <div className="price-main">
          <div className="price-addItem">
            <div className="price-item-form">
              <div className="price-item-form-control">
                <div className="price-item-form-text">
                  <button type="button" className="btn-addItem">
                    <PlusOutlined />
                    Thêm sản phẩm (0/2)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PriceBar>
          <div>
            <span>Giá bán & Kho hàng</span>
          </div>
          <div className="tableTopToolBar">
            <div className="next-form">
              <div className="input-field">
                <div className="next-input">
                  <span className="next-input-text">VND</span>
                  <span className="next-value">
                    <input className="next-input-value" type="number" placeholder="Giá" />
                  </span>
                </div>
              </div>
              <div className="input-field">
                <div className="next-input">
                  <span className="next-input-text">VND</span>
                  <span className="next-value">
                    <input className="next-input-value with-especially" type="number" placeholder="Giá đặc biệt" />
                  </span>
                </div>
              </div>
              <div className="input-field">
                <div className="next-input">
                  <span className="next-value">
                    <input className="next-input-value boder-warehouse" type="number" placeholder="Kho Hàng" />
                  </span>
                </div>
              </div>
              <div className="input-field">
                <div className="next-input">
                  <span className="next-value">
                    <input className="next-input-value with-seller boder-warehouse " type="text" placeholder="Seller Ku" />
                  </span>
                </div>
              </div>
            </div>
            <div className="addon">
              <button>Áp dụng cho tất cả</button>
            </div>
          </div>
        </PriceBar>
      </PriceContainer>
    </div>
  );
};

export default PriceItem;
