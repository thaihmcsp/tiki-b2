import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import "./Variant.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import style from "./variant.module.css";

const { Option } = Select;

const StateBlock = styled.div`
  margin-top: 8px;
  background: #f5f8fe;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 18px;
  .state-block-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  .state-block-body {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    .state-block-next-text {
      margin-bottom: 8px;
      line-height: 1;
      text-align: left;
      font-size: 14px;
      display: inline-block;
      vertical-align: top;
      color: #4f5669;
      padding-right: 16px;
    }
    .state-block-text-input {
      display: flex;
      width: 290px;
      color: #ffd5d6;
      vertical-align: middle;
      display: inline-table;
      border-collapse: separate;
      font-size: 0;
      line-height: 1;
      width: 200px;
      border-spacing: 0;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
      border: 1px solid #cbced5;
      background-color: #fff;
      height: 36px;
      border-radius: 8px;
      width: 290px;

      input {
        border-radius: 8px;
        height: 34px;
        line-height: 34px \0;
        padding: 0 8px !important;
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
  }
  .state-block-next-body {
    display: flex;
    flex-direction: column;
    .state-block-next-text {
      margin-bottom: 8px;
      line-height: 1;
      text-align: left;
      font-size: 14px;
      display: inline-block;
      vertical-align: top;
      color: #4f5669;
      padding-right: 16px;
    }
    .state-block-checkbox {
      line-height: 32px;
      display: flex;
      flex-direction: row;
      input {
        width: 16px;
        height: 16px;
      }
      .state-block-next-text-input {
        font-size: 16px;
        vertical-align: middle;
        margin: 0 0 0 8px;
        line-height: 1;
      }
    }
  }
`;

const Variant = (props) => {
  const handleDeteleVariant = () => {};
  return (
    <div className={style.variant}>
      <Tooltip title="Delete" className={style.IconDelete} onClick={() => handleDeteleVariant()}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <StateBlock id="variant">
        <span className="state-block-text">Biến thể</span>

        <div className="state-block-body">
          <span className="state-block-next-text">Tên biến thể </span>
          <span className="state-block-text-input">
            <input type="text" placeholder="Vui lòng chọn hoặc điền" />
          </span>
        </div>
        <div className="state-block-next-body">
          <span className="state-block-next-text">Tổng số biến thể</span>
          <div className="state-block-checkbox">
            <input type="checkbox" />
            <div className="state-block-next-text-input">
              <span>Thêm ảnh</span>
              <span>Tối đa 8 ảnh cho mỗi biến thể.</span>
            </div>
          </div>
          <div>
            <span>
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Select>
            </span>
          </div>
        </div>
      </StateBlock>
    </div>
  );
};

export default Variant;
