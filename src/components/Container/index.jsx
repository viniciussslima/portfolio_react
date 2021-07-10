import React from "react";
import "./Container.css";

import Navigator from "./Navigator";
import Images from "./Images";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="left">{children}</div>
        <div className="right">
          <Navigator />
          <Images />
        </div>
      </div>
    </div>
  );
};

export default Container;
