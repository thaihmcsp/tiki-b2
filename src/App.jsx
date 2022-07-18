import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateShop from './page/user/createShop/createShop'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Header from './components/Header';
import Filter from './page/user/filter/Filter';
import Home from './page/user/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/create-shop' element={<CreateShop/>}/>
            <Route path='/' element={<Header/>}> 
                <Route path='/filter' element={<Filter/>}/>
                <Route path='/' element={<Home/>} />
            </Route>
            <Route path='*' element={<h1>error 404. not found</h1>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
