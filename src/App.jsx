import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateShop from './page/user/createShop/createShop'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Header from './components/Header';
import Filter from './page/user/filter/Filter';
import Home from './page/user/home/Home';
import Admin from './page/admin/Admin';
import 'antd/dist/antd.css';
import ShopDashBoardAll from './page/shop/dashboard/ShopDashBoardAll';
import Product from './page/shop/productManagement/Product.js';
import Profile from './page/user/profile/ProfileManu/ProfileMenu';
import ProfileList from './page/user/profile/ProfileLeft/ProfileList';
import ProfileListHeader from './page/user/profile/ProfileLeft/ProfileListHeader';
import UserInfo from './page/user/profile/UserInfo_data/UserInfo';
import './App.css';
import UserInfoMenu from './page/user/profile/UserInfoMenu';
import Category from './page/admin/categoryManagement/Category';
import User from './page/admin/userManagement/User';
import AdminLogin from './page/admin/login/Login';
import ShopLogin from './page/shop/login/Login';
import Order from './page/user/order/maintotal/Main';
import ShopHome from './page/shop/shopHome/ShopHome';
import Shop from './page/admin/shopManagement/Shop';
import Detail from "./page/user/detail/Detail";
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
import PrivateRouter from './components/PrivateRouter';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path='/sign-up' element={<SignUp/>} />
     
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-in-admin' element={<AdminLogin/>} />
            <Route path='/sign-in-shop' element={<ShopLogin/>} />
            <Route path='/create-shop' element={<CreateShop/>}/>
            <Route path='/admin' element={<Admin/>} >
                <Route path='category' element={<Category/>} />
                <Route path='shop' element={<Shop/>}></Route>
                <Route path='user' element={<User/>}></Route>

            </Route>
            <Route path='/' element={<Header/>}> 
                <Route path='/' element={<Home/>} />
                <Route path='/filter' element={<Filter/>}/>
                <Route path='/shop/dashboard' element={<ShopDashBoardAll/>} />
                <Route path='/shop/product/manage' element={<Product />} />
                <Route path='/user' element={<UserInfoMenu/>}> 
                    <Route path='/user/profile' element={ <div className='profile'> <UserInfo /> <ProfileList/> </div> }/>
                    <Route path='/user/order' element={ <div className='order'><Order/></div> } />
                </Route>
                <Route path='/ShopHome' element={<ShopHome/>}/>
                <Route path='/shop' element={<Shop></Shop>}/>
                <Route path='/detail' element={<Detail />}/>
            </Route>
            <Route path="/addItem" element={<AddItem/>}/>
            {/* ///private */}

            <Route path='/admin' element={<Admin/>} >
              <Route path='/admin/category' element={ <Category /> } />
            </Route>

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
