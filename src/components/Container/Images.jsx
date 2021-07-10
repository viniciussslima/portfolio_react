import React from "react";
import "./Container.css";

import mePhoto from "../../assets/mePhoto.png";
import cssLogo from "../../assets/tecnologes/css.svg";
import dockerLogo from "../../assets/tecnologes/docker.svg";
import gitLogo from "../../assets/tecnologes/git.svg";
import htmlLogo from "../../assets/tecnologes/html.svg";
import javaLogo from "../../assets/tecnologes/java.svg";
import javascriptLogo from "../../assets/tecnologes/js.svg";
import mongodbLogo from "../../assets/tecnologes/mongodb.svg";
import mysqlLogo from "../../assets/tecnologes/mysql.svg";
import postgresLogo from "../../assets/tecnologes/postgres.svg";
import reactLogo from "../../assets/tecnologes/react.svg";
import redisLogo from "../../assets/tecnologes/redis.svg";
import springLogo from "../../assets/tecnologes/spring.svg";

const Images = () => {
  return (
    <>
      <img className="mePhoto" src={mePhoto} alt="Vinicius Santos" />
      <img className="logo cssLogo" src={cssLogo} alt="CSS Logo" />
      <img className="logo dockerLogo" src={dockerLogo} alt="Docker Logo" />
      <img className="logo gitLogo" src={gitLogo} alt="Git Logo" />
      <img className="logo htmlLogo" src={htmlLogo} alt="HTML Logo" />
      <img className="logo javaLogo" src={javaLogo} alt="Java Logo" />
      <img
        className="logo javascriptLogo"
        src={javascriptLogo}
        alt="Javascript Logo"
      />
      <img className="logo mongodbLogo" src={mongodbLogo} alt="Mongodb Logo" />
      <img className="logo mysqlLogo" src={mysqlLogo} alt="Mysql Logo" />
      <img
        className="logo postgresLogo"
        src={postgresLogo}
        alt="Postgres Logo"
      />
      <img className="logo reactLogo" src={reactLogo} alt="React Logo" />
      <img className="logo redisLogo" src={redisLogo} alt="Redis Logo" />
      <img className="logo springLogo" src={springLogo} alt="Spring Logo" />
    </>
  );
};

export default Images;
