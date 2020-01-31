import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {getUser} from '../../ducks/reducer'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
       const  {name, value} = e.target 
       this.setState({
           [name]: value
       })
    }
    registerUser = (username, password) => {
        console.log(username)
        axios.post('/auth/register', {username, password}).then(res => {
            this.props.history.push('/dashboard')
        })
    }
    loginUser = (username, password) => {
        axios.post('/auth/login', {username, password}).then(res => {
            
            this.props.history.push('/dashboard')
        })
    }
    render(){
        const {username, password} = this.state
        return(
            <div className='form-div'>
                <div className='username/password'>
                    <input onChange={(e) => this.handleChange(e)} name='username' value={this.state.username} placeholder='Username'/>
                    <input onChange={(e) => this.handleChange(e)} name='password' value={this.state.password} placeholder='Password'/>
                    <button onClick={() => this.registerUser(username, password)}>Sign up</button>
                    <button onClick={() => this.loginUser(username, password)}>Login</button>
                </div>
             </div>
                
            
        )
    }
}

// function mapDispatchToProps(state) {
//     return ({user: this.props.})
// }

export default withRouter(Form)
 