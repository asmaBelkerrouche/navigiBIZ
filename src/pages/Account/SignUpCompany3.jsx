import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Fragment } from "react";
import { BiSolidFileImport } from "react-icons/bi";
import { Form } from "react-router-dom";
import Nav from "../../components/Nav";

const SignUpCompany3 = () => {
  // initial state Start
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [confirmation, setConfirmation] = useState("");
  // initial state End

  // error msg Start
  const [ErrDescription, setErrDescription] = useState("");
  // error msg End

  // event handler change Start
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrDescription("");
  };
  const handleLogoChange = (e) => {
    setLogo(e.target.value);
  };
  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value);
  };

  // event handler change End

  // Event handler for form submission Start
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      setErrCeo("Enter a description of the company");
    }
    if (description) {
      // idk i'll see
      clearForm();
    }
    // console.log('Button clicked!');
  };

  const clearForm = () => {
    setDescription("");
    setLogo("");
    setConfirmation("");
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

        <div className="flex flex-col z-10 bg-white dark:bg-darkMode dark:text-white w-full sm:w-fit px-16  h-[100vh] sm:h-[90vh]  justify-center items-center sm:rounded-[40px] relative drop-shadow-[0_0_5px_rgba(0,0,0,0.6)] ">
          <Form
            action=""
            method=""
            onSubmit={handleSubmit}
            className="w-fit  flex flex-col  mb-20"
          >
            <label htmlFor="description " className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1 " />{" "}
              Description
              <span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              name="description"
              required
              className="bg-input-gray mb-7 rounded-[8px] h-[125px] p-5  border-l-4 border-secondary-blue focus:outline-none resize-none"
              value={description}
              onChange={handleDescriptionChange}
            />
            <label htmlFor="logo" className="font-bold  mb-3 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> Logo
            </label>

            <div className="bg-input-gray  mb-7 rounded-[8px] h-[45px] w-[245px] p-5 border-l-4 border-secondary-blue focus:outline-none relative flex items-center justify-end">
              <div className=" text-icons-gray inline-block mr-2">|</div>
              <BiSolidFileImport className="text-icons-gray size-[20px] -mr-2" />
              <input
                type="file"
                name="logo"
                className="size-full cursor-pointer  absolute inset-0 opacity-0"
                value={logo}
                onChange={handleLogoChange}
              />
            </div>

            <label htmlFor="confirmation" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> The
              confirmation files
            </label>
            <div className="bg-input-gray  mb-7 rounded-[8px] h-[45px] w-[245px] p-5 border-l-4 border-secondary-blue focus:outline-none relative flex items-center justify-end">
              <div className=" text-icons-gray inline-block mr-2">|</div>
              <BiSolidFileImport className="text-icons-gray size-[20px] -mr-2" />
              <input
                type="file"
                name="confirmation"
                className="size-full cursor-pointer  absolute inset-0 opacity-0"
                value={confirmation}
                onChange={handleLogoChange}
              />
            </div>

            <button
              type="submit"
              className=" text-center text-sm font-bold tracking-widest dark:text-darkMode bg-main-yellow  border-none rounded-[10px] py-2   px-[30px] absolute -bottom-[-15%] -right-[-50%] translate-x-1/2 translate-y-1/2 "
            >
              CREATE
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpCompany3;
