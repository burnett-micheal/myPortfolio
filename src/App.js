import React, {Component} from "react";
import {Box} from '@material-ui/core';
import AboutMe from "./Components/AboutMe/AboutMe";
import PortfolioCard from "./Components/PortfolioCard/PortfolioCard";
import NavBar from "./Components/NavBar/NavBar";
import Closing from "./Components/Closing/Closing";

class App extends Component {


  componentDidMount(){
    document.body.style["background"] = "#00001a";
  }

  render() {
    return (
    <Box>
      <NavBar />

      <AboutMe />

      <Box display="flex" flexWrap="wrap">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </Box>

      <Closing />

    </Box>
    )
  }}

export default App;
