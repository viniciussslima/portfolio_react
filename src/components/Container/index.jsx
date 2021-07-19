import React, { useMemo } from "react";
import "./Container.css";

import Navigator from "./Navigator";
import Images from "./Images";

const Container = ({ children }) => {
  const mobile = useMemo(() => {
    if (window.screen.width < 840) {
      return true;
    }

    return false;
  }, []);

  return (
    <div className="container">
      {mobile && <Navigator mobile />}
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
