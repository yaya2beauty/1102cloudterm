import React, { Component } from 'react';
// import '../style/Community.scss'
import PostCards from '../components/PostCard'
import { Avatar, Divider, Modal, Button ,Input} from 'antd';
import { PictureTwoTone, UserOutlined, FormOutlined } from '@ant-design/icons';
import '../style/User.scss'

import '../style/User.scss'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Visible: false,
            value:'',
            name:'Sussna'
        }
    }
   onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    showModal = () => {
        this.setState({ Visible: true })
    };

    handleOk = () => {
        
        if (!this.state.value) {
            return;
        }

        this.setState({
            name: this.state.value,
        });

        this.setState({ Visible: false })
    };

    handleCancel = () => {
        this.setState({ Visible: false })
    };
    render() {
        return (
            <div className='user'>
                <div className='tit' style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-start' }} >
                    <div style={{ marginBottom: '-40px' }}>
                        <Avatar size={80} icon={<UserOutlined />} style={{ marginLeft: '30px' }} />
                    </div>
                </div>
                <div>
                    <div style={{ paddingLeft: '130px', fontSize: '24px' }}>
                        {this.state.name}<FormOutlined style={{ paddingLeft: '10px', fontSize: '18px', cursor: 'pointer' }} onClick={this.showModal}/>
                        <Modal title="更改名稱" visible={this.state.Visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                            <Input type="text" onChange={this.onChange} />
                        </Modal>
                    </div>

                </div>
                <Divider style={{ marginTop: '100px' }} />
                <div style={{ margin: '50px 16px 0' }}>
                    <PostCards
                        userImg="data.user_img"
                        userName="data.username"
                        label="postcontent"
                    />
                    <PostCards
                        userImg="data.user_img"
                        userName="data.username"
                        label="postcontent"
                    />
                    <PostCards
                        userImg="data.user_img"
                        userName="data.username"
                        label="postcontent"
                    />
                    <PostCards
                        userImg="data.user_img"
                        userName="data.username"
                        label="postcontent"
                    />
                    <PostCards
                        userImg="data.user_img"
                        userName="data.username"
                        label="postcontent"
                    />
                </div>
            </div>
        )
    }


}
export default User;