import React from "react";
import { useHistory } from "react-router-dom";

function Handle404() {
  const history = useHistory();
  return (
    <div className="Container404">
      <h1 className="Title404">404</h1>
      <p className="Message404">This is not the page you are looking for</p>

      <div className="GoHome404">
        <p>Go</p>
        <p className="Home404" onClick={() => history.push("/")}>
          Home
        </p>
      </div>
    </div>
  );
}

export default Handle404;
