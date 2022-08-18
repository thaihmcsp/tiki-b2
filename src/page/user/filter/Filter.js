import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Breadcrumb from './Breadcrumb'
import styles from './Filter.module.css'
import Container from './Container'
import { getAPI } from '../../../config/api'
import { useSearchParams } from 'react-router-dom';

const Filter = ({setId}) => {
  const [inp, setInp] = useState([])
  const [price1, setPrice1] = useState([])
  const [price750, setPrice750] = useState([])
  const [data1, setData] = useState([])
 const [listProducts,setListProducts]= useState([])
  const [query] = useSearchParams()
  const search = query.get('seaarch')

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  useEffect(() => {
    getAPI("/product/get-all-products")
    .then((data)=> {
      setListProducts(() => {
        const newData = []
        
        for(let value of data.data.listProduct) {
          const newName = value.productName.toLowerCase()
          if(value.price){
            if(search){
              if(newName.includes(search.toLowerCase())){
                newData.push(value)
              }else {
                if(removeAccents(newName).includes(search.toLowerCase())){
                  newData.push(value)
                }
              }
            }else {
              newData.push(value)
            }
          }
        }
        return newData
      })
      // setListProducts(data.data.listProduct)
    })
    .catch((error) => {
      console.log(error)
    }) 
  },[])

console.log(74, listProducts)

  return (
    <div className='App'>
        <div  className = {styles.slider}>
            <Breadcrumb />
            <div className = {styles.container}>
                <div className = {styles.container_box} >
                    <SideBar setData= {setData} setInp={setInp} setPrice1= {setPrice1} setPrice750 = {setPrice750} listProducts = {listProducts} />
                </div>
                <Container data1={data1} inp={inp} price1 = {price1} price750 = {price750} listProducts = {listProducts} setId = {setId}/>
            </div>
        </div>
    </div>
  )
}

export default Filter