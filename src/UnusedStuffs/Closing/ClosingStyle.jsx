import styled from "styled-components";
import { Box } from "@material-ui/core";
import Colors from "../../GlobalStyles/ColorScheme";

const Text = styled.div`
  padding: 0.5%;
  font-size: 0.95vw;
  color: ${Colors.text};
`;

const Link = styled.div`
  padding: 0.5%;
  font-size: 0.95vw;
  color: ${Colors.text};
  :hover {
    cursor: pointer;
    transition: background ease 1.5s;
    background: ${Colors.buttonBg};
    color: ${Colors.text};
    border-radius: 0.2vw;
  }
`;

const Card = styled(Box)`
  background-color: ${Colors.cardBg};
  border-style: solid;
  border-width: 0.15vw;
  border-color: ${Colors.border};
  border-radius: 0.75vw;
  margin: 3%;
  margin-top: 0%;
`;

const Float = styled(Box)`
  position: relative;
  margin-left: 77vw;
`;

export { Text, Card, Float, Link };
