import React from "react";
import { Vid, PortCard, Overlay, Img } from "./PortfolioCardStyle";

export default function PortfolioCard(props) {
  /* <Route path="/demo">
    <PortfolioCard videoPath="mp4/PortfolioVid.mp4" imagePath="png/JackModelImg.png" title="Cool Title" explanation="An Awesome Explanation"/>
  </Route> */
  const baseUrl = "https://psiteblob.blob.core.windows.net/";
  return (
    <PortCard>
      <Img alt="Test Image" src={baseUrl + props.imagePath} />
      <Vid
        muted
        loop
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
      >
        <source src={baseUrl + props.videoPath} type="video/mp4" />
      </Vid>
      <Overlay top left>
        {props.title}
      </Overlay>
      <Overlay bottom right>
        {props.explanation}
      </Overlay>
    </PortCard>
  );
}
