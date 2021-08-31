import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import {
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
} from "./BlogsDisplayStyle";
import blogs from "../../Data/blogs";

class BlogsDisplay extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  state = {
    blogCards: null,
    searchValue: "",
    displayTagModal: false,
    tags: [],
    activeTags: [],
    tagButtons: [],
  };

  componentDidMount() {
    document.title = "Blogs";
    document.addEventListener("mousedown", this.handleClickOutside);
    const blogCards = [];
    let tags = [];
    for (const [key] of Object.entries(blogs)) {
      blogCards.push(this.mapBlogCard(key));
      if (blogs[key].tags) {
        tags = this.mergeUniqueArray(tags, blogs[key].tags);
      }
    }

    const tagButtons = [];
    tags.forEach((tag, index) => {
      const safeTag = this.stringCut(tag, 63);
      if (this.state.activeTags.includes(tag)) {
        tagButtons.push(
          <TagButton
            variant="contained"
            color="primary"
            onClick={this.toggleTag}
            name={tag}
            key={index}
          >
            {safeTag}
          </TagButton>
        );
      } else {
        tagButtons.push(
          <TagButton
            variant="contained"
            color="default"
            onClick={this.toggleTag}
            name={tag}
            key={index}
          >
            {safeTag}
          </TagButton>
        );
      }
    });

    this.setState((prevState) => {
      prevState.blogCards = blogCards;
      prevState.tags = tags;
      prevState.tagButtons = tagButtons;
      return prevState;
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.toggleTagModal();
    }
  };

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

  onCardClick = (e) => {
    const blogTitle = e.currentTarget.id;
    const historySet = "blog/" + blogTitle;
    window.location.pathname = historySet;
  };

  onSearchChange = (e) => {
    //I'm Unsure Why, But It Seems I Need To Force Update
    //To Get The Search Bar To Render Text, Why Doesn't
    //The Set State Update It?
    this.setState((prevState) => {
      prevState.searchValue = e.target?.value;
    }, this.forceUpdate());
  };

  searchSubmit = (searchValue) => {
    const blogCards = [];
    for (const [key] of Object.entries(blogs)) {
      const title = key.replace(/_/g, " ");
      if (title.includes(searchValue)) {
        if (
          this.anyMatchingItems(this.state.activeTags, blogs[key].tags) ||
          this.state.activeTags.length === 0
        ) {
          blogCards.push(this.mapBlogCard(key));
        }
      }
    }
    this.setState((prevState) => {
      prevState.blogCards = blogCards;
      return prevState;
    });
  };

  toggleTagModal = () => {
    this.setState((prevState) => {
      prevState.displayTagModal = !prevState.displayTagModal;
      return prevState;
    });
  };

  toggleTag = (e) => {
    const tag = e.currentTarget.name;
    this.setState((prevState) => {
      if (prevState.activeTags.includes(tag)) {
        this.removeValueFromArray(prevState.activeTags, tag);
      } else {
        prevState.activeTags.push(tag);
      }

      const tagButtons = [];
      prevState.tags.forEach((tag, index) => {
        const safeTag = this.stringCut(tag, 63);
        if (prevState.activeTags.includes(tag)) {
          tagButtons.push(
            <TagButton
              variant="contained"
              color="primary"
              onClick={this.toggleTag}
              name={tag}
              key={index}
            >
              {safeTag}
            </TagButton>
          );
        } else {
          tagButtons.push(
            <TagButton
              variant="contained"
              color="default"
              onClick={this.toggleTag}
              name={tag}
              key={index}
            >
              {safeTag}
            </TagButton>
          );
        }
      });
      prevState.tagButtons = tagButtons;

      return prevState;
    });
  };

  stringCut = (string, desiredLength) => {
    if (string.length > desiredLength) {
      string =
        string.substring(0, Math.min(string.length, desiredLength - 3)) + "...";
    }
    return string;
  };

  mergeUniqueArray = (arr1, arr2) => {
    arr2.forEach((item) => {
      if (!arr1.includes(item)) {
        arr1.push(item);
      }
    });
    return arr1;
  };

  anyMatchingItems = (arr1, arr2) => {
    let result = false;
    if (arr1.length > 0 && arr2.length > 0) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
          result = true;
          break;
        }
      }
    }
    return result;
  };

  removeValueFromArray = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        array.splice(i, 1);
        break;
      }
    }
  };

  render() {
    return (
      <Box>
        {this.state.displayTagModal && (
          <SearchTags ref={this.wrapperRef} display="flex">
            {this.state.tagButtons}
          </SearchTags>
        )}
        <SearchContainer>
          <SearchBar
            label="Search Blog Posts"
            type="search"
            variant="outlined"
            onChange={this.onSearchChange}
            value={this.state.searchValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.searchSubmit(e.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.searchSubmit(this.state.searchValue);
            }}
          >
            Search
          </Button>
        </SearchContainer>
        <TagsButton
          variant="contained"
          color="primary"
          onClick={this.toggleTagModal}
        >
          Tags
        </TagsButton>
        {/* Tagging System */}
        <BlogBox display="flex">{this.state.blogCards}</BlogBox>
      </Box>
    );
  }
}

BlogsDisplay.propTypes = {};

export default BlogsDisplay;
