import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// components //
import Navbar from './components/layout/Navbar';

import Users from './components/users/Users';

import Search from './components/users/Search';

import User from './components/users/User';

// import Alert from './components/layout/Alert';

// import pages //
import About from './components/pages/About';
  
  const App = () => {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState({});
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState(null);
  

  // search github users //
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setLoading(false);
    setUsers(res.data.items);
  }

  // get single github user //
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setUser(res.data);
  }
  // get user repos //
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setRepos(res.data);
  }

  const clearUsers = () => {
    setLoading(false);
    setUsers([]);
    
  }

  // show alert //
  const showAlert = (msg,type) => {
    setAlert({msg,type});

    // time out //
    setTimeout(() => setAlert(null)
    ,5000);
  }
 


   
    return (
      <Router>
      <div className="App">
        <Navbar />
        {/* <Alert alert={this.state.alert} /> */}
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => (
             <div>
              <Search searchUsers={searchUsers}
              clearUsers={clearUsers}
              showClear={users.length > 0 ? true : false}
              showAlert={showAlert}
              />
              <Users loading={loading} users={users}
              />
             </div>
            )}/>

            <Route exact path="/about" component={About}/>

            <Route exact path="/user/:login" render={props => (
              <div>
              <User {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos}
              repos={repos}/>
              </div>
            )} />
           
          </Switch>
        </div>
        
      </div>
      </Router>
    )
  
}

export default App;