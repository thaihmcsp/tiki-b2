import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateShop from './page/user/createShop/createShop'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Header from './components/Header';
import Filter from './page/user/filter/Filter';
import Home from './page/user/home/Home';
import ShopDashBoardAll from './page/shop/dashboard/ShopDashBoardAll';
import Product from './page/shop/productManagement/Product.js';
import Profile from './page/user/profile/ProfileManu/ProfileMenu';
import ProfileList from './page/user/profile/ProfileLeft/ProfileList';
import ProfileListHeader from './page/user/profile/ProfileLeft/ProfileListHeader';
import UserInfo from './page/user/profile/UserInfo_data/UserInfo';
import './App.css';
import UserInfoMenu from './page/user/profile/UserInfoMenu';
import AdminLogin from './page/admin/login/Login';
import ShopLogin from './page/shop/login/Login';
import Order from './page/user/order/maintotal/Main';
import Odertotal from './page/user/order/ordertotal/Odertotal';
import PrivateRouter from './components/PrivateRouter';

function App() {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  console.log(39, getCookie('tiki-user'))
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path='/sign-up' element={<SignUp/>} />
     
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-in-admin' element={<AdminLogin/>} />
            <Route path='/sign-in-shop' element={<ShopLogin/>} />
            <Route path='/create-shop' element={<CreateShop/>}/>
            <Route path='/creat-order' element={<Order/>}/>
            <Route path='/' element={<Header/>}> 
                <Route path='/' element={<Home/>} />
                <Route path='/filter' element={<Filter/>}/>
                <Route path='/shop/dashboard' element={<ShopDashBoardAll/>} />
                <Route path='/shop/product/manage' element={<Product />} />
                <Route path='/user' element={<UserInfoMenu/>}> 
                    <Route path='/user/profile' element={ <div className='profile'> <UserInfo /> <ProfileList/> </div> } />
                </Route>
            </Route>
            {/* ///private */}
            <Route path='*'
             element={<SignIn/>}/>
             
             <Route path='/user' element={<UserInfoMenu/>}> 
                  <Route exact path='/user/profile' element={<PrivateRouter/>}>
                        <Route exact path='/user/profile' element={ <div className='profile'> <UserInfo /> <ProfileList/> </div> }/>
                  </Route>
              </Route>
            
            
        </Routes>
    </BrowserRouter>
  );
}
export default App;
