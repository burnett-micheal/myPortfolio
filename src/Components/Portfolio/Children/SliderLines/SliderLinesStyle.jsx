import styled from "styled-components";
import { Box } from "@material-ui/core";

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
  transition: color 0.6s, background 0.6s;
`;

const StyledBox = styled(Box)`
  width: 12vw;
  display: flex;
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

export { Line, StyledBox };
