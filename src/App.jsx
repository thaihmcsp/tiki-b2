import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateShop from './page/user/createShop/createShop'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/create-shop' element={<CreateShop/>}/>
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
