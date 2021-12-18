import React, { Component, useRef, useEffect } from "react";
import YesMusicImg from "../../Assets/Music_Icon.png";
import NoMusicImg from "../../Assets/No_Music_Icon.png";
import Lofi from "../../Assets/lofi.mp3";
import AudioVisualizer from "./audioVisualizer";
import "./title.css";

class MusicIcon extends Component {
  state = {
    img: NoMusicImg,
  };

  onClick = () => {
    this.setState((prevState) => {
      prevState.img = prevState.img === NoMusicImg ? YesMusicImg : NoMusicImg;
      return prevState;
    });
    this.props.toggleMusic();
  };

  render() {
    return (
      <img
        src={this.state.img}
        alt={"Music Icon"}
        className="Title_music-icon"
        onClick={this.onClick}
      />
    );
  }
}

let audioVis = null;
function Title(props) {
  const container = useRef(null);
  const canvasRef = useRef(null);
  const audio = new Audio(Lofi);
  const backgroundColor = "#ffecd2";
  let playMusic = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    audio.loop = true;
    audio.volume = 0;
  });

  const toggleMusic = () => {
    playMusic = playMusic ? false : true;
    playMusic && audio.play();
    const volInc = playMusic ? 0.2 : -0.2;
    audio.volume = playMusic ? 0.99 : 0;
    if (playMusic && !audioVis)
      audioVis = new AudioVisualizer(
        audio,
        canvasRef.current,
        container.current,
        backgroundColor
      );
  };

  return (
    <>
      <div className="Title_music-visualizer" ref={container}>
        <canvas className="Title_canvas" ref={canvasRef} />
      </div>
      <div className="Title_title">
        <MusicIcon toggleMusic={toggleMusic} />
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
