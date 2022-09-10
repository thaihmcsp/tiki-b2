import React from "react";
import "./ClosingCart.css";
function ClosingCart({ total }) {
  return (
    <div>
      <div className="right-cart">
        <div>
          <div className="box-1">
            <div>
              <div className="block-header">
                <h3 class="block-header__title">Giao tới</h3>
                <a class="block-header__nav">Thay đổi</a>
              </div>
              <div className="customer_info">
                <p className="customer_info--name">Phạm Gia Bảo</p>
                <i></i>
                <p class="customer_info__phone">0936518028</p>
              </div>
              <div class="address">141/22a Hoài Thanh, Phường 14, Quận 8, Hồ Chí Minh</div>
            </div>
          </div>
          <div className="box-2">
            <div class="block-header">
              <div class="block-header__title">Tiki Khuyến Mãi</div>
              <div class="block-header__usage">
                <span>Có thể chọn 2</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" class="info-icon" background="#ffffff" aria-describedby="popup-1">
                  <path
                    d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                    fill="#787878"
                  ></path>
                  <path d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z" fill="#787878"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                    fill="#787878"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="coupon-list" data-view-id="platform_coupon"></div>

            <div data-view-id="platform_coupon.cart_coupon_view.all" class="show-more">
              <svg class="coupon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
                  fill="#0B74E5"
                ></path>
                <path
                  d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
                  fill="#0B74E5"
                ></path>
                <path
                  d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
                  fill="#0B74E5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
                  fill="#0B74E5"
                ></path>
              </svg>
              <span>Chọn hoặc nhập Khuyến mãi khác</span>
            </div>
          </div>
          <div className="box-3">
            <div>
              <ul class="prices__items">
                <li class="prices__item">
                  <div class="prices__text">Tạm tính</div>
                  <div class="prices__value">{total.toLocaleString()}</div>
                </li>
                <li class="prices__item">
                  <div class="prices__text">Giảm giá</div>
                  <div class="prices__value">0đ</div>
                </li>
              </ul>
              <div class="prices__total">
                <span class="prices__text">Tổng tiền</span>
                <div class="prices__content">
                  <div class="prices__value prices__value--empty">Vui lòng chọn sản phẩm</div>
                  <span class="prices__value--noted">(Đã bao gồm VAT nếu có)</span>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-closingCart">Mua Hàng (0)</button>
        </div>
      </div>
    </div>
  );
}

export default ClosingCart;
