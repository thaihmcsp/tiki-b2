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
      console.log(58, data.data.listOrder)
      setdataOderTitle(() => {
        const newdata = [];
        data.data.listOrder.map((value, index) => {
          let valueStatus = '';
          if (value.status === 'pending') {
            valueStatus = 'Đang xử lí'
          } else if (value.status === 'shipping') {
            valueStatus = 'Đang vận chuyển'
          } else if (value.status === 'waitpayment') {
            valueStatus = 'Chờ thanh toán'
          } else if (value.status === 'cancel') {
            valueStatus = 'Đã Hủy'
          } else if (value.status === 'complete') {
            valueStatus = 'Đã Giao'
          };
          value.listProduct.map((val, i) => {
            newdata.push(
              {
                name: `${val.productDetailId.productId.productName}`,
                sold: `${val.quantity}`,
                shopId: { 
                  shopname: `${value.shopId.shopName}`,
                  shoplogo: `${value.shopId.logo}`
                },
                status: `${valueStatus}`,
                price: `${val.productDetailId.price}`,
                img: ``

              }
            )
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