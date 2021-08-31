import styled from "styled-components";
import { Card } from "@material-ui/core";

const LandingCard = styled(Card)`
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 2.5vw;
  margin-bottom: 1.5vw;
  width: 85vw;
  background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
  display: flex;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 0.75vw;
  margin-bottom: 0.75vw;
  font-size: 2.6vw;
  color: #000033;
`;

const Text = styled.div`
  text-indent: 3.5vw;
  letter-spacing: 0.05vw;
  font-size: 1.5vw;
  color: #333300;
`;

const TextSection = styled.div`
  margin-right: 1vw;
  margin-left: 1vw;
  margin-top: 0;
  margin-bottom: auto;
  display: block;
`;

const LandingImage = styled.img`
  height: 36.216vw;
  width: 42.408vw;
  margin: 1vw;
  display: block;
`;

const NameSection = styled(Card)`
  position: absolute;
  left: 4vw;
  top: 0.75vw;
  background: linear-gradient(135deg, white, #e0e0e0);
  padding: 0.5vw;
  border: black;
`;

const Name = styled.div`
  font-size: 1.3vw;
  color: #000033;
`;

const Specialty = styled.div`
  font-size: 1vw;
  color: #333300;
`;

export {
  LandingCard,
  Title,
  Text,
  TextSection,
  LandingImage,
  NameSection,
  Name,
  Specialty,
};
