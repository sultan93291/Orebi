import React from "react";
import whiteWatch from "../../../Images/whiteWatch.png";
import Button from "@/app/Components/Tags/Button/Button";
import Paragraph from "@/app/Components/Tags/Paragraph/Paragraph";
import Heading from "@/app/Components/Tags/Heading/Heading";
const Phone = () => {
  return (
    <div className=" pl-[187px] pr-[132px] w-full h-auto   mb-[128px] flex flex-col  ">
      <div className="bg-creamWhite h-[370px] w-full relative  ">
        <div
          className="w-[633px] h-full"
          style={{
            background: `url(${whiteWatch.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="  absolute left-0 top-0 mt-[61px] ml-[684px] flex flex-col gap-y-[36px] ">
          <Heading
            Variant={"h4"}
            text={"Phone of the year"}
            className={"headign-five"}
          />
          <div className=" flex flex-col gap-y-[49px]">
            <Paragraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."
              }
              className={"para-four w-[511px] "}
            />

            <Button
              text={"Shop Now"}
              className={"common-btn w-[185px] h-[50px] "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
