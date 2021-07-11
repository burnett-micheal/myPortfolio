import styled from "styled-components";
import { Box } from "@material-ui/core";

const Text = styled.div`
  padding: 0.5%;
  font-size: 0.95vw;
  color: white;
`;

const Link = styled.div`
  padding: 0.5%;
  font-size: 0.95vw;
  color: white;
  :hover {
    cursor: pointer;
    background: white;
    color: blue;
    border-radius: 0.2vw;
  }
`;

const Card = styled(Box)`
  background-color: #1f2d32;
  border-style: solid;
  border-width: 0.15vw;
  border-color: #ffe600;
  margin: 3%;
  margin-top: 0%;
`;

const Float = styled(Box)`
  position: relative;
  margin-left: 77vw;
`;

export { Text, Card, Float, Link };
