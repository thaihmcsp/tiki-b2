import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./trading-cart.css";

function TradingCart() {
  return (
    <div>
      <div className="trading-cart">
        <input type="checkbox" />
        <StorefrontIcon className="trading-cart--icon" />
        <span>Tiki Trading </span>
        <div className="trading-cart-header">
          <div className="trading-cart-row">
            <div className="trading-cart-col-1">
              <div className="trading-cart-image">
                <div className="product-checkbox">
                  <label className="checkbox-label">
                    <input type="checkbox" data-view-id="" data-view-index="b9cd71b0-0100-11ed-a99e-e65532ab6527" />
                    {/* <span className="checkbox-fake"></span> */}
                  </label>
                </div>
                <img src="https://salt.tikicdn.com/cache/w78/ts/product/2a/c6/3d/70f8a96492a9d6ce8fd509f24409d684.png" alt="" />
                <div className="product-content">
                  <a className="product-name">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/tikinow/tiki-now-15@2x.png" className="product__icon" />
                    Giá Đỡ Máy Tính, Laptop, iPad, Macbook Hợp Kim Nhôm Cao Cấp. Hỗ Trợ Tản Nhiệt Chống Mỏi Cổ, Vai, Gáy. Hàng Chính Hãng Tamayoko - Bạc
                  </a>
                  <span class="product__title-tikinow">Giao Siêu Tốc</span>
                </div>
              </div>
            </div>
            <div className="trading-cart-col-2">
              <span class="product__real-prices">499.000 ₫</span>
              <del class="product__discount-prices">599.000 ₫</del>
            </div>
            <div className="trading-cart-col-3">
              <div className="quantity">
                <span data-view-id="cart_main_quantity.decrease" data-view-index="b9cd71b0-0100-11ed-a99e-e65532ab6527" class="qty-decrease ">
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="decrease" />
                </span>
                <input type="tel" class="qty-input" value="1" />
                <span data-view-id="cart_main_quantity.increase" data-view-index="b9cd71b0-0100-11ed-a99e-e65532ab6527" class="qty-increase ">
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="increase" />
                </span>
              </div>
            </div>
            <div className="trading-cart-col-4">
              <span class="product__final-prices">499.000 ₫</span>
            </div>
            <div className="trading-cart-col-5">
              <span class="product__delete" data-view-id="cart_main_remove.product" data-view-index="b9cd71b0-0100-11ed-a99e-e65532ab6527">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingCart;
