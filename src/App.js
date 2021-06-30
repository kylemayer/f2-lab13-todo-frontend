import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import TodoPage from './TodoPage.js';

const TOKEN_KEY = 'TOKEN';

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN_KEY)
  }

  login = (token) => {
    this.setState({ token: token })
    localStorage.setItem(TOKEN_KEY, token)
  }

  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN_KEY, '')
  }

render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/">Login</Link>
            <Link to="/">Signup</Link>
            <Link to="/">To-Dos</Link>
            <button>Logout!</button>
          </div>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUp login={this.login} {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <Login login={this.login} {...routerProps} />}
            />
            <Route
              path="/todos"
              exact
              render={(routerProps) =>
              this.state.token
              ? <TodoPage {...routerProps} token={this.state.token} />
              : <Redirect to="/" />
            }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
