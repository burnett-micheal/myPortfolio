import React, { Component, useRef, useEffect } from "react";
import YesMusicImg from "../../Assets/Music_Icon.png";
import NoMusicImg from "../../Assets/No_Music_Icon.png";
import Lofi from "../../Assets/lofi.mp3";
import AudioVisualizer from "./audioVisualizer";
import "./title.css";

const audio = new Audio(Lofi);
let audioVis = null;
function MusicIcon(props) {
  let playMusic = false;

  const toggleMusic = () => {
    playMusic = playMusic ? false : true;
    if (playMusic)
      audio.play();
    else
      audio.pause();
    audio.volume = playMusic ? 0.99 : 0;

    if (playMusic && !audioVis)
      audioVis = new AudioVisualizer(
        audio,
        props.canvasRef.current,
        props.container.current,
        props.backgroundColor
      );
  };

  return (
    <div
      alt={"Music Icon"}
      className="Title_music-icon"
      onClick={toggleMusic}
    >
      <div>&#127900;</div>
    </div>
  );
}

function Title(props) {
  const container = useRef(null);
  const canvasRef = useRef(null);
  const backgroundColor = "#ffecd2";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });

  return (
    <>
      <div className="Title_music-visualizer" ref={container}>
        <canvas className="Title_canvas" ref={canvasRef} />
      </div>
      <div className="Title_title">
        <MusicIcon canvasRef={canvasRef} container={container} backgroundColor={backgroundColor} />
        <div className="Title_text-parent">
          <div>
            Hello, I'm <span className="Title_name">Micheal Burnett</span>
          </div>
          <div>Full-stack Web Developer</div>
        </div>
      </div>
    </>
  );
}

export default Title;
