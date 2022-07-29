import "antd/dist/antd.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import ShopDashboard from "./page/shop/dashboard/ShopDashboard";
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
function App() {
  return (
    <div className="App">
      <AddItem />
    </div>
  );
}

export default App;
