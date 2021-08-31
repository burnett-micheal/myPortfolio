import React, { Component } from "react";
import {
  RightArrow,
  LeftArrow,
  Image,
  Title,
  Text,
  TopContainer,
} from "./SalesPageStyle";
import img0 from "../../Assets/Images/FacePic.png";
import img1 from "../../Assets/Images/HostAFan.jpg";

class SalesPage extends Component {
  state = {
    images: [img0, img1],
    imgIndex: 0,
  };
  moveLeft = () => {
    this.setState((prevState) => {
      const maxIndex = this.state.images.length;
      prevState.imgIndex = prevState.imgIndex - 1;
      if (prevState.imgIndex < 0) {
        prevState.imgIndex = maxIndex;
      }
      return prevState;
    });
  };
  moveRight = () => {
    const maxIndex = this.state.images.length;
    this.setState((prevState) => {
      prevState.imgIndex = prevState.imgIndex + 1;
      if (prevState.imgIndex > maxIndex) {
        prevState.imgIndex = 0;
      }
      return prevState;
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <LeftArrow onClick={this.moveLeft} />
          <Image src={this.state.images[this.state.imgIndex]} alt="..." />
          <RightArrow onClick={this.moveRight} />
        </div>
        <Title>Title Test</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </React.Fragment>
    );
  }
}

export default SalesPage;
