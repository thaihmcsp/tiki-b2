import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import style from './submitVarient.module.css'
const onChange1 = (e) => {
    // console.log('Change:', e.target.value);
  };
  const onChange2 = (checked) => {
    // console.log(`switch to ${checked}`);
  };
  const onChange = (value) => {
    // console.log('changed', value);
  };
function TdList({data,option1}) {
  return (
    <>
    {data.map((item,index)=>{
        if(index==0){
            return(
                <tr className={style.tr_varient} id={`TR_option${index}`}>
                    <td rowSpan={data.length} >
                        <div className={[style.Varient_option,'firstOption'].join(' ')} >
                            {option1}
                        </div>
                    </td>
                    <td>
                        <div className={[style.Varient_option,'secondOption'].join(' ')} >
                            {item}
                        </div>
                    </td>  
                    <td>
                        <div className='Add_price__varient'>
                                <button>
                                    <span className='Add_Money'>
                                        VND
                                    </span>
                                    
                                    <InputNumber min={0}onChange={onChange} placeholder='Giá' className='Add_price__input-varient'/>
                                </button>
                        </div>
                    </td>
                    <td>
                        <div className='Add_special__price'>
                            <InputNumber min={0}onChange={onChange} className='Input_special__price'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_storege-btn'>
                            <InputNumber min={0}onChange={onChange} className='Input_add__storage'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_Sku'>
                            <Input showCount maxLength={200} onChange={onChange1} placeholder='Seller SKU' className='Input_Seller_sku'/>
                        </div>
                    </td>
                    <td>
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')}/>
                    </td>
                </tr>
            )
        }else{

            return(
                <tr className={style.tr_varient}>
                    <td>
                        <div className={[style.Varient_option,'secondOption'].join(' ')}>
                            {item}
                        </div>
                    </td>  
                    <td>
                        <div className='Add_price__varient'>
                                <button>
                                    <span className='Add_Money'>
                                        VND
                                    </span>
                                    
                                    <InputNumber min={0}onChange={onChange} placeholder='Giá' className='Add_price__input-varient'/>
                                </button>
                        </div>
                    </td>
                    <td>
                        <div className='Add_special__price'>
                            <InputNumber min={0}onChange={onChange} className='Input_special__price'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_storege-btn'>
                            <InputNumber min={0}onChange={onChange} className='Input_add__storage'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_Sku'>
                            <Input showCount maxLength={200} onChange={onChange1} placeholder='Seller SKU' className='Input_Seller_sku'/>
                        </div>
                    </td>
                    <td>
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')}/>
                    </td>
                </tr>
            )
        }
    })}
  </>
  )
}

export default TdList