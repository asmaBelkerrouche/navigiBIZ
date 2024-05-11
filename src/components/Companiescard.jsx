import React from 'react'
import Rating from './Rating'

const Companiescard = (props) => {
  return (
    <div
                  key={props.id}
                  className=" border-[1px]  border-border-gray bg-white dark:bg-darkMode-product rounded-[10px]  h-[250px]  relative "
                >
                  <div className=" main flex justify-center items-center mt-20">
                    <img src={props.companyimg} alt="" className="h-[50px]" />
                  </div>
                  <div className=" border-t-[1px] border-border-gray bg-gallery-blue dark:bg-gallery-blue-dark rounded-b-[10px] absolute bottom-0 w-full h-[70px] flex flex-col justify-center items-center">
                    <p className="font-semibold mb-2">{props.companyname}</p>

                    <div className="size-13">
                      <Rating />
                    </div>
                  </div>
                </div>
  )
}

export default Companiescard