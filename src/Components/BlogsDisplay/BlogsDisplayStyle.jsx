import styled from "styled-components";
import { Card, Box, TextField, Button } from "@material-ui/core";

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
  text-align: center;
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

const SearchBar = styled(TextField)`
  width: 20vw;
`;

const SearchContainer = styled.div`
  display: flex;
  margin: 1vw;
  margin-left: 37vw;
`;

const SearchTags = styled.div`
  position: fixed;
  background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
  width: 55vw;
  height: 32.5vw;
  right: 22.5vw;
  top: 7vw;
  z-index: 1;
  flex-wrap: wrap;
  border-style: dotted;
  border-color: #66b2ff;
`;

const TagsButton = styled(Button)`
  width: 6vw;
  height: 3vw;
  left: 47vw;
`;

const TagButton = styled(Button)`
  height: 3vw;
  margin: 1vw;
`;

export {
  BlogCard,
  Title,
  Description,
  Thumbnail,
  TextSection,
  BlogBox,
  SearchBar,
  SearchContainer,
  SearchTags,
  TagsButton,
  TagButton,
};
