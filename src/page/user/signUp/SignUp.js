import React from 'react';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"

function SignUp(props) {
    function handleSubmit() {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        const email = document.querySelector('#email').value
        const password1 = document.querySelector('#password1').value
        const warname = document.querySelector('#warname')
        const warmail = document.querySelector('#warmail')
        const warpass = document.querySelector('#warpass')
        const warpass1 = document.querySelector('#warpass1')
        // if (username.trim() == '') {

        //     warname.innerHTML = 'Vui lòng nhập username'
        // }
        // else {
        //     warname.innerHTML = ''
        // }
        // if (email.trim() == '') {

        //     warmail.innerHTML = 'Vui lòng nhập email'
        // }
        // if (password.trim() == '') {

        //     warpass.innerHTML = 'Vui lòng nhập mật khẩu'
        // }
        // if (password1.trim() == '') {

        //     warpass1.innerHTML = 'Vui lòng nhập lại mật khẩu'
        // }

        // if (password1 != password && password1 && password) {
        //     warpass1.innerHTML = 'Vui lòng nhập mật khẩu chính xác'
        // }
        // else {
        //     warpass1.innerHTML = ''
        // }
        if (username.trim() == '') {

            warname.innerHTML = 'Vui lòng nhập username'
        }
        else {
            warname.innerHTML = ''
        }

        var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email.trim() == '') {
            warmail.innerHTML = "Vui lòng nhập email";
        }
        else if (!mailformat.test(email)) {
            warmail.innerHTML = "email không hợp lệ";
        }
        else {
            warname.innerHTML = ''
        }
        if (password.trim() == '') {
            warpass.innerHTML = "Vui lòng nhập mật khẩu"
        } else if (password.length < 6) {
            warpass.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự"
        } else if (password1.trim() == "" || password !== password1) {
            document.querySelector(".singin_again_text").innerHTML = "Mật khẩu không khớp"
        }

        // function testPassword(pass) {
        //     var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{6,})$/;
        //     if (arr.test(pass) || pass.length < 6) {
        //         warpass.innerHTML =
        //             "Mật khẩu phải có ít nhất 6 ký tự";
        //     } else {
        //         warpass.innerHTML = "";
        //     }
        // }

        function testEmail(email) {
            var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.trim() == '') {
                warmail.innerHTML = "Vui lòng nhập email";
            } if (!mailformat.test(email)) {
                warmail.innerHTML = "Email không hợp lệ";
            } else {
                warmail.innerHTML =
                    "";
            }
        }
        // if (email && email != /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) {
        //     warmail.innerHTML = 'email không đúng định dạng'

        // }
        // else {
        //     warmail.innerHTML = ''
        // }
        // if (password && password.length < 6) {
        //     warpass.innerHTML = 'Mật khẩu phải từ 6 kí tự trở nên'
        // }
        // else {
        //     warpass.innerHTML = ''
        // }


        console.log(1, handleSubmit);
        console.log(2, username, email, password, password1);
        console.log(3, warname, warpass, warpass, warpass1)
    }

    const { Option } = Select;
    // const { handleChange, handleSubmit, values, errors } = useForm(
    //     submitForm,
    //     validate
    // );

    // const navigate = useNavigate()



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
                    <div className="title"><h1>Đăng ký</h1></div>
                    <div className="inputGroup">
                        <div>
                            Nhập user Name
                        </div>

                        <Space direction="vertical">

                            <Input
                                id='username'
                                className="form-control phoneNumber"
                                placeholder="Nhập user Name"
                                type='text'
                                name='username'

                            // value={values.username}
                            // onChange={handleChange}

                            />
                            {/* {errors.username && <p>{errors.username}</p>} */}
                            <span className="warning" id='warname'></span>
                        </Space>

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
                            // value={values.email}
                            // onChange={handleChange}

                            />
                            <span className="warning" id='warmail'></span>
                            {/* {errors.email && <p>{errors.email}</p>} */}
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

                                // value={values.password}
                                // onChange={handleChange}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <span className="warning" id='warpass'></span>
                            {/* {errors.password && <p>{errors.password}</p>} */}
                        </Space>
                        <div>
                            Nhập mật lại khẩu
                        </div>

                    </div>
                    <div>
                        <Space direction="vertical">

                            <Input.Password
                                id="password1"
                                className="form-control"
                                placeholder="Nhập lại mật khẩu"
                                type='password'
                                name='password2'

                                // value={values.password2}
                                // onChange={handleChange}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <span className="warning" id='warpass1'></span>
                            {/* {errors.password2 && <p>{errors.password2}</p>} */}
                        </Space>
                        <div className="textGroup">
                            <p> <a href="">Bạn quên mật khẩu</a></p>

                            <p> <div>Bạn đã có tài khoản?</div>

                                <i><a href="">Đăng nhập</a></i>

                            </p>
                        </div>
                    </div>
                    <div className="buttonGroup">

                        <button className="login" onClick={handleSubmit} >Đăng kí</button>

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

export default SignUp;