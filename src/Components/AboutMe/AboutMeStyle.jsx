import styled from "styled-components";
import { Box } from "@material-ui/core";

const Title = styled.h1`
  font-size: 1.5vw;
  text-align: center;
  color: white;
`;

const Text = styled.div`
  padding: 0.5%;
  font-size: 0.95vw;
  color: white;
`;

const Card = styled(Box)`
  background-color: #1f2d32;
  border-style: solid;
  border-width: 0.15vw;
  border-color: #ffe600;
  margin: 3%;
`;

const HalfImg = styled.img`
  width: 15%;
  height: auto;
  margin: 2%;
`;

export { Title, Text, Card, HalfImg };
