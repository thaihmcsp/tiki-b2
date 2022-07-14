import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateShop from './page/user/createShop/createShop'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<PageWithHeaderFooter/>}/>
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/create-shop' element={<CreateShop/>}/>
        </Routes>
    </BrowserRouter>
  );
}

function PageWithHeaderFooter () {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/test' element={<h1>test</h1>}/>
                <Route path='*' element={<h1>error 404. not found</h1>}/>
            </Routes>
        </>
    )
}

export default App;
