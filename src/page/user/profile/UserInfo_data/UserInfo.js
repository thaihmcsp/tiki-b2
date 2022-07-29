import React from 'react';
import styles from './UserInfor.module.css';
import data from './data';
import DataDay from './DataDay';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import DataMonth from './DataMonth';
import Countries from './Countries';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import './userinfor.css';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
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
                src='https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png'
                alt='avatar'
                class='default'
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
