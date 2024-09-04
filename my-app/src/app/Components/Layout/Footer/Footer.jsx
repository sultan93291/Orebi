import React from "react";
import Img from "../../Tags/Img/Image";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Heading from "../../Tags/Heading/Heading";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-auto h-auto px-[158px] pt-[53px] pb-[52px] bg-offWhite flex flex-col gap-y-[65px] ">
      <div className="flex flex-row gap-x-[146px] ">
        <div className="flex flex-row gap-x-[143px]">
          <div className="flex flex-col gap-y-[20px]">
            <span className="footer-nav-heading">MENU</span>
            <ul className="flex flex-col gap-y-[6px]">
              <li className="footer-nav-link">Home</li>
              <li className="footer-nav-link">shop</li>
              <li className="footer-nav-link">about</li>
              <li className="footer-nav-link">contact</li>
              <li className="footer-nav-link">journal</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <span className="footer-nav-heading">shop</span>
            <ul className="flex flex-col gap-y-[6px]">
              <li className="footer-nav-link">Category 1</li>
              <li className="footer-nav-link">Category 2</li>
              <li className="footer-nav-link">Category 3</li>
              <li className="footer-nav-link">Category 4</li>
              <li className="footer-nav-link">Category 5</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <span className="footer-nav-heading">help</span>
            <ul className="flex flex-col gap-y-[6px]">
              <li className="footer-nav-link">privacy policy</li>
              <li className="footer-nav-link">terms & conditions</li>
              <li className="footer-nav-link">specail e-Shop</li>
              <li className="footer-nav-link">shipping</li>
              <li className="footer-nav-link">secure payments</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-x-[260px]">
          <div className=" flex flex-col gap-y-[15px] ">
            <div className="flex flex-col gap-y-[6px] ">
              <Heading
                Variant={"h6"}
                text={"(052) 611-5711"}
                className={"heding-six"}
              />
              <Heading
                Variant={"h6"}
                text={"company@domain.com"}
                className={"heding-six"}
              />
            </div>
            <Paragraph
              text={"575 Crescent Ave. Quakertown, PA 18951"}
              className={"para-two"}
            />
          </div>
          <Img
            src={"/footerLogo.png"}
            alt={"site logo"}
            height={28}
            width={121}
            className={"h-[28.507px] w-[121.907px]  "}
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-[1116.03px] ">
        <ul className=" flex flex-row gap-x-[25px]">
          <FaFacebookF className="[&svg]:h-[16px] w-[8px] cursor-pointer " />
          <FaLinkedinIn className="[&svg]:h-[16px] w-[16px] cursor-pointer " />
          <FaInstagram className="[&svg]:h-[16px] w-[16px] cursor-pointer " />
        </ul>
        <Paragraph
          text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
          className={"para-two"}
        />
      </div>
    </footer>
  );
};

export default Footer;
