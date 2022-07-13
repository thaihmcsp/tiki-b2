import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import styles from './Breadcrumb.module.css'
const Breadcrumb = () => {
  return (
    <div className={styles.container}>
        <a href='#' className={styles.link}>Trang chủ
        </a>
        <RightOutlined style={{fontSize:'0.8rem', color: 'rgb(128, 128, 137)', padding:'0 8px 0 6px'}}/>
        <span className={styles.name}>Làm Đẹp - Sức Khỏe</span>
    </div>
  )
}

export default Breadcrumb