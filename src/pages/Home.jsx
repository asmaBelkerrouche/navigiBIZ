import { React, useState } from "react";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import Rating from "../components/Rating";
import { useNavigate } from "react-router-dom";

// import  images
import homeImage from "../assets/homeImage.png";
// products Start
import airpods from "../assets/products/airpods.png";
import casquesony from "../assets/products/casquesony.png";
import facewach from "../assets/products/facewach.png";
import MI11 from "../assets/products/MI11.png";
import truck from "../assets/products/truck.png";
// products end
// logos start
import NiveaLogo1 from "../assets/logos/NiveaLogo1.png";
import qcylogo from "../assets/logos/qcylogo.png";
import SonyLogo from "../assets/logos/SonyLogo.png";
import Xiaomilogo from "../assets/logos/Xiaomilogo.png";
import yalidinelogo from "../assets/logos/yalidinelogo.png";
import githubLogo from "../assets/logos/githubLogo.png";
import nnoestLogo from "../assets/logos/nnoestLogo.png";
import yalidinelogo1 from "../assets/logos/yalidinelogo1.png";
import SonyLogo2 from "../assets/logos/SonyLogo2.png";
// logos end

// slick's arrows Start
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="size-6 rounded-full  bg-bg-gray dark:bg-darkMode-product bg-opacity-95 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[55%] right-2 md: lg:-right-16"
      onClick={onClick}
    >
      <span className="text-xl">
        {/* <FaLongArrowAltRight /> */}
        <BsChevronRight className="size-4" />
      </span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="size-6 rounded-full  bg-bg-gray dark:bg-darkMode-product bg-opacity-95 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[55%] left-2 lg:-left-16"
      onClick={onClick}
    >
      <span>
        <BsChevronLeft className="size-4" />
      </span>
    </div>
  );
};
// slick's arrows End

const Home = () => {
  // Search Start
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/Search?query=${searchQuery}`);
  };
  // Search End

  // start carrousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  // end carrousel

  // data products start
  const data = [
    {
      id: 1,
      name: "WH-1000XM4 Headphones",
      img: casquesony,
      companyLogoimg: SonyLogo,
      companyLogoname: "SONY",
    },
    {
      id: 2,
      name: "Delevery Service",
      img: truck,
      companyLogoimg: yalidinelogo,
      companyLogoname: "YALIDINE",
    },
    {
      id: 3,
      name: "T13 ANC Headphones",
      img: airpods,
      companyLogoimg: qcylogo,
      companyLogoname: "QCY",
    },
    {
      id: 4,
      name: "MI 11 Phone",
      img: MI11,
      companyLogoimg: Xiaomilogo,
      companyLogoname: "XIAOMI",
    },
    {
      id: 5,
      name: "Protect & Care Face wash",
      img: facewach,
      companyLogoimg: NiveaLogo1,
      companyLogoname: "NIVEA",
    },
  ];
  // data products end

  //data companies start
  const datacompanies = [
    {
      id: 1,
      companyname: "SONY",
      companyimg: SonyLogo2,
    },
    {
      id: 2,
      companyname: "NOEST",
      companyimg: nnoestLogo,
    },
    {
      id: 3,
      companyname: "GIT HUB",
      companyimg: githubLogo,
    },
    {
      id: 4,
      companyname: "YALIDINE",
      companyimg: yalidinelogo1,
    },
    {
      id: 5,
      companyname: "NOEST",
      companyimg: nnoestLogo,
    },
    //data companies end
  ];
  return (
    <div className=" dark:bg-darkMode dark:text-darkMode ">
    <div className=" dark:bg-darkMode dark:text-darkMode pb-[200px]">
      <div className="relative w-full flex justify-center  ">
        <div className="absolute  w-[80%] top-[25px] z-10">
          <Nav />
        </div>
      </div>
      {/* home start */}
      <div className=" relative bg-custom-linearGradient dark:bg-custom-linearGradient-dark h-[45vh] sm:h-[80vh]  rounded-b-[40px] grid gap-4  md:grid-cols-2 overflow-hidden ">
        {/* blue Circles */}
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[100px] left-[-50px] bottom-[100px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[180px] md:left-[175px] top-[25px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[150px] right-[-50px] top-[55px]  "></div>
        <div className="flex flex-col justify-center items-center md:z-10 ">
          <div className="text-white dark:text-darkMode px-[40px] sm:px-[50px] mt-[100px] sm:mt-[50px] sm:pb-[25px]">
            <h1 className="font-bold text-3xl  sm:mb-[10px] flex  relative">
              Rate. Review. Explore.
            </h1>
            <p className="hidden md:inline-block">
              Discover, Rate, And Share Your Experiences With Products,
              Services, And Companies All In One Place
            </p>
          </div>
          <div className="w-full flex justify-center md:inline-block">
            <div className="h-[35px] w-full sm:w-[70%] md:w-[90%] lg:w-[70%] m-[50px] relative ">
              <input
                type="text"
                placeholder="Search Here ..."
                className="w-full h-fit  p-[15px] text-xs rounded-[50px] focus:outline-none dark:bg-darkMode dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                type="submit"
                className=" absolute right-1 top-[1.75px] text-center text-xs font-bold dark:text-darkMode tracking-widest bg-main-yellow  border-none rounded-[50px] px-3 md:px-4 py-3    "
                onClick={handleSearch}
              >
                Search
              </button>
              {/* right-[24%] sm:right-[18%] md:right-[22%] */}
              <button className=" absolute  right-[82px] md:right-[88px] top-[1.75px] text-center text-xs font-bold  tracking-widest bg-input-gray  border-none rounded-[50px] px-2  md:px-4 py-3    ">
                <IoIosArrowDown className="inline mr-1 md:mr-3" />
                Categories
              </button>
              {/* <button
                onClick={toggleMenu}
                onBlur={() => setMenuOpen(false)}
                className="absolute right-[82px] md:right-[88px] top-[3.75px] text-center text-xs font-bold tracking-widest bg-input-gray border-none rounded-[50px] px-2 md:px-4 py-3"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <IoIosArrowDown className="inline mr-1 md:mr-3" />
                Categories
              </button>
              {menuOpen ? (
                <div className="card absolute top-[50px] -left-[10%] w-[120%] h-fit mt-2 p-10 flex z-10 bg-white dark:bg-darkMode border-[5px] border-border-gray rounded-[40px]">
                  <div className="w-full grid gap-[10px] grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
                    <button
                      className={`category-button p-2 cursor-pointer text-sm rounded-[50px] w-full  hover:bg-select-blue hover:text-white ${
                        selectedCategory === ""
                          ? "active bg-select-blue text-white"
                          : "bg-input-gray "
                      }`}
                      onClick={() => handleCategoryChange("")}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        value={selectedCategory}
                        className={`category-button p-2 cursor-pointer text-sm rounded-[50px] w-full hover:bg-select-blue hover:text-white ${
                          selectedCategory === category
                            ? "bg-select-blue text-white"
                            : "bg-input-gray "
                        }`}
                        onClick={() => handleCategoryChange(category)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null} */}
            </div>
          </div>
        </div>
        <div className="  hidden md:flex w-[90%] h-[60%] mt-[110px] mr-[60px] ">
          <img src={homeImage} alt="" className="size-full" />
        </div>
      </div>
      {/* home end */}
      {/* product carousel Start */}
      <div className="flex justify-center mt-[40px]">
        <div className="container slick-slider relative  ">
          <h2 className="dark:text-white font-bold text-lg m-[20px] my-[30px] ">
            suggested posts
          </h2>
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.id}
                // drop-shadow-[0_0_5px_rgba(0,0,0,0.6)]
                className=" border-[1px] border-border-gray dark:bg-darkMode-product rounded-[10px]  h-[250px] relative  "
              >
                <div className="  flex justify-center items-center mt-10">
                  <img src={d.img} alt="" className="h-[100px]" />
                </div>
                <div className=" border-t-[1px] border-border-gray bg-gallery-blue dark:bg-gallery-blue-dark rounded-b-[10px] absolute bottom-0 w-full h-[70px]">
                  <p className="font-semibold text-xs m-2">{d.name}</p>
                  <div className="flex items-center justify-between mt-[20px] mx-2">
                    <div className="flex justify-center items-center ">
                      <div className="size-[20px]">
                        <img
                          src={d.companyLogoimg}
                          alt=""
                          className="size-full"
                        />
                      </div>
                      <p className="text-sm ml-2">{d.companyLogoname}</p>
                    </div>
                    <div className="size-13">
                      <Rating />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* product carousel End */}
      {/* Services carousel Start */}
      <div className="flex justify-center mt-[100px] pb-[100px]  sm:h-[80vh] bg-custom-linearGradient dark:bg-custom-linearGradient-dark rounded-[40px] relative overflow-hidden">
        <div className="container slick-slider relative  z-10 mt-[50px]">
          <h2 className="dark:text-white font-bold text-lg m-[20px] mb-[40px] ">
            suggested companies
          </h2>
          <Slider {...settings}>
            {datacompanies.map((d) => (
              <div
                key={d.id}
                className=" border-[1px]  border-border-gray bg-white dark:bg-darkMode-product rounded-[10px]  h-[250px]  relative "
              >
                <div className=" main flex justify-center items-center mt-20">
                  <img src={d.companyimg} alt="" className="h-[50px]" />
                </div>
                <div className=" border-t-[1px] border-border-gray bg-gallery-blue dark:bg-gallery-blue-dark rounded-b-[10px] absolute bottom-0 w-full h-[70px] flex flex-col justify-center items-center">
                  <p className="font-semibold mb-2">{d.companyname}</p>

                  <div className="size-13">
                    <Rating />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Blue bubbles start */}
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[80px] right-[20px] sm:right-[200px] bottom-[10px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[120px] left-[90px] md:left-[175px] -top-[60px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[80px] sm:right-[63%] top-[55%]  "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[120px] left-[50px] sm:left-[150px] -bottom-[60px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[110px] right-[93%] md:right-[475px] top-[105px] sm:top-[55px] "></div>
        <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[120px]  right-[-50px] sm:right-[-50px] top-[55px]  "></div>
        {/* Blue bubbles end */}
      </div>
      {/* Services carousel End */}
      
    </div>
    <div className=" w-full h-[50vh] bottom-[0vh] ">
            <Footer />
          </div>
    </div>
  );
};

export default Home;
