import React, { useEffect, useState } from 'react';
import OrderHeader from '../header/OrderHeader';
import Main_Left from '../main/main_Left/Main_Left';
import Main_Right from '../main/main_Right/Main_Right';
import './StyleMain.css'
import { Data } from './Data';

function Main() {
    const [money,setMoney] = useState(0)
    const [product, setProduct] = useState(Data)
     
        useEffect(()=>{
            let total=0;
            for(let i=0;i<product.listOrder.length; i++){
                for(let j=0; j<product.listOrder[i].listProduct.length;j++ ){
                    total += 
                    product.listOrder[i].listProduct[j].quantity
                    * product.listOrder[i].listProduct[j].productDetailId.price
                }
            }
            setMoney(total)
        },[product])
         
   
    return (
        <div className='main'>
            <OrderHeader/>
            <main style={{background:'#F5F5FA'}}>
                    <div className="hfMLFx elPTRG">
                            <Main_Left  data={Data}
                             />
                            <Main_Right data={Data} money={money}/>
                    </div>
            </main>
        </div>
    );
}

export default Main;