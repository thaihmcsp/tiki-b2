import { Table } from "antd";
import React, { useState } from "react";
import styles from "./ComponentTableProducts.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./FilterProducts.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modal from "../componentDataTableAdmin/Modal";
import array from "./data.js";

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

let dataTest = array.map((ele, index) => {
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
        <p>{ele.price}</p>
        <Modal id={"price" + ele.id} idKey={ele.id} />
      </div>
    ),
    address: (
      <div className={styles.modalUpdate}>
        <p>{ele.address}</p>
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
          <DeleteOutlineIcon />
        </p>
      </div>
    ),
  };
});

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

const ComponentTableProducts = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

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
