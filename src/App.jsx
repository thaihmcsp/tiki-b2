import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateShop from './page/user/createShop/createShop'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/create-shop' element={<CreateShop/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
