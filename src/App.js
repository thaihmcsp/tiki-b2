import "antd/dist/antd.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import ShopDashboard from "./page/shop/dashboard/ShopDashboard";
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
import Cart from "./page/user/cart/Cart";
function App() {
  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
