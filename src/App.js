import React, { Component } from "react";
import Title from "./Components/Title/Title";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import "./Styles/global.css";
import "./Styles/grid.css";

const scroll2Render = (scrollPos) => {
  const scrollComps = [
    { render: "skills", atScroll: 100 },
    // { render: "projects", atScroll: 100 }, // 2000
  ];
  const components2Render = [];
  scrollComps.forEach(scrollComp => { if (scrollComp.atScroll < scrollPos) components2Render.push(scrollComp.render) });
  return components2Render;
};

function BigWindow(props) {
  return(
    <React.Fragment>
      <Title />
      {props.showSkills && <Skills />}
      
      {/* Add Animations For Others At A Later Date */}
      <Projects />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
}

function SmallWindow(props) {
  return(
    <div style={{textAlign: "center", fontSize: "5vw", gridArea: "1 / 2 / 10 / 25"}}>
      Mobile Version Is Still Under Development, If Possible, Please View This Site On A Laptop Or Desktop
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallWindow: false,
      render: {
        count: 0,
        skills: false,
      }
    };
    this.onResize = this.onResize.bind(this);
  }


  componentWillMount() {
    this.onResize();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScroll);
    window.removeEventListener("resize", this.onResize);
  }

  updateScroll = () => {
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    const comps2Render = scroll2Render(scrollPos);

    if (comps2Render.length > this.state.render.count) {
      this.setState((prevState) => {
        comps2Render.forEach(comp => { prevState.render[comp] = true; })
        prevState.render.count = comps2Render.length;
        return prevState;
      });
    }
  };

  getWindowWidth() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  onResize() {
    const minWidth = 1078;
    const width = document.documentElement.clientWidth;

    if(width < minWidth && !this.state.smallWindow){
      this.setState(prevState => {
        prevState.smallWindow = true;
        return prevState;
      });
    }

    if(width >= minWidth && this.state.smallWindow){
      this.setState(prevState => {
        prevState.smallWindow = false;
        return prevState;
      });
    }
  }
  render() {
    return (
      <div className="parent">
        {this.state.smallWindow ? <SmallWindow /> : <BigWindow showSkills={this.state.render.skills}/>}

      </div>
    );
  }
}

export default App;
