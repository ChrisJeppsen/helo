import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Dashboard extends Component {
    componentDidMount(){
        getUser()
    }
    render(){
        return(
            <div>
                 {this.props.user.username}
                 {console.log(this.props)}
                <Nav/>
            </div>
        )
    }
}
 
function mapStateToProps(state){
    
    return({
        user: state.reducer.user
    })
}
 
export default connect(mapStateToProps, {getUser})(withRouter(Dashboard))
