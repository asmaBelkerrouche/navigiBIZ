import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Rating from "../components/Rating";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";

const Search = () => {
  // const [query, setQuery] = useState("");
  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get("query")
  );
  // const query = new URLSearchParams(location.search).get('query');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  // pagination start
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const productsPerPage = 9; // Number of products per page

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the index of the first and last product to display on the current page
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // pagination end

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Initialize filteredProducts with all products when component mounts
    setFilteredProducts(Products);
  }, []);

  const handleSearch = () => {
    let filtered = Products;

    if (query.trim() !== "") {
      // Filter products based on search query
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== "") {
      // Filter products based on selected category
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      handleCategoryChange(category);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };
  // useEffect(() => {
  //   handleSearch();
  // }, []);

  // Call handleSearch whenever the query or selectedCategory changes
  useEffect(() => {
    handleSearch();
  }, [query, selectedCategory]);

  const categories = [
    "Tutorial",
    "HowTo",
    "DIY",
    "Review",
    "Tech",
    "Gaming",
    "Travel",
    "Fitness",
    "Cooking",
    "Vlog",
  ];
  return (
    // <div className=" relative h-[375vh] sm:h-[550vh] md:h-[300vh] dark:bg-darkMode ">
    <div className=" relative h-fit dark:bg-darkMode ">
      <div className="relative w-full flex justify-center  ">
        <div className="absolute  w-[80%] top-[25px] z-10">
          <Nav />
        </div>
      </div>

      <div className=" relative bg-custom-linearGradient dark:bg-custom-linearGradient-dark h-[45vh] sm:h-[80vh]  rounded-b-[40px] grid gap-4  < ">
        <div className=" relative bg-custom-linearGradient dark:bg-custom-linearGradient-dark h-[45vh] sm:h-[80vh]  rounded-b-[40px] grid gap-4   ">
          {/* blue Circles Start  */}
          <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[100px] left-[-50px] bottom-[100px] "></div>
          <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[180px] md:left-[175px] top-[25px] "></div>
          <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[150px] right-[0px] top-[55px]  "></div>
          <div className="absolute rounded-full bg-gradient-to-br bg-custom-circles dark:bg-custom-circles-dark size-[120px] right-[150px] bottom-[15px]  "></div>
          {/* blue Circles End  */}

          {/* Search Bar Start */}
          <div className="w-full mt-[100px] flex flex-col justify-evenly items-center ">
            <h2 className="font-bold text-3xl text-white dark:text-darkMode z-10 text-center">
              Resault of : {query}{" "}
            </h2>
            <div className="w-[80%]  md:w-[50%] relative">
              <input
                type="text"
                className="search w-full h-fit p-[15px] text-xs dark:text-white rounded-[50px] focus:outline-none dark:bg-darkMode"
                placeholder="Search Here ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <button
                className="search-button absolute right-1 top-[3.75px] text-center text-xs font-bold dark:text-darkMode tracking-widest bg-main-yellow border-none rounded-[50px] px-3 md:px-4 py-3"
                onClick={handleSearch}
              >
                Search
              </button>

              <button
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
              ) : null}
            </div>
          </div>
        </div>

        {/* Search Bar  End */}

        {/* Display Products Start */}
        <div className="flex flex-col justify-center items-center dark:bg-darkMode -mt-5">
          <div className="container mt-[100px] dark:bg-darkMode ">
            <ul className="list listItem grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3 mb-[20px] justify-center">
              {currentProducts.map((product) => (
                <li className="listItem" key={product.id}>
                  <div className="border-[1.5px] border-border-gray dark:bg-darkMode-product rounded-[10px] w-[300px] h-[250px] relative">
                    <div className="flex justify-center items-center mt-10">
                      <img src={product.img} alt="" className="h-[100px]" />
                    </div>
                    <div className="border-t-[1.5px] border-border-gray bg-gallery-blue dark:bg-gallery-blue-dark rounded-b-[10px] absolute bottom-0 w-full h-[70px]">
                      <p className="font-semibold text-xs m-2">
                        {product.name}
                      </p>
                      <div className="flex items-center justify-between mt-[20px] mx-2">
                        <div className="flex justify-center items-center">
                          <div className="size-[20px]">
                            <img
                              src={product.companyLogoimg}
                              alt=""
                              className="size-full"
                            />
                          </div>
                          <p className="text-sm ml-2">
                            {product.companyLogoname}
                          </p>
                        </div>
                        <div className="size-13">
                          <Rating />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Display Products End */}

          {/* pagination Satrt */}
          <div className="w-full flex justify-center items-center  mt-5 dark:bg-darkMode">
            <ReactPaginate
              pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={
                " active bg-gallery-blue opacity-100 dark:text-darkMode px- py-1.5 border rounded-[10px]"
              }
              pageClassName={"inline-block m-2"}
              breakClassName={"inline-block m-2"}
              previousClassName={"inline-block m-2 hidden"}
              nextClassName={"inline-block m-2 hidden"}
              pageLinkClassName={
                "px-4 py-2 border-[3px]  border-gallery-blue opacity-100 rounded-[10px] hover:bg-gallery-blue dark:text-white "
              }
              style={{ backgroundColor: "rgba(3, 102, 214, 0.9)" }}
            />
          </div>
          {/* pagination End */}

          {/* if i reach this stop using ctrl +Z */}

          {/* Displaying Footer */}
          <div className=" w-full h-[50vh] bottom-[0vh] ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
