import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlexBox, StyledBox, Text, Img } from "./BlogSliderStyle";
import blogs from "../../../../Data/blogs";

class BlogSlider extends Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    this.setState((prevState) => {
      for (const [key] of Object.entries(blogs)) {
        prevState.slides.push(this.makeSlide(key));
      }
      return prevState;
    });
  }

  makeSlide = (key) => {
    const title = key;
    const blog = blogs[title];
    let result = null;
    if (title && blog.description && blog.thumbnailImage) {
      result = (
        <FlexBox width="100vw" key={key}>
          <Text color="#F3F9FF" center width="55vw" ml="4.5vw" size="2.5vw">
            {blog.description}
          </Text>
          <StyledBox ml="8vw" onClick={this.onBlogClick} id={title} link="true">
            <Text
              color="#F3F9FF"
              width="24.5vw"
              size="2.5vw"
              fw="bold"
              center
              mb="3vw"
            >
              {title.replace(/_/g, " ")}
            </Text>
            <Img src={blog.thumbnailImage} alt="..." height="24.5vw" />
          </StyledBox>
        </FlexBox>
      );
    }
    return result;
  };

  onBlogClick = (e) => {
    const blogTitle = e.currentTarget.id;
    const historySet = "blog/" + blogTitle;
    window.location.pathname = historySet;
  };

  render() {
    return (
      <FlexBox
        width={100 * this.state.slides.length + "vw"}
        ml={-100 * this.props.index + "vw"}
      >
        {this.state.slides}
      </FlexBox>
    );
  }
}

BlogSlider.propTypes = {
  index: PropTypes.number.isRequired,
};

export default BlogSlider;
