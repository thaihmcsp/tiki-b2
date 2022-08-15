import { Table } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./ComponentTableProducts.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./FilterProducts.css";
import Modal from "../componentDataTableAdmin/Modal";
import array from "./data.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { handleBreakpoints } from "@mui/system";

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
    title: "Điểm nội dung",
    dataIndex: "contentScore",
  },
];


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
  const [listData, setListData] = useState([...array])
  const handleCancel = (id)=>{
    console.log(49,id)
    setListData(()=>{
      const newData = [...listData]
      const index = newData.findIndex(item=>{
        return item.id === id
      })
      newData.splice(index, 1);
      return newData
    })
  }
  useEffect(() => {
    if(value.length > 0) {
      setListData(() => {
        const newData = [...array]
        const newDataa = newData.filter(data => {
          const dataa = data.name.toLowerCase()
          if(dataa === value) {
            return true
          }
        })
        return newDataa
      })
    }else {
      setListData([...array])
    }
  },[value])
  
  let dataTest = listData.map((ele, index) => {
    return {
      key: index + 1,
      name: (
        <div className={styles.products}>
          <img src={ele.img} alt="img" />
          <span>{ele.name}</span>
        </div>
      ),
      price: (
        <div className={styles.modalUpdate}>
          <p>{ele.price.toLocaleString()} đ</p>
          <Modal id={"price" + ele.id} idKey={ele.id} />
        </div>
      ),
      address: (
        <div className={styles.modalUpdate}>
          <p className={ele.address === 'hết hàng' ? 'red' : ''}>{ele.address}</p>
          <Modal id={"addres" + ele.id} idKey={ele.id} />
        </div>
      ),
      contentScore: (
        <div className={styles.contentScore}>
          <p className={styles.checkbox}></p>
          <p>
            {ele.contentScore} <InfoCircleOutlined />
          </p>
          <p>
            <DeleteOutlineIcon onClick={()=>handleCancel(ele.id)}/>
          </p>
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
