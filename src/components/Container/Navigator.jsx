import React from "react";
import "./Container.css";

import { useLocation, Link } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/sobre"
        style={
          location.pathname === "/sobre" || location.pathname === "/"
            ? { fontWeight: "bold" }
            : null
        }
      >
        Sobre
      </Link>
      <Link
        to="/experiencia"
        style={
          location.pathname === "/experiencia" ? { fontWeight: "bold" } : null
        }
      >
        Experiência
      </Link>
      <Link
        to="/projetos"
        style={
          location.pathname === "/projetos" ? { fontWeight: "bold" } : null
        }
      >
        Projetos
      </Link>
      <Link
        to="/redes_sociais"
        style={
          location.pathname === "/redes_sociais" ? { fontWeight: "bold" } : null
        }
      >
        Redes sociais
      </Link>
      <hr style={{ marginTop: 10 }} />
    </nav>
  );
};

export default Navigator;
