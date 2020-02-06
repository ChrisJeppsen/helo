import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Post extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            content: '',
            image: ''
        }
    }

    handleChange = e => {
        const  {name, value} = e.target 
        this.setState({
            [name]: value
        })
     }
     handleSubmit = () => {
         const {title, content, image} = this.state
         axios.post('/api/addpost', {title, content, image}).then(res => {
             this.props.history.push('/dashboard')
             this.setState({
                 title: '',
                 content: '',
                 image: ''
             })

         }).catch((err) => console.log(err))
     }
    render(){
        return(
            <div>
                <input placeholder='title' onChange={(e) => this.handleChange(e)} name='title' value={this.state.title}/>
                <input placeholder='content' onChange={(e) => this.handleChange(e)} name='content' value={this.state.content}/>
                <input placeholder='image url' onChange={(e) => this.handleChange(e)} name='image' value={this.state.image}/>
                <button className='post_submit' onClick={() => this.handleSubmit()}>Submit Post</button>
                 
            </div>
        )
    }
}
export default withRouter(Post)
 