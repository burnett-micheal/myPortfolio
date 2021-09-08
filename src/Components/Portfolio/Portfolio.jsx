import React, { Component } from "react";
import { Box } from "@material-ui/core";
import SelfPicture from "../../Assets/Images/FacePicV2.png";
import testimonials from "../../Data/portfolio";
import blogs from "../../Data/blogs";
import {
  Text,
  Img,
  FlexBox,
  RightArrow,
  StyledBox,
  SlideBox,
  ContactButton,
  Line,
} from "./PortfolioStyle";
import SliderLines from "./Children/SliderLines/SliderLines";
import TestimonialSlider from "./Children/TestimonialSlider/TestimonialSlider";
import BlogSlider from "./Children/BlogSlider/BlogSlider";

class Portfolio extends Component {
  state = {
    blogSlides: {
      index: -1,
      maxIndex: 0,
      lineIndex: 0,
    },
    testSlides: {
      index: -1,
      lineIndex: 0,
    },
  };

  componentDidMount() {
    document.title = "Portfolio";
    document.body.style.overflowX = "hidden";
    document.body.style.backgroundColor = "#E5E5E5";

    let blogMaxIndex = -1;
    for (const [key] of Object.entries(blogs)) {
      blogMaxIndex++;
    }

    this.setState((prevState) => {
      if (blogMaxIndex > -1) {
        prevState.blogSlides.index = 0;
        prevState.blogSlides.maxIndex = blogMaxIndex;
      }
      if (testimonials.length > 0) {
        prevState.testSlides.index = 0;
      }
      return prevState;
    }, this.slideLoop());
  }

  slideLoop = () => {
    let timer = setInterval(this.slide, 15000);
  };

  slide = () => {
    this.blogSlide();
  };

  mapText = (text, index) => {
    return (
      <Text center color="#000E57" size="2.8vw" key={index}>
        {text}
      </Text>
    );
  };

  getBlog = () => {
    const title = this.state.blogSlides.blogKeys[this.state.blogSlides.index];
    const blog = blogs[title];
    let result = null;
    if (title && blog.description && blog.thumbnailImage) {
      result = (
        <FlexBox>
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

  sliderLines = () => {
    const lines = [];
    for (let i = 0; i < 4; i++) {
      lines.push(
        <Line
          height="0.1vw"
          width="2vw"
          color={i === 0 ? "gray" : "white"}
          bg={i === 0 ? "gray" : "white"}
          mr="1vw"
          key={i}
        />
      );
    }
    return lines;
  };

  blogSlide = () => {
    this.setState((prevState) => {
      prevState.blogSlides.lineIndex++;
      if (prevState.blogSlides.lineIndex === 4) {
        prevState.blogSlides.lineIndex = 0;
      }
      prevState.blogSlides.index++;
      if (prevState.blogSlides.index > this.state.blogSlides.maxIndex) {
        prevState.blogSlides.index = 0;
      }
      return prevState;
    });
  };

  testSlide = () => {
    this.setState((prevState) => {
      prevState.testSlides.lineIndex++;
      if (prevState.testSlides.lineIndex === 4) {
        prevState.testSlides.lineIndex = 0;
      }
      prevState.testSlides.index++;
      if (prevState.testSlides.index > testimonials.length - 1) {
        prevState.testSlides.index = 0;
      }
      return prevState;
    });
  };

  render() {
    return (
      <Box>
        {/* Top Stuff */}
        <Box>
          <FlexBox ml="auto" mr="auto" mt="2.5vw" mb="1.5vw" width="85vw">
            <Text size="5vw" color="#000E57" mt="4vw;">
              Full Stack Developer Solving Real World Problems Through The Power
              Of Code
            </Text>
            <Img src={SelfPicture} alt="..." m="2vw" />
          </FlexBox>

          <Text
            center
            size="2.5vw"
            color="#012444"
            width="50vw"
            ml="auto"
            mr="auto"
            mb="3.5vw"
            fs="italic"
          >
            I help companies develop their Databases, Web Apis, and Front End to
            meet or exceed projected timelines and quality
          </Text>
        </Box>

        {/* Testimonials */}
        <StyledBox bg="#0b0022" width="95vw" height="45vw" ml="auto" mr="auto">
          <TestimonialSlider index={this.state.testSlides.index} />

          <SlideBox top="93.5vw">
            <StyledBox ml="41.5vw" mr="31.5vw" mt="6vw">
              <SliderLines index={this.state.testSlides.lineIndex} />
            </StyledBox>
            <RightArrow onClick={this.testSlide} />
          </SlideBox>
        </StyledBox>

        {/* Skills */}
        <FlexBox width="95vw" ml="auto" mr="auto" mt="4vw" mb="4vw">
          <StyledBox width="18vw">
            <Text center color="#000E57" size="2.8vw">
              Front End
            </Text>
            <Line color="black" bg="#000E57" width="18vw" height="0.2vw" />
            <Box>
              {[
                "React",
                "Javascript",
                "JQuery",
                "Material UI",
                "Bootstrap",
                "Html",
                "Css",
                "Formik",
                "Axios",
              ].map((text, index) => {
                return this.mapText(text, index);
              })}
            </Box>
          </StyledBox>

          <StyledBox ml="20.5vw" mr="20.5vw">
            <StyledBox width="18vw" mb="2.5vw">
              <Text center color="#000E57" size="2.8vw">
                Back End
              </Text>
              <Line color="black" bg="#000E57" width="18vw" height="0.2vw" />
              <Box>
                {["C#", ".Net Core", "SQl Server"].map((text, index) => {
                  return this.mapText(text, index);
                })}
              </Box>
            </StyledBox>

            <StyledBox width="18vw">
              <Text center color="#000E57" size="2.8vw">
                Misc
              </Text>
              <Line color="black" bg="#000E57" width="18vw" height="0.2vw" />
              <Box>
                {["NPM", "Yarn", "Git", "Yml"].map((text, index) => {
                  return this.mapText(text, index);
                })}
              </Box>
            </StyledBox>
          </StyledBox>

          <StyledBox width="18vw">
            <Text center color="#000E57" size="2.8vw">
              Technologies
            </Text>
            <Line color="black" bg="#000E57" width="18vw" height="0.2vw" />
            <Box>
              {[
                "Visual Studio",
                "VS Code",
                "Postman",
                "Git Bash",
                "Figma",
                "Blender",
                "Unity",
                "Spigot",
              ].map((text, index) => {
                return this.mapText(text, index);
              })}
            </Box>
          </StyledBox>
        </FlexBox>

        {/* Projects */}
        <StyledBox bg="#0b0022" height="45vw" pt="4.5vw" width="100vw">
          <BlogSlider index={this.state.blogSlides.index} />

          <SlideBox top="188.5vw" right="8vw">
            <StyledBox ml="41.5vw" mr="30.25vw" mt="6vw">
              <SliderLines index={this.state.blogSlides.lineIndex} />
            </StyledBox>
            <RightArrow onClick={this.blogSlide} />
          </SlideBox>
        </StyledBox>

        {/* About Me */}
        <FlexBox ml="2.5vw" mr="2.5vw" mt="3.5vw">
          <StyledBox>
            <Img src={SelfPicture} alt="..." mt="2vw" />
            {/* <Img src={SelfPicture} alt="..." mt="1.3vw" mb="2vw" /> */}
          </StyledBox>
          <StyledBox pl="3vw" pr="3vw" pb="3vw">
            <Text center size="5vw" color="#000E57">
              Hello I Am Micheal
            </Text>

            <Text size="2.25vw" color="#012444" mt="2vw" ti="6.5vw">
              As a young adult I went from role to role, different jobs and
              different positions. From general labor to driving around an Ice
              Cream Truck in the summer, nothing felt quite right, and then I
              began programming. First as a hobby, then I joined teams for
              projects.
            </Text>

            <Text size="2.25vw" color="#012444" mt="2.5vw" mb="5vw" ti="6.5vw">
              Eventually I found a way to break into IT through my Full Stack
              Development work at Host A Fan. There I used React, .Net Core, and
              SQL Server to develop a web app for hosting Events, Blogs, and
              Rideshares. I love applying responsive design principles and
              watching my web pages shrink into mobile screens and still look
              amazing. While I have some tech under my belt, I've also started
              learning Azure Storage, Cors, and Python. I'm still eagerly
              grabbing onto any other languages, frameworks, or principles I can
              integrate into the coding web in my head.
            </Text>

            <ContactButton
              variant="contained"
              color="primary"
              onClick={(e) => {
                window.open("mailto:burnett.micheal.business@gmail.com");
                e.preventDefault();
              }}
            >
              <Text size="2.5vw">Get In Contact With Me</Text>
            </ContactButton>
          </StyledBox>
        </FlexBox>
      </Box>
    );
  }
}

Portfolio.propTypes = {};

export default Portfolio;
