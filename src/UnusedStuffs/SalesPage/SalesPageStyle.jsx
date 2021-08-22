import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Box } from "@material-ui/core";

const RightArrow = styled(ArrowForwardIosIcon)`
  position: relative;
  top: -50%;
  :hover {
    background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
    cursor: pointer;
  }
`;

const LeftArrow = styled(ArrowBackIosIcon)`
  position: relative;
  top: -50%;
  :hover {
    background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 25vw;
  width: null;
  max-width: 30vw;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 1.5vw;
  font-size: 2.6vw;
  color: #000033;
`;

const Text = styled.div`
  text-indent: 3.5vw;
  letter-spacing: 0.05vw;
  font-size: 1.5vw;
  color: #333300;
`;

const topContainer = styled(Box)`
  margin: 2vw;
`;

export { RightArrow, LeftArrow, Image, Title, Text, topContainer };
