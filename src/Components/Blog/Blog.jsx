import React, { Component } from "react";
import { Box } from "@material-ui/core";
import blogs from "../../Data/blogs";
import { Title, Text, Image, Video, Link } from "./BlogStyle";

class Blog extends Component {
  state = { article: null };

  //Recognized A Tiny Bug, If The Text Is Not Large Enough To Take Up One Line
  //The Blog Will Be Displayed Toward The Left Side Of The Screen
  componentDidMount() {
    const blogTitle = window.location.pathname.split("/").filter((i) => {
      return i !== "";
    })[1];
    const spaceTitle = blogTitle.replace(/_/g, " ");
    document.title = spaceTitle;

    const articleElements = blogs[blogTitle].article;
    const article = [<Title key={-1}>{spaceTitle}</Title>];

    articleElements.forEach((element, i) => {
      for (const [key, value] of Object.entries(element)) {
        switch (key) {
          case "link":
            article.push(
              <Link
                to={value.url}
                onClick={() => {
                  window.location = value.url;
                }}
                key={i}
              >
                {value.text}
              </Link>
            );
            break;
          case "text":
            article.push(<Text key={i}>{value}</Text>);
            break;
          case "image":
            article.push(<Image key={i} src={value} alt="..." />);
            break;
          case "video":
            article.push(<Video key={i} src={value} />);
          case "component":
            article.push(value);
            break;
          default:
            throw new Error(key + " is not a valid blog element");
        }
      }
    });

    this.setState((prevState) => {
      prevState.article = article;
      return prevState;
    });
  }

  render() {
    return <Box>{this.state.article}</Box>;
  }
}

Blog.propTypes = {};

export default Blog;
