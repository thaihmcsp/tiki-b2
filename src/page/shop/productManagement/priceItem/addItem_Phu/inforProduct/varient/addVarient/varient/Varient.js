import React, { useState, Component,useRef } from 'react'
import { Select } from 'antd';
import { Checkbox } from 'antd';
import * as React1 from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './varient.module.css'
import './varient.css'
import Optional from './optional/Optional';
const { Option } = Select;
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

function SubVarient({index,setAddVarient,addVarient,option,setOption,Key,setKey,option2,setOption2,Key2}) {

  const handleDeleteVarient =(index)=>{
    if(window.confirm('Bạn có thực sự muốn xoá Biến thể này?')){
        if(index==0){
            setKey(Key2)
            setOption(option2)
            setOption2([])
        }
        if(index==1){
            setOption([])
        }
        setAddVarient(()=>{
            const newVarient = [...addVarient]
            newVarient.splice(index,1)
            return newVarient
        })
    }
  }

    const handleChangeAddOption = (e)=>{
        if(e.target.value != '' && e.key == 'Enter'){
            // console.log(e.target.value)
            const value = e.target.value
            setOption(()=>{
                const newData = [...option,value]
                return newData
            })
            e.target.value=''
        }

    }
    const handleSelectedChange=(value,option)=>{
        setKey(value)
    }
    console.log(38,option)
  return (
    <div className={style.SubVarient}>
        <h3>Biến thể {index+1}</h3>
        <label>
            <span>*</span> Tên biến thể:
            <Select
                className='Varient_Add'
                showSearch
                style={{
                width: 200,
                }}
                placeholder="Chọn biến thể"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())

                }
                defaultValue={Key}
                onChange={handleSelectedChange}
            >
                <Option value="Nhóm màu">Nhóm màu</Option>
                <Option value="Biến Thể">Biến Thể</Option>
            </Select>
        </label>
        <div className={style.all_varient}>
            <p>Tổng số biến thể</p>
            <div>
                <Checkbox onChange={onChange} className={style.Image_add}>Thêm ảnh</Checkbox>
                <span className={style.addImage}>Tối đa thêm 8 ảnh cho mỗi biến thể</span>
                {
                    option.map((option1,index)=>{
                        return(
                            <Optional option={option1} index={index}
                            key={index} 
                            setOption={setOption} optionAll={option} 
                            id = {index==option.length-1? 'Option_last-focus':'none'}
                            // {{index == option.length-1} && ref={inputRef}}

                            />
                        )
                    })
                }
                <div className={style.Add_option}>
                    <input type='text' placeholder='Vui lòng thêm biến thể'  className={style.input_option}
                    onKeyPress={(e)=>handleChangeAddOption(e)}
                    />
                </div>
            </div>
        </div>
        <span onClick={()=>handleDeleteVarient(index)} className={style.delete}>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
        </span>
    </div>
  )
}
  
export default SubVarient