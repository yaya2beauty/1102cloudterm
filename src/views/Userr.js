import React, { Component } from 'react';
import PostCards from '../components/PostCard'
import Post from '../components/Post'
import {createBrowserHistory} from "history";
import { Avatar, Divider, Tooltip, Button ,Input} from 'antd';
import { PictureTwoTone, UserOutlined, FormOutlined } from '@ant-design/icons';
import '../style/User.scss'

import '../style/User.scss'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myuserid:'2',
            name:'Sussna',
            pps: [
                {
                    postId:'001',
                    userName:'Sussna',
                    content:'hihi',
                    file:require('../assets/store/m1.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '2',
                    userImg:require('../assets/user/user.jpg'),
                    comments:[]
                },
                {                  
                    postId:'002',
                    userName:'Sussna',
                    content:'天氣真好',
                    file:require('../assets/store/m2.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:false,
                    userId: '2',
                    userImg:require('../assets/user/user.jpg'),
                    comments:[]
                },
                {
                    postId:'003',
                    userName:'Sussna',
                    content:'La~La~La~',
                    file:require('../assets/store/m3.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:false,
                    isLove:false,
                    userId: '2',
                    userImg:require('../assets/user/user.jpg'),
                    comments:[]
                }
            ]

        }
    }

    changeLove =(postId)=>{ 
        const newposts =this.state.pps.map(pp => {
            return pp.postId === postId ? {  ...pp, isLove: !pp.isLove } : pp
          });
          this.setState({
            pps: newposts
          });
    }

    changeThumb =(postId)=>{ 
        const newposts =this.state.pps.map(pp => {
            return pp.postId === postId ? {  ...pp, isThumb: !pp.isThumb } : pp
          });
          this.setState({
            pps: newposts
          });
    }
    render() {
        
        return (
            <div className='user'>
                <div className='tit' style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-start' }} >
                    <Tooltip  placement="bottomLeft"  title="更換大頭貼" color='blue' arrowPointAtCenter>
                    <div style={{ marginBottom: '-70px' }}>
                        <Avatar className='avatar' size={120} src={require('../assets/user/user.jpg')} style={{ marginLeft: '30px' }} />
                    </div>
                    </Tooltip>
                </div>
                <div>
                    <div style={{ paddingLeft: '170px', fontSize: '24px' }}>
                        {this.state.name}<FormOutlined style={{ paddingLeft: '10px', fontSize: '18px', cursor: 'pointer' }}  onClick={() => { let history = createBrowserHistory();history.push('/EditInformation');history.go();}}/>
                        <div style={{fontSize: '20px' }}>
                            1貼文 2粉絲 2追蹤
                        </div>
                    </div>

                
                </div>
                <Divider style={{ marginTop: '30px' }} />
                <div style={{ margin: '50px 16px 0' }}>
                    <Post userImg="data.user_img" />
                    {this.state.pps.map((pp, key) => {
                    return (
                        <PostCards
                            key={key}
                            myuserid={this.state.myuserid}
                            postInfo={pp}
                            label="postcontent"
                            changeLove={this.changeLove}
                            changeThumb={this.changeThumb}
                        />
                    )

                })}
                </div>
            </div>
        )
    }


}
export default User;