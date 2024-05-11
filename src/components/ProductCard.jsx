import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div
                  key={props.id}
                  // drop-shadow-[0_0_5px_rgba(0,0,0,0.6)]
                  className=" border-[1px] border-border-gray dark:bg-darkMode-product rounded-[10px]  h-[250px] relative  "
                >
                  {/* <Link to="/Post">  */}
                  <Link to={`/Post/${props.id}`}>
                    <div className="  flex justify-center items-center mt-10">
                      <img src={props.img} alt="" className="h-[100px]" />
                    </div>
                    <div className=" border-t-[1px] border-border-gray bg-gallery-blue dark:bg-gallery-blue-dark rounded-b-[10px] absolute bottom-0 w-full h-[70px]">
                      <p className="font-semibold text-xs m-2">{props.name}</p>
                      <div className="flex items-center justify-between mt-[20px] mx-2">
                        <div className="flex justify-center items-center ">
                          <div className="size-[20px]">
                            <img
                              src={props.companyLogoimg}
                              alt=""
                              className="size-full"
                            />
                          </div>
                          <p className="text-sm ml-2">{props.companyLogoname}</p>
                        </div>
                        <div className="size-13">
                          <Rating />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
  )
}

export default ProductCard