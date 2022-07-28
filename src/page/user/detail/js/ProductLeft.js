import React, { useState } from "react";

import { Image } from "antd";
import "antd/dist/antd.css";

function ProductLeft(props) {
  return (
    <div className="productleft">
      <div>
        <Image
          id="main"
          // height={444}
          // width={444}
          src={props.colorDetail.color}
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
