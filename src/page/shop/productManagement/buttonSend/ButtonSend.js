import React from "react";
import styled from "styled-components";

const ButtonSend1 = styled.div`
  position: fixed;
  margin-top: 15px;
  z-index: 9999;

  bottom: 0;
  right: 213px;
  left: 213px;

  .label-hoc-top {
    display: flex;
    flex-direction: column;
    .data-affix-container {
      padding: 20px 24px;
      border-radius: 18px;
      background: #fff;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      box-shadow: 0 2px 18px 0 rgb(0 0 0 / 4%);
      .btn-send {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        button {
          border-radius: 8px;
          padding: 0 12px;
          height: 36px;
          line-height: 34px;
          font-size: 14px;
          border-width: 1px;
          position: relative;
          display: inline-block;
          -webkit-box-shadow: none;
          box-shadow: none;
          text-decoration: none;
          text-align: center;
          text-transform: none;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          border-style: solid;
          background-color: #1a71ff;
          border-color: transparent;
          color: #fff;
        }
      }
    }
  }
`;

const ButtonSend = () => {
  return (
    <div>
      <ButtonSend1>
        <div className="label-hoc-top">
          <div className="data-affix-container">
            <div className="btn-send">
              <button disabled="" aria-haspopup="true" aria-expanded="false" type="button" class="next-btn next-medium next-btn-primary" role="button">
                Gửi đi
              </button>
            </div>
          </div>
        </div>
      </ButtonSend1>
    </div>
  );
};

export default ButtonSend;
