import React, { Component, Fragment } from 'react';
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

 class App extends Component {
  state = {
    users: [],
    loading: false,
    alert:null,
    repos: [],
    user:{},
  }
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({
  //     users:res.data,
  //     loading: false
  //   });
  // }

  // search github users //
  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users:res.data.items,
      loading: false,
      alert: null
    });
  }

  // get single github user //
  getUser = async (username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      user:res.data,
      loading:false
    });
  }
  // get user repos //
  getUserRepos = async (username) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      repos:res.data,
      loading:false
    });
  }

  clearUsers = () => {
    this.setState({users: [],loading: false});
  }

  // show alert //
  showAlert = (msg,type) => {
    this.setState({alert:{msg:msg,type:type}});

    // time out //
    setTimeout(() => {
      this.setState({alert: null});
    },5000);
  }
 

  render() {
   const {users,loading,user,repos} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar />
        {/* <Alert alert={this.state.alert} /> */}
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => (
             <div>
              <Search searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
              showAlert={this.showAlert}
              />
              <Users loading={loading} users={users}
              />
             </div>
            )}/>

            <Route exact path="/about" component={About}/>

            <Route exact path="/user/:login" render={props => (
              <div>
              <User {...props} getUser={this.getUser} user={user} loading={loading} getUserRepos={this.getUserRepos}
              repos={repos}/>
              </div>
            )} />
           
          </Switch>
        </div>
        
      </div>
      </Router>
    )
  }
}

export default App;