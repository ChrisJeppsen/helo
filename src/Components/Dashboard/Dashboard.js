import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'
import {getPost} from '../../ducks/reducer'

class Dashboard extends Component {
    componentDidMount(){
        this.props.getUser()
        this.props.getPost()
    }
    render(){
        return(
            <div>
                 {this.props.user.user_name}
                 {console.log(this.props)}
                <Nav/>
                <div> Posts </div>
                {this.props.post[0] &&
                this.props.post[0].title}
                
            </div>
        )
    }
}
 
function mapStateToProps(state){
    
    return({
        user: state.reducer.user,
        post: state.reducer.post
    })
}
 
export default withRouter(connect(mapStateToProps, {getUser, getPost})(Dashboard))
