import "./App.css";
import CreateShop from "./page/user/createShop/createShop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManagementProduct from "./page/shop/productManagement/ManagementProduct ";
import Product from "./page/shop/productManagement/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/createShop" element={<CreateShop />}></Route>
          <Route path="/admshop" element={<Product />}>
            <Route path="products" element={<ManagementProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
