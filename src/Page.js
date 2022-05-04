import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import RouteApp from './components/App';
import Community from './views/Community';
import User from './views/User';
import Like from './views/Like';
import Follow from './views/Follow';
import Manager from './views/Manager';
import Login from './views/Login';
import EditInformation from './views/EditInformation';
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: 0,
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <RouteApp path={'/Home'} component={Community} username={this.state.username}/>
                    <RouteApp path={"/User"} component={User} />
                    <RouteApp path={"/Like"} component={Like} />
                    <RouteApp path={"/Follow"} component={Follow} />
                    <RouteApp path={"/Manager"} component={Manager} />
                    <RouteApp path={"/EditInformation"} component={EditInformation} />
                    <Route path="/" render={() => {
                        // return JSON.parse(window.localStorage.getItem("userinfo")) ? <Redirect to="/Home" username={this.state.username} /> : <Login login={this.login} changedata={this.changedata} isLogin={this.state.isLogin} />
                        const userinfo = JSON.parse(window.localStorage.getItem("userinfo"))
                        
                        if(JSON.parse(window.localStorage.getItem("userinfo"))){
                            console.log(userinfo['permission']);
                             if(userinfo['permission']==='A'){
                                return <Redirect to="/Manager" username={this.state.username} />
                             }else{
                                return <Redirect to="/Home" username={this.state.username} />
                             }
                        }else{ 
                             return <Login login={this.login} changedata={this.changedata} isLogin={this.state.isLogin} />
                        }
                         
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Page;