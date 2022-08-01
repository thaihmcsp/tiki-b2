import React, { useState } from "react";
import { listcontact } from "./listdata/listcontact";
import {
  rate,
  color,
  size,
  tich,
  amoutn,
  refund,
  logo,
  action,
  rateshop,
} from "./listdata/rate";
import ProductLeft from "./js/ProductLeft";
import "./css/Detail.css";
import "./css/productleft.css";
import "./css/productright.css";
import "./css/productbottom.css";
import ProductRight from "./js/ProductRight";
import Productbottom from "./js/Productbottom";
import { Image } from "antd";
import Header from "../../../components/Header";
function Detail() {
  const [isDisabled, setIsDisable] = useState(true);
  const [colorDetail, setcolorDetail] = useState({
    color:
      "https://salt.tikicdn.com/cache/w1200/ts/product/aa/d6/8b/8cec3f81589ed96f0075d4ecf2d822c5.jpg",
    name: "Đen",
  });

  function changecolor(id) {
    const getID = document.getElementById(id);
    const getColor = getID.getElementsByClassName("fWjUGo");
    const getColorName = getID.getElementsByTagName("span")[0].innerHTML;
    let imgpath = getColor[0].getAttribute("src");
    document
      .getElementById("main")
      .getElementsByTagName("img")[0]
      .setAttribute("src", imgpath);

    document.getElementById("img-small").setAttribute("src", imgpath);
    document.getElementById("detail-color").innerHTML = `Màu : ${getColorName}`;
    document
      .querySelector(".ant-image-preview-img")
      .setAttribute("src", imgpath);
  }
  function selectSize(id) {
    let selectSize = document.getElementById(id).innerHTML;
    document.getElementById("detail-size").innerHTML = `Size: ${selectSize}`;
  }

  function AmoutnUp() {
    let soluong = document.getElementById("amoutn-value").innerHTML * 1;
    soluong += 1;
    document.getElementById("amoutn-value").innerHTML = `${soluong}`;
    if (soluong > 1) {
      setIsDisable(false);
    }
  }

  function AmoutnDown() {
    let soluong = document.getElementById("amoutn-value").innerHTML * 1;
    soluong -= 1;
    document.getElementById("amoutn-value").innerHTML = `${soluong}`;
    if (soluong == 1) {
      setIsDisable(true);
    }
  }

  function buyProduct() {
    let soluong =
      document.getElementsByClassName("HeaderCartTitle")[0].innerHTML * 1;
    soluong += 1;
    document.getElementsByClassName(
      "HeaderCartTitle"
    )[0].innerHTML = `${soluong}`;
  }

  return (
    <div className="Detai">
      <div className="product-content">
        <ProductLeft
          colorDetail={colorDetail}
          icon={listcontact}
          rate={rate}
          banner="https://salt.tikicdn.com/cache/w1080/ts/tka/1d/8f/00/d8d6ff67e8c1eed442001b4827297e5f.jpg"
        />
        <ProductRight
          brand="https://tiki.vn/thuong-hieu/oem.html"
          colorDetail={colorDetail}
          bestseller="https://tiki.vn/bestsellers-month/ao-thun-nam-dai-tay/c8336"
          price="39.000đ"
          listprice="78.000đ"
          discount="50%"
          icon="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
          productColor={rate}
          color={color}
          size={size}
          tich={tich}
          amoutn={amoutn}
          refund={refund}
          logo={logo}
          action={action}
          rateshop={rateshop}
          changecolor={changecolor}
          selectSize={selectSize}
          AmoutnUp={AmoutnUp}
          AmoutnDown={AmoutnDown}
          buyProduct={buyProduct}
          isDisabled={isDisabled}
        />
      </div>
      <Productbottom />
    </div>
  );
}

export default Detail;
