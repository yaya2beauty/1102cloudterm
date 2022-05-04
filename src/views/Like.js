import React, { Component} from 'react';
// import '../style/Community.scss'
import PostCards from '../components/PostCard'

class Like extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myuserid:'2',
            pps: [
                {
                    postId:'001',
                    userName:'Anna',
                    content:'hihi',
                    file:require('../assets/store/m9.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '2',
                    userImg:"data.user_img",
                    comments:[]
                },
                {                  
                    postId:'002',
                    userName:'Diane',
                    content:'天氣真好',
                    file:require('../assets/store/m2.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:true,
                    isLove:true,
                    userId: '2',
                    userImg:"data.user_img",
                    comments:[]
                },
                {
                    postId:'003',
                    userName:'Diane',
                    content:'La~La~La~',
                    file:require('../assets/store/m3.jpg'),
                    time:'2020-04-22',
                    status:true,
                    isThumb:false,
                    isLove:true,
                    userId: '2',
                    userImg:"data.user_img",
                    comments:[]
                }
            ]
            
        }
    }
    changeLove =(postId)=>{ 
        const newposts =this.state.pps.map(pp => {
            return pp.postId === postId ? {  ...pp, isLove: !pp.isLove } : pp
          });
          this.setState({
            pps: newposts
          });
    }

    changeThumb =(postId)=>{ 
        const newposts =this.state.pps.map(pp => {
            return pp.postId === postId ? {  ...pp, isThumb: !pp.isThumb } : pp
          });
          this.setState({
            pps: newposts
          });
    }
    render() {
        return (
            <div  style={{margin:'24px 16px 0'}}>
                {this.state.pps.map((pp, key) => {
                    return (
                        <PostCards
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
export default Like;