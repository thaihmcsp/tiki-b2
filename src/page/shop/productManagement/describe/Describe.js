import React from "react";
import styled from "styled-components";

const DescribeContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 15px;
  border-radius: 18px;
  box-shadow: 0 2px 18px 0 rgb(0 0 0 / 4%);
  .text-h2 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 0;
    font-weight: 600;
  }
  .describe-container {
    padding: 0;
    background: unset;
    box-shadow: unset;
    margin-top: 20px;
    .describe-description {
      width: 100% !important;
      border-radius: 16px;
      textarea {
        width: 100% !important;
        border-radius: 16px;
        padding: 10px;
        font-size: 16px;
      }
    }
    .bottom-bar {
      width: 100%;
      height: 60px;
      border-top: 1px solid #f1f1f1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
      button {
        border-radius: 8px;
        padding: 0 12px;
        height: 36px;
        line-height: 34px;
        font-size: 14px;
        border-width: 1px;
        transition: all 0.3s ease-out;
        cursor: pointer;
        box-shadow: none;
        text-decoration: none;
        text-align: center;
        text-transform: none;
        white-space: nowrap;
        vertical-align: middle;
        position: relative;
        display: inline-block;
        border-style: solid;
        background-color: #1a71ff;
        border-color: transparent;
        color: #fff;
      }
    }
  }
`;

const Describe = () => {
  return (
    <div>
      <DescribeContainer>
        <h2 className="text-h2">Mô tả sản phẩm</h2>
        <div className="describe-container">
          <div></div>
          <div className="describe-description">
            <textarea name="" id="" cols="30" rows="10" placeholder="Type your description here and apply it to your product."></textarea>
          </div>
          <div className="bottom-bar">
            <button>Apply</button>
          </div>
        </div>
      </DescribeContainer>
    </div>
  );
};

export default Describe;
