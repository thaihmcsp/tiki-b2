import React, { useState } from "react";
import styles from "./FilterProducts.module.css";
import { Input, Select } from "antd";
import "antd/dist/antd.css";
import { Option } from "antd/lib/mentions";
import "./FilterProducts.css";
import { listBranch } from "../../user/createShop/listBranch";
import SearchIcon from '@mui/icons-material/Search';
const { Search } = Input;


function FilterProducts({setValue}) {
 const [val,setVal] = useState('')
  const onSearch = (value) => {
    setValue(value)
    console.log(value)
  };
  const [Change,setChange] = useState({})
  function onsearch(){
    const inp = document.querySelector(`.${styles.inp_search} .ant-input`).value
    setValue(inp);
  }
  
  return (
    <div className={styles.filterProducts}>
      <div>
        <span className={styles.flterSpan}>Lọc sản phẩm:</span>
      </div>
      <div className={styles.filter}>
        <div className={[styles.filterInput, styles.width33,].join(" ")}>
          <Input.Group compact>
            <Select style={{ width: "30%" }} defaultValue="Tên sản phẩm">
              <Option value="Mã sản phẩm">Mã sản phẩm</Option>
              <Option value="SKU">SKU</Option>
              <Option value="PSKU">PSKU</Option>
            </Select>
            <div className={styles.inp_search}>
            <Search
              allowClear
              placeholder=" Vui lòng nhập "
              onSearch={onSearch}
            />
              <SearchIcon onClick={onsearch} className={styles.searchicon} />
              </div>
            
          </Input.Group>
        </div>
        <div className={[styles.width33].join(" ")}>
          <Input.Group compact>
            <Select
              style={{
                width: "100%",
              }}
              defaultValue="Ngành Hàng"
              placeholder="Ngành Hàng"
            >
              {listBranch.map((data, index) => {
                return (
                  <Option value={data} key={index}>
                    {data}
                  </Option>
                );
              })}
            </Select>
          </Input.Group>
        </div>
        <div className={[styles.width33].join(" ")}>
          <Input.Group compact>
            <Select
              style={{
                width: "100%",
              }}
              defaultValue="Sắp xếp"
              placeholder="sắp xếp"
              
            >
              <Option value="Giá">Giá</Option>
              <Option value="Số lượng kho" >Số lượng kho</Option>
              <Option value="Điểm nội dung ">Điểm nội dung</Option>
            </Select>
          </Input.Group>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
