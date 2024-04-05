import React from "react";
import { Link } from "react-router-dom";
import { LiaBuildingSolid } from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";
import Nav from "../../components/Nav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SignUp = () => {
  return (
    <div>
      <div className="hidden">
        <Nav />
      </div>

      <div className="min-h-[100vh] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-linearGradient-dark grid  justify-center items-center flex-col relative overflow-hidden">
        {/* circles */}
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[20px] top-[20px]"></div>
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[20%] top-1/3"></div>
        <div className="absolute rounded-full size-[80px]  blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[35%] top-10"></div>
        <div className="absolute rounded-full size-[150px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[-20px] bottom-[20px]"></div>
        <div className="absolute rounded-full size-[70px]  blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[45%] bottom-[40px]"></div>
        <div className="absolute rounded-full size-[50px]  blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[-20px] top-[20px]"></div>
        <div className="absolute rounded-full size-[130px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[25%] top-1/4"></div>
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[60px] bottom-[40px]"></div>

        <div className=" z-10 h-[100vh] flex justify-center items-center  ">
          {/*  LOGO: */}

          <div className="block text-center  w-[179px] h-[45px] absolute top-6">
            <img src="../public/logo.png" alt="" className=" size-full " />
          </div>
          {/* choose type of sign up box */}
          <div className=" bg-white dark:bg-darkMode w-[400px] rounded-[21px] drop-shadow-[0_0_5px_rgba(0,0,0,0.6)] ">
            <div className="bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-500  dark:bg-custom-linearGradient-dark rounded-[21px] h-[30vh] px-[60px] py-[65px]  text-center font-bold text-lg z-10 relative overflow-hidden">
              <p className="dark:text-white">
                What type of account do you want to create ?
              </p>
              <div className="absolute rounded-full size-[90px]  bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-400 dark:bg-custom-circles-dark -left-[40px] -top-[30px]"></div>
              <div className="absolute rounded-full size-[40px]  bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-400 dark:bg-custom-circles-dark left-[20%] top-[95PX]"></div>
              <div className="absolute rounded-full size-[50px]  bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-400 dark:bg-custom-circles-dark left-[50%] top-4"></div>
              <div className="absolute rounded-full size-[50px]  bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-400 dark:bg-custom-circles-dark right-[70px] -bottom-[25px]"></div>
              <div className="absolute rounded-full size-[25px]  bg-gradient-to-tl from-blue-300 via-blue-400 to-blue-400 dark:bg-custom-circles-dark right-[45px] top-[70px]"></div>
            </div>
            <div className="bg-white dark:bg-darkMode rounded-[21px] h-[30vh] flex items-center justify-evenly ">
              <Link
                to="/signUpCompany"
                className="h-[150px] w-[160px] rounded-[10px] bg-gradient-to-bl bg-custom-gradient-yellow to-[100%]  py-16 px-10 text-center font-bold text-[10px] relative cursor-pointer"
              >
                <p className="dark:text-white">A Company account</p>
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[-130deg] left-[15px] top-4" />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[-35deg] left-[5px] top-[50%]" />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[-160deg] left-[50px] bottom-2 " />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[-20deg] left-[50%] bottom-10 " />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[20deg] right-[20px] top-1 " />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[30deg] right-[51%] top-11 " />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[10deg] right-[5px] top-[50%] " />
                <LiaBuildingSolid className=" text-building-yellow absolute size-[20px] rotate-[-20deg] right-[35px] bottom-3" />
              </Link>
              <Link
                to="/SignUpUser"
                className="h-[150px] w-[160px] rounded-[10px] bg-custom-gradient-blue bg-custom-gradient-blue-dark  py-16 px-10 text-center font-bold text-[10px] relative cursor-pointer"
              >
                <p className="dark:text-white">A Consumer account</p>
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[-130deg] left-[10px] top-4" />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[-35deg] left-[5px] top-[50%]" />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[-160deg] left-[50px] bottom-2 " />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[-20deg] left-[50%] bottom-10 " />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[20deg] right-[20px] top-1 " />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[30deg] right-[51%] top-11 " />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[10deg] right-[5px] top-[50%] " />
                <MdOutlinePersonOutline className=" text-person-blue absolute size-[20px] rotate-[-20deg] right-[35px] bottom-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
