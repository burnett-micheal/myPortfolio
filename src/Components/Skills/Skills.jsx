import React from "react";
import netLogo from "../../Assets/.Net_Core_Logo.png";
import sqlLogo from "../../Assets/SQL_Server_Logo.png";
import reactLogo from "../../Assets/React_Logo.png";
import "./skills.css";

function SkillCards(props) {
  return (
    <div className="Skills_cards-container">

      <div className="Skills_card">
        <div className="Skills_card-title Skills_fadeIn-1">React JS</div>
        <img className="Skills_card-img Skills_flipIn-1" src={reactLogo} alt={"React Logo"} />
        <div className="Skills_card-text Skills_fadeIn-1">Front End</div>
      </div>

      <div className="Skills_card">
        <div className="Skills_card-title Skills_fadeIn-2">.Net Core</div>
        <img className="Skills_card-img Skills_flipIn-2" src={netLogo} alt={".Net Core Logo"} />
        <div className="Skills_card-text Skills_fadeIn-2">Middle Tier</div>
      </div>

      <div className="Skills_card">
        <div className="Skills_card-title Skills_fadeIn-3">SQL Server</div>
        <img className="Skills_card-img Skills_flipIn-3" src={sqlLogo} alt={"SQL Server Logo"} />
        <div className="Skills_card-text Skills_fadeIn-3">Back End</div>
      </div>

    </div>
  );
};

function SkillTitle(props) {
  return (
    <div>
      <div className="Skills_section-title Skills_fadeIn-1">{props.title}</div>
      <div className="Skills_line Skills_widthIn-100" />
    </div>
  );
};

function SkillBar(props) {
  return (
    <div className="Skills_bar-container Skills_fadeIn-1" title={props.tooltip}>
      <div className="Skills_bar-title Skills_fadeIn-1">{props.skill}</div>
      <div className="Skills__bar-container"><div className={`Skills_bar Skills_widthIn-${props.competence}`} /></div>
      <div className="Skills_bar-percent">{props.competence}%</div>
    </div>
  );
};

function Skills(props) {
  const tooltips = {
    reactJS: "",
    javascript: "",
    jQuery: "",
    materialUI: "",
    bootstrap: "",
    html_css: "",
    axios: "",
    sqlServer: "",
    netCore: "",
    cSharp: "",
    gitBash: "",
  };
  return (
    <div className="Skills_skills">
      <SkillCards />

      <SkillTitle title="Front End" />
      <SkillBar skill="React JS" competence="80" tooltip={tooltips.reactJS} />
      <SkillBar skill="JavaScript" competence="70" tooltip={tooltips.javascript} />
      <SkillBar skill="HTML / CSS" competence="70" tooltip={tooltips.html_css} />
      <SkillBar skill="JQuery" competence="40" tooltip={tooltips.jQuery} />
      <SkillBar skill="Axios" competence="70" tooltip={tooltips.axios} />
      <SkillBar skill="Material UI" competence="60" tooltip={tooltips.materialUI} />
      <SkillBar skill="Bootstrap" competence="60" tooltip={tooltips.bootstrap} />
      <SkillBar skill="Font Awesome" competence="60" tooltip={tooltips.bootstrap} />
      <SkillBar skill="Unicode" competence="40" tooltip={tooltips.bootstrap} />

      <SkillTitle title="Back End" />
      <SkillBar skill="Fauna DB" competence="80" tooltip={""} />
      <SkillBar skill="SQL Server" competence="50" tooltip={tooltips.sqlServer} />
      <SkillBar skill=".Net Core" competence="70" tooltip={tooltips.netCore} />
      <SkillBar skill="C#" competence="60" tooltip={tooltips.cSharp} />
      <SkillBar skill="Websockets" competence="60" tooltip={""} />
      <SkillBar skill="SignalR" competence="70" tooltip={""} />
      <SkillBar skill="Encryption" competence="60" tooltip={""} />

      <SkillTitle title="Technologies" />
      <SkillBar skill="IDEs" competence="80" tooltip={""} />
      <SkillBar skill="Git Bash" competence="60" tooltip={tooltips.gitBash} />
      <SkillBar skill="Rest Clients" competence="50" tooltip={tooltips.postman} />
      <SkillBar skill="Heroku" competence="60" tooltip={""} />
      <SkillBar skill="Circle CI" competence="60" tooltip={""} />

      <SkillTitle title="Other" />
      <SkillBar skill="Python" competence="70" tooltip={""} />
      <SkillBar skill="Hackerrank" competence="60" tooltip={""} />

      {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip */}
    </div>
  );
}

export default Skills;
