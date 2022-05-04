import React, { Component} from 'react';
// import '../style/Community.scss'
import ReportPost from '../components/ReportPost'
class Manager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pps: [
                {
                    postId:'001',
                    userName:'Anna',
                    content:'hihi',
                    file:require('../assets/store/m1.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '1',
                    userImg:"data.user_img",
                    reportReason:'具挑釁內容',
                    result:undefined
                },
                {                  
                    postId:'002',
                    userName:'Susanna',
                    content:'天氣真好',
                    file:require('../assets/store/m2.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:false,
                    userId: '2',
                    userImg:require('../assets/user/user.jpg'),
                    reportReason:'具挑釁內容',
                    result:undefined
                },
                {
                    postId:'003',
                    userName:'Diane',
                    content:'La~La~La~',
                    file:require('../assets/store/m3.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:false,
                    isLove:false,
                    userId: '2',
                    userImg:"data.user_img",
                    reportReason:'具挑釁內容',
                    result:undefined
                }
            ],
            ppps: [
                {
                    postId:'001',
                    userName:'Anna',
                    content:'hihi',
                    file:require('../assets/store/m1.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '1',
                    userImg:"data.user_img",
                    reportReason:'具挑釁內容',
                    result:'無違反規定，忽略'
                },
                {                  
                    postId:'002',
                    userName:'Susanna',
                    content:'天氣真好',
                    file:require('../assets/store/m2.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:false,
                    userId: '2',
                    userImg:require('../assets/user/user.jpg'),
                    reportReason:'具挑釁內容',
                    result:'移除該文章'
                },
                {
                    postId:'003',
                    userName:'Diane',
                    content:'La~La~La~',
                    file:require('../assets/store/m3.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:false,
                    isLove:false,
                    userId: '2',
                    userImg:"data.user_img",
                    reportReason:'具挑釁內容',
                    result:'無違反規定，忽略'
                }
            ],
         
        }
    }
    render() {
        return (
            <div  style={{margin:'24px 16px 0'}}> 
                <div style={{margin:'24px',fontSize:'22px',display:'flex'}}>
                    待處理貼文
                    <div style={{color:'#6087BF',marginLeft:'20px'}}>3</div>
                </div>      
                {this.state.pps.map((pp, key) => {
                    return (
                        <ReportPost
                            key={key}
                            myuserid={this.state.myuserid}
                            postInfo={pp}
                            label="postcontent"
                            changeLove={this.changeLove}
                            changeThumb={this.changeThumb}
                        />
                    )

                })}
                <div style={{margin:'24px',fontSize:'22px',display:'flex'}}>
                    已處理貼文
                    <div style={{color:'#6087BF',marginLeft:'20px'}}>3</div>
                </div> 
                {this.state.ppps.map((pp, key) => {
                    return (
                        <ReportPost
                            key={key}
                            myuserid={this.state.myuserid}
                            postInfo={pp}
                            label="postcontent"
                            changeLove={this.changeLove}
                            changeThumb={this.changeThumb}
                        />
                    )

                })}
            </div>
        )
    }


}
export default Manager;