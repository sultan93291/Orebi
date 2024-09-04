"use client";
import React, { useEffect, useState } from "react";
import Img from "../../Tags/Img/Image";
import { useRouter } from "next/navigation";
import Paragraph from "../../Tags/Paragraph/Paragraph";
import Bar from "../../../../Images/bar.png";
import { FaSearch } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { useFormik } from "formik";


const Navbar = () => {
  const router = useRouter();
  const [path, setpath] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    setpath(path);
  });

  const hanldeRootRoute = () => {
    alert("i'm working");
    router.push("/");
  };

  const initialValue = {
    search: "",
  };
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values, actions) => {
      console.log(values.search);
      actions.resetForm({
        values: initialValue,
      });
    },
  });

  return (
    <section className="flex flex-col w-auto h-[180px] relative   items-center justify-center ">
      <nav className=" capitaliz flex w-full h-[80px] bg-white px-[160px] items-center gap-x-[549.33px]   ">
        <Img
          onClick={hanldeRootRoute}
          className={"h-[15px] w-[65px]  bg-no-repeat cursor-pointer "}
          src={"/siteLogo.png"}
          alt={"site logo"}
          height={15}
          width={65}
        />
        <ul className=" flex flex-row gap-x-[40px] ">
          <li className={`${path == "/" ? "active-nav-link" : " nav-link"} `}>
            Home
          </li>
          <li className={`${path !== "/" ? "active-nav-link" : "nav-link"} `}>
            shop
          </li>
          <li className={`${path !== "/" ? "active-nav-link" : "nav-link"} `}>
            about
          </li>
          <li className={`${path !== "/" ? "active-nav-link" : "nav-link"} `}>
            contacts
          </li>
          <li className={`${path !== "/" ? "active-nav-link" : "nav-link"} `}>
            journal
          </li>
        </ul>
      </nav>
      <div className=" w-full h-[100px] bg-offWhite px-[160px] flex flex-row items-center gap-x-[407px] ">
        <div className=" flex flex-row gap-x-[355px]">
          <div className="flex flex-row items-center gap-x-[10.71px] ">
            <Img
              alt={"toggle bar"}
              height={9}
              width={18}
              className={"h-[9.469px] w-[18.26px]"}
              src={Bar}
            />
            <Paragraph text={"Shop by Category"} className={"para-one"} />
          </div>
          <form className="relative w-[601px] h-[50px] flex bg-white items-center ">
            <FaSearch className="absolute right-0 mr-[17.03px]  " />
            <input
              type="search"
              className=" h-full w-full common-input pl-[21px] para-one  text-[#C4C4C4] pr-[40px] "
              placeholder="Search Products"
              name="search"
              onChange={formik.handleChange}
              value={formik.values.search}
            />
          </form>
        </div>
        <div className=" flex flex-row gap-10 ">
          <FaUserCheck className="[&svg]:h-[15.411px] [&svg]:w-[33px]" />
          <IoCartSharp className="[&svg]:h-[15.411px] [&svg]:w-[33px]" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
