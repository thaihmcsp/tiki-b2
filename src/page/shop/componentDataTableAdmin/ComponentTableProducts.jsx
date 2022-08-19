import { Table } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./ComponentTableProducts.module.css";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./FilterProducts.css";
// import Modal from "../componentDataTableAdmin/Modal";
// import array from "./data.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { handleBreakpoints } from "@mui/system";
import { getAPI } from "../../../config/api";
import { useNavigate } from "react-router-dom";

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
// useEffect(() => {
//   getAPI("/category/get-all-categories")
//   .then((data)=> {
//     setListCategories(data.data.listCategories)
//   })
//   .catch((error) => {
//     console.log(error)
//   }) 
// },[isModalVisible])

// rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};



const ComponentTableProducts = ({value}) => {

  const [selectionType, setSelectionType] = useState("checkbox");
  const [listData, setListData] = useState([])
  const [listData1, setListData1] = useState([])
  const handleCancel = (id)=>{
    console.log(49,id)
    // setListData(()=>{
    //   const newData = [...listData]
    //   const index = newData.findIndex(item=>{
    //     return item.id === id
    //   })
    //   newData.splice(index, 1);
    //   return newData
    // })
  }
  useEffect(() => {
    if(value.length > 0) {
      setListData(() => {
        const newData = [...listData]
        const newDataa = newData.filter(data => {
          const dataa = data.productName.toLowerCase()
          if(dataa.includes(value)) {
            return true
          }
        })
        return newDataa
      })
    }else {
      setListData(listData1)
    }
  },[value])
  
  useEffect(() => {
    getAPI("/product/get-product-by-shopId/62da5cccbc070a53bcbc31b8")
    .then((res) =>{
      console.log(77,res.data.product)
      setListData1(res.data.product)
      setListData(res.data.product)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const nav = useNavigate()
  const  handleUpdate =(id)=>{
    nav(`/addItem`)
  }
 
  let dataTest = listData.map((ele, index) => {
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
            {/* <Modal id={"price" + ele.id} idKey={ele.id} /> */}
          </div>
        ),
        address: (
          <div className={styles.modalUpdate}>
            <p className={ele.totalStorage > 0 ? ele.totalStorage :'red'}> {ele.totalStorage ? ele.totalStorage : 'Hết Hàng'} </p>
            <EditOutlined onClick={()=>handleUpdate(ele._id)} />
          </div>
        ),
        contentScore: (
          <div className={styles.contentScore}>
            <p className={ele.public = 'true' ? styles.checkboxGreen : styles.checkboxRed }></p>
            <p><InfoCircleOutlined /></p>
            <p><DeleteOutlineIcon onClick={()=>handleCancel(ele._id)}/></p>
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
