import React, { Component, useRef, useEffect } from "react";
import LampLoader from "./lampLoader";
import "./lavalamp.css";

let _lampLoader = null;
function Lavalamp(props) {
  const container = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    _lampLoader = new LampLoader(canvasRef.current, container.current);
  });

  return (
    <>
      <div ref={container} className={`${props.side} lamp`}>
        <canvas ref={canvasRef} className="canvas" />
      </div>
    </>
  );
}

export default Lavalamp;
