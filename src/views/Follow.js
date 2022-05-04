import React, { Component } from "react";
// import '../style/Community.scss'
import { Input, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Search } = Input;
class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext:'',
      followlist: [
        {
          id: "001",
          name: "Betty",
          price: 350,
          url: require('../assets/uu/cat1.jpg')
        },
        {
          id: "003",
          name: "POPO",
          price: 180,
          url: require('../assets/uu/cat2.jpg'),
        },
        {
          id: "004",
          name: "LOO",
          price: 120,
          url: require('../assets/uu/cat3.jpg'),
        },
      ],
    };
  }
  onSearch = (value) =>{
    this.setState({searchtext:value})
  } 
  getSearch=()=>{
    const { followlist } = this.state;
    return (followlist.filter(data => {
      return (data.name.toUpperCase()).includes(this.state.searchtext.toUpperCase());
    }))
  }

  render() {
    const searchData=this.getSearch()
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Search
          placeholder="搜尋"
          onSearch={this.onSearch}
          style={{ width: 300 }}
        />
        <div style={{ width: "40%" }}>
          {searchData.map((followitem, key) => (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5%",
                flex: 1,
                justifyContent:'space-between'
              }}
            >
              <div style={{ cursor: "pointer", display: "flex", alignItems: "center", }}
                onClick={() => {
                  this.props.history.push({
                    pathname: "/User",
                    search: "?query=" + followitem.id,
                    state: { followitem: followitem },
                  });
                }}>
                <Avatar size={40} src={followitem.url} style={{ marginRight: '18px' }} />
                {followitem["name"]}
              </div>

              <Button style={{ background: "#6087BF", color: "#FFF", borderRadius: "6px" }} >
                追蹤
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Follow;
