import React, { useState } from "react";
import { Image } from "antd";
import "antd/dist/antd.css";
import ProductRight from "./ProductRight";

function ProductLeft(props) {
  const hanldeImg = (id) => {
    const getImg = document.getElementById(id).getAttribute("src");
    props.setcolorDetail({ color: getImg });
  };

  return (
    <div className="productleft">
      <div>
        <Image
          id="main"
          src={props.detail.thump}
          preview={{ src: props.detail.thump }}
        />

        <div className="img-extend">
          {props.listImg.map((item, index) => {
            return (
              <img
                className="img-small"
                id={"img" + index}
                src={item}
                onClick={(id) => hanldeImg("img" + index)}
              />
            );
          })}
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
