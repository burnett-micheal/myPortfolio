import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const RightArrow = styled(ArrowForwardIosIcon)`
  color: white;
  height: 5vw;
  width: 5vw;
  cursor: pointer;
`;

const Line = styled.div`
  ${(props) => {
    let result = getMargin(props);
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    if (props.color) {
      result += "color: " + props.color + "; ";
    }
    if (props.bg) {
      result += "background: " + props.bg + "; ";
    }
    return result;
  }}
`;

const FlexBox = styled(Box)`
  ${(props) => {
    let result = getMargin(props);
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    if (props.bg) {
      result += "background: " + props.bg + "; ";
    }
    return result;
  }}
  display: flex;
`;

const StyledBox = styled(Box)`
  ${(props) => {
    let result = getMargin(props) + getPadding(props);
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    if (props.bg) {
      result += "background: " + props.bg + "; ";
    }
    if (props.link) {
      result += "cursor: pointer; ";
    }
    return result;
  }}
`;

const SlideBox = styled(Box)`
  display: flex;
  position: absolute;
  ${(props) => {
    let result = "";
    if (props.top) {
      result += "top: " + props.top + "; ";
    }
    if (props.right) {
      result += "right: " + props.right + "; ";
    }
    return result;
  }}
`;

const Text = styled.div`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};

  ${(props) => {
    let result = getMargin(props);
    if (props.center) {
      result += "text-align: center; ";
    }
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.fw) {
      result += "font-weight: " + props.fw + "; ";
    }
    if (props.fs) {
      result += "font-style: " + props.fs + "; ";
    }
    if (props.td) {
      result += "text-decoration: " + props.td + "; ";
    }
    if (props.ti) {
      result += "text-indent: " + props.ti + "; ";
    }
    return result;
  }}
`;

const Img = styled.img`
  height: 36vw;
  width: auto;
  ${(props) => {
    let result = getMargin(props);
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    return result;
  }}
`;

const ContactButton = styled(Button)`
  text-transform: none;
  width: 50vw;
  height: 5.5vw;
  margin-left: 1vw;
`;

const getMargin = (props) => {
  let result = "";
  if (props.mt) {
    result += "margin-top: " + props.mt + "; ";
  }
  if (props.mb) {
    result += "margin-bottom: " + props.mb + "; ";
  }
  if (props.mr) {
    result += "margin-right: " + props.mr + "; ";
  }
  if (props.ml) {
    result += "margin-left: " + props.ml + "; ";
  }
  if (props.m) {
    result += "margin:" + props.m + "; ";
  }
  return result;
};

const getPadding = (props) => {
  let result = "";
  if (props.pt) {
    result += "padding-top: " + props.pt + "; ";
  }
  if (props.pb) {
    result += "padding-bottom: " + props.pb + "; ";
  }
  if (props.pr) {
    result += "padding-right: " + props.pr + "; ";
  }
  if (props.pl) {
    result += "padding-left: " + props.pl + "; ";
  }
  if (props.p) {
    result += "padding:" + props.p + "; ";
  }
  return result;
};

export {
  Text,
  Img,
  FlexBox,
  RightArrow,
  StyledBox,
  SlideBox,
  ContactButton,
  Line,
};
