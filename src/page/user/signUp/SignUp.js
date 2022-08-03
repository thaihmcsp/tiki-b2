import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import "./style.css"

function Signup() {
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
                    <div className="title"><h1>Đăng ký</h1></div>
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
                        <div>
                            Nhập mật lại khẩu
                        </div>

                    </div>
                    <div>
                        <Space direction="vertical">

                            <Input.Password
                                className="form-control"
                                placeholder="Nhập lại mật khẩu"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <div className="textGroup">
                            <p> <a href="">Bạn quên mật khẩu</a></p>

                            <p> <div>Bạn đã có tài khoản?</div>
                                <a href="">Đăng nhập</a></p>
                        </div>
                    </div>
                    <div className="buttonGroup">
                        <button className="login">Đăng kí</button>

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

export default Signup;