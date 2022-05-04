import React, { Component, useContext } from 'react';
import { InitContext } from '../index';
import '../style/PostCard.scss'
import { Avatar, Modal, Card, Divider, Input, Drawer, Collapse, Comment, Form, Button, List } from 'antd';
import { HeartOutlined, HeartTwoTone, LikeOutlined, LikeTwoTone, CommentOutlined, EditTwoTone, ExclamationCircleOutlined, EllipsisOutlined, FormOutlined, DeleteOutlined, DeleteTwoTone, UserOutlined } from '@ant-design/icons';
// const contextData = useContext(InitContext); //取得數據
import moment from 'moment';
import { Switch } from 'react-router-dom';
const { TextArea } = Input;
const { Panel } = Collapse;


const CommentList = ({ comments,setmodal }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        
        renderItem={props => 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Comment {...props} />
            {props.userid==='2'&&//userId目前是2
            <div>
                <EditTwoTone style={{marginRight:'20px',fontSize:'20px',cursor: 'pointer'}} onClick={()=>{setmodal('編輯留言',props.content)}} />
                <DeleteTwoTone style={{marginRight:'20px',fontSize:'20px',cursor: 'pointer'}} onClick={()=>{setmodal('刪除留言')}}/>
            </div>
            }
        </div>}
    />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item >
            <TextArea rows={1} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item >
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} style={{background:'#6087BF',color:'#FFF',borderRadius:'6px'}}>
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
            Modaltype:'',
            visible: false,
            comments:props.postInfo.comments,
            submitting: false,
            value: '',
            visiblecoments: 'none',
            inputtext:'',
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

    //留言是否顯示
    setVisiblecoments = () => {
        if (this.state.visiblecoments === 'none') {
            this.setState({ visiblecoments: true })
        } else {
            this.setState({ visiblecoments: 'none' })
        }
    }

    //送出留言
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }
        this.setState({
            submitting: true,
        });
        // setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    ...this.state.comments,
                    {
                        userid: '2',
                        author: 'Susanna',
                        avatar: require('../assets/user/user.jpg'),
                        content: this.state.value,
                        datetime: moment().fromNow(),
                    },
                ],
            });
        // }, 1000);
    };

    //留言input改變字
    handleChangecomment = e => {
        this.setState({
            value: e.target.value,
        });
    };

    //右上三個點
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

    // Modal跳出對話框，判斷是什麼事件
    setModal = (type,content) => {
        this.setState({
            isModalVisible: true,
            Modaltype:type
        })
        if (type==='編輯貼文'){
            this.setState({inputtext:this.props.postInfo.content})
        }
        else if(type==='編輯留言'){
            this.setState({inputtext:content})
        }
    }
    
    //Modal對話框內容
    modalContent=()=>{
        switch(this.state.Modaltype){
            case '檢舉貼文':
                return (<div>檢舉原因：<br/><Input value={this.state.inputtext} onChange={this.inputChange}/></div>);
            case '編輯貼文':
                return (<div>貼文：<br/><Input value={this.state.inputtext} onChange={this.inputChange}/></div>)
            case '編輯留言':
                return (<div>留言：<br/><Input value={this.state.inputtext} onChange={this.inputChange}/></div>)
            case '刪除留言':
                return (<div>是否刪除此留言</div>);
            default:
                return (<div>是否刪除此貼文</div>);
        }
    }
    //Modal對話框確認
    handleOk = () => {
        switch(this.state.Modaltype){
            case '檢舉貼文':
                this.setState({
                    isModalVisible: false,
                    reportcontent:[
                        ...this.state.reportcontent,
                        {
                            reportid:(this.props.myuserid).length+1,
                            reportuserid:this.props.myuserid,
                            reportpostid:this.props.postid,
                            recontent:this.state.inputtext
                        }
                    ],
                    inputtext:'',
                })
                return 0;
            case '編輯貼文':
                this.setState({
                    inputtext:'',
                    isModalVisible: false,
                    
                })
                return 0;
            default:
                this.setState({
                    isModalVisible: false,
                    inputtext:'',
                })
                return 0;
        }
    };
    //Modal對話框取消
    handleCancel = () => {
        this.setState({
            isModalVisible: false,
            inputtext:''
        })
    };

    //Modal對話框input改變字
    inputChange=(event)=>{
        const {value} = event.target
        this.setState({
            inputtext:value
        })
    }

    render() {
        const {postInfo,myuserid,changeLove,changeThumb}=this.props
        return (
            <div>
                <Modal title={this.state.Modaltype} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} okText="確認" cancelText='取消'	>
                    {this.modalContent()}
                </Modal>
                <Card className="box-card">
                    <div className="card-header">
                        <Avatar size={40} src={postInfo.userImg} icon={<UserOutlined />} />
                        <div className="detail">
                            <span className="username">{postInfo.userName}</span>
                            <span className="time">{postInfo.time}</span>
                            <span className="content">{postInfo.content}</span>
                        </div>
                        <EllipsisOutlined onClick={this.showDrawer} />
                        {myuserid === postInfo.userId ?
                            <div>
                                <Drawer
                                    placement='bottom'
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                    key='bottom'
                                    height='100px'
                                >
                                    <p onClick={()=>this.setModal('編輯貼文')} style={{ cursor: 'pointer' }} ><FormOutlined style={{ marginRight: '15px' }} />編輯貼文</p>
                                    <p onClick={()=>this.setModal('刪除貼文')} style={{ cursor: 'pointer' }} ><DeleteOutlined style={{ marginRight: '15px' }} />刪除貼文</p>
                                </Drawer>
                            </div> 
                            :
                            <div>
                                <Drawer
                                    placement='bottom'
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                    key='bottom'
                                    height='60px'
                                >
                                    <p onClick={()=>this.setModal('檢舉貼文')} style={{ cursor: 'pointer' }} ><ExclamationCircleOutlined style={{ marginRight: '15px' }} />檢舉貼文</p>
                                </Drawer>
                            </div>
                        }
                    </div>
                    <div className="card-content">
                        <img src={postInfo.file}/>
                    </div>
                    <Divider />
                    <div className="like-com">
                        <div className="icon">
                        {postInfo.isThumb 
                            ?<LikeTwoTone onClick={()=>changeThumb(postInfo.postId)}/>
                            :<LikeOutlined onClick={()=>changeThumb(postInfo.postId)}/>
                            }
                        </div>
                        <Divider type="vertical" />
                        <div className="icon" onClick={this.setVisiblecoments}>
                            <CommentOutlined />
                        </div>
                        <Divider type="vertical" />
                        <div className="icon">
                            {postInfo.isLove 
                            ?<HeartTwoTone twoToneColor='#F00' onClick={()=>changeLove(postInfo.postId)}/>
                            :<HeartOutlined onClick={()=>changeLove(postInfo.postId)}/>
                            }
                        </div>
                    </div>
                    <div style={{ display: this.state.visiblecoments }}>
                        {this.state.comments.length > 0 && <CommentList comments={this.state.comments} setmodal={this.setModal}/>}

                        <Comment
                            avatar={<Avatar src={require('../assets/user/user.jpg')} alt="Susanna" />}
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