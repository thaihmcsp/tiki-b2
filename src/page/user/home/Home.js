import React from "react";

import style from "./style/home.module.css";
import clsx from "clsx";
import Banner from "./component/banner1/Banner";
import Banner2 from "./component/banner2/Banner2";
import HotDeal from "./component/hotdeal/HotDeal";
import Banner3 from "./component/banner3/Banner3";
import Voucher from "./component/voucher/Voucher";
import BannerAdd from "./component/bannerAdd/BannerAdd";
import Brand from "./component/brand/Brand";
// import HotItem from './component/hotItem/HotItem';
// import BannerAdd2 from './component/banneradd2/BannerAdd2';
// import SuggestProduct from './component/suggestProduct/SuggestProduct';

function Home() {
  return (
    <div className={style.HomePage}>
      <div className={style.container}>
        <div className={style.first_slider}>
          <Banner />
          <img className={style.image} src="https://epz24x4zq6r.exactdn.com/wp-content/uploads/2021/07/Tiki-7.7-9.jpg?strip=all&lossy=1&resize=800%2C645&ssl=1"></img>
        </div>
        <div className={style.second_slider}>
          <div className={style.HotDeal}>
            <HotDeal />
          </div>
          <Banner2 />
        </div>
        <Banner3 />
        <Voucher />
        <BannerAdd />
        <Brand />
        {/* <HotItem />
            <BannerAdd2/>
            <SuggestProduct/> */}
      </div>
    </div>
  );
}

export default Home;
