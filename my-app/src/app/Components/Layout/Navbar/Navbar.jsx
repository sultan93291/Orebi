"use client";
import React, { useEffect, useState } from "react";
import Img from "../../Tags/Img/Image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [path, setpath] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    setpath(path);
  });

  const hanldeRootRoute = () => {
    alert("i'm working")
    router.push("/");
  };

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
      <div className=" w-full h-[100px] bg-offWhite px-[160px] ">
        hello world
      </div>
    </section>
  );
};

export default Navbar;
