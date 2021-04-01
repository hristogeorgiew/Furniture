import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from './actions/authActions';
import HomePage from './components/Home/HomePage';
import CreatePage from './components/Create/CreatePage';
import ProfilePage from './components/Profile/ProfilePage';
import DetailsPage from './components/Details/DetailsPage';
import LoginPage from './components/Auth/LoginPage';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import RegisterPage from './components/Auth/RegisterPage';

import { furniture } from './data.json';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };

    this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount() {
    if(localStorage.authToken) {
       this.setState({ loggedIn: true });
    }
  }

  onLogout() {
    this.setState({loggedIn: false})
    this.props.logout();
    this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.loginSuccess) {
        this.setState({loggedIn: true})
      }
  }

  render() {
    return (
      <div>
        <Header
          items={0}
          users={0}
          loggedIn={this.state.loggedIn}
          logout={this.onLogout}
        />
        <main>
          <Switch>
            <Route exact path='/' render={() => <HomePage furniture={furniture} />} />
            <Route exact path='/create' component={CreatePage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/details/:id' component={DetailsPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success
  };
}

function mapDispatchToProps(dispatch) {
    return {
      logout: () => dispatch(logoutAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
