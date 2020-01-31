import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'
import Auth from './Components/Auth/Auth'
import routes from './routes/routes'
import {HashRouter} from 'react-router-dom'
import store from './ducks/store'
import {Provider} from 'react-redux'


function App() {
   
  return (
    <Provider store={store}> 
      <HashRouter> 
        <div className="App">
         
          {/* <Dashboard/>
          <Nav/>
          <Post/>
          <Auth/> */}
          {routes}
        </div>
      </HashRouter>
    </Provider>
    
  );
}

export default App;
