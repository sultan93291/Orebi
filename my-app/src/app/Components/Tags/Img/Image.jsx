import React from "react";
import Image from "next/image";

const Img = ({ className, height, width, src, alt , onClick }) => {
  return (
    <Image
      src={src}
      className={className}
      height={height}
      width={width}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default Img;
