import { Radio, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import './colectionProduct.css'
import style from './colectionProduct.module.css'
import data from '../../../shopProductData/data';
import ListDataColection from './listDataColection/ListDataColection';


const { TabPane } = Tabs;

function ColectionProduct() {
    const [listData,setListData] = useState([])

    useEffect(function(){
        setListData(data.product)
    },[data])

    const [tabPosition, setTabPosition] = useState('left');

    useEffect(function(){
        if(window.innerWidth <= 768){
            setTabPosition('top')
        }else{
            setTabPosition('left')
        }
    },[window.innerWidth])

    const changeTabPosition = (e) => {
      setTabPosition(e.target.value)};
  return (
    <div className={style.ColectionProduct}>
       
        <>
            <Tabs tabPosition={tabPosition} className='tab_colection'>
                {listData.map((colection,index)=>{
                    return(
                        <TabPane tab={colection.title} key={`${index}`}>
                            <ListDataColection data={colection.product}/>
                        </TabPane>
                    )
                })}
            </Tabs>
        </>
    </div>
  )
}

export default ColectionProduct