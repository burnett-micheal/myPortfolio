import React, { Component } from "react";
import { Box } from "@material-ui/core";
import {
  BlogCard,
  Title,
  Description,
  Thumbnail,
  TextSection,
  BlogBox,
} from "./BlogsDisplayStyle";
import blogs from "../../Data/blogs";
import PropTypes from "prop-types";

class BlogsDisplay extends Component {
  state = {
    blogCards: null,
  };

  componentDidMount() {
    document.title = "Blogs";
    const blogCards = [];
    for (const [key] of Object.entries(blogs)) {
      blogCards.push(this.mapBlogCard(key));
    }
    this.setState((prevState) => {
      prevState.blogCards = blogCards;
      return prevState;
    });
  }

  mapBlogCard = (blogTitle) => {
    let description = blogs[blogTitle].description;
    description = this.stringCut(description, 255);
    let title = blogTitle.replace(/_/g, " ");
    title = this.stringCut(title, 63);
    return (
      <BlogCard id={blogTitle} onClick={this.onCardClick} key={title}>
        <Box display="flex">
          <TextSection>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextSection>
          <Thumbnail src={blogs[blogTitle].thumbnailImage} alt="..." />
        </Box>
      </BlogCard>
    );
  };

  stringCut = (string, desiredLength) => {
    if (string.length > desiredLength) {
      string =
        string.substring(0, Math.min(string.length, desiredLength - 3)) + "...";
    }
    return string;
  };

  onCardClick = (e) => {
    const blogTitle = e.currentTarget.id;
    const historySet = "blog/" + blogTitle;
    window.location.pathname = historySet;
  };

  render() {
    return <BlogBox display="flex">{this.state.blogCards}</BlogBox>;
  }
}

BlogsDisplay.propTypes = {};

export default BlogsDisplay;
