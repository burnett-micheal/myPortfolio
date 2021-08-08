import React, { Component } from "react";
import { Box, SwipeableDrawer, List } from "@material-ui/core";
import { Text, LI, Icon } from "./SidebarStyle";

class Sidebar extends Component {
  state = {
    left: false,
  };

  toggleDrawer = () => {
    this.setState((prevState) => {
      prevState.left = !prevState.left;
      return prevState;
    });
  };

  onBtnClick = (e) => {
    const navTo = e.currentTarget.id;
    window.location.pathname = navTo;
  };

  render() {
    return (
      <Box>
        {!this.state.left && <Icon onClick={this.toggleDrawer} />}
        <SwipeableDrawer
          anchor={"left"}
          open={this.state.left}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
        >
          <List>
            <LI id={"home"} onClick={this.onBtnClick}>
              <Text>Home</Text>
            </LI>
            <LI id={"blogs"} onClick={this.onBtnClick}>
              <Text>Blogs</Text>
            </LI>
          </List>
        </SwipeableDrawer>
      </Box>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
