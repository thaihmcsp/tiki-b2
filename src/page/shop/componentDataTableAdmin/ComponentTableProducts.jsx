import {  Table } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./ComponentTableProducts.module.css";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./FilterProducts.css";
// import Modal from "../componentDataTableAdmin/Modal";
// import array from "./data.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { handleBreakpoints } from "@mui/system";
import { getAPI, patchAPI } from "../../../config/api";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';
 
const columns = [
  {
    title: "Thông tin sản phẩm",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
  {
    title: "Kho",
    dataIndex: "address",
  },
  {
    title: "Trạng thái ",
    dataIndex: "contentScore",
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
function removeAccents(str) {
  var AccentsMap = [
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}
const ComponentTableProducts = ({ value, selectSort, count }) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [listData, setListData] = useState([])
  const [listData1, setListData1] = useState([]);
  
  // const handleCancel = (id) => {
  //   console.log(id)
  // }
  useEffect(() => {
    getAPI("/product/get-product-by-shopId/62da5cccbc070a53bcbc31b8")
      .then((res) => {
        console.log(74, res.data.product)
        if (selectSort == 'Giá') {
          res.data.product.sort((a, b) => {
            return a.price - b.price
          })
        } else if (selectSort == 'Số lượng kho') {
          res.data.product.sort((a, b) => {
            return a.totalStorage - b.totalStorage
          })
        }
        const newData = res.data.product
        if (value.length > 0) {
          const newDataa = newData.filter(data => {
            const dataa = removeAccents(data.productName.toLowerCase())
            if (dataa.includes(value)) {
              return true
            }
          })
          setListData(newDataa)
        } else {
          setListData(newData)
        }
        // setListData1(res.data.product)
        // setListData(res.data.product)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [value, count, selectSort])
  // useEffect(() => {

  //   if (value.length > 0) {
  //     const newData = [...listData1]
  //     const newDataa = newData.filter(data => {
  //       const dataa = removeAccents(data.productName.toLowerCase())
  //       if (dataa.includes(value)) {
  //         return true
  //       }
  //     })
  //     setListData(newDataa)
  //   } else {
  //     setListData(listData1)
  //   }
  // }, [value, count, selectSort])



  const nav = useNavigate()
  const handleUpdate = (id) => {
    nav(`/editItem?id=${id}`)
  }
  let dataTest = listData.map((ele, index) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
   
    function handleChange (e){
    // console.log(118,id)
    console.log(117,e)
    console.log(117,e.target.checked)
  //   if(e.target.checked == true ){
  //     try {
  //       await patchAPI('/product/change-product-publish/'+ id)
        
  //     }catch (error) {
  //       console.log(error)
  //   }
  //  }
  }
      return {
        key: index + 1,
        name: (
          <div className={styles.products}>
            <img src={ele.thump[0]} alt="img" />
            <span>{ele.productName}</span>
          </div>
        ),
        price: (
          <div className={styles.modalUpdate}>
            <p>{ele.price ? ele.price.toLocaleString() : '' } đ</p>
          </div>
        ),
        address: (
          <div  className={styles.modalUpdate}>
            <p className={ele.totalStorage > 0 ? ele.totalStorage :'red'}> {ele.totalStorage ? ele.totalStorage : 'Hết Hàng'} </p>
            <EditOutlined onClick={()=>handleUpdate(ele._id)} />
          </div>
        ),
        contentScore: (
          <div className={styles.contentScore}>
            <p className={ele.public ? 'checkboxGreen' : 'checkboxRed '}></p>
            <p className={styles.status}> {ele.public = 'true' ? 'Đang hoạt động' : 'Tạm khoá'}</p>
            <p><Switch {...label} defaultChecked  onChange={handleChange} /></p>
          </div>
        ),
      };
   
  });

  return (
    <div className={styles.Table}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataTest}
      />

    </div>
  );
};

export default ComponentTableProducts;
