import React, { Component } from "react";
import { Box, Button, Select, MenuItem } from "@material-ui/core";
import {
  StyledSlider,
  Text,
  Btn,
  StyledSelect,
  StyledBox,
} from "./PathfindingStyle";
import PropTypes from "prop-types";

class Pathfinding extends Component {
  //Maze Generation Is Based On The Depth First Algorithm
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  state = {
    colors: {
      white: [255, 255, 255, 255],
      black: [0, 0, 0, 255],
      green: [70, 255, 70, 255],
      blue: [60, 80, 255, 255],
      red: [255, 80, 80, 255],
      pink: [255, 130, 255, 255],
      lightPurple: [150, 158, 214, 255],
    },
    selectedColor: "blue",
    mazeBtnEnable: true,
    pathBtnEnable: false,
    colorBtnEnable: false,
    speed: 100,
    iterations: 1,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  pathfind = () => {
    const canvas = this.canvasRef.current;
    let checkPositions = [{ x: 0, y: 0 }];
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const goalv2 = { x: canvas.width - 10, y: canvas.height - 10 };
    const prevNodes = new Map();
    let previous = `${goalv2.x},${goalv2.y}`;
    let drawPath = false;

    const func = () => {
      for (let loop = 0; loop < this.state.iterations; loop++) {
        if (!drawPath) {
          const newCheckPositions = [];
          for (let i = 0; i < checkPositions.length; i++) {
            const v2 = checkPositions[i];
            const neighbors = this.getNeighborPositions(v2);
            this.addItemsToArray(neighbors, newCheckPositions);
            for (let nIndex = 0; nIndex < neighbors.length; nIndex++) {
              const neighbor = neighbors[nIndex];
              this.draw(neighbor, [], this.state.colors.red);
              if (!prevNodes.has(neighbor)) {
                prevNodes.set(`${neighbor.x},${neighbor.y}`, `${v2.x},${v2.y}`);
              }
              if (neighbor.x === goalv2.x && neighbor.y === goalv2.y) {
                drawPath = true;
                this.draw(neighbor, [], this.state.colors.lightPurple);
                break;
              }
            }
            this.draw(v2, [], this.state.colors.blue);
          }
          checkPositions = newCheckPositions;
        } else {
          previous = prevNodes.get(previous);
          const prevPos = this.stringToPos(previous);
          this.draw(prevPos, [], this.state.colors.lightPurple);
          if (previous === "0,0") {
            break;
          }
        }
      }
      if (previous !== "0,0") {
        setTimeout(() => {
          func();
        }, 1000 - this.state.speed * 10);
      } else {
        this.setState((prevState) => {
          prevState.colorBtnEnable = true;
          return prevState;
        });
      }
    };
    func();
  };

  getNeighborPositions = (v2) => {
    const walls = this.getWalls(v2);
    const unvisited = this.getNeighborsOfColors(v2, [this.state.colors.white]);
    this.removeItemsFromArray(walls, unvisited);
    const result = unvisited.map((side) => {
      return this.getNeighborPos(v2, side);
    });
    return result;
  };

  stringToPos = (str) => {
    const strArr = str.split(",");
    return { x: parseInt(strArr[0]), y: parseInt(strArr[1]) };
  };

  //#region Create Maze
  loop = () => {
    const canvas = this.canvasRef.current;
    let v2 = { x: 0, y: 0 };
    let cWidth = canvas.width;
    let cHeight = canvas.height;
    let prevSide = 0;
    let exitLoop = false;

    const func = () => {
      if (!exitLoop) {
        for (let i = 0; i < this.state.iterations; i++) {
          if (v2.x <= 0 && v2.y <= 0 && prevSide !== 0) {
            break;
          } else {
            const walls = this.getWalls(v2);
            let unvisited = this.getNeighborsNotOfColors(v2, [
              this.state.colors.green,
              this.state.colors.white,
            ]);
            this.removeItemsFromArray(walls, unvisited);

            if (unvisited.length > 0) {
              //Travel To Next Position
              const visit = this.randomItemInArray(unvisited);
              this.removeFromArray(visit, unvisited);
              const sides = [1, 2, 3, 4];
              this.removeItemsFromArray([visit, prevSide], sides);
              prevSide = this.invertSide(visit);
              this.draw(v2, sides, this.state.colors.green);
              v2 = this.getNeighborPos(v2, visit);
            } else {
              //Back Up To Previous
              let previous = this.getNeighborsOfColors(v2, [
                this.state.colors.green,
              ]);
              this.removeItemsFromArray(walls, previous);
              if (previous.length > 1) {
                console.warn(
                  "There Should Only Be 1 Previous Here. There Is More."
                );
              } else {
                unvisited = this.getNeighborsNotOfColors(v2, [
                  this.state.colors.green,
                  this.state.colors.white,
                ]);
                this.removeItemsFromArray(this.getEdges(v2), unvisited);
                if (unvisited.length === 0) {
                  prevSide = this.invertSide(previous[0]);
                  previous = previous[0];
                  this.draw(v2, walls, this.state.colors.white);
                  v2 = this.getNeighborPos(v2, previous);
                } else {
                  const visit = this.randomItemInArray(unvisited);
                  prevSide = this.invertSide(visit);
                  this.removeWall(v2, visit);
                  v2 = this.getNeighborPos(v2, visit);
                }
              }
            }
          }
        }
        if (v2.x <= 0 && v2.y <= 0 && prevSide !== 0) {
          exitLoop = true;
          this.draw(v2, [], this.state.colors.white);
          this.setState((prevState) => {
            prevState.pathBtnEnable = true;
            return prevState;
          });
        } else {
          setTimeout(() => {
            func();
          }, 1000 - this.state.speed * 10);
        }
      }
    };
    func();
  };

  invertSide = (side) => {
    let result = 0;
    if (side === 1) {
      result = 3;
    }
    if (side === 2) {
      result = 4;
    }
    if (side === 3) {
      result = 1;
    }
    if (side === 4) {
      result = 2;
    }
    return result;
  };

  getNeighborPos = (v2, side) => {
    const sides = [
      1,
      {
        x: v2.x - 10,
        y: v2.y,
      },
      {
        x: v2.x,
        y: v2.y - 10,
      },
      {
        x: v2.x + 10,
        y: v2.y,
      },
      {
        x: v2.x,
        y: v2.y + 10,
      },
    ];
    return sides[side];
  };

  getNeighborsOfColors = (v2, colors) => {
    //colors Should Be: [{red: 0-255, green: 0-255, blue:0-255}]
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const neighborsOfColors = [];
    for (let i = 1; i < 5; i++) {
      const nPos = this.getNeighborPos(v2, i);
      const pos = { x: nPos.x + 5, y: nPos.y + 5 };
      if (pos.x < 0 || pos.y < 0) {
        continue;
      }
      const pixelData = ctx.getImageData(pos.x, pos.y, 1, 1).data;
      let colorsContains = false;
      for (let ii = 0; ii < colors.length; ii++) {
        if (this.isMatchingColor(pixelData, colors[ii])) {
          colorsContains = true;
          break;
        }
      }
      if (colorsContains) {
        neighborsOfColors.push(i);
      }
    }
    return neighborsOfColors;
  };

  getNeighborsNotOfColors = (v2, colors) => {
    //colors Should Be: [{red: 0-255, green: 0-255, blue:0-255}]
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const neighborsNotOfColors = [];
    for (let i = 1; i < 5; i++) {
      const nPos = this.getNeighborPos(v2, i);
      const pos = { x: nPos.x + 5, y: nPos.y + 5 };
      if (pos.x < 0 || pos.y < 0) {
        continue;
      }
      const pixelData = ctx.getImageData(pos.x, pos.y, 1, 1).data;
      let colorsContains = false;
      for (let ii = 0; ii < colors.length; ii++) {
        if (this.isMatchingColor(pixelData, colors[ii])) {
          colorsContains = true;
          break;
        }
      }
      if (!colorsContains) {
        neighborsNotOfColors.push(i);
      }
    }
    return neighborsNotOfColors;
  };

  isMatchingColor = (colorA, colorB) => {
    let result = false;
    if (
      colorA[0] === colorB[0] &&
      colorA[1] === colorB[1] &&
      colorA[2] === colorB[2] &&
      colorA[3] === colorB[3]
    ) {
      result = true;
    }
    return result;
  };

  getEdges = (v2) => {
    const sides = [];

    if (v2.x === 0) {
      sides.push(1);
    }
    if (v2.x >= this.canvasRef.current.width - 10) {
      sides.push(3);
    }
    if (v2.y === 0) {
      sides.push(2);
    }
    if (v2.y >= this.canvasRef.current.height - 10) {
      sides.push(4);
    }

    return sides;
  };

  getWalls = (v2) => {
    const sides = [];

    if (v2.x === 0) {
      sides.push(1);
    }
    if (v2.x >= this.canvasRef.current.width - 10) {
      sides.push(3);
    }
    if (v2.y === 0) {
      sides.push(2);
    }
    if (v2.y >= this.canvasRef.current.height - 10) {
      sides.push(4);
    }
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const sidesData = [
      1,
      ctx.getImageData(v2.x, v2.y + 5, 1, 1).data,
      ctx.getImageData(v2.x + 5, v2.y, 1, 1).data,
      ctx.getImageData(v2.x + 9, v2.y + 5, 1, 1).data,
      ctx.getImageData(v2.x + 5, v2.y + 9, 1, 1).data,
    ];
    for (let i = 1; i < 5; i++) {
      if (
        sidesData[i][0] === 0 &&
        sidesData[i][1] === 0 &&
        sidesData[i][2] === 0 &&
        sidesData[i][3] === 255
      ) {
        sides.push(i);
      }
    }
    return sides;
  };

  removeWall = (v2, side) => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = `rgb(255,255,255)`;
    let x = 0;
    let y = 0;
    if (side === 1) {
      for (y = 0; y < 10; y++) {
        ctx.fillRect(v2.x + x - 1, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
      }

      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      x = y = 0;
    }
    if (side === 2) {
      for (x = 0; x < 10; x++) {
        ctx.fillRect(v2.x + x, v2.y + y - 1, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
      }

      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      x = y = 0;
    }
    if (side === 3) {
      x = 9;
      for (y = 0; y < 10; y++) {
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x + 1, v2.y + y, 1, 1);
      }

      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      x = y = 0;
    }
    if (side === 4) {
      y = 9;
      for (x = 0; x < 10; x++) {
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + 1 + y, 1, 1);
      }

      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      x = y = 0;
    }
  };

  draw = (v2, walls, color) => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    let x = 0;
    let y = 0;

    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    for (x = 0; x < 10; x++) {
      for (y = 0; y < 10; y++) {
        const pixelData = ctx.getImageData(v2.x + x, v2.y + y, 1, 1).data;
        if (this.isMatchingColor(pixelData, this.state.colors.black) !== true) {
          ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
        }
      }
    }
    x = y = 0;

    ctx.fillStyle = `rgb(0,0,0)`;
    if (walls.includes(1)) {
      for (y = 0; y < 10; y++) {
        ctx.fillRect(v2.x + x - 1, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
      }
      x = y = 0;
    }
    if (walls.includes(2)) {
      for (x = 0; x < 10; x++) {
        ctx.fillRect(v2.x + x, v2.y + y - 1, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
      }
      x = y = 0;
    }
    if (walls.includes(3)) {
      x = 9;
      for (y = 0; y < 10; y++) {
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x + 1, v2.y + y, 1, 1);
      }
      x = y = 0;
    }
    if (walls.includes(4)) {
      y = 9;
      for (x = 0; x < 10; x++) {
        ctx.fillRect(v2.x + x, v2.y + y, 1, 1);
        ctx.fillRect(v2.x + x, v2.y + 1 + y, 1, 1);
      }
      x = y = 0;
    }
  };

  removeItemsFromArray = (items, array) => {
    for (let i = 0; i < items.length; i++) {
      this.removeFromArray(items[i], array);
    }
  };

  removeFromArray = (item, array) => {
    while (array.includes(item)) {
      const index = array.indexOf(item);
      array.splice(index, 1);
    }
  };

  addItemsToArray = (items, array) => {
    items.forEach((item) => {
      array.push(item);
    });
  };

  randomItemInArray = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  //#endregion Create Maze

  colorsToMenuItems = () => {
    const menuItems = [];
    let i = 0;
    for (const color in this.state.colors) {
      if (color === "white" || color === "black") {
        continue;
      }
      i++;
      menuItems.push(
        <MenuItem value={color} key={i}>
          {color}
        </MenuItem>
      );
    }
    return menuItems;
  };

  clearColor = () => {
    this.setState((prevState) => {
      prevState.colorBtnEnable = false;
      return prevState;
    });

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const color = this.state.colors[this.state.selectedColor];
    const white = this.state.colors.white;

    let x = 0;
    let y = 0;
    ctx.fillStyle = `rgb(${white[0]}, ${white[1]}, ${white[2]})`;
    let loop = true;

    const func = () => {
      for (let i = 0; i < cHeight * 10; i++) {
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        if (this.isMatchingColor(pixelData, color)) {
          ctx.fillRect(x, y, 1, 1);
        }

        if (y < cHeight) {
          y++;
        } else {
          if (x < cWidth) {
            x++;
            y = 0;
          } else {
            loop = false;
          }
        }
      }

      if (loop) {
        setTimeout(() => {
          func();
        }, 0);
      } else {
        this.setState((prevState) => {
          prevState.colorBtnEnable = true;
          return prevState;
        });
      }
    };

    func();
  };

  selectColor = (e) => {
    const val = e.target.value;
    this.setState((prevState) => {
      prevState.selectedColor = val;
      return prevState;
    });
  };

  onClickGenPath = () => {
    if (this.state.pathBtnEnable) {
      this.setState((prevState) => {
        prevState.pathBtnEnable = false;
        return prevState;
      });
      this.pathfind();
    }
  };

  onClickGenMaze = () => {
    if (this.state.mazeBtnEnable) {
      this.setState((prevState) => {
        prevState.mazeBtnEnable = false;
        return prevState;
      });
      this.loop();
    }
  };

  setSpeed = (e, newValue) => {
    this.setState((prevState) => {
      prevState.speed = parseInt(newValue) || 1;
      return prevState;
    });
  };

  setIterations = (e, newValue) => {
    this.setState((prevState) => {
      prevState.iterations = parseInt(newValue) || 1;
      return prevState;
    });
  };

  render() {
    return (
      <StyledBox mt="2.5vw" mr="10vw" ml="10vw">
        <Btn
          width="8.5vw"
          height="2vw"
          mr="27vw"
          variant="contained"
          color="primary"
          onClick={this.onClickGenMaze}
          disabled={!this.state.mazeBtnEnable}
          ref={this.genMazeBtn}
        >
          Generate Maze
        </Btn>
        <Btn
          width="8.5vw"
          height="2vw"
          mr="19vw"
          variant="contained"
          color="primary"
          onClick={this.onClickGenPath}
          disabled={!this.state.pathBtnEnable}
          ref={this.genPathBtn}
        >
          Generate Path
        </Btn>
        <StyledSelect
          value={this.state.selectedColor}
          onChange={this.selectColor}
          width="8.5vw"
          height="2vw"
        >
          {this.colorsToMenuItems()}
        </StyledSelect>
        <Btn
          width="8.5vw"
          height="2vw"
          variant="contained"
          color="primary"
          onClick={this.clearColor}
          disabled={!this.state.colorBtnEnable}
          ref={this.clearColorBtn}
        >
          Clear Color
        </Btn>
        <Text width="80vw" size="1.2vw" fw="bold" center>
          Speed
        </Text>
        <StyledSlider
          min={1}
          max={100}
          value={this.state.speed}
          onChange={this.setSpeed}
        />
        <Text width="80vw" size="1.2vw" fw="bold" center>
          Iterations
        </Text>
        <StyledSlider
          min={1}
          max={100}
          value={this.state.iterations}
          onChange={this.setIterations}
        />

        <canvas
          width={
            Math.floor(((window.innerWidth / 100) * this.props.widthVW) / 10) *
            10
          }
          height={
            Math.floor(((window.innerWidth / 100) * this.props.heightVW) / 10) *
            10
          }
          ref={this.canvasRef}
        />
      </StyledBox>
    );
  }
}

Pathfinding.propTypes = {
  widthVW: PropTypes.number.isRequired,
  heightVW: PropTypes.number.isRequired,
};
// const pixelData = ctx.getImageData(x, y, 1, 1).data;

export default Pathfinding;
