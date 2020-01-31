import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Nav extends Component {
    render(){
        return(
            <div className='nav_bar'>
                <Link to='/dashboard'> dashboard </Link>
                <Link to='/post'>Add a Post</Link>
                <button onClick={() => axios.delete('/auth/logout').then(() => this.props.history.push('/'))}>Logout</button>
            </div>
        )
    }
}
export default withRouter(Nav)
 