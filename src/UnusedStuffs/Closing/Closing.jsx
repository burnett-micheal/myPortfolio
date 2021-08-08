import React, { Component } from "react";
import { Card, Text, Float, Link } from "./ClosingStyle";
import Resume from "../../Assets/Resume.pdf";

class Closing extends Component {
  onLinkClick = (e) => {
    let links = {
      contact: "mailto:burnett.micheal.business@gmail.com",
      resume: Resume,
      linkedIn: "https://www.linkedin.com/in/michealburnett/",
      github: "https://github.com/burnett-micheal",
    };

    window.open(links[e.target.id], "_blank");
  };

  render() {
    return (
      <Card display="flex">
        <Text>Thank You For Visiting!</Text>
        <Float>
          <Link onClick={this.onLinkClick} id="contact">
            Contact
          </Link>
          <Link onClick={this.onLinkClick} id="resume">
            Resume
          </Link>
          <Link onClick={this.onLinkClick} id="linkedIn">
            LinkedIn
          </Link>
          <Link onClick={this.onLinkClick} id="github">
            Github
          </Link>
        </Float>
      </Card>
    );
  }
}

export default Closing;
