import React from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Button from "../../Tags/Button/Button";
import Img from "../../Tags/Img/Image";
import { FaHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

const ArrivalCard = ({
  imgSrc,
  headingTxt,
  subheading,
  paraTxt,
  btnTxt,
  width,
  height,
  isBtn,
}) => {
  return (
    <div className="flex flex-col gap-y-6 w-[370px]   ">
      <div className="relative h-[370px] w-[370px] group   ">
        <Img
          src={imgSrc}
          width={width ? width : 376}
          height={height ? height : 376}
          alt={"not found"}
          className={"h-full w-full"}
        />
        {isBtn && (
          <Button
            text={btnTxt ? btnTxt : "new"}
            className={
              "common-btn w-[92px] h-[35px] capitalize absolute top-0 left-0 mt-[20px] ml-[20px] "
            }
          />
        )}
        <div className="  absolute w-full py-[25px] bg-white bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-y-[21px] items-end pr-[30px] ">
          <div className="flex flex-row gap-x-[15px] right-0 items-center ">
            <Paragraph
              text={"Add to Wish List"}
              className={"text-right para-four"}
            />
            <FaHeart className=" [&svg]:h-[12] [&svg]:w-[14px] " />
          </div>
          <div className="flex flex-row gap-x-[15px] right-0 items-center ">
            <Paragraph text={"Compare"} className={"text-right para-four"} />
            <IoGitCompareOutline className=" [&svg]:h-[12] [&svg]:w-[12px] " />
          </div>
          <div className="flex flex-row gap-x-[15px] right-0 items-center ">
            <Paragraph
              text={"Add to Wish List"}
              className={"text-right heding-six"}
            />
            <IoCart className=" [&svg]:h-[12] [&svg]:w-[13.5px] " />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[15px]">
        <div className="flex flex-row gap-x-[115px] ">
          <Heading
            text={headingTxt ? headingTxt : "Basic Crew Neck Tee"}
            Variant={"h4"}
            className={"heading-four"}
          />
          <Paragraph
            className={"para-three"}
            text={subheading ? subheading : "$44.00"}
          />{" "}
        </div>
        <Paragraph
          text={paraTxt ? paraTxt : "Black"}
          className={"para-three"}
        />
      </div>
    </div>
  );
};

export default ArrivalCard;
