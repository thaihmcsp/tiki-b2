import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';

import "./styleLogin.css";

function Login() {

    const { Option } = Select;
    return (

        <div className='box_container'>
            <div class="menu">
                <div class="menu-left">
                    <div>
                        <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt='tiki-logo' />
                    </div>
                </div>

                <div class="menu-right">
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
                    <div className="title"><h1>Admin Đăng nhập</h1></div>
                    <div className="inputGroup">
                        <div>
                            Nhập Email
                        </div>
                        <Space direction="vertical">

                            <Input
                                className="form-control"
                                placeholder="Nhập email"

                            />
                        </Space>

                        <div>
                            Nhập mật khẩu
                        </div>
                        <Space direction="vertical">

                            <Input.Password
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
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
                        <button className="login">Đăng nhập</button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;