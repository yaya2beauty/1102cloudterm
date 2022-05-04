import React, { Component, useContext } from 'react';
import { InitContext } from '../index';
import '../style/ReportPost.scss'
import { Avatar, Modal, Card, Divider, Input, Drawer, Collapse, Comment, Form, Button, List } from 'antd';
import { DeleteOutlined, UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// const contextData = useContext(InitContext); //取得數據
import moment from 'moment';
import { Switch } from 'react-router-dom';
const { TextArea } = Input;
const { Panel } = Collapse;


class ReportPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            Modaltype: '',
            visible: false,
            comments: [],
            submitting: false,
            value: '',
            visiblecoments: 'none',
            inputtext: '',
            reportcontent: [
                {
                    reportid: 1,
                    reportuserid: '1',
                    reportpostid: '1',
                    recontent: '1'
                }

            ]
        };
    }


    render() {
        const { postInfo, myuserid, changeLove, changeThumb } = this.props
        return (
            <div>
                <Card className="box-card">
                    <div className="card-header">
                        <Avatar size={40} src={postInfo.userImg} icon={<UserOutlined />} />
                        <div className="detail">
                            <span className="username">{postInfo.userName}</span>
                            <span className="time">{postInfo.time}</span>
                            <span className="content">{postInfo.content}</span>
                        </div>
                    </div>
                    <div className="card-content">
                        <img src={postInfo.file} />
                    </div>
                    <div style={{ fontSize: '22px', color: '#6087BF' }}>檢舉原因：{postInfo.reportReason}</div>
                    {postInfo.result !== undefined 
                        ?<div style={{ fontSize: '22px', color: '#6087BF' }}>審核結果：{postInfo.result}</div>
                        :
                        <><Divider />
                            <div className="like-com">
                                <div className="icon" style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                                    <DeleteOutlined /><div style={{marginLeft:'16px'}}>移除文章</div>
                                </div>
                                <Divider type="vertical" />
                                <div className="icon"  style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                                    <EyeInvisibleOutlined /><div style={{marginLeft:'16px'}}>忽略</div>
                                </div>
                            </div>
                        </>
                    }
                </Card>
            </div>
        )
    }


}
export default ReportPost;