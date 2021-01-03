import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// components //
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import User from './components/users/User';

import NotFound from './components/pages/notFound';

// import Alert from './components/layout/Alert';

// github state //
import GithubState from './context/github/GithubState';

// alert state //
import AlertState from './context/alert/AlertState';



// import pages //
import About from './components/pages/About';
  
  const App = () => {

    
   
    return (
      <GithubState>
        <AlertState>
          <Router>
          <div className="App">
            <Navbar />
            
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/about" component={About}/>

                <Route exact path="/user/:login" component={User} />
              
                <Route component={NotFound} />
              </Switch>
            </div>
            
          </div>
          </Router>
       </AlertState>
      </GithubState>
    )
  
}

export default App;