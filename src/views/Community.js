import React, { Component, useContext } from 'react';
import { InitContext } from '../index';
import { Row, Col, Affix, Divider, Avatar, Card } from 'antd';
import '../style/Community.scss'
import Post from '../components/Post'
import PostCards from '../components/PostCard'
import { HomeFilled, MessageFilled, LikeFilled, SearchOutlined, TeamOutlined } from '@ant-design/icons';
// const contextData = useContext(InitContext); //取得數據


class Community extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myuserid:'2',
            pps: [
                {
                    postId:'001',
                    userName:'Anna',
                    content:'hihi',
                    file:require('../assets/store/m1.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '1',
                    userImg:"data.user_img",
                    comments:[
                        {
                            commentsid:'001',
                            userid:'2',
                            avatar:require('../assets/user/user.jpg'),//留言者頭貼
                            author:'Susanna',//留言者姓名
                            content:'hi~',//留言內容
                            datetime:'2020-04-22'//留言時間
                        },
                        {
                            commentsid:'002',
                            userid:'3',
                            avatar:require('../assets/store/m1.jpg'),
                            author:'Diane',
                            content:'哈囉',
                            datetime:'2020-04-22'
                        },
                        {
                            commentsid:'003',
                            userid:'1',
                            avatar:require('../assets/store/m1.jpg'),
                            author:'Anna',
                            content:'你好你好',
                            datetime:'2020-04-22'
                        }
                    ]
                },
                {                  
                    postId:'002',
                    userName:'Susanna',
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
                    userName:'Diane',
                    content:'La~La~La~',
                    file:require('../assets/store/m3.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:false,
                    isLove:false,
                    userId: '2',
                    userImg:"data.user_img",
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
            <div style={{ margin: '24px 16px 0' }}>
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
        )
    }


}
export default Community;