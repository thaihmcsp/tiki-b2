import React, { useEffect, useState } from "react";
import data from "./CartData";
import "./Cart.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClosingCart from "./ClosingCart";
import style from "./TotalCart.module.css";
console.log(6, data);

function TotalCart() {
  const [listProduct, setlistProduct] = React.useState(data.listProduct);
  const [total, setTotal] = React.useState(0);
  const [finalTotal, setFinalTotal] = useState([]);
  console.log(total);
  useEffect(() => {
    let total = 0;
    finalTotal.map((item) => {
      total += item.quantity * item.productDetailId.price;
    });
    setTotal(total);
  }, [finalTotal]);
  const onRemove = (id) => {
    const exist = listProduct.findIndex((item) => item.productDetailId._id === id);
    if (exist >= 0) {
      setlistProduct(() => {
        const newListData = [...listProduct];
        if (newListData[exist].quantity >= 2) {
          newListData[exist].quantity -= 1;
          return newListData;
        } else {
          if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            newListData.splice(exist, 1);
            return newListData;
          }
          return newListData;
        }
      });
    }
  };
  const onAdd = (id) => {
    const exist = listProduct.findIndex((item) => item.productDetailId._id === id);
    if (exist >= 0) {
      setlistProduct(() => {
        const newListData = [...listProduct];
        newListData[exist].quantity += 1;
        return newListData;
      });
    }
  };

  const onDelete = (id) => {
    const exist = listProduct.findIndex((item) => item.productDetailId._id === id);
    console.log(48, exist);
    setlistProduct(() => {
      const newListData = [...listProduct];
      newListData.splice(exist, 1);
      return newListData;
    });
  };

  const handleCheckItem = (e, id) => {
    const exist = listProduct.findIndex((item) => item.productDetailId._id === id);
    const valuePrice = listProduct[exist].productDetailId.price * listProduct[exist].quantity;
    if (e.target.checked === false) {
      e.target.closest(`.${style.tradingCart}`).querySelector(`.${style.storeCart}`).checked = false;
      document.querySelector(`.${style.TotalCheckItemStore}`).checked = false;
      setFinalTotal(() => {
        const newListData = [...listProduct];
        const newListData2 = newListData.filter((item) => {
          return item.productDetailId._id !== id;
        });
        return newListData2;
      });
    } else {
      const element = listProduct.filter((item) => {
        return item.productDetailId._id === id;
      });
      console.log(66, element);
      setFinalTotal(() => {
        return [...finalTotal, ...element];
      });
      const listCheckItemStore = e.target.closest(`.${style.tradingCart}`).querySelectorAll(".checkItem");
      const listItemCart = document.querySelectorAll(".checkItem");
      const checkList2 = [...listItemCart].filter((item) => {
        return item.checked === false;
      });
      if (checkList2.length === 0) {
        document.querySelector(`.${style.TotalCheckItemStore}`).checked = true;
      }
      const listUncheck = [...listCheckItemStore].filter((item) => {
        return item.checked === false;
      });
      if (listUncheck.length === 0) {
        e.target.closest(`.${style.tradingCart}`).querySelector(`.${style.storeCart}`).checked = true;
      }
    }
  };
  console.log(82, finalTotal);
  const handleCheckStore = (e) => {
    const parentElement = e.target.closest(`.${style.tradingCart}`);
    const ListProduct = parentElement.querySelectorAll(".checkItem");
    document.querySelector(`.${style.TotalCheckItemStore}`).checked = false;
    console.log(64, parentElement, ListProduct);
    [...ListProduct].map((item) => {
      item.checked = e.target.checked;
    });
    const listStoreCart = document.querySelectorAll(`.${style.storeCart}`);
    const checkList3 = [...listStoreCart].filter((item) => {
      return item.checked === false;
    });
    if (checkList3.length === 0) {
      document.querySelector(`.${style.TotalCheckItemStore}`).checked = true;
    }
  };

  const handleTotalCheckItemStore = (e) => {
    const ListStoreProduct = document.querySelectorAll(`.${style.storeCart}`);
    const ListStoreCheckItem = document.querySelectorAll(".checkItem");
    [...ListStoreProduct, ...ListStoreCheckItem].map((item) => {
      item.checked = e.target.checked;
    });
  };

  useEffect(() => {}, []);
  return (
    <div className="totalcart-container">
      <div className="totalcart-right">
        <div className="total-cart">
          <label>
            <input type="checkbox" onChange={handleTotalCheckItemStore} className={style.TotalCheckItemStore} /> <span className="checkboxStore"></span>{" "}
            <span>Tất cả({listProduct.length} sản phẩm)</span>
          </label>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span className="remove-all">
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </span>
        </div>
        <div className="TradingCart">
          {listProduct.map((item, index) => {
            return (
              <div className={style.tradingCart}>
                <div className={style.tradingCart_header}>
                  <input type="checkbox" onChange={handleCheckStore} className={style.storeCart} />
                  <div className={style.tradingCart_shopName}>{item.productDetailId.productId.shopId.shopName}</div>
                </div>
                <div className={style.tradingCart_container}>
                  <div className={style.col_1}>
                    {" "}
                    <input type="checkbox" className="checkItem" onChange={(e) => handleCheckItem(e, item.productDetailId._id)} index={item.productDetailId._id} />
                    <div className={style.tradingCart_img}>
                      <img src="https://images.unsplash.com/photo-1659385631755-37e381232c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                    </div>
                    <div className={style.tradingCart_content}>
                      <a>{item.productDetailId.productId.productName}</a>
                    </div>
                  </div>
                  <div className={style.tradingCart_price}>{item.productDetailId.price.toLocaleString()}</div>
                  <div className={style.tradingCart_qty}>
                    <button className={style.decrease} onClick={() => onRemove(item.productDetailId._id)}>
                      -
                    </button>
                    <input type="tel" value={item.quantity} index={item.productDetailId._id} className={style.qty_input} />
                    <button className={style.increase} onClick={() => onAdd(item.productDetailId._id)}>
                      +
                    </button>
                  </div>
                  <div className={style.tradingCart_finalPrice} index={item.productDetailId._id}>
                    {(item.productDetailId.price * item.quantity).toLocaleString()}
                  </div>
                  <div className={style.tradingCart_delete} onClick={() => onDelete(item.productDetailId._id)}>
                    <DeleteOutlineIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="totalcart-left">
        <ClosingCart listProduct={listProduct} total={total} />
      </div>
    </div>
  );
}

export default TotalCart;
