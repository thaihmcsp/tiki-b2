import React from 'react'
import SideBar from './SideBar'
import Breadcrumb from './Breadcrumb'
import styles from './Filter.module.css'
import Container from './Container'
const Filter = () => {
  return (
    <div  className = {styles.slider}>
    <Breadcrumb />
    <div className = {styles.container}>
    <div className = {styles.container_box} >
    <SideBar />
    </div>
    <Container />
    </div>
    </div>
  )
}

export default Filter