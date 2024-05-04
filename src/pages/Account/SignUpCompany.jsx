import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Form, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import "../../App.css";

const SignUpCompany = () => {
  // initial state Start
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  // initial state End

  // error msg Start
  const [errCompanyName, setErrCompanyName] = useState("");
  const [errCompanyEmail, setErrCompanyEmail] = useState("");
  const [errCompanyPassword, setErrCompanyPassword] = useState("");
  const [errCompanyContact, setErrCompanyContact] = useState("");
  // error msg End

  // event handler change Start
  const handleNameChange = (e) => {
    setCompanyName(e.target.value);
    setErrCompanyName("");
  };
  const handleEmailChange = (e) => {
    setCompanyEmail(e.target.value);
    setErrCompanyEmail("");
  };
  const handlePasswordChange = (e) => {
    setCompanyPassword(e.target.value);
    setErrCompanyPassword("");
  };
  const handleContactChange = (e) => {
    setCompanyContact(e.target.value);
    setErrCompanyContact("");
  };
  // event handler change End

  // email validation Start ("type=email" may not be effective in some cases)
  const emailValidation = (CompanyEmail) => {
    return String(CompanyEmail)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i);
  };
  // email validation End

  // Event handler for form submission Start
  const handleSubmit = (e) => {
    e.preventDefault();
    // let hasErrors = false;

    if (!companyName) {
      setErrCompanyName("Enter the name of the company");
    }
    if (!companyEmail) {
      setErrCompanyEmail("Enter the email of the company");
    } else {
      if (!emailValidation(companyEmail)) {
        setErrCompanyEmail("Enter a valid email");
      }
    }
    if (!companyPassword) {
      setErrCompanyPassword("Enter your password");
    } else {
      if (companyPassword.length < 6) {
        setErrCompanyPassword("Passwords must be at least 6 characters");
      }
    }
    if (!companyContact) {
      setErrCompanyContact("Enter your Contact");
    }

    if (
      companyName &&
      companyEmail &&
      emailValidation(companyEmail) &&
      companyContact &&
      companyPassword
    ) {
      // idk i'll see
      changeUrl();
      clearForm();
    }
  };
  // link of the next page
  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/SignUpCompany2");
  };

  const clearForm = () => {
    setCompanyName("");
    setCompanyEmail("");
    setCompanyPassword("");
    setCompanyContact("");
  };

  return (
    <>
      <div className="hidden">
        <Nav />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 dark:bg-darkMode">
        {/* welcome company */}
        <div className="min-h-[100vh] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-linearGradient-dark hidden sm:flex  justify-center items-center text-white rounded-r-[32px] relative overflow-hidden">
          <div className="w-[73%] md:w-[60%] lg:w-[40%] flex flex-col  items-center ">
            <h2 className="font-extrabold  text-[2.5rem] p-2 z-10">
              Welcome !
            </h2>
            <p className="text-center font-bold text-lg z-10">
              Please fill out the form to create an account and start using our
              website.
            </p>
            {/* blue Circles */}
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-300 to-blue-500 dark:bg-custom-circles-dark h-[180px] w-[180px] left-[-95px] top-[35px]"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[63px] w-[63px] left-[175px] top-[165px]"></div>
            <div className="absolute rounded-full bg-gradient-to-r  from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark  h-[80px] w-[80px] right-[100px] top-[55px]"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[73px] w-[73px] left-[95px] bottom-[150px]"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[120px] w-[120px] right-[60px] top[170px]"></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[100px] w-[100px] right-[-50px] bottom-[80px] "></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[44px] w-[44px] right-[150px] bottom-[130px] "></div>
            <div className="absolute rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-custom-circles-dark h-[150px] w-[150px] left-[-15px] bottom-[-30px]  "></div>
            {/* white circles */}
            <div className="absolute rounded-full bg-white size-[8px] left-[215px] top-[35px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] left-[381px] top-[148px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] left-[87px] top-[250px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] right-[41px] top-[170px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] left-[107px] bottom-[136px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] left-[319px] bottom-[176px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] right-[30px] bottom-[220px]"></div>
            <div className="absolute rounded-full bg-white size-[8px] right-[107px] bottom-[36px]"></div>
          </div>
        </div>
        {/* sign up form column */}
        <Form
          action=""
          method=""
          onSubmit={handleSubmit}
          className="min-h-[100vh] flex justify-center items-center relative dark:text-white"
        >
          <div className="flex flex-col  ">
            <h2 className="font-bold  text-[2.5rem]  text-center absolute -top-[-5%] -right-[-50%] translate-x-1/2 translate-y-1/2">
              Sign Up
            </h2>
            <label htmlFor="companyName" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> Company
              name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              className="bg-input-gray mb-4 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={companyName}
              onChange={handleNameChange}
            />
            <label htmlFor="companyEmail" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> Email
              <span className="text-red-600">*</span>
            </label>
            <input
              type="e-mail"
              name="companyEmail"
              required
              className="  bg-input-gray mb-4 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={companyEmail}
              onChange={handleEmailChange}
            />
            <label
              htmlFor="companyPassword"
              className="font-bold  mb-2 text-xs"
            >
              <FaCircle className="size-[7px] inline-block mr-1 my-1" />
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="companyPassword"
              required
              className="bg-input-gray  mb-4 rounded-[8px] h-[35px] p-5  border-l-4 border-secondary-blue focus:outline-none"
              value={companyPassword}
              onChange={handlePasswordChange}
            />
            <label htmlFor="companyContact" className="font-bold  mb-2 text-xs">
              <FaCircle className="size-[7px] inline-block mr-1 my-1" /> Contact
              <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="companyContact"
              required
              placeholder="+213 | "
              className="bg-input-gray mb-4 rounded-[8px] h-[35px] p-5 border-l-4 border-secondary-blue focus:outline-none"
              value={companyContact}
              onChange={handleContactChange}
            />

            <button
              type="submit"
              className="text-center text-sm font-bold tracking-widest bg-main-yellow dark:text-darkMode border-none rounded-[10px] py-2 px-[30px] absolute -bottom-[-15%] -right-[-50%] translate-x-1/2 translate-y-1/2 "
            >
              NEXT
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUpCompany;
