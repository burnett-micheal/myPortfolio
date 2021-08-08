import React, {Component} from "react";
import {Box} from '@material-ui/core';
import BlogsDisplay from "./Components/BlogsDisplay/BlogsDisplay";
import Blog from "./Components/Blog/Blog";
import Landing from "./Components/Landing/Landing";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  componentDidMount(){
    if(this.getPath().length === 0){
      window.location.pathname = "home";
    }
  }

  getPath = () => {
    const result = window.location.pathname.split("/").filter((i) => {
      return i !== "";
    });
    return result;
  }

  render() {
    return (
    <Box>
      <Sidebar />
        <Switch>
          <Route path="/home">
          <Landing />
          </Route>
          <Route path="/blogs">
            <BlogsDisplay />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
    </Box>
    )
  }}

export default withRouter(App);
