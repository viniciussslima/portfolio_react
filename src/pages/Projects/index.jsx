import React from "react";

import climaHojeLogo from "../../assets/projects/climaHoje.png";
import viniciussslimaUiLogo from "../../assets/projects/viniciussslima-ui.png";

const Projects = () => {
  return (
    <div className="left-content">
      <h1>Projetos pessoais</h1>
      <div className="grid">
        <a
          className="link"
          href="https://clima-hoje.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={climaHojeLogo} alt="Logo do climaHoje" />
          <h3>ClimaHoje</h3>
        </a>
        <a
          className="link"
          href="https://viniciussslima-ui.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={viniciussslimaUiLogo} alt="Logo do viniciussslima-ui" />
          <h3>viniciussslima-ui</h3>
        </a>
      </div>
    </div>
  );
};

export default Projects;
