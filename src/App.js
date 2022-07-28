import "antd/dist/antd.css";
import { Routes,BrowserRouter,Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
import Product from "./page/shop/productManagement/Product";
=======

import ShopDashboard from "./page/shop/dashboard/ShopDashboard";
>>>>>>> b702c11123f77589944ba982ed3db1787d78d771
function App() {
  
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
            
            <Route path="/addItem" element={<AddItem/>}/>
            <Route index element={<Product />}/>
        </Routes>
      </BrowserRouter>
=======
      <ShopDashboard />
>>>>>>> b702c11123f77589944ba982ed3db1787d78d771
    </div>
  );
}

export default App;
