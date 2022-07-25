import React from 'react';
import styles from './UserInfor.module.css';
import data from './data';
import DataDay from './DataDay';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import DataMonth from './DataMonth';
import Countries from './Countries';

function UserInfo() {
  return (
    <div className= {styles.userInfomation}>
      <div className= {styles.acountForm}>
        <div>Thông tin cá nhân</div>
        <div className= {styles.formInfor}>
          <div className= {styles.formAvatar}>
            <div className= {styles.avatarView}>
              <img
                src='https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png'
                alt='avatar'
                class='default'
              />
            </div>
            <div className={styles.edit}>
              <img
                src='https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png'
                class='edit_img'
                alt=''
              />
            </div>
          </div>
          <div className= {styles.formName}>
            <div className=  {styles.formControl}>
              <p className= {styles.formP}> Họ Và tên</p>
              <input
                type='text'
                className= {styles.formInput}
                placeholder='Thêm họ tên'
              />
            </div>
            <div className= {styles.formControl}>
              <p className={styles.formP}> Nickname</p>
              <input
                type='text'
                className= {styles.formInput}
                placeholder='Thêm nickname'
              />
            </div>
          </div>
        </div>
        <div className= {styles.formDatetime}>
          <div className= {styles.formDate}>
            <p>Ngày sinh</p>
            <select className= {styles.formDatetimeInput}>
              {DataDay.map(function (DataDay) {
                return <option value={DataDay}>{DataDay}</option>;
              })}
            </select>
          </div>
          <div>
            <select className={styles.formDatetimeInput}>
              {DataMonth.map(function (DataMonth) {
                return <option value={DataMonth}>{DataMonth}</option>;
              })}
            </select>
          </div>
          <div>
            <select className={styles.formDatetimeInput}>
              {data.map(function (data) {
                return <option value={data}>{data}</option>;
              })}
            </select>
          </div>
        </div>
        <div className= {styles.formRadio}>
          <p>Giới tính</p>
          <Radio.Group name='radiogroup' defaultValue={1}>
            <Radio value={1}>Nam</Radio>
            <Radio value={2}>nữ</Radio>
            <Radio value={3}>Khác</Radio>
          </Radio.Group>
        </div>
        <div className= {styles.formCountries}>
          <p>Quốc tịch</p>
          <select id={styles.formCountriesInput}>
            {Countries.map(function (Countries) {
              return <option value={Countries}>{Countries}</option>;
            })}
          </select>
        </div>
        <div ><button id={styles.formButton}>Lưu thay đổi</button></div>
      </div>
    </div>
  );
}

export default UserInfo;
