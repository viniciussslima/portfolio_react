import React from "react";
import "./Articles.css";

const Articles = () => {
  return (
    <div className="left-content">
      <h1>Artigos</h1>

      <div className="article">
        <h3>
          Introducing a survey methodology for assessing LoRaWAN coverage in
          Smart Campus scenarios.
        </h3>
        <p>
          2020 IEEE International Workshop on Metrology for Industry 4.0 & IoT
          (MetroInd4.0&IoT), 2020, Rome.
        </p>
        <p>
          DOI:{" "}
          <a
            href="https://ieeexplore.ieee.org/document/9138300"
            target="_blank"
            rel="noreferrer"
          >
            10.1109/MetroInd4.0IoT48571.2020.9138300
          </a>
        </p>
      </div>

      <div className="article">
        <h3>
          IoT framework with flexible management of multi-protocol nodes for
          redundancy applications.
        </h3>
        <p>
          {" "}
          2021 IEEE International Workshop on Metrology for Industry 4.0 & IoT
          (MetroInd4.0&IoT), 2021, Rome.
        </p>
        <p>
          DOI:{" "}
          <a
            href="https://ieeexplore.ieee.org/document/9488518"
            target="_blank"
            rel="noreferrer"
          >
            10.1109/MetroInd4.0IoT51437.2021.9488518
          </a>
        </p>
      </div>
    </div>
  );
};

export default Articles;
