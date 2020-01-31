import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from '../Components/Form/Form'
// import Nav from '../Components/Nav/Nav'
import Dashboard from '../Components/Dashboard/Dashboard'
import Auth from '../Components/Auth/Auth'
import Post from '../Components/Post/Post'
 

export default (
    <Switch>
        <Route exact path ='/' component={Form}/>
        <Route exact path ='/dashboard' component={Dashboard}/>
        <Route exact path ='/post' component={Post}/>

    </Switch>
)