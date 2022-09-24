import React from "react";
import "./projects.css"
import HostAFanImg from "../../Assets/HostAFan.jpg";
import JPMorganImg from "../../Assets/JP-Morgan.jpg";
import AzureImg from "../../Assets/azureSquare.jpg";
import CanvasImg from "../../Assets/HTML5_Canvas.png";
import Bitcoin from "../../Assets/Bitcoin.png";
import CafeUSA from "../../Assets/CafeUSA.png";

// Would like to add a pop-up window that displays on top of webpage to go into more detail with each project
// Due to time constraints will wait til a later date

function Card(props) {
  return (
    <div className="Projects_card">
      <img src={props.image} alt="..." style={{ width: "100%" }} />
      <div className="Projects_cardOverlay">
        <div className="title">{props.title}</div>
        <div className="highlight">{props.highlight}</div>
      </div>
    </div>
  );
}

function Projects(props) {
  return (
    <React.Fragment>
      <div className="Projects_background" />
      <div className="Projects_projects">

        <div className="Projects_title">Projects</div>
        <div className="Projects_projectsContainer">
          <Card image={HostAFanImg} title={"Host A Fan"} highlight={"React JS / Net Core / SQL Server"} />
          <Card image={JPMorganImg} title={"JP Morgan Virtual Internship"} highlight={"Python / React"} />
          <Card image={Bitcoin} title={"Bitcoin Trading Algorithm"} highlight={"Alpaca Markets / Python"} />
          <Card image={CafeUSA} title={"Cafe USA Online Menu"} highlight={"React JS / Net Core / Fauna DB"} />
        </div>

        <div className="Projects_title">Personal</div>
        <div className="Projects_projectsContainer">
          <Card image={AzureImg} title={"Microsoft Azure Storage"} highlight={"Bulk Storage / Web API / SQL"} />
          <Card image={CanvasImg} title={"HTML5 Canvas"} highlight={"3D Render / Maze + Pathfind / Audio Visualizer"} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;