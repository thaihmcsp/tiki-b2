import React from 'react';
import { ListCountry } from './ListCountry';
import "./style.css"


function SignUp() {
    return (
        
    <div className='box_container'>
        <div className="menu">
            <div className="menu-left">
                <div>
                <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt='tiki-logo'/>
                </div>
            </div>

            <div className="menu-right">
           
              
                <a href="#team">
                <select defaultValue='Tiếng Việt'
                    name="abc" id="" className='user-createShop-select'>  
                               
                                {ListCountry.map((branch,index) => {
                                    return (
                                        <option value={branch} key={index}>{branch}</option>
                                    )
                                })}
                            </select>
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
                        <input className="form-control" type="text"  placeholder="Vui lòng nhập email"/>
                       
                        <div>
                            Nhập mật khẩu 
                        </div>
                        <input className="form-control" type="password"  placeholder="Vui lòng nhập mật khẩu"/>
                        <div>
                            Nhập mật lại khẩu 
                        </div>
                        <input className="form-control" type="password"  placeholder="Vui lòng nhập lại mật khẩu"/>
                        </div>
                    <div>
                        
                        <div className="textGroup">
                        <p> <a href="">Bạn quên mật khẩu</a></p>
                       
                            <p> <a href="">Sign up</a></p>
                        </div>
                    </div>
                        <div className="buttonGroup">
                            <button className="login">Đăng kí</button>
                            
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;