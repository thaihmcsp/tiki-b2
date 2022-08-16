import React from 'react'
import SideBar from './SideBar'
import Breadcrumb from './Breadcrumb'
import styles from './Filter.module.css'
import Container from './Container'
const Filter = () => {
  return (
    <div className='App'>
        <div  className = {styles.slider}>
            <Breadcrumb />
            <div className = {styles.container}>
                <div className = {styles.container_box} >
                    <SideBar setData= {setData} setInp={setInp} setPrice1= {setPrice1} setPrice750 = {setPrice750} listProducts = {listProducts} />
                </div>
                <Container />
            </div>
        </div>
    </div>
  )
}

export default Filter