import React, { Component } from "react";
import "../style/EditInformation.scss";
import { Input, Avatar, Button, Modal, DatePicker, Radio } from "antd";
import { FormOutlined } from "@ant-design/icons";

class EditInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "002",
      userName: "Susanna",
      account: "account",
      password: "password",
      nickName: "Susanna",
      gender: "女",
      birthday: "2000/12/16",
      email: "ddd@gmail.com",
      phone: "091234567",
      address: "高雄市楠梓區",
      isModalVisible: false,
      reporttext: "",
      tempid: "",
      oldpass: "",
      newpass: "",
      newpass1: "",
    };
  }
  renderSwitch(id) {
    switch (id) {
      case "1":
        return (
          <Input
            value={this.state.reporttext}
            placeholder={this.state.userName}
            onChange={this.reportonChange}
          />
        );
      case "2":
        return (
          <Input
            value={this.state.reporttext}
            placeholder={this.state.nickName}
            onChange={this.reportonChange}
          />
        );
      case "3":
        return (
          <Input.Group>
            <Input.Password
              placeholder="請輸入新的密碼，6-12位數，請注意大小寫！"
              onChange={this.newpasswordChange1}
            />
            <br />
            <Input.Password
              placeholder="請再次輸入新的密碼！"
              onChange={this.newpasswordChange2}
            />
            <br />
            <Input.Password
              placeholder="請輸入舊的密碼！"
              onChange={this.passwordChange}
            />
          </Input.Group>
        );

      case "4":
        return (
          <Radio.Group defaultValue={"M"}>
            <Radio value="M">男</Radio>
            <Radio value="F">女</Radio>
          </Radio.Group>
        );
      case "5":
        return <DatePicker placeholder={this.state.birthday} />;
      case "6":
        return (
          <Input
            value={this.state.reporttext}
            placeholder={this.state.email}
            onChange={this.reportonChange}
          />
        );
      case "7":
        return (
          <Input
            value={this.state.reporttext}
            placeholder={this.state.phone}
            onChange={this.reportonChange}
          />
        );
      case "8":
        return (
          <Input
            value={this.state.reporttext}
            placeholder={this.state.address}
            onChange={this.reportonChange}
          />
        );
      default:
        return <div>無</div>;
    }
  }
  getButtonId = (e) => {
    console.log(e.currentTarget.id);
    this.setState({
      tempid: e.currentTarget.id,
    });
    this.report();
  };
  handleOk = (id) => {
    switch (id) {
      case "1":
        this.setState({
          isModalVisible: false,
          userName: this.state.reporttext,
          reporttext: "",
        });
        break;
      case "2":
        this.setState({
          isModalVisible: false,
          nickName: this.state.reporttext,
          reporttext: "",
        });
        break;
      case "3":
        if (
          this.state.newpass === this.state.newpass1 &&
          this.state.oldpass === this.state.password
        ) {
          console.log("hi");
          this.setState({
            isModalVisible: false,
            password: this.state.newpass,
            reporttext: "",
            newpass: "",
            newpass1: "",
            oldpass: "",
          });
          console.log(this.state.newpass);
        }

        break;
      case "4":
        this.setState({
          isModalVisible: false,
          gender: this.state.reporttext,
          reporttext: "",
        });
        console.log(this.state.gender);
        break;
      case "5":
        this.setState({
          isModalVisible: false,
          birthday: this.state.reporttext,
          reporttext: "",
        });
        break;
      case "6":
        this.setState({
          isModalVisible: false,
          email: this.state.reporttext,
          reporttext: "",
        });
        break;
      case "7":
        this.setState({
          isModalVisible: false,
          phone: this.state.reporttext,
          reporttext: "",
        });
        break;
      case "8":
        this.setState({
          isModalVisible: false,
          address: this.state.reporttext,
          reporttext: "",
        });
        break;

      default:
        break;
    }
    // this.setState({
    //   isModalVisible: false,
    //   reporttext: "",
    // });
  };
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
      reporttext: "",
    });
  };
  reportonChange = (event) => {
    const { value } = event.target;
    this.setState({
      reporttext: value,
    });
    console.log(value);
  };
  passwordChange = (event) => {
    const { value } = event.target;
    this.setState({
      oldpass: value,
    });
  };
  newpasswordChange1 = (event) => {
    const { value } = event.target;
    this.setState({
      newpass: value,
    });
    console.log(value);
  };
  newpasswordChange2 = (event) => {
    const { value } = event.target;
    this.setState({
      newpass1: value,
    });
    console.log(value);
  };
  report = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  render() {
    const { userName, nickName, gender, birthday, email, phone, address, account } =
      this.state;
    return (
      <div className="EditInformation">
        <div className="title">
          <FormOutlined style={{ marginRight: "20px" }} />
          <div>編輯個人資訊</div>
        </div>
        <div className="allitem">
          <div className="item">
            <div>姓名：{userName}</div>
            <Button id="1" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>暱稱：{nickName}</div>
            <Button id="2" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>帳號：{account}</div>
            <Button id="account" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>密碼：{}</div>
            <Button id="3" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>性別：{gender}</div>
            <Button id="4" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>生日：{birthday}</div>
            <Button id="5" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>信箱：{email}</div>
            <Button id="6" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>電話：{phone}</div>
            <Button id="7" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
          <div className="item">
            <div>地址：{address}</div>
            <Button id="8" onClick={this.getButtonId}>
              修改
            </Button>
          </div>
        </div>
        <div>
          <Modal
            title="編輯"
            visible={this.state.isModalVisible}
            onOk={() => this.handleOk(this.state.tempid)}
            onCancel={this.handleCancel}
            okText="送出"
            cancelText="取消"
          >
            修改內容：
            <br />
            {this.renderSwitch(this.state.tempid)}
          </Modal>
        </div>
      </div>
    );
  }
}
export default EditInformation;
