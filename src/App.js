<<<<<<< HEAD
import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Dashboard from "./DashBoard";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return this.state.loggedIn ? (
      <Dashboard />
    ) : (
      <div className="App-header">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h1" color="inherit"></Typography>
            <h4>my music App</h4>
          </Toolbar>
        </AppBar>
        <div className="loginContainer">
          {/* <Button color="inherit">Login</Button> */}
          <TextField
            id="Username*"
            label="Username*"
            type="text"
            autoComplete="current-password"
            margin="normal"
          >
            password
          </TextField>

          <TextField
            id="standard-password-input"
            label="Password*"
            type="password"
            autoComplete="current-password"
            margin="normal"
          >
            password
          </TextField>
          <Button
            onClick={() => {
              this.setState({ loggedIn: true });
            }}
          >
            login
          </Button>
        </div>
      </div>
    );
  }
=======
import React from 'react';
import './App.css';
import Dashboard from '../src/components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-musicHeader">
        <p>
        THIS IS OUR MUSIC APP--- BITCHES!!!!
        </p>
        <Dashboard/>
      </header>
    </div>
  );
>>>>>>> a12ae76795d7a981f7d64c68941113ebb701c79d
}

export default Login;
