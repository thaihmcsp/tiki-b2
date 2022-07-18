import React from 'react';
import ProfileManuLeft from './ProfileManuLeft';
import styles from './ProfileLeft.module.css';
function ProfileList() {
  return (
    <div className= {styles.ProfileList} >
      <ProfileManuLeft  header='Số điện thoại và Email' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png',
          title:'Số điện thoại',
          title1:'0981118282',
          button:'Cập nhật'
        },
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png',
          title:'Địa chỉ email',
          title1:'Thêm địa chỉ email',
          button:'Cập nhật'
        },
      ]}/>      
       <ProfileManuLeft  header='Bảo mật' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png',
          title:'Đổi mật khẩu',
          button:'Cập nhật'
        },
      ]}/>
       <ProfileManuLeft  header='Liên kết mạng xã hội' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png',
          title:'Facebook',
          button:'Liên kết'
        },
      ]}/>
       <ProfileManuLeft  header='Bảo mật' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png',
          title:'Google',
          button:'Liên kết'
        },
      ]}/>
    </div>
  );
}

export default ProfileList;
