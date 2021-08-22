import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleChange = (event) => {
    this.setState((prevState) => {
      prevState[event.target.name] = event.target.value;
      return prevState;
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        ></TextField>
        <TextField
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></TextField>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default LoginForm;
