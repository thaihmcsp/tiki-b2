import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import style from './submitVarient.module.css'
import './subList.css'
import TdList from './TdList'
const onChange = (value) => {
    console.log('changed', value);
  };
  const onChange1 = (e) => {
    console.log('Change:', e.target.value);
  };
  const onChange2 = (checked) => {
    console.log(`switch to ${checked}`);
  };
function SubListVarient({varient,mainInfo}) {
  console.log(18,mainInfo)
  useEffect(() => {
    const addPrice = document.querySelectorAll('.Add_price__input-varient .ant-input-number-input')
    const addSpecialPrice = document.querySelectorAll('.Input_special__price .ant-input-number-input')
    const addQuantity = document.querySelectorAll('.Input_add__storage .ant-input-number-input')
    const addSKU = document.querySelectorAll('.Input_Seller_sku .ant-input')
    const firstOption = document.querySelectorAll('.firstOption')
    const secondOption = document.querySelectorAll('.secondOption')
    console.log(26,firstOption,secondOption)

    // console.log(28,[...firstOption][0].innerHTML,addSKU)
    if(firstOption.length > 0){
        if(secondOption.length > 0){
            const numberScale = secondOption.length/firstOption.length
            console.log(32, numberScale)
            if(numberScale == 1){
                {[...addSKU].map((item, index) =>{
                    return item.value = `${mainInfo.mainSKU}-${[...firstOption][index].innerHTML}-${[...secondOption][index].innerHTML}`
                })}
            }else{
                {[...addSKU].map((item, index) =>{
                    const indexFirst = Math.floor((index)/numberScale)
                    console.log(40,indexFirst)
                    
                    return item.value = `${mainInfo.mainSKU}-${[...firstOption][indexFirst].innerHTML}-${[...secondOption][index].innerHTML}`
                })}
            }
        }else{
            {[...addSKU].map((item, index) =>{
                return item.value = `${mainInfo.mainSKU}-${[...firstOption][index].innerHTML}`
            })}
        }
    }
    {[...addPrice].map((item, index) =>{
        return item.value = mainInfo.mainPrice*1
    })}
    {[...addSpecialPrice].map((item, index) =>{
        return item.value = mainInfo.mainSpecialPrice*1
    })}
    {[...addQuantity].map((item, index) =>{
        return item.value = mainInfo.mainStorage*1
    })}
   

  },[mainInfo])
  
  return (
    <div className={style.SubListVarient}>
        <table className={style.Table_AddVarient}>
            <tr className={style.header}>
                {varient[0].option.length>0 && <th className={style.varient}>{varient[0].key}</th>}
                {varient[1].option.length>0 && <th className={style.varient}>{varient[1].key}</th>}
                <th className={style.price}>Giá *</th>
                <th className={style.special_Price}>Giá đặc biệt</th>
                <th className={style.storage}>Kho hàng</th>
                <th className={style.productSKU}>SellerSKU</th>
                <th className={style.sell}>Mở bán</th>
            </tr>
            {varient[0].option.length>0 &&  varient[0].option.map(option1=>{
                if(varient[1].option.length>0){
                    if(varient[1].option.length == 1){
                        return(
                        <tr className={style.tr_varient}>
                            <td>
                                <div className={[style.Varient_option,'firstOption'].join(' ')}>
                                    {option1}
                                </div>
                            </td>
                            <td>
                                <div className={[style.Varient_option,'secondOption'].join(' ')}>
                                    {varient[1].option[0]}
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
                            <TdList option1={option1} data={varient[1].option}/>
                        )
                       
                    }
                    
                }else{
                    return(
                        <tr className={style.tr_varient}>
                            <td>
                                <div className={[style.Varient_option,'firstOption'].join(' ')}>
                                    {option1}
                                </div>
                            </td>
                           
                            <td>
                                <div className='Add_price__varient'>
                                        <button>
                                            <span className='Add_Money'>
                                                VND
                                            </span>
                                            
                                            <InputNumber min={0}onChange={onChange} placeholder='Giá' className='Add_price__input-varient'
                                            />
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
            {varient[0].option.length == 0 && (
                <tr className={style.tr_varient}>
                    <td>
                        <div className='Add_price__varient'>
                                <button>
                                    <span className='Add_Money'>
                                        VND
                                    </span>
                                    
                                    <InputNumber min={0}onChange={onChange} 
                                    placeholder='Giá' 
                                    className='Add_price__input-varient'
                                   
                                    />
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
            )}
        </table>
    </div>
  )
}

export default SubListVarient