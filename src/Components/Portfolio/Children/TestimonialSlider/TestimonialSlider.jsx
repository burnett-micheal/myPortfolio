import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlexBox, StyledBox, Text } from "./TestimonialSliderStyle";
import testimonials from "../../../../Data/portfolio";

class TestimonialSlider extends Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    this.setState((prevState) => {
      prevState.slides = testimonials.map((testimonial, index) => {
        return this.makeSlide(testimonial, index);
      });
      return prevState;
    });
  }

  makeSlide = (testimonial, key) => {
    return (
      <FlexBox width="95vw" key={key}>
        <StyledBox m="4.5vw">
          <Text color="#F3F9FF" size="2.5vw" width="20vw" fw="bold">
            {testimonial?.name}
          </Text>
          <Text color="#F3F9FF" size="2vw" width="20vw">
            {testimonial?.company}
          </Text>
        </StyledBox>
        <Text center color="#F3F9FF" size="2.2vw" m="4vw">
          {testimonial?.testimonial}
        </Text>
      </FlexBox>
    );
  };
  render() {
    return (
      <FlexBox
        width={95 * this.state.slides.length + "vw"}
        ml={-95 * this.props.index + "vw"}
      >
        {this.state.slides}
      </FlexBox>
    );
  }
}

TestimonialSlider.propTypes = {
  index: PropTypes.number.isRequired,
};

export default TestimonialSlider;
