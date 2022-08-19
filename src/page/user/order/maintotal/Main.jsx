import React, { useEffect, useState } from 'react';
import OrderHeader from '../header/OrderHeader';
import Main_Left from '../main/main_Left/Main_Left';
import Main_Right from '../main/main_Right/Main_Right';
import './StyleMain.css'
import { Data } from './Data';
import { Routes, Route, useParams } from 'react-router-dom';
import { getAPI } from '../../../../config/api';
function Main() {
        ///////////////////
        const [order, setOrder] = useState([])

        let { orderId } = useParams();  
        //gộp data cũ thành data mới      
        useEffect(()=>{
           async function  temps (){
            try {
                const cart = await getAPI('/cart/get-loged-in-cart')
                const Cart = cart.data.cart.listProduct
                console.log(19,Cart)
                const orderList=[]
                const shopName=[]
                Cart.map((value) => {
                    const shopname = value.productDetailId.productId.shopId.shopName
                    //lọc tránh trùng shop,nếu shop nào trùng nó k lọc qua nữa
                    if(!shopName.includes(shopname)){
                        shopName.push(shopname);
                        //tifm những shopName trùng nhau gộp vào 1 mảng
                        const data = Cart.filter(item=>{
                            return item.productDetailId.productId.shopId.shopName === shopname
                        })
                        const element = {
                            shopname: shopname,
                            listProduct: data
                        }
                        orderList.push(element);
                    }
                })
               
                console.log(46,orderList)
                setOrder(orderList)
                    
            } catch (error) {
                console.log(error)
            }        
            }
              temps();  
            }
            
            
        ,[])
      
    
        const [money,setMoney] = useState(0)
        const [product, setProduct] = useState(0)

    console.log(12, order)
    useEffect(()=>{
        let total=0;
        for(let i=0;i<order.length; i++){
            for(let j=0; j<order[i].listProduct.length;j++ ){
                total += 
                order[i].listProduct[j].quantity
                * order[i].listProduct[j].productDetailId.price
            }
        }
        setMoney(total)
    },[order])
   
    return (
        <div className='main'>
            <OrderHeader/>
            <main style={{background:'#F5F5FA'}}>
                    <div className="hfMLFx elPTRG">
                            <Main_Left  data={order}
                             />
                            <Main_Right data={order} money={money}/>
                    </div>
            </main>
        </div>
    );
}

export default Main;