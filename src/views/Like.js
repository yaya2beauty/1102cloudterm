import React, { Component} from 'react';
// import '../style/Community.scss'
import PostCards from '../components/PostCard'

class Like extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div  style={{margin:'24px 16px 0'}}>
                              
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
        )
    }


}
export default Like;