import React from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { Link, useNavigate } from 'react-router-dom'

import { postAPI, getAPI } from '../../../config/api'
import { useDispatch, useSelector } from 'react-redux';

import { userLogin } from '../../../redux/userSlice';
import "./styleLogin.css"
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function Login() {
    const { Option } = Select;
    const nav = useNavigate()
    const dispatch = useDispatch();

    function checkMail() {
        const warmail = document.querySelector('#warmail')
        warmail.style.display = 'none'
    }
    function checkPass() {
        const warpass = document.querySelector('#warpass')
        warpass.style.display = 'none'
    }

    async function shopSignIn() {
        try {

            const password = document.querySelector('#password').value
            const email = document.querySelector('#email').value
            const warmail = document.querySelector('#warmail')
            const warpass = document.querySelector('#warpass')

            var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (email.trim() === '') {
                warmail.innerHTML = "Vui lòng nhập email";
            }
            else if (!mailformat.test(email)) {
                warpass.style.display = 'block'
                warmail.innerHTML = "email không hợp lệ";
            }
            else if (password.trim() === '') {
                warpass.innerHTML = "Vui lòng nhập mật khẩu"
            } else if (password.length < 6) {
                warpass.style.display = 'block'

                warpass.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự"
            }
            else {
                var resp = await postAPI('/auth/login/shop', { email, password })
                setCookie('tiki-user', resp.data.token, 30);
                nav('/adminShop/Dashboard')
            }
        }
        catch (error) {
            console.log('loi', error)
            alert(error.response.data.message)
        }

    }
    return (

        <div className='box_container'>
            <div className="menu">
                <div className="menu-left">
                    <div>
                        <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt='tiki-logo' />
                    </div>
                </div>

                <div className="menu-right">
                    <a href="#team">
                        <Select defaultValue="Tiếng Việt" style={{ width: 120 }} >
                            <Option value="jack">Tiếng Việt</Option>
                            <Option value="lucy">Tiếng Anh</Option>
                        </Select>
                    </a>

                </div>
            </div>
            <div className='box'>
                <div className='box_background'>
                </div>
                <div className="container">
                    <div className="title"><h1>Đăng nhập với Shop</h1></div>
                    <div className="inputGroup">
                        <div>
                            Nhập Email
                        </div>

                        <Space direction="vertical">

                            <Input
                                className="form-control email"
                                placeholder="Nhập email"
                                id='email'
                                type='email'
                                name='email'
                                onChange={checkMail}

                            />
                            <span className="warning" id='warmail'></span>
                        </Space>

                        <div>
                            Nhập mật khẩu
                        </div>
                        <Space direction="vertical">

                            <Input.Password
                                id="password"
                                className="form-control "
                                placeholder="Nhập mật khẩu"
                                type='password'
                                name='password'
                                onChange={checkPass}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <span className="warning" id='warpass'></span>

                        </Space>
                    </div>
                    <div>
                        <div className="textGroup">
                            <p> <a href="">Quên mật khẩu</a></p>

                            <p>
                                <div>Bạn chưa có tài khoản?</div>

                                <a href="">Đăng ký</a></p>
                        </div>
                    </div>
                    <div className="buttonGroup">
                        <button className="login" onClick={shopSignIn}>Đăng nhập</button>

                    </div>
                    <div className="line"></div>


                    <div className="buttonGroup1">
                        <button href="#" className="field facebook">
                            <FacebookOutlinedIcon className=' facebook iconface' />
                            <span>Đăng nhập với Facebook</span>
                        </button>
                    </div>

                    <div className="buttonGroup1">
                        <button href="#" className="field google">
                            <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt="" className="google-img" />
                            <span>Đăng nhập với Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;