import React from "react";
import { Box } from "@material-ui/core";
import MichealPicture from "../../Assets/MichealPicture.png";
import { Title, Text, Card, HalfImg } from "./AboutMeStyle";

export default function AboutMe() {
  return (
    <Card display="flex">
      <HalfImg src={MichealPicture} />
      <Box>
        <Title>About Me</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Card>
  );
}
