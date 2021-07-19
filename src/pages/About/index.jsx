import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="left-content">
      <h1>Vinicius Santos Silva de Lima</h1>
      <div className="about-text">
        <p>Sou desenvolvedor de software focado em desenvolvimento WEB.</p>
        <p>
          Sempre estou em busca de me manter atualizado e aprender coisas novas.
        </p>
        <p>
          Além de programar gosto de praticar esportes e sair com os amigos.
        </p>
        <p>
          Atualmente estou cursando bacharelado em Tecnologia da informação na
          Universidade Federal do Rio Grando do Norte (UFRN).
        </p>
        <p id="obs">
          OBS: Essa foto minha foi tirada quando tentei usar tranças porém só
          durou 20 dias. Ai você me pergunta, então porque escolheu essa? Bem...
          Era a única que tinha um fundo facilmente removível.
        </p>
      </div>
    </div>
  );
};

export default About;
