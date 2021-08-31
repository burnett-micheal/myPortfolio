import styled from "styled-components";

const Title = styled.div`
  font-size: 2.5vw;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  margin-top: 0.6vw;
`;

const Text = styled.div`
  font-size: 1.3vw;
  padding-top: 1vw;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 2vw;
  text-align: center;
  color: #333300;
`;

const Link = styled.div`
  font-size: 1.3vw;
  padding-top: 1vw;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 0.4vw;
  color: #0645ad;
  text-align: center;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Image = styled.img`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: auto;
  display: block;
`;

const Video = styled.video`
  margin-right: auto;
  margin-left: auto;
  display: block;
`;

export { Title, Text, Image, Video, Link };
