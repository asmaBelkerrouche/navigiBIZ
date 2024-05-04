import { React, useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// import icons
import chat from "../assets/icons/chat.svg";
import person from "../assets/icons/person.svg";
import parameters from "../assets/icons/parameters.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import menu from "../assets/icons/menu.svg";
import { TbSunMoon } from "react-icons/tb";
import { TbMessageCircle } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const [pageTitle, setPageTitle] = useState("Home page");

  // Function to change the page title
  const changePage = (newTitle) => {
    setPageTitle(newTitle);
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return (
      savedMode === "dark" ||
      (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const setDarkMode = () => {
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
  };

  const handleSystemDefault = () => {
    localStorage.removeItem("theme");
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  };

  return (
    <div className={classNames(`App ${isDarkMode ? "dark" : ""}`)}>
      <div className="flex justify-between items-center bg-white dark:bg-darkMode dark:text-white  w-[100%] h-[55px]  rounded-[50px] ">
        <div className="size-[30px] sm:w-[127px] sm:h-[33.54px] ml-[15px] sm:ml-[35px] ">
          {/* medium + large screen */}
          <img
            src="./public/logo.png"
            alt=""
            className="size-full hidden sm:flex"
          />
          {/* small screen */}
          <img
            src="./public/logoicon.png"
            alt=""
            className="size-full flex sm:hidden"
          />
        </div>
        <div>
          <p className="tracking-wide font-[Viga] dark:text-white">
            {pageTitle}
          </p>
        </div>
        {/* phone screen */}
        <div className="flex sm:hidden  items-center justify-between mr-[35px]">
          {/* <TbMessageCircle className='m-3 size-[25px]'/> 
        <BsPerson className="m-3 size-[25px]" />
        <IoSettingsOutline className="m-3 size-[25px]" />*/}

          <Menu as="div" className="inline-block relative  text-left ">
            <div>
              <Menu.Button className=" m-3 -mr-3 size-[25px]">
                
                  <IoMenu className="size-full" />
                
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-[25px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-[3px] border-border-gray   ">
                <div className="py-1">
                  <Menu.Item>
                    <Link
                      to=""
                      className="flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:top-1/3 after:left-3.5 "
                    >
                      <img src={chat} alt="" className="m-3 ml-1 size-[25px]" />
                      <p className="font-bold ml-2 text-base dark:text-darkMode">
                        {" "}
                        Chat
                      </p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to=""
                      className="flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:bottom-1/3 after:left-3.5"
                    >
                      <img
                        src={person}
                        alt=""
                        className="m-3 ml-1  size-[25px]"
                      />

                      <p className="font-bold ml-2 text-base dark:text-darkMode">
                        My Profile
                      </p>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div className="flex items-center px-4 py-2 text-sm  w-full">
                        <Menu
                          as="div"
                          className="inline-block relative  text-left "
                        >
                          <div>
                            <Menu.Button className=" flex items-center px-4 py-2 text-sm w-full   ">
                              <img
                                src={parameters}
                                alt=""
                                className="m-3 -ml-2 size-[25px]"
                              />
                              <p className="font-bold ml-2 text-base dark:text-darkMode">
                                {" "}
                                Settings
                              </p>
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-[25px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-[3px] border-border-gray overflow-hidden">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={setLightMode}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:top-1/3 after:left-3.5 "
                                      )}
                                    >
                                      <img
                                        src={sun}
                                        alt=""
                                        className="m-3 ml-1 size-[25px]"
                                      />
                                      <p className="font-bold ml-2 text-base">
                                        {" "}
                                        Light Mode
                                      </p>
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={setDarkMode}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:bottom-1/3 after:left-3.5"
                                      )}
                                    >
                                      <img
                                        src={moon}
                                        alt=""
                                        className="m-3 ml-1 size-[25px]"
                                      />
                                      <p className="font-bold ml-2 text-base">
                                        Dark Mode
                                      </p>
                                    </button>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={handleSystemDefault}
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex items-center px-4 py-2 text-sm  w-full"
                                      )}
                                    >
                                      <TbSunMoon className="m-2 ml-1 size-[35px] text-black" />
                                      <p className="font-bold  text-base">
                                        System Default
                                      </p>
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* medium + large screen */}
        <div className="hidden sm:flex items-center justify-between mr-[35px]">
          <Link>
            {/* <img src={chat} alt="" className="m-3 size-[25px]" /> */}
            <TbMessageCircle className="m-3 size-[25px]" />
          </Link>
          <Link>
            {/* <img src={person} alt="" className="m-3 size-[25px]" /> */}
            <BsPerson className="m-3 size-[25px]" />
          </Link>

          <Menu as="div" className="inline-block relative  text-left">
            <div>
              <Menu.Button className=" m-3 mr-1 size-[25px]">
                {/* <img src={parameters} alt="" className="size-full" /> */}

                
                  <IoSettingsOutline className="size-full" />
                
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-[25px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-[3px] border-border-gray overflow-hidden">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={setLightMode}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:top-1/3 after:left-3.5 "
                        )}
                      >
                        <img
                          src={sun}
                          alt=""
                          className="m-3 ml-1 size-[25px]"
                        />
                        <p className="font-bold ml-2 text-base"> Light Mode</p>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={setDarkMode}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex items-center px-4 py-2 text-sm w-full after:h-[3px] after:w-40 after:bg-border-gray after:absolute  after:bottom-1/3 after:left-3.5"
                        )}
                      >
                        <img
                          src={moon}
                          alt=""
                          className="m-3 ml-1 size-[25px]"
                        />
                        <p className="font-bold ml-2 text-base">Dark Mode</p>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleSystemDefault}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex items-center px-4 py-2 text-sm  w-full"
                        )}
                      >
                        <TbSunMoon className="m-2 ml-1 size-[35px] text-black" />
                        <p className="font-bold  text-base">System Default</p>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
