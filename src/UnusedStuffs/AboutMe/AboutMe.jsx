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
          I'm A Lifelong Learner Who Is Utterly Fascinated By The World Of
          Technology.
        </Text>
        <Text>
          While I Have The Most Professional Experience In Full Stack Web
          Development Using React, .Net Core, And SQL Server, I Also Have
          Experience Using Various Platforms Such As Unity, Blender, GameMaker
          Studio, Spigot, And Much More.
        </Text>
        <Text></Text>
        <Text>
          Hover Over The Images Below To Learn More About Some Of My Previous
          Projects.
        </Text>
      </Box>
    </Card>
  );
}
