import React, { useEffect } from 'react'
import OderTitle from './odertitle/OderTitle'
import styles from './odertitle/OderTitle.module.css'
import { useState } from 'react'
import AllOder from './allOder/AllOder'
import { Pagination } from 'antd';
import { data } from './Orderdata';
import { useSelector } from 'react-redux';
import { getAPI } from '../../../config/api'
function Order() {
  const user = useSelector(state => state.user)
  console.log(user._id)
  const [dataOderTitle, setdataOderTitle] = useState([]);
  const [status, setstatus] = useState('none')
  const [dataInputSeach, setdataInputSeach] = useState([...dataOderTitle])
  const [emptyOder, setemptyOder] = useState('')
  const [newListdata, setnewListdata] = useState([...dataOderTitle])
  useEffect(() => {
    getAllUserOrder()
  }, [])

  async function getAllUserOrder() {
    try {
      const data = await getAPI('/user-order/get-order-by-userId/' + user._id);
      setdataOderTitle(() => {
        const newdata = [];
        data.data.listOrder.map((value, index) => {

          value.listOrder.map(item => {
            let valueStatus = '';
            if (item.status === 'pending') {
              valueStatus = 'Đang xử lí'
            } else if (item.status === 'shipping') {
              valueStatus = 'Đang vận chuyển'
            } else if (item.status === 'waitpayment') {
              valueStatus = 'Chờ thanh toán'
            } else if (item.status === 'cancel') {
              valueStatus = 'Đã Hủy'
            } else if (item.status === 'complete') {
              valueStatus = 'Đã Giao'
            };
            if (item.listProduct.length > 0) {
              newdata.push(
                {
                  name: `${item.listProduct[0].productDetailId.productId
                    .productName}`,
                  sold: `${item.listProduct[0].quantity}`,
                  shopId: {
                    shopname: `${item.shopId.shopName}`,
                    shoplogo: `${item.shopId.logo}`
                  },
                  status: `${valueStatus}`,
                  price: `${item.listProduct[0].productDetailId.productId
                    .price}`,
                  img: `${item.listProduct[0].productDetailId.productId
                    .thump[0]}`

                })
            } else {
              newdata.push(
                {
                  name: `${item.product[0].productId.productName}`,
                  sold: `${item.product[0].quantity}`,
                  shopId: {
                    shopname: `${item.shopId.shopName}`,
                    shoplogo: `${item.shopId.logo}`
                  },
                  status: `${valueStatus}`,
                  price: `${item.product[0].productId.price}`,
                  img: `${item.product[0].productId.thump[0]}`

                })
            }
          })

        })

        return newdata
      })


    } catch (error) {
      console.log(error)
    }
  }
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }

    if (type === 'next') {
      return <a>Next</a>;
    }

    return originalElement;
  };

  function Search_Datatitle() {
    console.log(dataInputSeach)
    const seachInput = removeAccents(document.querySelector(`.${styles.TitleInput}`).value).toLocaleLowerCase();
    if (seachInput) {
      const newdata = dataInputSeach.filter(function (value) {
        const key = removeAccents(value.name).toLocaleLowerCase()
        return key.includes(seachInput)
      })
      if (newdata.length === 0) {
        setemptyOder('https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png')

      }
      setnewListdata(newdata)
    }
  }




  const EnterInputTitle = (e) => {
    if (e.charCode === 13) {
      setemptyOder('')
      const seachInput = removeAccents(document.querySelector(`.${styles.TitleInput}`).value).toLocaleLowerCase();
      const newdata = dataInputSeach.filter(function (value) {
        const keyPress = removeAccents(value.name).toLocaleLowerCase()
        return keyPress.includes(seachInput)
      })
      setnewListdata(newdata)
      if (newdata.length === 0) {
        setemptyOder('https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png')
      }
    }

  }
  const [start, setstart] = useState(0)
  const [current, setcurrent] = useState(1)
  function setStartPAgination(page, pageSize) {
    setstart((page - 1) * pageSize)
    setcurrent(page)
  }
  function removeAccents(str) {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }
  useEffect(function () {
    const listOption = document.querySelectorAll(`.OptionsAll_Oder__history`)
    listOption[0].click()
  }, [dataOderTitle])
  const PaginationList = <div className={styles.Pagination}>
    <Pagination total={newListdata.length} defaultPageSize={3} itemRender={itemRender} onChange={setStartPAgination} current={current} />;
  </div>
  const [showPagination, setshowPagination] = useState(true)
  return (
    <div className={styles.Global_OderList}>
      <div className={styles.user_Oder_Listtitle}>
        <OderTitle Title='Tất cả đơn' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent} ></OderTitle>

        <OderTitle Title='Chờ thanh toán' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent} ></OderTitle>

        <OderTitle Title='Đang xử lí' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent}></OderTitle>

        <OderTitle Title='Đang vận chuyển' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent}></OderTitle>

        <OderTitle Title='Đã Giao' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent} ></OderTitle>

        <OderTitle Title='Đã Hủy' status={status} setstatus={setstatus} newListdata={dataOderTitle} setnewListdata={setnewListdata} emptyOder={emptyOder} setemptyOder={setemptyOder} setdataInputSeach={setdataInputSeach} setshowPagination={setshowPagination} setstart={setstart} setcurrent={setcurrent}></OderTitle>
      </div>
      <div className={styles.Input}>
        <input type="text" placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          className={styles.TitleInput} onKeyPress={EnterInputTitle}>
        </input>
        <p className={styles.Search_Right} onClick={() => { Search_Datatitle() }}  >
          Tìm đơn hàng
        </p>
      </div>
      <AllOder newdata={newListdata} emptyOder={emptyOder} start={start}></AllOder>
      {showPagination === true ? PaginationList : null}
    </div>

  )
}

export default Order