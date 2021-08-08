import styled from "styled-components";
import { Box } from "@material-ui/core";
import Colors from "../../GlobalStyles/ColorScheme";

const Title = styled.h1`
  font-size: 2vw;
  text-align: center;
  color: ${Colors.title};
`;

const Text = styled.div`
  padding: 0.5%;
  font-size: 1.2vw;
  color: ${Colors.text};
`;

const Card = styled(Box)`
  background-color: ${Colors.cardBg};
  border-style: solid;
  border-width: 0.15vw;
  border-color: ${Colors.border};
  border-radius: 0.75vw;
  box-shadow: 10px 10px 20px #90b9d1, -10px -10px 20px #90b9d1;
  margin: 3%;
`;

const HalfImg = styled.img`
  width: 15%;
  height: auto;
  margin: 2%;
  margin-left: 5vw;
  margin-right: 15vw;
  border-style: solid;
  border-width: 0.15vw;
  border-color: ${Colors.border};
  border-radius: 7.5vw;
  background-color: #90b9d1;
`;

export { Title, Text, Card, HalfImg };
