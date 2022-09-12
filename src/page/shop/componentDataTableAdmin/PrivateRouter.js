import { Route, Navigate } from "react-router-dom";
// Redirect

function PrivateRouteShop({ children,sigin }) {
    const cookies =document.cookie
    const data = {}
    cookies.split(';').map(item=>{
        data[item.split('=')[0].trim()]=item.split('=')[1]
 
    })
    console.log({data},sigin)
    let login = false

    if(sigin == '/sign-up'){
        if(data[`tiki-user`]){
            login = true
        }else{
            login = false
        }
    }else if(sigin == '/sign-in-shop'){
        if(data[`tiki-shop`]){
            login = true
        }else{
            login = false
        }
    }else if(sigin == '/sign-in-admin'){    
        if(data[`tiki-admin`]){
            console.log('oke đã đăng nhập admin')
            login = true
        }else{
            console.log('chưa đang nhập admin')
            login = false
        }
    }
    return login ? children : <Navigate to={`${sigin}`} />;
}
export default PrivateRouteShop;