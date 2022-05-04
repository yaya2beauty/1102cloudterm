import React, { Component } from "react";
import PostCards from "../components/PostCard";
import Post from "../components/Post";
import { createBrowserHistory } from "history";
import { Avatar, Divider, Tooltip, Button, Input } from "antd";
import { PictureTwoTone, UserOutlined, FormOutlined } from "@ant-design/icons";
import "../style/User.scss";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myuserid: "002",
            name: "Sussna",
            pps: [
                {
                    postId: "001",
                    userName: "Sussna",
                    content: "hihi",
                    file: require("../assets/store/m1.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: true,
                    isLove: true,
                    userId: "002",
                    userImg: require("../assets/user/user.jpg"),
                    comments: [],
                },
                {
                    postId: "002",
                    userName: "Sussna",
                    content: "天氣真好",
                    file: require("../assets/store/m2.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: true,
                    isLove: false,
                    userId: "002",
                    userImg: require("../assets/user/user.jpg"),
                    comments: [],
                },
                {
                    postId: "003",
                    userName: "Sussna",
                    content: "La~La~La~",
                    file: require("../assets/store/m3.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: false,
                    isLove: false,
                    userId: "002",
                    userImg: require("../assets/user/user.jpg"),
                    comments: [],
                },
                {
                    postId: "004",
                    userName: "Betty",
                    content: "ohoh",
                    file: require("../assets/store/m7.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: true,
                    isLove: true,
                    userId: "001",
                    userImg: require("../assets/uu/cat1.jpg"),
                    comments: [],
                },
                {
                    postId: "005",
                    userName: "POPO",
                    content: "耶",
                    file: require("../assets/store/m8.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: true,
                    isLove: true,
                    userId: "003",
                    userImg: require("../assets/uu/cat2.jpg"),
                    comments: [],
                },
                {
                    postId: "006",
                    userName: "LOO",
                    content: "哈哈哈",
                    file: require("../assets/store/m3.jpg"),
                    time: "2020-04-22",
                    status: true,
                    isThumb: true,
                    isLove: true,
                    userId: "004",
                    userImg: require("../assets/uu/dog1.jpg"),
                    comments: [],
                },
            ],

            followitem: this.props.location.state.followitem,
        };
    }
   
    handleClick = (get_file) => {
        document.getElementById(get_file).onclick = function() { 
            if(get_file==='get_file1'){document.getElementById('input_file1').click()}
            else{document.getElementById('input_file2').click()}
        }
    }
    changeLove = (postId) => {
        const newposts = this.state.pps.map((pp) => {
            return pp.postId === postId ? { ...pp, isLove: !pp.isLove } : pp;
        });
        this.setState({
            pps: newposts,
        });
    };

    changeThumb = (postId) => {
        const newposts = this.state.pps.map((pp) => {
            return pp.postId === postId ? { ...pp, isThumb: !pp.isThumb } : pp;
        });
        this.setState({
            pps: newposts,
        });
    };
    render() {
        const ppo = this.state.pps.filter(
            (track) => track.userId === this.state.followitem["id"]
        );
        return (
            <React.Fragment>
                <div
                    className="user"
                    style={{
                        display:
                            this.state.followitem["id"] !== this.state.myuserid
                                ? true
                                : "none",
                    }}
                >
                    <div
                        className="tit"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                            justifyContent: "flex-start",
                        }}
                    >
                        <div style={{ marginBottom: "-70px" }}>
                            <Avatar
                                className="avatar"
                                size={120}
                                src={require("../assets/uu/cat1.jpg")}
                                style={{ marginLeft: "30px" }}
                            />
                        </div>

                    </div>
                    <div>
                        <div style={{ paddingLeft: "170px", fontSize: "24px" }}>
                            {this.state.followitem["name"]}
                            <div style={{ fontSize: "20px" }}>1貼文 2粉絲 2追蹤</div>
                        </div>
                    </div>
                    <Divider style={{ marginTop: "30px" }} />
                    <div style={{ margin: "50px 16px 0" }}>
                        {ppo.map((pp, key) => {
                            return (
                                <PostCards
                                    key={key}
                                    myuserid={this.state.myuserid}
                                    postInfo={pp}
                                    label="postcontent"
                                    changeLove={this.changeLove}
                                    changeThumb={this.changeThumb}
                                />
                            );
                        })}
                    </div>
                </div>

                <div
                    className="user"
                    style={{
                        display:
                            this.state.followitem["id"] !== this.state.myuserid
                                ? "none"
                                : true,
                    }}
                >
                    <div
                        className="tit"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                            justifyContent: 'space-between',
                        }}
                    >
                        <Tooltip
                            placement="bottomLeft"
                            title="更換大頭貼"
                            color="#6087BF"
                            arrowPointAtCenter
                        >
                            <div style={{ marginBottom: "-70px" }}>
                                <Avatar
                                    className="avatar"
                                    size={120}
                                    src={require("../assets/user/user.jpg")}
                                    style={{ marginLeft: "30px", cursor: 'pointer' }}
                                    onClick={()=>{this.handleClick('get_file1')}}
                                    id="get_file1"
                                />
                                <input type='file' id="input_file1"  accept=".jpg,.jpeg,.png" style={{ display: 'none' }} onChange={() => { console.log('成功'); }} />
                            </div>
                        </Tooltip>
                        <Tooltip
                            placement="bottomLeft"
                            title="更換封面照"
                            color="#6087BF"
                            arrowPointAtCenter
                        >
                        <div style={{width:'80%',height:'100%',cursor:'pointer' }} id="get_file2" onClick={()=>{this.handleClick('get_file2')}}><input type='file'  id="input_file2"  accept=".jpg,.jpeg,.png" style={{ display: 'none' }} onChange={() => { console.log('成功2'); }} /></div>
                        
                        </Tooltip>
                    </div>
                    <div>
                        <div style={{ paddingLeft: "170px", fontSize: "24px" }}>
                            {this.state.name}
                            <FormOutlined
                                style={{
                                    paddingLeft: "10px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    let history = createBrowserHistory();
                                    history.push("/EditInformation");
                                    history.go();
                                }}
                            />
                            <div style={{ fontSize: "20px" }}>1貼文 2粉絲 2追蹤</div>
                        </div>
                    </div>
                    <Divider style={{ marginTop: "30px" }} />
                    <div style={{ margin: "50px 16px 0" }}>
                        <Post userImg="data.user_img" />
                        {ppo.map((pp, key) => {
                            return (
                                <PostCards
                                    key={key}
                                    myuserid={this.state.myuserid}
                                    postInfo={pp}
                                    label="postcontent"
                                    changeLove={this.changeLove}
                                    changeThumb={this.changeThumb}
                                />
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default User;
