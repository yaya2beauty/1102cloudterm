import React, { Component} from 'react';
// import '../style/Community.scss'
import { Input, Avatar,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;
class Follow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            followlist:
                [
                    {
                      id: 1,
                      name: "嫩煎魚排佐鮮蔬",
                      price: 350,
                      url: "https://i.imgur.com/o8cd4Rw.jpg",
                    },
                    {
                      id: 2,
                      name: "清炒番茄義大利麵",
                      price: 180,
                      url: "https://i.imgur.com/KRboztK.jpg",
                    },
                    {
                      id: 3,
                      name: "九層塔沙拉",
                      price: 120,
                      url: "https://i.imgur.com/Yg1t5sW.jpg",
                    },
                    {
                      id: 4,
                      name: "澳洲牛排佐松露醬",
                      price: 450,
                      url: "https://i.imgur.com/uzJbxW5.jpg",
                    },
                    {
                        id: 1,
                        name: "嫩煎魚排佐鮮蔬",
                        price: 350,
                        url: "https://i.imgur.com/o8cd4Rw.jpg",
                      },
                      {
                        id: 2,
                        name: "清炒番茄義大利麵",
                        price: 180,
                        url: "https://i.imgur.com/KRboztK.jpg",
                      },
                      {
                        id: 3,
                        name: "九層塔沙拉",
                        price: 120,
                        url: "https://i.imgur.com/Yg1t5sW.jpg",
                      },
                      {
                        id: 4,
                        name: "澳洲牛排佐松露醬",
                        price: 450,
                        url: "https://i.imgur.com/uzJbxW5.jpg",
                      },
                  ]
            
            
        }
    }
    onSearch = value => console.log(value);

    render() {
        return (
            <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center',paddingTop:'20px'}}>
                <Search placeholder="搜尋" onSearch={this.onSearch} style={{ width: 300}} />
                <div style={{width:'40%'}}>
                {this.state.followlist.map((followitem,key)=>(
                    <div key={key} style={{display:'flex',alignItems:'center',margin:'5%',flex:1}}>
                        <div style={{display:'flex',justifyContent:'center',flex:0.2}}>
                            <Avatar size={40} icon={<UserOutlined />} />
                        </div>
                        <div style={{flex:0.7}}>{followitem['name']}</div>
                        <div  style={{flex:0.1}}>
                        <Button style={{background:'#6087BF',color:'#FFF',borderRadius:'6px'}}>
                            追蹤
                        </Button>
                        </div>
                    </div>
                ))}
                </div>
            
            </div>


        )
    }


}
export default Follow;