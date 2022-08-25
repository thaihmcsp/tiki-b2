import React, { useEffect, useState, useRef } from 'react'
import { List1 } from './List1'
import { trademark } from './Trademark'
import { listAddress } from './listAddress'
import { listSupplier } from './listSupplier'
import styles from './SideBar.module.css'
import { DownOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

import { listProducts } from './listProducts'

const SideBar = (props) => {
  const [data, setData] = useState([...listAddress.slice(0, 5)]);
  const [listdata, setListData] = useState([...trademark.slice(0, 5)]);
  const [supplier, setSupplier] = useState([...listSupplier.slice(0, 5)]);
  const [check, setCheck] = useState(false);
  const [ListDataPrice, setListDataPrice] = useState([...listProducts]);

  useEffect(() => {
    const newData = listAddress.slice(0, 5)
    setData(newData)
    const newData1 = trademark.slice(0, 5)
    setListData(newData1)
    const newData2 = listSupplier.slice(0, 5)
    setSupplier(newData2)

  }, [])
  const handleClick = () => {
    if (!check) {
      setData(listAddress)
      setCheck(true)
    } else {
      const newData = data.slice(0, 5)
      newData.slice(0, 5)
      setData(newData)
      setCheck(false)
    }
  }
  const handleClick1 = () => {
    if (!check) {
      setListData(trademark)
      setCheck(true)
    } else {
      const newData = trademark.slice(0, 5)
      newData.slice(0, 5)
      setListData(newData)
      setCheck(false)
    }
  }
  const handleClick2 = () => {
    if (!check) {
      setSupplier(listSupplier)
      setCheck(true)
    } else {
      const newData = listSupplier.slice(0, 5)
      newData.slice(0, 5)
      setSupplier(newData)
      setCheck(false)
    }

  }
  const FiterListData = () => {

  }
  const SetdataPrice = () => {

  }

  let checked = document.querySelectorAll(`.${styles.ListCheckbox}`);
  // console.log(checked);
  var arr = Array.prototype.slice.call(checked);
  // function FiterListData() {
  //   const dataCheck = arr.filter((value) => {
  //     return value.checked === true;
  //   })
  //   if (dataCheck.length === 0) {
  //     props.setShowListdata(listProducts)
  //   } else {
  //     let checkAdress = false;
  //     let checktrademark = false;
  //     let checkSupplier = false;
  //     for (let i = 0; i < dataCheck.length; i++) {
  //       if (listAddress.includes(dataCheck[i].value)) {
  //         checkAdress = true;
  //       }
  //       if (trademark.includes(dataCheck[i].value)) {
  //         checktrademark = true;
  //       }
  //       if (listSupplier.includes(dataCheck[i].value)) {
  //         checkSupplier = true;
  //       }
  //     }
  //     const ListRender = [];
  //     const newListRender = [];
  //     function testCheck(key) {
  //       for (let i = 0; i < listProducts.length; i++) {
  //         for (let j = 0; j < dataCheck.length; j++) {
  //           if (listProducts[i][`${key}`] == dataCheck[j].value) {
  //             ListRender.push(listProducts[i])
  //           }
  //         }
  //       }
  //       return ListRender
  //     }
  //     if (checkAdress) {
  //       testCheck('address')
  //     } else if (checktrademark) {
  //       testCheck('trademark')
  //     } else {
  //       testCheck('supplier')
  //     }
  //     for (let k = 0; k < ListRender.length; k++) {
  //       if (checktrademark && checkSupplier) {
  //         for (let l = 0; l < dataCheck.length; l++) {
  //           if (ListRender[k].trademark === dataCheck[l].value) {
  //             for (let m = 0; m < dataCheck.length; m++) {
  //               if (ListRender[k].supplier === dataCheck[m].value) {
  //                 newListRender.push(ListRender[k])
  //               }
  //             }
  //           }
  //         }
  //       } else if (checktrademark) {
  //         for (let l = 0; l < dataCheck.length; l++) {
  //           if (ListRender[k].trademark === dataCheck[l].value) {
  //             newListRender.push(ListRender[k])
  //           }
  //         }
  //       } else if (checkSupplier) {
  //         for (let l = 0; l < dataCheck.length; l++) {
  //           if (ListRender[k].supplier === dataCheck[l].value) {
  //             newListRender.push(ListRender[k])
  //           }
  //         }
  //       } else {
  //         newListRender.push(ListRender[k])
  //       }
  //     }
  //     setListDataPrice(newListRender)
  //     props.setShowListdata(newListRender)
  //   }
  // }
  // function SetdataPrice() {
  //   const newListdataPrice = ListDataPrice.filter((value) => {
  //     return value.price * 1 <= 200000 * 1;
  //   }) 
  //   props.setShowListdata(newListdataPrice)/
  // }

  const [address, setAddress] = useState([])
  const [brand, setBrand] = useState([])
  const [provider, setProvider] = useState([])
  useEffect(() => {
    props.setFilter({ address: address, trademark: brand, supplier: provider })
  }, [address, brand, provider])

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h3 className={styles.title}>DANH MỤC SẢN PHẨM</h3>
        <ul className={styles.nav__list}>
          {List1.map((val, index) => {
            return (
              <li key={index}>
                <a href='#' className={styles.nav__link}>{val}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.nav}>
        <div className={styles.list_products}>
          <h3 className={styles.title}>Xuat Su</h3>
          <ul className={styles.nav__list}>
            {data.map((val, index) => {
              const id1 = uuidv4()
              return (
                <li key={index} className={styles.list_products_item} onClick={(e) => {
                  const input = document.getElementById(id1)
                  if (input.checked === true && (!address.includes(input.value))) {
                    setAddress(() => [...address, val])
                  } else {
                    setAddress(() => {
                      const newAddress = [...address].filter(address => address != input.value)
                      return newAddress
                    })
                  }
                }}>
                  <input type='checkbox' className={styles.ListCheckbox} onClick={FiterListData} value={val} id={id1} />
                  <label className={styles.list_products__name} htmlFor={id1}>{val}</label>

                </li>
              )
            })}
          </ul>
          <span onClick={handleClick} className={styles.list_products__btn}>xem thêm <DownOutlined style={{ fontSize: '0.6rem', marginLeft: '1px' }} /></span>
        </div>
      </div>
      <div className={styles.nav}>
      </div>
      <div className={styles.nav}>
        <h3 className={styles.title}>ĐÁNH GIÁ</h3>
      </div>
      <div className={styles.nav}>
        <div className={styles.price}>
          <h3 className={styles.title}>GIÁ</h3>
          <p onClick={SetdataPrice}>Dưới 200.000</p>
          <p onClick={SetdataPrice}> Từ 200.000 đến 750.000</p>
          <p onClick={SetdataPrice}>Trên 750.000</p>
          <label>Chọn khoảng giá</label>
          <div className={styles.gourp}>
            <input type="text" placeholder='' value={0} />
            <span className={styles.seperate}>-</span>
            <input type="text" placeholder='' value={0} />
          </div>
          <button className={styles.btn}>Áp dụng</button>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.trademark}>
          <h3 className={styles.title}>THƯƠNG HIỆU</h3>
          <ul className={styles.nav__list}>
            {listdata.map((val, index) => {
              const id = uuidv4()
              return (
                <li key={index} className={styles.list_products_item} onClick={(e) => {
                  const input = document.getElementById(id)
                  if (input.checked === true && (!brand.includes(input.value))) {
                    setBrand(() => [...brand, val])
                  } else {
                    setBrand(() => {
                      const newBrand = [...brand].filter(brand => brand != input.value)
                      return newBrand
                    })
                  }
                }}>
                  <input type='checkbox' className={styles.ListCheckbox} onClick={FiterListData} value={val} id={id} />
                  <label className={styles.list_products__name} htmlFor={id}>{val}</label>
                </li>
              )
            })}
          </ul>
          <span onClick={handleClick1} className={styles.list_products__btn}>xem thêm <DownOutlined style={{ fontSize: '0.6rem', marginLeft: '1px' }} /></span>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.supplier}>
          <h3 className={styles.title}>NHÀ CUNG CẤP</h3>
          <ul className={styles.nav__list}>
            {supplier.map((val, index) => {
              const id1 = uuidv4()
              return (
                <li key={index} className={styles.list_products_item} onClick={(e) => {
                  const input = document.getElementById(id1)
                  if (input.checked === true && (!provider.includes(input.value))) {
                    setProvider(() => [...provider, val])
                  } else {
                    setProvider(() => {
                      const newBrand = [...provider].filter(provider => provider != input.value)
                      return newBrand
                    })
                  }
                }}>
                  <input type='checkbox' className={styles.ListCheckbox} onClick={FiterListData} value={val} id={id1} />
                  <label className={styles.list_products__name} htmlFor={id1}>{val}</label>
                </li>
              )
            })}
          </ul>
          <span onClick={handleClick2} className={styles.list_products__btn}>xem thêm <DownOutlined style={{ fontSize: '0.6rem', marginLeft: '1px' }} /></span>
        </div>
      </div>
    </div>
  )
}

export default SideBar