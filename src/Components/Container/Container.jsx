import React, { useEffect, useState } from "react";
import PhoneCart from "./PhoneCart";

const Container = ({ PhoneData }) => {
  const [displayPhone, setDisplayPhone] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhone(PhoneData);
    } else {
      setDisplayPhone(PhoneData.slice(0, 6));
    }
  }, [PhoneData, showAll]);

  return (
    <div
      onClick={() => {
        setShowAll((pre) => !pre);
        if (showAll) window.scrollTo(0, 400);
      }}
      className="w-11/12 mx-auto my-12"
    >
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
        {displayPhone.map((data) => (
          <PhoneCart key={data.id} data={data}></PhoneCart>
        ))}
      </div>
      <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-indigo-900 rounded-lg group">
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">{showAll ? "Show Less" : "Show All"}</span>
      </button>
    </div>
  );
};

export default Container;
