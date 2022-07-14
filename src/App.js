import 'antd/dist/antd.css';
import './App.css';
import ProfileList from './page/user/profile/ProfileLeft/ProfileList';
import ProfileListHeader from './page/user/profile/ProfileLeft/ProfileListHeader';
import Profile from './page/user/profile/ProfileManu/ProfileMenu';
import UserInfo from './page/user/profile/UserInfo_data/UserInfo';

function App() {
  return (
    <div className='App'>
      <div className= 'userInformation'>
      <Profile />
      <div>
        < ProfileListHeader/>
      <div className='profile'>
      <UserInfo />
      <ProfileList/>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
