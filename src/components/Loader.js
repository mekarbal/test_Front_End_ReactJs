import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "180px",
        height: "100px",
        margin: "12px auto",
        display: "block",
      }}
    >
      <span className="sr-only" style={{ fontSize: 30 }}>
        Loading .....
      </span>
    </Spinner>
  );
};

export default Loader;
