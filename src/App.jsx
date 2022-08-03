import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateShop from "./page/user/createShop/CreateShop";
import SignUp from "./page/user/signUp/SignUp";
import SignIn from "./page/user/signIn/SignIn";
import Header from "./components/Header";
import Filter from "./page/user/filter/Filter";
import Home from "./page/user/home/Home";
import Admin from "./page/admin/Admin";
import "antd/dist/antd.css";
import ShopDashBoardAll from "./page/shop/dashboard/ShopDashBoardAll";
import Product1 from "./page/shop/productManagement/Product1.js";
import Profile from "./page/user/profile/ProfileManu/ProfileMenu";
import ProfileList from "./page/user/profile/ProfileLeft/ProfileList";
import ProfileListHeader from "./page/user/profile/ProfileLeft/ProfileListHeader";
import UserInfo from "./page/user/profile/UserInfo_data/UserInfo";
import "./App.css";
import UserInfoMenu from "./page/user/profile/UserInfoMenu";
import Category from "./page/admin/categoryManagement/Category";
import ManagementProduct from "./page/shop/productManagement/ManagementProduct ";
import Product from "./page/shop/productManagement/Product";
import Order from './page/shop/orderManagement/orderContainer/OrderContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-shop" element={<CreateShop />} />
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/shop/dashboard" element={<ShopDashBoardAll />} />
          <Route path="/shop/product/manage" element={<Product1 />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user" element={<UserInfoMenu />}>
            <Route
              path="/user/profile"
              element={
                <div className="profile">
                  {" "}
                  <UserInfo /> <ProfileList />{" "}
                </div>
              }
            />
          </Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/category" element={<Category />} />
        </Route>
        <Route path="/admshop" element={<Product />}>
          <Route path="products" element={<ManagementProduct />}></Route>
        </Route>
        <Route path="*" element={<h1>error 404. not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
