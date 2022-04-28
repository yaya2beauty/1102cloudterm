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
                    postid: '001',
                    content: 'hihi',
                    file: 'null',
                    time: '2020-04-22',
                    status: true,
                    userid: '1'
                },
                {
                    postid: '002',
                    content: 'hihi2222',
                    file: 'null',
                    time: '2020-04-22',
                    status: true,
                    userid: '2'
                },
                {
                    postid: '003',
                    content: 'hihi333',
                    file: 'null',
                    time: '2020-04-22',
                    status: true,
                    userid: '3'
                }
            ]
        }
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
                            postid={pp.postid}
                            userImg={require('../assets/user/user.jpg')}
                            userName={pp.userid}
                            content={pp.content}
                            time={pp.time}
                            label="postcontent"
                        />
                    )

                })}

            </div>
        )
    }


}
export default Community;