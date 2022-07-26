import React, { useState } from 'react';
import {
  RightOutlined,
  BellFilled,
  EnvironmentFilled,
} from '@ant-design/icons';
import { listIcon } from './listIcon';
import styles from'./Profile.module.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuUserIcon from './MenuUserIcon';
import { Button, Drawer, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import MenuIcon from '@mui/icons-material/Menu';

function Profile() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div >
      <div className="manuListSmartPhone">
      <Space>
        <Radio.Group value={placement} onChange={onChange}></Radio.Group>
        <MenuIcon type='primary' onClick={showDrawer}></MenuIcon>
      </Space>
      <Drawer
        // title='Basic Drawer'
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <div className={styles.header}>
          <MenuUserIcon
            title2='Trang chủ'
            icon={<RightOutlined />}
            children='Thông tin tài khoản'
          />
        </div>
        <div className= {styles.account}>
          <MenuUserIcon icon={listIcon[1]}>
            <div className='info-account'>
              <span>Tài khoản của</span>
              <br />
              <strong>Trung Thành</strong>
            </div>
          </MenuUserIcon>
        </div>
        <div className= {styles.headerList}>
          <MenuUserIcon
            icon={<PersonRoundedIcon />}
            title='Thông tin tài khoản'
          />
          <MenuUserIcon icon={<BellFilled />} title='Thông báo của tôi' />
          <MenuUserIcon icon={listIcon[2]} title='Quản lý đơn hàng' />
          <MenuUserIcon icon={listIcon[3]} title='Quản lý đổi trả' />
          <MenuUserIcon icon={<EnvironmentFilled />} title='Sổ địa chỉ' />
          <MenuUserIcon icon={listIcon[5]} title='Thông tin thanh toán' />
          <MenuUserIcon icon={listIcon[6]} title='Nhận xét sản phẩm đã mua' />
          <MenuUserIcon icon={listIcon[8]} title='Nhận xét của tôi' />
          <MenuUserIcon icon={listIcon[9]} title='Mã giảm giá' />
          <MenuUserIcon icon={listIcon[7]} title='Quản lý Tiki Xu của tôi' />
          <MenuUserIcon icon={listIcon[10]} title='BookCare của tôi' />
        </div>
      </Drawer>
      </div>
      <div className={styles.manuUserContainer}>
        <div className={styles.header}>
          <MenuUserIcon
            title2='Trang chủ'
            icon={<RightOutlined />}
            children='Thông tin tài khoản'
          />
        </div>
        <div className={styles.account}>
          <MenuUserIcon icon={listIcon[1]}>
            <div>
              <span>Tài khoản của</span>
              <br />
              <strong>Trung Thành</strong>
            </div>
          </MenuUserIcon>
        </div>
        <div className={styles.headerList}>
          <MenuUserIcon
            icon={<PersonRoundedIcon />}
            title='Thông tin tài khoản'
          />
          <MenuUserIcon icon={<BellFilled />} title='Thông báo của tôi' />
          <MenuUserIcon icon={listIcon[2]} title='Quản lý đơn hàng' />
          <MenuUserIcon icon={listIcon[3]} title='Quản lý đổi trả' />
          <MenuUserIcon icon={<EnvironmentFilled />} title='Sổ địa chỉ' />
          <MenuUserIcon icon={listIcon[5]} title='Thông tin thanh toán' />
          <MenuUserIcon icon={listIcon[6]} title='Nhận xét sản phẩm đã mua' />
          <MenuUserIcon icon={listIcon[8]} title='Nhận xét của tôi' />
          <MenuUserIcon icon={listIcon[9]} title='Mã giảm giá' />
          <MenuUserIcon icon={listIcon[7]} title='Quản lý Tiki Xu của tôi' />
          <MenuUserIcon icon={listIcon[10]} title='BookCare của tôi' />
        </div>
      </div>
    </div>
  );
}

export default Profile;
