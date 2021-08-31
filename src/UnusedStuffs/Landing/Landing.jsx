import React, { Component } from "react";
import { Box } from "@material-ui/core";
import {
  LandingCard,
  Title,
  Text,
  TextSection,
  LandingImage,
  NameSection,
  Name,
  Specialty,
} from "./LandingStyle";
import LandingImg from "../../Assets/Images/FacePicV2.png";

class Landing extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <Box>
        <NameSection>
          <Name>Micheal Burnett</Name>
          <Specialty>Full-Stack Developer</Specialty>
        </NameSection>

        <LandingCard>
          <LandingImage src={LandingImg} />
          <TextSection>
            <Title>I caught fire coding.</Title>
            <Text>
              As a young adult I went from role to role, different jobs and
              different positions. From general labor to driving around an Ice
              Cream Truck in the summer, nothing felt quite right, and then I
              began programming. First as a hobby just to experiment, then I
              joined small teams for projects. Eventually I found a way to break
              into an IT role thru my Full Stack Development work at Host A Fan.
              There I used mainly React, .Net Core, and SQL Server to develop a
              web application for hosting Events, Blogs, and Rideshares. I love
              applying responsive design principles and watching my web pages
              shrink into mobile screens and still look amazing. So far I have
              React, .Net Core, SQL Server, JavaScript, C#, JQuery, Material UI,
              Bootstrap, Html, Css, Formik, Axios, and Git under my belt. I've
              started learning Azure Storage, Cors, and Python. I'm still
              enthusiastically grabbing onto any other programming languages,
              frameworks, or principles I can integrate into the coding web in
              my head.
            </Text>
          </TextSection>
        </LandingCard>
      </Box>
    );
  }
}

Landing.propTypes = {};

export default Landing;
