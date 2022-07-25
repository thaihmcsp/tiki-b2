import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Oder from './page/user/order/Order';
import Shop from './page/admin/shopManagement/Shop';
import User from './page/admin/userManagement/User';

function App() {
  return (
    <div className="App">
      <Shop></Shop>
    </div>
  );
}

export default App;
