import React, {Component} from "react";
import {Box} from '@material-ui/core';
import BlogsDisplay from "./Components/BlogsDisplay/BlogsDisplay";
import Blog from "./Components/Blog/Blog";
import Sidebar from "./Components/Sidebar/Sidebar";
import Portfolio from "./Components/Portfolio/Portfolio";
import PathfindPost from "./Components/BlogPosts/Pathfinding/PathfindPost";
import {
  withRouter,
  Switch,
  Route
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
    <Box display="flex">
      <Sidebar />
        <Switch>
          <Route path="/pathfinding">
            <PathfindPost />
          </Route>
          <Route path="/blogs">
            <BlogsDisplay />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/home">
            <Portfolio />
          </Route>
        </Switch>
    </Box>
    )
  }}

export default withRouter(App);
