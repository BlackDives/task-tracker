import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Verion 1.0.0</h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
