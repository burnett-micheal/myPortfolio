import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
import LandingImg from "../../Assets/image/b.jpg";

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
            <Title>About Me</Title>
            <Text>
              I am a former Host A Fan employee where I was taught full-stack
              development thru on the job training. Creating a web application
              collaboratively with other developers using full-stack
              technologies. These include React, .Net Core, and SQL Server among
              some additional libraries. During my time there I led daily
              standups, code reviews, meetings, and presentations for clients. I
              also have more personal experience using an array of technologies
              such as Unity, Blender, GameMaker Studio, and Spigot. You can
              contact me at burnett.micheal.business@gmail.com.
            </Text>
          </TextSection>
        </LandingCard>
      </Box>
    );
  }
}

Landing.propTypes = {};

export default Landing;
