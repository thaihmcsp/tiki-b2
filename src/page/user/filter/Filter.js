import React, { useState } from 'react'
import SideBar from './SideBar'
import Breadcrumb from './Breadcrumb'
import styles from './Filter.module.css'
import Container from './Container'
import { listProducts } from './listProducts'
const Filter = () => {
  const [ShowListdata, setShowListdata] = useState([...listProducts]);
  const [filter,setFilter] = useState([])
  console.log(10,filter)
  return (
    <div className='App'>
        <div  className = {styles.slider}>
            <Breadcrumb />
            <div className = {styles.container}>
                <div className = {styles.container_box} >
                    <SideBar setShowListdata = {setShowListdata} setFilter={setFilter}/>
                </div>
                <Container ShowListdata = {ShowListdata} filter={filter}/>
            </div>
        </div>
    </div>
  )
}

export default Filter