import React, { useState } from "react";
import { listcontact } from "./listdata/listcontact";
import {
  size,
  tich,
  amoutn,
  refund,
  logo,
  action,
  rateshop,
  imgproduct,
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
import { Product } from "./data/product";

function Detail() {
  const [check, setCheck] = useState();
  const [myColor, setMycolor] = useState();
  const [mySize, setMySize] = useState();
  const [isDisabled, setIsDisable] = useState(true);
  const [colorDetail, setcolorDetail] = useState({
    color:
      "https://salt.tikicdn.com/cache/w1200/ts/product/aa/d6/8b/8cec3f81589ed96f0075d4ecf2d822c5.jpg",
    name: "Black",
    size: "XL",
    price: 350000,
  });

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

  const hanldeColor = (color) => {
    const getID = document.getElementById(color);
    const getColor = getID.getElementsByTagName("img")[0].getAttribute("src");
    const getColorName = getID.getElementsByTagName("span")[0].innerHTML;
    document
      .getElementById("main")
      .getElementsByTagName("img")[0]
      .setAttribute("src", getColor);
    document.getElementById("img-small").setAttribute("src", getColor);
    document.getElementById("color-select").innerHTML = `${getColorName}`;
    //preview

    document
      .getElementsByClassName("ant-image-preview-img")[0]
      .setAttribute("src", getColor);

    document.getElementById(color).classList.add("show-border");
    const listColor = Array.prototype.slice.call(
      document.querySelectorAll(".option1")
    );
    listColor.map(function (item, index) {
      if (item.id == color) {
        document
          .getElementById(color)
          .getElementsByTagName("img")[1]
          .classList.add("show-select");
        document.getElementById(color).classList.add("show-border");
      } else {
        document
          .getElementById(item.id)
          .getElementsByTagName("img")[1]
          .classList.remove("show-select");
        document.getElementById(item.id).classList.remove("show-border");
      }
    });
    setMycolor(color);
  };

  const hanldeSize = (size) => {
    let selectSize = document.getElementById(size).innerHTML;
    const listSize = Array.prototype.slice.call(
      document.querySelectorAll(".option2")
    );

    document.getElementById("size-select").innerHTML = `${selectSize}`;
    listSize.map(function (item, index) {
      if (item.id == size) {
        document
          .getElementById(size)
          .getElementsByTagName("img")[0]
          .classList.add("show-select");
        document.getElementById(size).classList.add("show-border");
      } else {
        document
          .getElementById(item.id)
          .getElementsByTagName("img")[0]
          .classList.remove("show-select");
        document.getElementById(item.id).classList.remove("show-border");
      }
    });

    setMySize(size);
  };
  return (
    <div className="Detai">
      <div className="product-content">
        <ProductLeft
          colorDetail={colorDetail}
          icon={listcontact}
          banner="https://salt.tikicdn.com/cache/w1080/ts/tka/1d/8f/00/d8d6ff67e8c1eed442001b4827297e5f.jpg"
        />
        <ProductRight
          check={check}
          setcheck={setCheck}
          brand="https://tiki.vn/thuong-hieu/oem.html"
          colorDetail={colorDetail}
          bestseller="https://tiki.vn/bestsellers-month/ao-thun-nam-dai-tay/c8336"
          price="39.000đ"
          listprice="78.000đ"
          discount="50%"
          icon="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
          imgproduct={imgproduct}
          size={size}
          tich={tich}
          amoutn={amoutn}
          refund={refund}
          logo={logo}
          action={action}
          rateshop={rateshop}
          AmoutnUp={AmoutnUp}
          AmoutnDown={AmoutnDown}
          buyProduct={buyProduct}
          isDisabled={isDisabled}
          Product={Product}
          hanldeColor={hanldeColor}
          hanldeSize={hanldeSize}
          myColor={myColor}
          mySize={mySize}
        />
      </div>
      <Productbottom />
    </div>
  );
}

export default Detail;
