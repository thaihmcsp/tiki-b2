import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch } from "antd";

const PriceTableLock = styled.div`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  position: relative;
  .table-header {
    overflow: auto;
    font-size: 14px;
    overflow: hidden;
    table {
      table-layout: fixed;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      background: #fff;
    }
    .table-cell {
      text-align: center;
      padding: 0;
      background: #f2f3f7;
      color: #333;
      font-weight: 700;
      border: 1px solid #eee;
      .next-table-cell-wrapper {
        display: inline-flex;
        align-items: center;
        height: 56px;
        padding: 12px 4px;
        .label-required {
          color: #e62e04;
          display: inline-block;
          margin: 0 4px;
        }
      }
    }
  }
  .table-body {
    overflow-x: auto;
    overflow-y: visible;
    font-size: 14px;
    table {
      table-layout: fixed;
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      background: #fff;
      border-color: grey;
      text-indent: initial;
      display: table;
      tr {
        transition: all 0.3s ease;
        background: #fff;
        color: #333;
        td {
          text-align: center;
          border-top-width: 0;
          padding: 0;
          border: 1px solid #eee;
        }
        .next-table-cell {
          padding: 0;
          border: 1px solid #eee;
          .next-table-cell-wrapper {
            display: inline-flex;
            align-items: center;
            height: 56px;
            padding: 12px 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            .special-price {
              padding: 5px 10px;
              .btn-special-price {
                border-radius: 0;
                padding: 0;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                border-width: 0;
                color: #1a71ff;
                background-color: transparent;
                border-color: transparent;
                cursor: pointer;
                .btn-special-price:hover {
                  color: #478af8;
                  background-color: transparent;
                  border-color: transparent;
                  text-decoration: none;
                }
              }
            }
            .input-field-tableLock {
              align-items: center;
              height: 56px;
              padding: 12px 4px;
              display: inline-flex;
              .next-input-tableLock {
                border-collapse: separate;
                border-spacing: 0;
                line-height: 0;
                display: inline-table;
                width: 100%;
                .next-value-tableLock {
                  font-size: 14px;
                  border-radius: 8px;
                  border-right-width: 0;
                  color: #858b9c;
                  text-align: center;
                  border: 1px solid #cbced5;
                  padding: 0 8px;
                  display: table-cell;
                  vertical-align: middle;
                  white-space: nowrap;
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
                .next-value-tableLock-sellKu {
                  width: 290px !important;
                }
              }
            }
          }
        }
      }
    }
    .input-field {
      align-items: center;
      height: 56px;
      padding: 12px 4px;
      display: inline-flex;
      .next-input {
        border-collapse: separate;
        border-spacing: 0;
        line-height: 0;
        display: inline-table;
        width: 100%;
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
      }
    }
  }
`;
const Tablelock = ({ data }) => {
  console.log(215, data);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    const tableLockPrice = document.getElementById("tableLock-price");
    const tableLockSpecial = document.getElementById("tableLock-special");
    const tableLockWarehouse = document.getElementById("tableLock-warehouse");
    const tableLockSellKu = document.getElementById("tableLock-sellerKu");

    tableLockPrice.value = data.valuePrice;
    tableLockSpecial.innerHTML = data.valueSpecial ? data.valueSpecial : "Add";
    tableLockWarehouse.value = data.valueWarehouse;
    tableLockSellKu.value = data.valueSellerKu;
  }, [data]);

  return (
    <div>
      <PriceTableLock>
        <div className="table-header">
          <table>
            <colgroup>
              <col style={{ width: "150px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "180px" }} />
              <col style={{ width: "100px" }} />
            </colgroup>
            <thead>
              <tr>
                <th className="table-cell">
                  <div className="next-table-cell-wrapper">
                    <span>
                      Giá <span class="label-required">*</span>
                    </span>
                  </div>
                </th>
                <th className="table-cell">
                  <div className="next-table-cell-wrapper">
                    <span>Giá đặc biệt</span>
                  </div>
                </th>
                <th className="table-cell">
                  <div className="next-table-cell-wrapper">
                    <span>Kho hàng</span>
                  </div>
                </th>
                <th className="table-cell">
                  <div className="next-table-cell-wrapper">
                    <span>SellerSku</span>
                  </div>
                </th>
                <th className="table-cell">
                  <div className="next-table-cell-wrapper">
                    <span>Mở bán</span>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-body">
          <table>
            <colgroup>
              <col style={{ width: "150px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "180px" }} />
              <col style={{ width: "100px" }} />
            </colgroup>
            <tbody>
              <tr role={"row"} className="next-table-row">
                <td>
                  <div>
                    <div className="input-field">
                      <div className="next-input">
                        <span className="next-input-text">VND</span>
                        <span className="next-value">
                          <input className="next-input-value" type="number" placeholder="Giá" id="tableLock-price" />
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="next-table-cell">
                  <div className="next-table-cell-wrapper">
                    <span className="special-price">
                      <button className="btn-special-price" id="tableLock-special">
                        Add
                      </button>
                    </span>
                  </div>
                </td>
                <td className="next-table-cell">
                  <div className="next-table-cell-wrapper">
                    <div className=" input-field-tableLock">
                      <div className="next-input-tableLock">
                        <span className="next-value-tableLock">
                          <input type="number" id="tableLock-warehouse" />
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="next-table-cell">
                  <div className="next-table-cell-wrapper">
                    <div className=" input-field-tableLock">
                      <div className="next-input-tableLock">
                        <span className="next-value-tableLock next-value-tableLock-sellKu">
                          <input type="number" id="tableLock-sellerKu" />
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PriceTableLock>
    </div>
  );
};

export default Tablelock;
