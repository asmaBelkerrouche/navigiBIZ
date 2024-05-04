import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

// import icons as images
import phone from "../assets/icons/phone.svg";
import message from "../assets/icons/message.svg";
import fb from "../assets/icons/fb.svg";
import x from "../assets/icons/x.svg";
import insta from "../assets/icons/insta.svg";
import linkdin from "../assets/icons/linkdin.svg";
// import icons from react icons
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div className="bg-custom-linearGradient dark:bg-custom-linearGradient-dark w-full h-full mt-[50px] flex flex-col items-center justify-center text-white dark:text-darkMode rounded-t-[40px] ">
      <div className="container flex items-center justify-between border-t-[1px] border-b-[1px] border-white   h-[60%] w-[80%] ">
        <div className="   sm:ml-[10%]">
          <img
            src="./public/logo.png"
            alt=""
            className="text-black size-full"
          />
        </div>
        <div className="mr-0 sm:mr-[5%]">
          <div className="flex flex-col md:flex-row items-center justify-between mb-[30px]">
            <div className="flex items-center mr-[20px]">
              <FaPhoneAlt  className="size-[17px] mr-[10px]" />
              <p className="text-xs font-medium">+213 | 665522330</p>
            </div>
            <div className="flex items-center">
            <MdEmail  className="size-[17px] mr-[10px] dark:fill-darkMode dark:stroke-darkMode" />
              <p className="text-xs font-medium">NavigiBiz@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center ">
            <Link to="/">
            <IoLogoFacebook  className="size-[20px] sm:size-[25px] m-[10px]" />
            </Link>
            <Link to="/">
            <FaTwitter  className="size-[20px] sm:size-[25px] m-[10px]" />
            </Link>
            <Link to="/">
            <BsInstagram  className="size-[20px] sm:size-[25px] m-[10px]" />
            </Link>
            <Link to="/">
            <FaLinkedinIn  className="size-[20px] sm:size-[25px] m-[10px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between w-[80%] py-3 text-xs sm:text-sm">
        <p>
          Do you need{" "}
          <a href="" className="text-blue-500 hover:text-blue-700 underline">
            Help
          </a>{" "}
        </p>
        <p>© 2024 Navigi Biz. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
