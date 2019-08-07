import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'

import './App.css';
import Home from './components/home';
import Login from './components/login/login';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="*" component={Login}></Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

