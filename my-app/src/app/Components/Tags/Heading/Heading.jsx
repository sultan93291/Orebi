import React from "react";

const Heading = ({ Variant, className, text }) => {
  return <Variant className={className}>{text}</Variant>;
};

export default Heading;
