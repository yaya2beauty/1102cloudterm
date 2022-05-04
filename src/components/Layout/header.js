import React, { useState, Component } from 'react';
import Logo from "../../assets/Logo.svg";
import { Layout, Menu, Avatar, Row } from 'antd';
import {
  ContactsFilled,
  HomeFilled,
  LogoutOutlined,
  UserOutlined,
  HeartFilled
} from '@ant-design/icons';
import { Link, useLocation, useHistory } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const history = useHistory(); //取得history
  // const onCollapse = (collapsed) => setCollapsed(collapsed);
  const userinfo = JSON.parse(window.localStorage.getItem("userinfo"))
  const { SubMenu } = Menu;
  const fakeuserinfo={
      id: "002",
      name: "Susanna",
      url: require('../../assets/user/user.jpg'),
  }
  return (
    <React.Fragment>
      <Sider theme="light" style={{
        // overflow: 'auto',
        // height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        // background:'red',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        display: userinfo['permission'] === 'A' ? 'none' : true
      }}
      // <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}
      //style={{flex:1,backgroundColor:'red'}}
      >
        {/* <div className="logo" /> */}
        <Row key="Logo" onClick={() => window.location.assign("http://localhost:3000/")} style={{ display: 'flex', justifyContent: 'center' }}>{/*先暫時這樣寫，之後改 */}
          <div style={{ display: 'flex', margin: '18px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            <img style={{ width: '25%' }} src={Logo} alt="Logo" />
            <span style={{ marginLeft: '10px', fontSize: '20px' }}>INNOVATION</span>
          </div>
        </Row>

        <Menu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        //style={{flex:1,backgroundColor:'blue'}}
        >
          <Menu.Item key="/User">
            {/* <Row align="middle" onClick={() => { history.push('/User'); }} > */}
            <Row align="middle"
            onClick={() => {
                  history.push({
                    pathname: "/User",
                    search: "?query=002",
                    state: { followitem: fakeuserinfo },
                  });
                }}>
              <Avatar size={35} style={{ marginRight: 13 }} src={require('../../assets/user/user.jpg')} />
              <span style={{ fontSize: 16 }}>Susanna</span>

            </Row>


          </Menu.Item>
          <Menu.Item key="/Home">
            <HomeFilled style={{ color: '#6087BF' }} />
            <span>首頁</span>
            <Link to="/Home"></Link>


          </Menu.Item>
          <Menu.Item key="/Like">
            <HeartFilled style={{ color: '#6087BF' }} />
            <span>收藏</span>
            <Link to="/Like"></Link>


          </Menu.Item>
          <Menu.Item key="/Follow">
            <ContactsFilled style={{ color: '#6087BF' }} />
            <span>追蹤</span>
            <Link to="/Follow"></Link>


          </Menu.Item>


          <Menu.Item key="/Logout" style={{ flex: 0.3, flexDirection: 'row-reverse' }}>
            <LogoutOutlined style={{ color: '#6087BF' }} />
            <span>登出</span>
            <Link to="/" onClick={() => window.localStorage.removeItem("userinfo")}></Link>
          </Menu.Item>

        </Menu>
      </Sider>

      <Sider theme="light" style={{
        // overflow: 'auto',
        // height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        // background:'red',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        display: userinfo['permission'] === 'A' ? true : 'none'

      }}
      // <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}
      //style={{flex:1,backgroundColor:'red'}}
      >
        {/* <div className="logo" /> */}
        <Row key="Logo" onClick={() => window.location.assign("http://localhost:3000/")} style={{ display: 'flex', justifyContent: 'center' }}>{/*先暫時這樣寫，之後改 */}
          <div style={{ display: 'flex', margin: '18px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            <img style={{ width: '25%' }} src={Logo} alt="Logo" />
            <span style={{ marginLeft: '10px', fontSize: '20px' }}>INNOVATION</span>
          </div>
        </Row>

        <Menu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        //style={{flex:1,backgroundColor:'blue'}}
        >
          {/* <Menu.Item key="/User"> */}
          <div style={{display: 'flex', margin: '14px',marginLeft:'20px',alignItems: 'center'}}>
            <Row align="middle">
              <Avatar size={35} style={{ backgroundColor: '#87d068', marginRight: 13 }} icon={<UserOutlined />} />
              <span style={{ fontSize: 16 }}>Susanna</span>
            </Row>
          </div>
          {/* </Menu.Item> */}
          <Menu.Item key="/">
            <HomeFilled style={{ color: '#6087BF' }} />
            <span>貼文審核</span>
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.Item key="/Logout" style={{ flex: 0.3, flexDirection: 'row-reverse' }}>
            <LogoutOutlined style={{ color: '#6087BF' }} />
            <span>登出</span>
            <Link to="/" onClick={() => window.localStorage.removeItem("userinfo")}></Link>
          </Menu.Item>

        </Menu>
      </Sider>
    </React.Fragment >
  );
};

export default App;
