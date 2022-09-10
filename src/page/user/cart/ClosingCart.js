import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";
import style from "./ClosingCart.module.css";
import "./ClosingCart.css";
import { useNavigate } from "react-router-dom";
import { patchAPI } from "../../../config/api";
function ClosingCart({ total, finalTotal,cartID }) {
  console.log(total,finalTotal);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };
  const nav = useNavigate()
  const handlegotoByNow = async()=>{
    console.log(18,{finalTotal})
    let success = true
    if(finalTotal.length>0){
      await Promise.all(finalTotal.map(async(item)=>{
        console.log(cartID)
        if(item._id==item.productDetailId._id){
          const newStatus = {
              productId: item._id,
              selected: true
          }
          await patchAPI(`/cart/update-cart-selected-status/${cartID}`,newStatus)
                    .then(data=>console.log('changeStatusOK'))
                    .catch(error => success=false)
        }else{
          const newStatus = {
            productDetailId: item.productDetailId._id,
            selected: true
          }
          await patchAPI(`/cart/update-cart-selected-status/${cartID}`,newStatus)
                  .then(data=>console.log('changeStatusOK'))
                  .catch(error => success=false)
          
        }}
      ))
    }
    if(success){
      nav('/order')
    }else{
      window.alert('Thất bại, vui lòng thử lại')
    }
  }
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className="total_closing__cart">
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

              <div class="address">
                {" "}
                <span class="address__type address__type--home">Nhà</span> 141/22a Hoài Thanh, Phường 14, Quận 8, Hồ Chí Minh
              </div>
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
              <span>
                <Button type="primary" onClick={showModal}>
                  Chọn hoặc nhập Khuyến mãi khác
                </Button>
                <Modal className="modal-sale-tiki" title="Tiki Khuyến Mãi" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                  <div className="modal-input-container">
                    <svg className="coupon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
                        fill="#808089"
                      ></path>
                      <path
                        d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
                        fill="#808089"
                      ></path>
                      <path
                        d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
                        fill="#808089"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
                        fill="#808089"
                      ></path>
                    </svg>
                    <input className="modal-search-tiki" type="text" placeholder="Nhập mã giảm giá" />
                    <div className="modal-button-tiki-sale">Áp dụng</div>
                  </div>
                  <div className={style.sale_item}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 132" class="coupon-bg">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g transform="translate(-3160 -2828) translate(3118 80) translate(42 2487) translate(0 140) translate(0 85) translate(0 36)">
                                    <path
                                      fill="#FFF"
                                      d="M425 0c4.418 0 8 3.582 8 8v116c0 4.418-3.582 8-8 8H140.5c0-4.419-3.582-8-8-8s-8 3.581-8 8H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h116.5c0 4.418 3.582 8 8 8s8-3.582 8-8H392z"
                                    ></path>
                                    <g stroke="#EEE" stroke-dasharray="2 4" stroke-linecap="square" mask="url(#14s2l20tnb)">
                                      <path d="M0.5 0L0.5 114" transform="translate(132 11)"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className={style.sale_container}>
                      <img src="https://gigr.com/images/png/default_logo.png" alt=""></img>
                    </div>
                    <div className={style.sale_icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" class="info-icon" background="#ffffff" aria-describedby="popup-1">
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#787878"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#787878"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#787878"
                        ></path>
                      </svg>
                      <div className={style.sale_value}>
                        <h4 class="sc-bCwfaz cFcjAc">Giảm 200K</h4>
                        <p class="sc-iwajpm kydRHc">Cho đơn hàng từ 24.9 triệu</p>
                      </div>
                      <div className={style.sale_valueSub}>
                        <p>HSD: 31/08/22</p>
                      </div>
                      <div className={style.sale_information}>
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2272%22%20height%3D%2256%22%20viewBox%3D%220%200%2072%2056%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22ctqxsch3la%22%20d%3D%22M0%200H72V56H0z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22yg7u4jt8zc%22%20d%3D%22M37.501%2050.4c-6.097%200-11.645-2.352-15.786-6.199h1.822C27.336%2047.325%2032.2%2049.2%2037.501%2049.2s10.166-1.876%2013.965-5h1.822c-4.14%203.848-9.689%206.2-15.787%206.2zm0-46.4c6.61%200%2012.575%202.764%2016.8%207.2h-1.7c-3.94-3.72-9.254-6-15.1-6s-11.16%202.28-15.1%206h-1.7c4.226-4.436%2010.19-7.2%2016.8-7.2z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-3364%20-2553%29%20translate%283200%2080%29%20translate%2852%202285%29%20translate%280%20140%29%20translate%28112%29%20translate%280%2048%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22zk75xhggtb%22%20fill%3D%22%23fff%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23ctqxsch3la%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20mask%3D%22url%28%23zk75xhggtb%29%22%20opacity%3D%22.6%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-1%201%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23787878%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20fill-rule%3D%22nonzero%22%20d%3D%22M8.422%2012.819c1.729%200%202.935-.996%203.1-2.569h-1.435c-.156.835-.786%201.348-1.66%201.348-1.128%200-1.836-.928-1.836-2.431%200-1.485.718-2.417%201.831-2.417.86%200%201.524.566%201.66%201.43h1.436c-.112-1.577-1.401-2.651-3.096-2.651-2.04%200-3.335%201.372-3.335%203.642%200%202.276%201.284%203.648%203.335%203.648zm5.484-.122V9.728h3.173v2.969h1.475V5.65H17.08v2.861h-3.173V5.651H12.43v7.046h1.475zm8.774.122c1.782%200%202.95-1.035%202.95-2.612V6.593h.463c.689%200%201.109-.38%201.109-1.04V4.386h-1.128v.889c0%20.249-.137.376-.391.376h-1.528v4.414c0%20.928-.557%201.49-1.475%201.49s-1.48-.562-1.48-1.49V5.651h-1.474v4.556c0%201.577%201.172%202.612%202.954%202.612zm6.28-.122l.536-1.71h2.476l.537%201.71h1.568L31.625%205.65h-1.733l-2.446%207.046h1.513zm2.695-2.813h-1.841L30.717%207h.034l.904%202.885zm8.276%202.813v-5.83h2.041V5.65H36.42v1.216h2.036v5.83h1.475zm4.331%200V9.728h3.174v2.969h1.475V5.65h-1.475v2.861h-3.174V5.651h-1.475v7.046h1.475zm9%20.122c2.084%200%203.398-1.402%203.398-3.643%200-2.246-1.314-3.647-3.399-3.647-2.09%200-3.398%201.401-3.398%203.647%200%202.241%201.308%203.643%203.398%203.643zm0-1.235c-1.158%200-1.895-.933-1.895-2.408%200-1.48.742-2.417%201.894-2.417s1.89.938%201.89%202.417c0%201.475-.738%202.408-1.89%202.408zm7.245-6.27c.571-.244.918-.654.918-1.104%200-.595-.464-.971-1.157-.971-.225%200-.523.049-.698.127V4c.141-.058.327-.092.493-.092.293%200%20.498.156.498.37%200%20.23-.156.406-.464.538l.41.498zm-1.836%207.383l.537-1.71h2.476l.537%201.71h1.567l-2.45-7.046h-1.734l-2.446%207.046h1.513zm2.696-2.813h-1.841L60.429%207h.034l.904%202.885zm-43.05%2012.813c1.691%200%202.687-1.051%202.687-2.84%200-1.79-.996-2.797-2.687-2.797h-2.153v2.34h-.457v.867h.457v2.43h2.153zm-.14-.977h-.833v-1.453h1.027V19.4h-1.027v-1.367h.832c1.04%200%201.625.648%201.625%201.828%200%201.219-.57%201.86-1.625%201.86zm4.769.977V17.06h-1.18v5.637h1.18zm4.246-7.336l-.723-.969h-.96l.839.969h.844zm-2.055%201.328l.598-.652h.031l.598.652h.886l-1.047-1.102h-.906L24.25%2016.69h.887zm2.48%206.008v-.977h-2.554v-1.422h2.41v-.906h-2.41v-1.36h2.555v-.972h-3.735v5.637h3.735zm3.215.097c1.442%200%202.36-.847%202.36-2.09V17.06h-1.18v3.527c0%20.723-.426%201.196-1.18%201.196-.757%200-1.183-.473-1.183-1.196V17.06h-1.18v3.645c0%201.242.918%202.09%202.363%202.09zm6.059-.097v-1.723l.527-.633%201.672%202.356h1.41l-2.23-3.137%202.086-2.5h-1.313l-2.117%202.57h-.035v-2.57h-1.18v5.637h1.18zm5.285%200V17.06h-1.18v5.637h1.18zm2.219-6.067l.57-.722h.031l.57.722h.856l-1.004-1.21h-.875l-1.004%201.21h.856zm2.453%206.067v-.977h-2.555v-1.422h2.41v-.906h-2.41v-1.36h2.555v-.972h-3.734v5.637h3.734zm-1.871%201.648c.332%200%20.594-.265.594-.586%200-.324-.262-.586-.594-.586-.332%200-.594.262-.594.586%200%20.32.262.586.594.586zm3.851-1.648v-3.692h.036l2.636%203.692h.977V17.06h-1.129v3.672h-.031l-2.633-3.672H47.7v5.637h1.128z%22%20transform%3D%22rotate%28-15%2084.872%209.306%29%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M64.842.12H3.969c-.875%200-1.312.118-1.766.462-.417.315-.747.782-.97%201.37C1.01%202.541.92%203.108.907%204.151L.905%2024.79c0%201.236.085%201.853.328%202.495.223.589.553%201.056.97%201.37.454.344.89.463%201.766.463h60.873c.875%200%201.311-.119%201.766-.462.417-.315.747-.782.97-1.371.243-.642.327-1.259.327-2.495V4.447c0-1.236-.084-1.853-.327-2.495-.223-.588-.553-1.055-.97-1.37-.455-.344-.891-.463-1.766-.463zM3.635%201.12l61.36-.002c.702%200%20.959.073%201.223.282.216.17.381.414.496.732.142.39.191.77.191%201.807v21.359l-.005.504c-.016.671-.07.983-.186%201.302-.115.318-.28.562-.496.732-.264.209-.52.282-1.224.282H3.816l-.342-.007c-.454-.024-.665-.104-.882-.275-.215-.17-.38-.414-.496-.732-.128-.355-.18-.7-.19-1.54V3.94c0-1.038.049-1.417.19-1.807.115-.318.281-.562.496-.732.24-.19.475-.267%201.043-.28z%22%20transform%3D%22rotate%28-15%2084.872%209.306%29%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23787878%22%20transform%3D%22rotate%28-15%2037.501%2027.2%29%22%20xlink%3Ahref%3D%22%23yg7u4jt8zc%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.sale_item}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433 132" class="coupon-bg">
                      <g fill="none" fill-rule="evenodd">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g transform="translate(-3160 -2828) translate(3118 80) translate(42 2487) translate(0 140) translate(0 85) translate(0 36)">
                                    <path
                                      fill="#FFF"
                                      d="M425 0c4.418 0 8 3.582 8 8v116c0 4.418-3.582 8-8 8H140.5c0-4.419-3.582-8-8-8s-8 3.581-8 8H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h116.5c0 4.418 3.582 8 8 8s8-3.582 8-8H392z"
                                    ></path>
                                    <g stroke="#EEE" stroke-dasharray="2 4" stroke-linecap="square" mask="url(#14s2l20tnb)">
                                      <path d="M0.5 0L0.5 114" transform="translate(132 11)"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className={style.sale_container}>
                      <img src="https://gigr.com/images/png/default_logo.png" alt=""></img>
                    </div>
                    <div className={style.sale_icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" class="info-icon" background="#ffffff" aria-describedby="popup-1">
                        <path
                          d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                          fill="#787878"
                        ></path>
                        <path
                          d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                          fill="#787878"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                          fill="#787878"
                        ></path>
                      </svg>
                      <div className={style.sale_value}>
                        <h4 class="sc-bCwfaz cFcjAc">Giảm 200K</h4>
                        <p class="sc-iwajpm kydRHc">Cho đơn hàng từ 24.9 triệu</p>
                      </div>
                      <div className={style.sale_valueSub}>
                        <p>HSD: 31/08/22</p>
                      </div>
                      <div className={style.sale_information}>
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2272%22%20height%3D%2256%22%20viewBox%3D%220%200%2072%2056%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22ctqxsch3la%22%20d%3D%22M0%200H72V56H0z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%22yg7u4jt8zc%22%20d%3D%22M37.501%2050.4c-6.097%200-11.645-2.352-15.786-6.199h1.822C27.336%2047.325%2032.2%2049.2%2037.501%2049.2s10.166-1.876%2013.965-5h1.822c-4.14%203.848-9.689%206.2-15.787%206.2zm0-46.4c6.61%200%2012.575%202.764%2016.8%207.2h-1.7c-3.94-3.72-9.254-6-15.1-6s-11.16%202.28-15.1%206h-1.7c4.226-4.436%2010.19-7.2%2016.8-7.2z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-3364%20-2553%29%20translate%283200%2080%29%20translate%2852%202285%29%20translate%280%20140%29%20translate%28112%29%20translate%280%2048%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22zk75xhggtb%22%20fill%3D%22%23fff%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23ctqxsch3la%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20mask%3D%22url%28%23zk75xhggtb%29%22%20opacity%3D%22.6%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-1%201%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23787878%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20fill-rule%3D%22nonzero%22%20d%3D%22M8.422%2012.819c1.729%200%202.935-.996%203.1-2.569h-1.435c-.156.835-.786%201.348-1.66%201.348-1.128%200-1.836-.928-1.836-2.431%200-1.485.718-2.417%201.831-2.417.86%200%201.524.566%201.66%201.43h1.436c-.112-1.577-1.401-2.651-3.096-2.651-2.04%200-3.335%201.372-3.335%203.642%200%202.276%201.284%203.648%203.335%203.648zm5.484-.122V9.728h3.173v2.969h1.475V5.65H17.08v2.861h-3.173V5.651H12.43v7.046h1.475zm8.774.122c1.782%200%202.95-1.035%202.95-2.612V6.593h.463c.689%200%201.109-.38%201.109-1.04V4.386h-1.128v.889c0%20.249-.137.376-.391.376h-1.528v4.414c0%20.928-.557%201.49-1.475%201.49s-1.48-.562-1.48-1.49V5.651h-1.474v4.556c0%201.577%201.172%202.612%202.954%202.612zm6.28-.122l.536-1.71h2.476l.537%201.71h1.568L31.625%205.65h-1.733l-2.446%207.046h1.513zm2.695-2.813h-1.841L30.717%207h.034l.904%202.885zm8.276%202.813v-5.83h2.041V5.65H36.42v1.216h2.036v5.83h1.475zm4.331%200V9.728h3.174v2.969h1.475V5.65h-1.475v2.861h-3.174V5.651h-1.475v7.046h1.475zm9%20.122c2.084%200%203.398-1.402%203.398-3.643%200-2.246-1.314-3.647-3.399-3.647-2.09%200-3.398%201.401-3.398%203.647%200%202.241%201.308%203.643%203.398%203.643zm0-1.235c-1.158%200-1.895-.933-1.895-2.408%200-1.48.742-2.417%201.894-2.417s1.89.938%201.89%202.417c0%201.475-.738%202.408-1.89%202.408zm7.245-6.27c.571-.244.918-.654.918-1.104%200-.595-.464-.971-1.157-.971-.225%200-.523.049-.698.127V4c.141-.058.327-.092.493-.092.293%200%20.498.156.498.37%200%20.23-.156.406-.464.538l.41.498zm-1.836%207.383l.537-1.71h2.476l.537%201.71h1.567l-2.45-7.046h-1.734l-2.446%207.046h1.513zm2.696-2.813h-1.841L60.429%207h.034l.904%202.885zm-43.05%2012.813c1.691%200%202.687-1.051%202.687-2.84%200-1.79-.996-2.797-2.687-2.797h-2.153v2.34h-.457v.867h.457v2.43h2.153zm-.14-.977h-.833v-1.453h1.027V19.4h-1.027v-1.367h.832c1.04%200%201.625.648%201.625%201.828%200%201.219-.57%201.86-1.625%201.86zm4.769.977V17.06h-1.18v5.637h1.18zm4.246-7.336l-.723-.969h-.96l.839.969h.844zm-2.055%201.328l.598-.652h.031l.598.652h.886l-1.047-1.102h-.906L24.25%2016.69h.887zm2.48%206.008v-.977h-2.554v-1.422h2.41v-.906h-2.41v-1.36h2.555v-.972h-3.735v5.637h3.735zm3.215.097c1.442%200%202.36-.847%202.36-2.09V17.06h-1.18v3.527c0%20.723-.426%201.196-1.18%201.196-.757%200-1.183-.473-1.183-1.196V17.06h-1.18v3.645c0%201.242.918%202.09%202.363%202.09zm6.059-.097v-1.723l.527-.633%201.672%202.356h1.41l-2.23-3.137%202.086-2.5h-1.313l-2.117%202.57h-.035v-2.57h-1.18v5.637h1.18zm5.285%200V17.06h-1.18v5.637h1.18zm2.219-6.067l.57-.722h.031l.57.722h.856l-1.004-1.21h-.875l-1.004%201.21h.856zm2.453%206.067v-.977h-2.555v-1.422h2.41v-.906h-2.41v-1.36h2.555v-.972h-3.734v5.637h3.734zm-1.871%201.648c.332%200%20.594-.265.594-.586%200-.324-.262-.586-.594-.586-.332%200-.594.262-.594.586%200%20.32.262.586.594.586zm3.851-1.648v-3.692h.036l2.636%203.692h.977V17.06h-1.129v3.672h-.031l-2.633-3.672H47.7v5.637h1.128z%22%20transform%3D%22rotate%28-15%2084.872%209.306%29%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M64.842.12H3.969c-.875%200-1.312.118-1.766.462-.417.315-.747.782-.97%201.37C1.01%202.541.92%203.108.907%204.151L.905%2024.79c0%201.236.085%201.853.328%202.495.223.589.553%201.056.97%201.37.454.344.89.463%201.766.463h60.873c.875%200%201.311-.119%201.766-.462.417-.315.747-.782.97-1.371.243-.642.327-1.259.327-2.495V4.447c0-1.236-.084-1.853-.327-2.495-.223-.588-.553-1.055-.97-1.37-.455-.344-.891-.463-1.766-.463zM3.635%201.12l61.36-.002c.702%200%20.959.073%201.223.282.216.17.381.414.496.732.142.39.191.77.191%201.807v21.359l-.005.504c-.016.671-.07.983-.186%201.302-.115.318-.28.562-.496.732-.264.209-.52.282-1.224.282H3.816l-.342-.007c-.454-.024-.665-.104-.882-.275-.215-.17-.38-.414-.496-.732-.128-.355-.18-.7-.19-1.54V3.94c0-1.038.049-1.417.19-1.807.115-.318.281-.562.496-.732.24-.19.475-.267%201.043-.28z%22%20transform%3D%22rotate%28-15%2084.872%209.306%29%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23787878%22%20transform%3D%22rotate%28-15%2037.501%2027.2%29%22%20xlink%3Ahref%3D%22%23yg7u4jt8zc%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
              </span>
            </div>
          </div>
          <div className="box-3">
            <div>
              <ul class="prices__items">
                <li class="prices__item">
                  <div class="prices__text">Tạm tính</div>
                  <div class="prices__value">{total.toLocaleString()} ₫</div>
                </li>
                <li class="prices__item">
                  <div class="prices__text">Giảm giá</div>
                  <div class="prices__value">0 ₫</div>
                </li>
              </ul>
              <div class="prices__total">
                <span class="prices__text">Tổng tiền</span>
                <div class="prices__content">
                  <div class={total > 0 ? "prices__value--final" : "prices__value--empty"}>{total.toLocaleString() < 1 ? "Vui lòng chọn sản phẩm" : total.toLocaleString() + " ₫"}</div>
                  <span class="prices__value--noted">(Đã bao gồm VAT nếu có)</span>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-closingCart" onClick={handlegotoByNow}>Mua Hàng {`(${finalTotal.length})`}</button>
        </div>
      </div>
    </div>
  );
}

export default ClosingCart;
