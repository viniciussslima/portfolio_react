import React from "react";

import climaHojeLogo from "../../assets/projects/climaHoje.png";

const Projects = () => {
  return (
    <div className="left-content">
      <h1>Projetos pessoais</h1>
      <div class="grid">
        <a
          class="link"
          href="https://clima-hoje.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={climaHojeLogo} alt="Logo do climaHoje" />
          <h3>ClimaHoje</h3>
        </a>
      </div>
    </div>
  );
};

export default Projects;
