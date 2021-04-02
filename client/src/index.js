import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/bootstrap.min.css';
import './style/site.css';
import { BrowserRouter as Router} from 'react-router-dom';
import  reducers from './reducers/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { fetchStatsAction } from './actions/statsActions';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchStatsAction());

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </ Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
