import styled from "styled-components";
import { ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Icon = styled(MenuIcon)`
  position: fixed;
  top: 0.5vw;
  left: 0.5vw;
  width: 2vw;
  height: 2vw;
  :hover {
    background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 3vw;
`;

const LI = styled(ListItem)`
  :hover {
    background: linear-gradient(-45deg, #dfecf1, #f6f8f9);
    cursor: pointer;
  }
`;

export { Text, LI, Icon };
