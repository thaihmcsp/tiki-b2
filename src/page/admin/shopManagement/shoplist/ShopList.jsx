import React, { useEffect, useState } from 'react'
import style from '../shoplist/ShopList.module.css'
function Pending (props) {
    return (
        <div>
            <button className= {style.Option_Pending}  onClick = {()=> {props.AccepctShop(props.id,props.newdata,props.setnewListdata)}} >Accept</button>
            <button className= {style.Option_Pending} onClick = {()=> {props.RefuseShop(props.id,props.newdata,props.setnewListdata)}} >Refuse</button>
        </div>
    )
}
const AccepctShop = (id,newdata,listdata)=> {
    let index = newdata.findIndex((value)=> value.Shopid === id);
    let clone = [...newdata]
    clone[index].status = 'active';
    listdata(clone);
}
const RefuseShop = (id,newdata,listdata)=> { 
   let index = newdata.findIndex((value)=> value.Shopid === id);
    let clone = [...newdata]
    clone[index].status = 'block';
    listdata(clone);
}
const UnblockShop = (id,newdata,listdata)=> {
    let index = newdata.findIndex((value)=> value.Shopid === id);
    let clone = [...newdata]
    clone[index].status = 'active';
    listdata(clone);
}
const BlockShop = (id,newdata,listdata)=> {
    let index = newdata.findIndex((value)=> value.Shopid === id);
    let clone = [...newdata]
    clone[index].status = 'block';
    listdata(clone);
}

function Active (props) {
    return (
        <div>
            <button className= {style.Option_Active}>Send Message</button>
            <button className= {style.Option_Active} onClick = {()=>{BlockShop(props.id,props.newdata,props.setnewListdata)}}>Block</button>
        </div>
    )
}

function Block (props) {
    return (
        <div>
            <button className= {style.Option_Block} onClick = {()=>{UnblockShop(props.id,props.newdata,props.setnewListdata)}}>UnBlock</button>
        </div>

    )
}
function ShopList(props) {
    const [data, setData] = useState([])
    const [dataPagination,setdataPagination] = useState([])
     useEffect(()=> {   
        let newdata = props.newListdata.sort((after, before)=> {
                    if(after.status.length < before.status.length) {
                        return 1
                    } 
                    if( after.status.length > before.status.length ) {
                        return -1
                    } else {
                        if( new Date(after.timestart) > new Date(before.timestart)) {
                            return -1
                        }
                    }
                })
            if(props.Shopstatus.length === 0) {
                setData(props.newListdata)   
                setdataPagination(props.newListdata.slice(props.start,props.start+5)) 
            } else {
                setData(newdata.filter((value) => value.status === props.Shopstatus))
                setdataPagination(newdata.filter((value) => value.status === props.Shopstatus).slice(props.start,props.start+5))
            }
     },[props.newListdata,props.start])
  return (
    <div className={style.Shoplist}> 
        {dataPagination.map((value, index)=>{
            return <div className= {style.ShowShopdata}>
                <div className={style.ListShopProfile}>
                    <div className={style.Shop_ProfileLeft}>
                        <img src={value.avatar} alt="" />
                        <h4>
                            {value.name}
                        </h4>
                    </div>
                    <div className={style.ShopID}>
                        <h4 className={style.ShopIDtext}>
                          <span style = {{fontWeight: '400', color : 'black'}}>Trạng Thái : </span>
                          {value.status}
                        </h4>

                    </div>
                </div>
                <div className={style.SetShopOptions}>
                    <div className={style.Time_ShopStart}>
                        <span>Applied on :</span>{value.timestart}
                    </div>
                    <div className={style.Options}>
                        {value.status === 'pending' ? <Pending AccepctShop={AccepctShop} id={value.Shopid} newdata={props.newListdata} setnewListdata = {props.setnewListdata}  RefuseShop = {RefuseShop}/>  : null}
                        {value.status === 'active' ? <Active id={value.Shopid} newdata={props.newListdata} setnewListdata = {props.setnewListdata} /> : null}
                        {value.status === 'block' ? <Block UnblockShop = {UnblockShop} id={value.Shopid} newdata={props.newListdata} setnewListdata = {props.setnewListdata} /> : null}              
                    </div>
                </div>
            </div>
        })}
    </div>
  )
}

export default ShopList