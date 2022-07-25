import React, { useState } from 'react'
import Category from './categoryManagement/Category'
import ManuAdmin from './manuAdmin/ManuAdmin'
import styles from './Admin.module.css'

function Admin() {
  const [data, setData] = useState('')
  return (
    <div className={styles.admin}>
        { <ManuAdmin setData= {setData}/>}
        <Category data = {data}/>
    </div>
    
  )
}

export default Admin