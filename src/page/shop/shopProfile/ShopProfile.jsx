import React from 'react'
import styles from '../../../.././src/page/shop/shopProfile/ShopProfile.module.css'
import 'antd/dist/antd.css';
import { InfoCircleOutlined, RightOutlined } from '@ant-design/icons';
function ShopProfile() {
    return (
        <div>
            <div className={styles.shopProfile_header}>
                <p className={styles.Shop_Profiletext}>
                    <span>Trang chủ</span>
                    <span><RightOutlined /></span>
                    <span>Cài đặt</span>
                    <span><RightOutlined /></span>
                    <span>Hồ sơ nhà bán hàng</span>
                </p>
                <h2>
                    Hồ Sơ Nhà Bán Hàng
                </h2>
            </div>
            <div className={styles.shopProfile}>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '15px 0 8px 0', fontSize: '16px' }}>ID của nhà bán hàng</p>
                    <p className={styles.profileshop_data}>okokok</p>
                </div>
                <div className={styles.Profile_Text} >
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }} >Họ Và Tên <InfoCircleOutlined /></p>
                    <p className={styles.profileshop_data} >Ngô Bá Khá</p>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Email liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p>Bakha2022@gmail.com</p>
                        <span>Sửa đổi</span>
                    </div>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Số điện thoại liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p>+837847383487</p>
                        <span>Sửa đổi   </span>
                    </div>
                </div>
                <div className={styles.Profile_Text} style={{ marginBottom: '25px' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Tên hiển thi <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p>Ngô Bá khá</p>
                        <span>Sửa đổi</span>
                    </div>
                </div>

            </div>
            <div className={styles.Profileshop_bottom}>
                <button>Sửa đổi</button>
            </div>
        </div>
    )
}

export default ShopProfile