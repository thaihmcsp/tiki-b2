import React, { useEffect, useState } from 'react'
import style from '../userlist/UserList.module.css'
const RefuseUser = (id,newdata,listdata)=> { 
   let index = newdata.findIndex((value)=> value.Userid === id);
    let clone = [...newdata]
    clone[index].status = 'block';
    listdata(clone);
}
const UnblockUser = (id,newdata,listdata)=> {
    let index = newdata.findIndex((value)=> value.Userid === id);
    let clone = [...newdata]
    clone[index].status = 'active';
    listdata(clone);
}
const BlockUser = (id,newdata,listdata)=> {
    let index = newdata.findIndex((value)=> value.Userid === id);
    let clone = [...newdata]
    clone[index].status = 'block';
    listdata(clone);
}
function Active (props) {
    return (
        <div>
            <button className= {style.Option_Active}>Send Message</button>
            <button className= {style.Option_Active} onClick = {()=>{BlockUser(props.id,props.newdata,props.setnewListdata)}}>Block</button>
        </div>
    )
}

function Block (props) {
    return (
        <div>
            <button className= {style.Option_Block} onClick = {()=>{UnblockUser(props.id,props.newdata,props.setnewListdata)}}>UnBlock</button>
        </div>

    )
}
function UserList(props) {
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
                        if( new Date(after.datejoin) > new Date(before.datejoin)) {
                            return -1
                        }
                    }
                })
            if(props.Userstatus.length === 0) {
                setData(props.newListdata)  
                setdataPagination(props.newListdata.slice(props.start,props.start+5)) 
            } else {
                setData(newdata.filter((value) => value.status === props.Userstatus))
                setdataPagination(newdata.filter((value) => value.status === props.Userstatus).slice(props.start,props.start+5)) 
            }
     },[props.newListdata,props.start])
    
  return (
    <div className={style.Userlist}> 
        {dataPagination.map((value, index)=>{
            return <div className= {style.ShowUserdata}>
                <div className={style.ListUserProfile}>
                    <div className={style.User_ProfileLeft}>
                        <img src={value.avatar} alt="" />
                        <h4>
                            {value.name}
                        </h4>
                    </div>
                    <div className={style.UserID}>
                        <h4 className={style.UserIDtext}>
                          <span style = {{fontWeight: '400', color : 'black'}}>Trạng Thái : </span>
                          {value.status}
                        </h4>

                    </div>
                </div>
                <div className={style.SetUserOptions}>
                    <div className={style.Time_UserStart}>
                        <span>Date Join :</span>{value.datejoin}
                    </div>
                    <div className={style.Options}>
                        {value.status === 'active' ? <Active id={value.Userid} newdata={props.newListdata} setnewListdata = {props.setnewListdata} /> : null}
                        {value.status === 'block' ? <Block UnblockUser = {UnblockUser} id={value.Userid} newdata={props.newListdata} setnewListdata = {props.setnewListdata} /> : null}              
                    </div>
                </div>
            </div>
        })}
    </div>
  )
}

export default UserList