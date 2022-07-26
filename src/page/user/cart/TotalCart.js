import React from "react";
import TradingCart from "./TradingCart";
import "./Cart.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClosingCart from "./ClosingCart";

function TotalCart() {
  return (
    <div className="totalcart-container">
      <div className="totalcart-right">
        <div className="total-cart">
          <label>
            <input type="checkbox" /> <span className="checkbox-fake"></span> <span>Tất cả(2 sản phẩm)</span>
          </label>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span className="remove-all">
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </span>
        </div>
        <div>
          <TradingCart />
        </div>
      </div>
      <div className="totalcart-left">
        <ClosingCart />
      </div>
    </div>
  );
}

export default TotalCart;
