import React, { useState } from "react";

import { Image } from "antd";
import "antd/dist/antd.css";
import ProductRight from "./ProductRight";

function ProductLeft(props) {
  return (
    <div className="productleft">
      <div>
        <Image
          id="main"
          src={props.colorDetail.color}
          preview={{
            src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          }}
        />

        <div>
          <img id="img-small" src={props.colorDetail.color} />
        </div>
        <div className="contact">
          <div>Chia sẻ</div>
          {props.icon}
        </div>
        <div>
          <img id="banner" src={props.banner} />
        </div>
      </div>
      <div className="kfTKQv"></div>
    </div>
  );
}

export default ProductLeft;
