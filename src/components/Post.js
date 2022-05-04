import React, { Component, useContext, useRef } from 'react';
import { InitContext } from '../index';
import { Avatar, Card, Form, Input, Button, Upload } from 'antd';
import '../style/Post.scss'
import { PictureTwoTone, UserOutlined } from '@ant-design/icons';

// const contextData = useContext(InitContext); //取得數據
const { TextArea } = Input;


class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: [],
        };
        this.addFiled = React.createRef(); // 在建構函式創建refs屬性

    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    onFinish = (values) => {
        console.log('Success:', values);
    };
    render() {
        return (
            <div>
                <Card className="box-card">
                    <div className="card-header" >
                        <Avatar size={40} src={require('../assets/user/user.jpg')} />
                        <div className="detail">
                            <Form onFinish={this.onFinish}>
                                <Form.Item name="post">
                                    <TextArea placeholder="你正在想什麼呢?" showCount maxLength={100} style={{ height: 80}} />
                                </Form.Item>
                                <div style={{display: 'flex',justifyContent:'end'}}>
                                    <Form.Item
                                        name="picc"
                                        valuePropName="fileList"
                                        getValueFromEvent={this.normFile}
                                    >
                                        <Upload name="pic" action="/upload.do" listType="picture">
                                            <PictureTwoTone twoToneColor='#6087BF' style={{ cursor: 'pointer', fontSize: '25px' }} />
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType="submit" style={{marginLeft:'10px',background:'#6087BF',color:'#FFF',borderRadius:'6px'}}>
                                            發佈
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

}

export default Post;