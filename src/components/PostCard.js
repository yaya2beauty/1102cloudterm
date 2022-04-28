import React, { Component, useContext } from 'react';
import { InitContext } from '../index';
import '../style/PostCard.scss'
import { Avatar, Modal, Card, Divider, Input, Drawer, Collapse, Comment, Form, Button, List } from 'antd';
import { HeartOutlined, LikeOutlined, CommentOutlined, ShareAltOutlined, ExclamationCircleOutlined, EllipsisOutlined, FormOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
// const contextData = useContext(InitContext); //取得數據
import moment from 'moment';
const { TextArea } = Input;
const { Panel } = Collapse;


const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item >
            <TextArea rows={1} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item >
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                留言
            </Button>
        </Form.Item>
    </>
);
class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            visible: false,
            comments: [],
            submitting: false,
            value: '',
            visiblecoments: 'none',
            reporttext:'',
            reportcontent:[
                {
                    reportid:1,
                    reportuserid:'1',
                    reportpostid:'1',
                    recontent:'1'
                }

            ]
        };

    }
    setVisiblecoments = () => {
        console.log('近來');
        if (this.state.visiblecoments === 'none') {
            this.setState({ visiblecoments: true })
            console.log('true');
        } else {
            this.setState({ visiblecoments: 'none' })
        }

    }
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    ...this.state.comments,
                    {
                        author: 'Han Solo',
                        avatar: 'https://joeschmoe.io/api/v1/random',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                ],
            });
        }, 1000);
    };

    handleChangecomment = e => {
        this.setState({
            value: e.target.value,
        });
    };

    edit = () => {
        console.log('編輯');
    }
    delete = () => {
        console.log('刪除');
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    handleChange(value) {
        console.log(`selected ${value}`);
    }


    report = () => {
        this.setState({
            isModalVisible: true
        })
    }

    handleOk = () => {
        this.setState({
            isModalVisible: false,
            reportcontent:[
                ...this.state.reportcontent,
                {
                    reportid:(this.props.myuserid).length+1,
                    reportuserid:this.props.myuserid,
                    reportpostid:this.props.postid,
                    recontent:this.state.reporttext
                }
            ],
            reporttext:'',
        })
    };

    handleCancel = () => {
        this.setState({
            isModalVisible: false,
            reporttext:''
        })
    };
    reportonChange=(event)=>{
        const {value} = event.target
        this.setState({
            reporttext:value
        })
    }



    render() {
        return (
            <div>
                <Card className="box-card">
                    <div className="card-header">
                        <Avatar size={40} icon={<UserOutlined />} />
                        <div className="detail">
                            <span className="username">{this.props.userName}</span>
                            <span className="time">{this.props.time}</span>
                            <span className="content">{this.props.content}</span>
                        </div>
                        <EllipsisOutlined onClick={this.showDrawer} />
                        {this.props.myuserid === this.props.userName ?
                            <Drawer
                                placement='bottom'
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                key='bottom'
                                height='100px'
                            >
                                <p onClick={this.edit} style={{ cursor: 'pointer' }} ><FormOutlined style={{ marginRight: '15px' }} />編輯貼文</p>
                                <p onClick={this.delete} style={{ cursor: 'pointer' }} ><DeleteOutlined style={{ marginRight: '15px' }} />刪除貼文</p>
                            </Drawer> :
                            <div>
                                <Drawer
                                    placement='bottom'
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                    key='bottom'
                                    height='60px'
                                >
                                    <p onClick={this.report} style={{ cursor: 'pointer' }} ><ExclamationCircleOutlined style={{ marginRight: '15px' }} />檢舉貼文</p>
                                </Drawer>
                                <Modal title="檢舉貼文" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                                    <Input value={this.state.reporttext} onChange={this.reportonChange}/>
                                </Modal>
                            </div>
                        }
                    </div>
                    <div className="card-content">

                    </div>
                    <Divider />
                    <div className="like-com">
                        <div className="icon">
                            <i className="far fa-heart" title="Like" /><LikeOutlined />
                        </div>
                        <Divider type="vertical" />
                        <div className="icon" onClick={this.setVisiblecoments}>
                            <i className="far fa-comment-alt" title="留言" /><CommentOutlined />
                        </div>
                        <Divider type="vertical" />
                        <div className="icon">
                            <i className="far fa-share-square" title="收藏" /><HeartOutlined />
                        </div>
                    </div>
                    <div style={{ display: this.state.visiblecoments }}>
                        {this.state.comments.length > 0 && <CommentList comments={this.state.comments} />}

                        <Comment
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <Editor
                                    onChange={this.handleChangecomment}
                                    onSubmit={this.handleSubmit}
                                    submitting={this.state.submitting}
                                    value={this.state.value}
                                />
                            }
                        />
                    </div>
                </Card>
            </div>
        )
    }


}
export default PostCard;