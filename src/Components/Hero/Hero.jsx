import React, { useState } from "react";
import BannerImage from "/banner.png";
import Button from "../Ui/Button";

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

          <Button type='submit' label='Search'/>
        </form>

      </div>
    </div>
  );
};

export default Hero;
