import { Box, Button, Select, MenuItem, Slider } from "@material-ui/core";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  width: 80vw;
  height: 1vw;
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

const Btn = styled(Button)`
  ${(props) => {
    let result = getMargin(props);
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    return result;
  }}
`;

const StyledSelect = styled(Select)`
  ${(props) => {
    let result = getMargin(props);
    if (props.width) {
      result += "width: " + props.width + "; ";
    }
    if (props.height) {
      result += "height: " + props.height + "; ";
    }
    return result;
  }}
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

export { StyledSlider, Text, Btn, StyledSelect, StyledBox };
