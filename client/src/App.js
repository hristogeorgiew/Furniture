import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Home/HomePage';
import NotFound from './components/Common/NotFound';
import CreatePage from './components/Create/CreatePage';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/create' component={CreatePage} />
            <Route exact component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }

}


export default App;
