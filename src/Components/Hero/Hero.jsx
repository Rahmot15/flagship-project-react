import React, { useState } from "react";
import BannerImage from "/banner.png";

const Hero = ({ handleSearch }) => {

  const [searchText, steSearchText] = useState('')

  

  return (
    <div className="my-4 w-11/12 mx-auto">
      <img src={BannerImage} alt="" className="lg:w-1/2 w-2/3  mx-auto" />

      <div className="text-center">
        <h1 className="font-thin xl:text-8xl lg:text-7xl md:text-6xl text-3xl ">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-400 lg:text-2xl py-5">
          Best place to browse, search, view details and purchase of top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>

        <form onSubmit={(e) => {
          handleSearch(e, searchText)
          steSearchText('')
        }} className="flex md:flex-row flex-col gap-1 items-center justify-center">
          <input
            value={searchText}
            onChange={e => steSearchText(e.target.value)}
            type="text"
            className="w-2/3 h-11 mb-2 md:mb-0 text-black pl-4 bg-white rounded cursor-pointer focus:shadow"
            placeholder="Search Phones Name"
          />

          <button type="submit" className=" relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-cyan-800"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-600 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default Hero;
