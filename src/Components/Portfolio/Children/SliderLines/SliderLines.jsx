import React, { Component } from "react";
import PropTypes from "prop-types";
import { Line, StyledBox } from "./SliderLinesStyle";

class SliderLines extends Component {
  state = {
    lines: [],
    index: -1,
  };
  componentDidUpdate() {
    if (this.state.index !== this.props.index) {
      this.setState((prevState) => {
        const lines = [];
        for (let i = 0; i < 4; i++) {
          lines.push(
            <Line
              height="0.15vw"
              width="2vw"
              color={i === this.props.index ? "gray" : "white"}
              bg={i === this.props.index ? "gray" : "white"}
              mr="1vw"
              key={i}
            />
          );
        }
        prevState.lines = lines;
        prevState.index = this.props.index;
        return prevState;
      });
    }
  }

  render() {
    return <StyledBox>{this.state.lines}</StyledBox>;
  }
}

SliderLines.propTypes = {
  index: PropTypes.number.isRequired,
};

export default SliderLines;
