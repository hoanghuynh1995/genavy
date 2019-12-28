import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import './css';
import $ from 'jquery';
import TodoList from './containers/TodoList';
import Login from './containers/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={TodoList} className="App"></Route> */}
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/" className="App">
            {/* <TodoList /> */}
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;
