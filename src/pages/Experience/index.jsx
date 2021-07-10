import React from "react";
import "./Experience.css";

import saiotLogo from "../../assets/experience/saiot.png";
import fmaLogo from "../../assets/experience/fma.png";
import sigsaudeLogo from "../../assets/experience/sigsaude.png";
import b2bitLogo from "../../assets/experience/b2bit.jpeg";

const Experience = () => {
  return (
    <div className="left-content">
      <h1>Experiência</h1>

      <div className="grid">
        <div className="card">
          <a
            className="link"
            href="https://saiot.ect.ufrn.br"
            target="_blank"
            rel="noreferrer"
          >
            <img src={saiotLogo} alt="Logo do SaIoT" />
          </a>
          <h3>SaIoT</h3>
        </div>

        <div className="card">
          <a
            className="link"
            href="https://mamiferosaquaticos.org.br"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fmaLogo} alt="Logo da FMA" />
          </a>
          <h3>FMA</h3>
        </div>

        <div className="card">
          <a
            className="link"
            href="https://sigsaude.imd.ufrn.br"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sigsaudeLogo} alt="Logo do SIGSAUDE" />
          </a>
          <h3>SIGSAUDE</h3>
        </div>

        <div className="card">
          <a
            className="link"
            href="https://b2bit.company/pt/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={b2bitLogo} alt="Logo da B2BIT" />
          </a>
          <h3>B2BIT</h3>
        </div>
      </div>
      <div className="experience-list">
        <ul>
          <li>Desenvolvimento de interface WEB usando React;</li>
          <li>Desenvolvimento de interface WEB usando Themyleaf;</li>
          <li>Desenvolvimento de API usando NodeJS;</li>
          <li>Desenvolvimento de API usando Java e Spring Boot;</li>
          <li>
            Conexão com os bancos de dados Mysql, MongoDB, Redis e Postegres;
          </li>
          <li>Desenvolvimento DevOps com gitlab CI/CD, docker e nginx;</li>
          <li>
            Implementação de sistemas web que recebem dados de dispositivos IoT
            com TagoIO.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
