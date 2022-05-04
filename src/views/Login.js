import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Input, Button, Form, Checkbox, Radio, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { createBrowserHistory } from "history";
import '../style/Login.scss'
import Logo from "../assets/Logo.svg";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [
                {
                    userid: '001',
                    username: '1234',
                    password: '1234',
                    permission: 'A'
                },
                {
                    userid: '002',
                    username: '12345',
                    password: '12345',
                    permission: 'B'
                }
            ],
            username: '',
            password: '',
            signindisplay:'none',
            logindisplay:true
        }
    }
    gosignin=()=>{
        this.setState({
            signindisplay:true,
            logindisplay:'none'
        })
    }
    gologin=()=>{
        this.setState({
            signindisplay:'none',
            logindisplay:true
        })
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className='container' >
                <div className='loginform' style={{ display: this.state.logindisplay }}>
                    <div className='loginttt'><img style={{ width: '25%', marginRight: '10px' }} src={Logo} alt="Logo" />INNOVATION</div>
                    <Input className='common-input' prefix={<UserOutlined />} type='text' name='username' placeholder="帳號" onChange={this.changedata} />
                    {/* <input className='common-input' type='text' name='username' placeholder='帳號' onChange={this.changedata}></input> */}
                    {/* <input className='common-input' type='password' name='password' placeholder='密碼' onChange={this.changedata}></input> */}
                    <Input className='common-input' prefix={<LockOutlined />} type="password" name='password' placeholder="密碼" onChange={this.changedata} />
                    <div>
                        <button className='loginbtn' id='btn' onClick={this.login}>登入</button >
                        <button className='loginbtn' id='btn' onClick={this.gosignin}>註冊</button >
                    </div>
                </div>
                <div className='loginform' style={{ display: this.state.signindisplay }}>
                    <div className='loginttt'><img style={{ width: '25%', marginRight: '10px' }} src={Logo} alt="Logo" />INNOVATION</div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item label="帳號" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="設定密碼" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="確認密碼" name="password2" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="真實姓名" name="userName" rules={[{ required: true, message: 'Please input your name!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="暱稱" name="nickName" >
                            <Input />
                        </Form.Item>

                        <Form.Item name="gender" label="性別">
                            <Radio.Group>
                                <Radio value="M">男</Radio>
                                <Radio value="F">女</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item name="birthday" label="生日" >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item label="電子信箱" name="email" >
                            <Input />
                        </Form.Item>

                        <Form.Item label="電話" name="phone" >
                            <Input />
                        </Form.Item>

                        <Form.Item label="地址" name="address" >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button htmlType="submit" className='signinbtn'>
                                註冊
                            </Button>
                            <Button htmlType="button" className='signinbtn' style={{ margin: '0 8px' }} onClick={this.gologin} >
                                取消
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    login = () => {
        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        const aa = this.state.members.filter((member) => {
            return member.username === user.username
        })
        if (aa[0] !== undefined) {

            if ((aa[0]['password']).toString() === user.password) {
                window.localStorage.setItem('userinfo', JSON.stringify(aa[0]))
                if (aa[0]['permission'] === 'A') {
                    this.props.history.push('/Manager')
                } else {
                    this.props.history.push('/Home')
                }


            }

        }

    }

    changedata = (event) => {
        const { name, value } = event.target
        const anather = name === 'username' ? 'password' : 'username'
        if (anather === 'username') {
            this.setState({ 'password': value });
        }
        else {
            this.setState({ 'username': value });
        }
    }
}
export default withRouter(Login);


