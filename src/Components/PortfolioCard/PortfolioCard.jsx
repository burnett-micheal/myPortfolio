import React from "react";
import testImg from "../../Assets/1920by1080.png";
import { Vid, PortCard, Overlay, Img } from "./PortfolioCardStyle";
import PortVid from "../../Assets/PortfolioVid.mp4";

export default function PortfolioCard() {
  return (
    <PortCard>
      <Img src={testImg} alt="Test Image" />
      <Vid
        muted
        loop
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
      >
        <source src={PortVid} type="video/mp4" />
      </Vid>
      <Overlay top left>
        Upper Left Text Demo
      </Overlay>
      <Overlay bottom right>
        Lower Right Text Demo
      </Overlay>
    </PortCard>
  );
}
