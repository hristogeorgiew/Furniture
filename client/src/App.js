import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Home/HomePage';
import NotFound from './components/Common/NotFound';
import CreatePage from './components/Create/CreatePage';
import DetailsPage from './components/Details/DetailsPage';
import Header from './components/Common/Header';



class App extends Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='App'>
        <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/view/:page' component={HomePage} />
            <Route  path='/details/:id' component={DetailsPage} />
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


export default withRouter(App);
