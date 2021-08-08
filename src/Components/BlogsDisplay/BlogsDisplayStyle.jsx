import styled from "styled-components";
import { Card, Box } from "@material-ui/core";

const BlogCard = styled(Card)`
  margin: 2.5vw;
  width: 40vw;
  background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 2.2vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
`;

const Description = styled.div`
  font-size: 1vw;
`;

const Thumbnail = styled.img`
  height: 15vw;
  width: 15vw;
  margin-right: 0;
  margin-left: auto;
  display: block;
`;

const TextSection = styled.div`
  margin-right: 1vw;
  margin-left: 1vw;
  margin-top: 0;
  margin-bottom: auto;
  display: block;
`;

const BlogBox = styled(Box)`
  margin-left: 4.95vw;
  flex-wrap: wrap;
`;

export { BlogCard, Title, Description, Thumbnail, TextSection, BlogBox };
