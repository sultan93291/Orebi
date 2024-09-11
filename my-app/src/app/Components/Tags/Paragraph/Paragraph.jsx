import React from "react";
import Heading from "../Heading/Heading";

const Paragraph = ({
  className,
  text,

}) => {
  return (
    <p className={className}>
      {" "}
      {text} 
    </p>
  );
};

export default Paragraph;
