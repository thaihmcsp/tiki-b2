import React, { useState } from 'react'
import styles from '../../../.././src/page/shop/shopProfile/ShopProfile.module.css'
import 'antd/dist/antd.css';
import { InfoCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
function ShopProfile() {
    const data = useSelector(state => state.user)
    console.log(data);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [checkModal, setcheckModal] = useState('');
    const showModal = (e) => {
        console.log(e.target.id)

        setIsModalVisible(true);
        if (e.target.id == 'ChangeEmail') {
            setcheckModal('ChangeEmail')
        } else if (e.target.id == 'ChangePhone') {
            setcheckModal('ChangePhone')
        } else {
            setcheckModal('ChangeName')
        }
    };
    function handleOk() {
        if (checkModal === 'ChangeEmail') {
            const OldEmail = document.getElementById('OldEmail').value;
            const NewEmail = document.getElementById('NewEmail').value;
            const RetypeNewEmail = document.getElementById('RetypeNewEmail').value;
            if (!OldEmail || !NewEmail || !RetypeNewEmail) {
                window.alert('Vui lòng nhập đủ thông tin')
            } else {
                if (OldEmail !== data.email) {
                    window.alert('Email sai')
                } else if (NewEmail !== RetypeNewEmail) {
                    window.alert('Email không trùng nhau')
                } if (OldEmail === data.email && NewEmail === RetypeNewEmail) {
                    setIsModalVisible(false);
                }

            }
        } else if (checkModal === 'ChangePhone') {
            const NewPhone = document.getElementById('NewPhone');
            console.log(typeof (NewPhone * 1))
            if (typeof (NewPhone * 1) === 'number') {
                if (!NewPhone) {
                    window.alert('Vui lòng nhập đủ thông tin')
                } else {

                    setIsModalVisible(false);
                }
            } else {
                window.alert('số điện thoại không hợp lệ')
            }


        } else if (checkModal === 'ChangeName') {
            const NewNameShop = document.getElementById('NewNameShop');
            if (!NewNameShop) {
                window.alert('Vui lòng nhập đủ thông tin')
            } else {
                console.log(2)
                setIsModalVisible(false);
            }

        }

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    console.log(72, 'shopProfile')
    return (

        <div>
            <Modal title="Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {
                    checkModal === 'ChangeEmail' ? <div className={styles.InputsetEmail}>
                        <input placeholder='Nhập Email cũ' id='OldEmail' className={styles.InputModal}></input>
                        <input placeholder='Nhập Email mới' id='NewEmail'></input>
                        <input placeholder='Nhập lại Email' id='RetypeNewEmail'></input>
                    </div> : checkModal === 'ChangePhone' ? <div className={styles.InputsetPhone}>
                        <input placeholder='Nhập số điện thoại mới' id='NewPhone'></input>
                    </div> : <div className={styles.InputsetName}>
                        <input placeholder='Nhập tên hiển thị mới' id='NewNameShop'></input>
                    </div>
                }
            </Modal>
            <div className={styles.shopProfile_header}>
                <p className={styles.Shop_Profiletext}>
                    <span>Trang chủ</span>
                    <span><RightOutlined /></span>
                    <span>Cài đặt</span>
                    <span><RightOutlined /></span>
                    <span onClick={showModal} >Hồ sơ nhà bán hàng</span>
                </p>
                <h2 >
                    Hồ Sơ Nhà Bán Hàng
                </h2>
            </div>
            <div className={styles.shopProfile}>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '15px 0 8px 0', fontSize: '16px' }}>ID của nhà bán hàng</p>
                    <p className={styles.profileshop_data}>{data._id}</p>
                </div>
                <div className={styles.Profile_Text} >
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }} >Họ Và Tên <InfoCircleOutlined  ></InfoCircleOutlined></p>
                    <p className={styles.profileshop_data} >{data.username}</p>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Email liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p>{data.email}</p>
                        <span id='ChangeEmail' onClick={showModal} >Sửa đổi</span>
                    </div>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Số điện thoại liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p>{data.phone}</p>
                        <span onClick={showModal} id='ChangePhone'> Sửa đổi   </span>
                    </div>
                </div>
                <div className={styles.Profile_Text} style={{ marginBottom: '25px' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Tên hiển thi <InfoCircleOutlined onClick={showModal} /></p>
                    <div className={styles.Profile_needchange}>
                        <p>{data.username}</p>
                        <span onClick={showModal} id='ChangeName'>Sửa đổi</span>
                    </div>
                </div>

            </div>
            <div className={styles.Profileshop_bottom}>
                <button>Sửa đổi</button>
                <img src={data.shop.logo} alt="" />
            </div>
        </div>
    )
}

export default ShopProfile