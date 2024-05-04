import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, Form, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import "../../App.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SignUpCompany2 = () => {
  // initial state Start
  const [ceo, setCeo] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  // initial state End

  // error msg Start
  const [errCeo, setErrCeo] = useState("");
  const [errLink, setErrLink] = useState("");
  const [errCategory, setErrCategory] = useState("");
  // error msg End

  // event handler change Start
  const handleCeoChange = (e) => {
    setCeo(e.target.value);
    setErrCeo("");
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setErrLink("");
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e);
    setErrCategory("");
  };

  // event handler change End

  // Event handler for form submission Start
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ceo) {
      setErrCeo("Enter the name of the ceo ");
    }
    if (!link) {
      setErrLink("Enter the link of the company");
    }
    if (ceo && link && category) {
      changeUrl();
      clearForm();
    }
  };
  // link of the next page
  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/SignUpCompany3");
  };

  const clearForm = () => {
    setCeo("");
    setLink("");
    setLocation("");
    setSelectedOption("");
    setCategory("");
  };

  return (
    <>
      <div className="hidden">
        <Nav />
      </div>
      <div className="min-h-[100vh] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-linearGradient-dark flex  justify-center items-center relative overflow-hidden">
        {/* circles */}
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[20px] top-[20px]"></div>
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[30%] top-1/3"></div>
        <div className="absolute rounded-full size-[150px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark left-[-20px] bottom-[20px]"></div>
        <div className="absolute rounded-full size-[50px]  blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[-20px] top-[20px]"></div>
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[30%] top-1/4"></div>
        <div className="absolute rounded-full size-[100px] blur-sm bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark right-[60px] bottom-[40px]"></div>
        {/* circles end */}

        <div className="flex flex-col z-10 bg-white dark:bg-darkMode dark:text-white  w-full sm:w-fit px-16 h-[100vh] sm:h-[90vh]  justify-center items-center sm:rounded-[40px] relative drop-shadow-[0_0_5px_rgba(0,0,0,0.6)] ">
          <Form
            action=""
            method=""
            onSubmit={handleSubmit}
            className="w-fit  flex flex-col  mb-20"
          >
            <label htmlFor="ceo" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1 " /> CEO
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="ceo"
              required
              className="bg-input-gray mb-7 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={ceo}
              onChange={handleCeoChange}
            />
            <label htmlFor="link" className="font-bold  mb-3 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> Link of
              the company website <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="link"
              required
              className="  bg-input-gray mb-7 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={link}
              onChange={handleLinkChange}
            />
            <label htmlFor="location" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" />
              Location
            </label>
            <input
              type="text"
              name="location"
              className="bg-input-gray  mb-7 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={location}
              onChange={handleLocationChange}
            />
            <label htmlFor="" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" />
              Categories of what the company provide
              <span className="text-red-600">*</span>
            </label>

            {/* Drop down menu Start */}
            <Menu as="div" className="relative inline-block ">
              <div>
                <Menu.Button className="inline-flex w-full justify-between gap-x-1.5  items-center text-sm font-semibold text-gray-900   hover:bg-gray-50 bg-input-gray  rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none">
                  <div>{category}</div>
                  <div className=" flex space-between -mr-1">
                    <div className=" text-icons-gray inline-block ">|</div>
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 text-icons-gray inline-block "
                      aria-hidden="true"
                    />
                  </div>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setSelectedOption("B2B");
                            handleCategoryChange("B2B");
                          }}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          B2B
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setSelectedOption("B2C");
                            handleCategoryChange("B2C");
                          }}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          B2C
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Drop down menu end */}

            <button
              type="submit"
              className="text-center text-sm dark:text-darkMode font-bold tracking-widest bg-main-yellow border-none rounded-[10px] py-2 px-[30px] absolute -bottom-[-15%] -right-[-50%] translate-x-1/2 translate-y-1/2 "
            >
              NEXT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpCompany2;
