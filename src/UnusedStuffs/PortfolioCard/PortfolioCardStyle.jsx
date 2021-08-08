import styled from "styled-components";

const PortCard = styled.div`
  position: relative;
  width: 45.2%;
  margin-left: 3%;
  margin-bottom: 3%;
  margin-top: 5%;

  top: 0px;
  transition: top ease 0.4s;

  :hover img {
    opacity: 1%;
  }

  :hover video {
    transition: opacity ease 0.6s;
    opacity: 100%;
  }

  :hover div {
    opacity: 100%;
  }

  :hover {
    top: -2vw;
  }
`;

const Vid = styled.video`
  border-style: solid;
  border-width: 0.15vw;
  border-color: black;
  border-radius: 0.75vw;
  width: 100%;
  z-index: -1;
`;

const Img = styled.img`
  border-style: solid;
  border-width: 0.15vw;
  border-color: black;
  border-radius: 0.75vw;
  position: absolute;
  width: 100%;
  z-index: 0;
  opacity: 100%;
  transition: opacity ease 0.9s;
`;

const Overlay = styled.div`
  ${(props) => {
    let yAxis = false;
    let xAxis = false;
    let result = "";

    if (props.top || props.bottom) {
      if (props.top) {
        result += "top: 0.1%;";
      }
      if (props.bottom) {
        result += "bottom: 0.1%;";
      }
      yAxis = true;
    }
    if (props.left || props.right) {
      if (props.left) {
        result += "left: 0.1%;";
      }
      if (props.right) {
        result += "right: 0.1%;";
      }
      xAxis = true;
    }

    if ((xAxis && !yAxis) || (!xAxis && yAxis)) {
      if (xAxis) {
        result += "top: 45%;";
      }
      if (yAxis) {
        result += "left: 45%;";
      }
    }

    return result;
  }}
  border-radius: 0.3vw;
  color: white;
  background: black;
  margin: 1%;
  z-index: 1;
  position: absolute;
  opacity: 0%;
  transition: opacity ease 0.6s;
  font-size: 1.2vw;
`;

export { PortCard, Vid, Overlay, Img };
