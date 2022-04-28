import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../style/Login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members:[
                {  
                userid:'001',       
                username: '1234',
                password: '1234',
                permission:'A'
                },
                {  
                userid:'002',       
                username: '12345',
                password: '12345',
                permission:'B'
                }
            ],
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='loginform'>
                    <div className='loginttt'>登入</div>
                    <input className='common-input' type='text' name='username' placeholder='帳號' onChange={this.changedata}></input>
                    <input className='common-input' type='password' name='password' placeholder='密碼' onChange={this.changedata}></input>
                    <button className='loginbtn' id='btn' onClick={this.login}>登入</button >
                </div></div>
        )
    }
    login = () => {
        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        const aa=this.state.members.filter((member)=>{
            return member.username===user.username
        })
            if (aa[0]!==undefined) {
                
                if ((aa[0]['password']).toString() === user.password) {
                    window.localStorage.setItem('userinfo', JSON.stringify(aa[0]))
                    if(aa[0]['permission']==='A'){
                        this.props.history.push('/Manager')
                    }else{
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


