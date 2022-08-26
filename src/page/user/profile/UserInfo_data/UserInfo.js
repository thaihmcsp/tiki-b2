import React from 'react';
import styles from './UserInfor.module.css';
import data from './data';
import DataDay from './DataDay';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import DataMonth from './DataMonth';
import Countries from './Countries';
import { Link } from 'react-router-dom';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};
function UserInfo() {
  return (
  <div className= {styles.userInfomation}>
    <>
      <Modal title="Cập nhật ảnh đại diện" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
      </Modal>
    </>
      <div className= {styles.acountForm}>
        <div>Thông tin cá nhân</div>
        <div className= {styles.formInfor}>
          <div className= {styles.formAvatar}>
            <div className= {styles.avatarView}>
              <img
              className={styles.avatar}
                src={user.avatar.startsWith('http') ? user.avatar : 'https://tiki.thaihm.site/'+user.avatar}
                alt='avatar'
              />
            </div>
            <div className={styles.edit}>
              <img onClick={showModal}
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
                defaultValue={user.fullname}
                placeholder='Thêm họ tên'
                id='first_last_name'
              />
            </div>
            <div className= {styles.formControl}>
              <p className={styles.formP}> Nickname</p>
              <input
                type='text'
                className= {styles.formInput}
                defaultValue={user.username}
                id='adusername'
              />
            </div>
          </div>
        </div>
        <div className= {styles.formDatetime} >
          <div className= {styles.formDate}>
              <p>Ngày sinh</p>
              <select className={styles.formDatetimeInput} id='datetime'>
                {data.map(function (data) {
                  if(new Date(user.dateOfBirth).getFullYear() === data){
                    return <option value={data} selected>{data}</option>;
                  }else{
                    return <option value={data}>{data}</option>;
                  }
                })}
              </select>
          </div>
          
          <div>
            <select className={styles.formDatetimeInput} id='dataMonth'>
              {DataMonth.map(function (DataMonth) {
                if(new Date(user.dateOfBirth).getMonth()+1 === DataMonth){
                  return <option value={DataMonth} selected>{DataMonth}</option>;
                }else{
                  return <option value={DataMonth} >{DataMonth}</option>;
                }             
              })}
            </select>
          </div>
          <div >
            <select className= {styles.formDatetimeInput} id='dataDay'>
              {DataDay.map(function (DataDay) {
                if(new Date(user.dateOfBirth).getDate() === DataDay){
                  return <option value={DataDay} selected>{DataDay}</option>;
                }else{
                  return  <option Value={DataDay}>{DataDay}</option>;;
                }    
              })}
            </select>
          </div>
        </div>
        <div className= {styles.formRadio}>
          <p>Giới tính</p>
          <Radio.Group name='radiogroup' defaultValue={user.sex}>
            <Radio id='male' value={'male'}>Nam</Radio>
            <Radio id='female' value={'female'}>nữ</Radio>
            <Radio id= 'other' value={'other'}>Khác</Radio>
          </Radio.Group>
        </div>
        <div className= {styles.formCountries}>
          <p>Quốc tịch</p>
          <select id='formCountriesInput'>
            {Countries.map(function (Countries) {
              if(user.nationality === Countries){
                return <option value={Countries} selected>{Countries}</option>;
              }else{
              return <option value={Countries}>{Countries}</option>;}
            })}
          </select>
        </div>
        <div ><button onClick={handleUpdate} id={styles.formButton}>Lưu thay đổi</button></div>
      </div>
    </div>
  );
}

export default UserInfo;
