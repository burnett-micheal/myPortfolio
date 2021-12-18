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
    { render: "projects", atScroll: 100 }, // 2000
  ];
  const components2Render = [];
  scrollComps.forEach(scrollComp => { if (scrollComp.atScroll < scrollPos) components2Render.push(scrollComp.render) });
  return components2Render;
};

class App extends Component {
  state = {
    render: {
      count: 0,
      skills: false,
      projects: false,
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.updateScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScroll);
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
  render() {
    return (
      <div className="parent">
        <Title />
        {this.state.render.skills && <Skills />}
        {this.state.render.projects && <Projects />}
        <Testimonials />
        <Contact />
      </div>
    );
  }
}

export default App;
