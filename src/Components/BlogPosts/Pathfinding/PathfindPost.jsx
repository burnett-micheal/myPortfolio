import React, { Component } from "react";
import { Box } from "@material-ui/core";
import Pathfinding from "./Children/Pathfinding/Pathfinding";

class PathfindPost extends Component {
  render() {
    return (
      <Box>
        <Pathfinding widthVW={80} heightVW={20} />
      </Box>
    );
  }
}

PathfindPost.propTypes = {};

export default PathfindPost;
