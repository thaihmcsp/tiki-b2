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
import Product1 from './page/shop/productManagement/Product1.js';
import Profile from './page/user/profile/ProfileManu/ProfileMenu';
import ProfileList from './page/user/profile/ProfileLeft/ProfileList';
import ProfileListHeader from './page/user/profile/ProfileLeft/ProfileListHeader';
import UserInfo from './page/user/profile/UserInfo_data/UserInfo';
import Shop from '.././src/page/admin/shopManagement/Shop'
import './App.css';
import UserInfoMenu from './page/user/profile/UserInfoMenu';
import Category from './page/admin/categoryManagement/Category';
import User from './page/admin/userManagement/User';
import Order from './page/user/order/Order';
import Detail from './page/user/detail/Detail';
import ShopProfile from './page/shop/shopProfile/ShopProfile';
import Product from './page/shop/productManagement/Product';
import Datatest from './page/user/order/Datatest';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/create-shop' element={<CreateShop />} />
                <Route path='/admin' element={<Admin />} >
                    <Route path='category' element={<Category />} />
                    <Route path='shop' element={<Shop />}></Route>
                    <Route path='user' element={<User />}></Route>
                </Route>
                <Route path='/shop' element={<Product />} >
                    <Route path='/shop/dashboard' element={<ShopDashBoardAll />} />
                    <Route path='/shop/profile' element={<ShopProfile />} />
                </Route>
                <Route path='/shop/product/manage' element={<Product1 />} />
                <Route path='/' element={<Header />}>
                    <Route path='product' element={<Detail />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/user' element={<UserInfoMenu />}>
                        <Route path='profile' element={<div className='profile'> <UserInfo /> <ProfileList /> </div>} />
                        <Route path='order' element={<div className='order'><Order /></div>} />
                    </Route>
                </Route>
                <Route path='*' element={<h1>error 404. not found</h1>} />
            </Routes>

        </BrowserRouter>
    );
}
export default App;
