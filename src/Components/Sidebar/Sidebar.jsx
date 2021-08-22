import React, { Component } from "react";
import { Box, Drawer, List } from "@material-ui/core";
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
      <div>
        <Icon onClick={this.toggleDrawer} />
        <Drawer
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
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
