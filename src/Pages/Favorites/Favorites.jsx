import React, { useEffect, useState } from "react";
import PhoneCart from "../../Components/Container/PhoneCart";
import { getFavorites, removeFavorite } from "../../utils";
import EmptyState from "../../Components/Ui/EmptyState";

const Favorites = () => {
  const [displayPhone, setDisplayPhone] = useState([]);
  useEffect(() => {
    const savedPhones = getFavorites();
    setDisplayPhone(savedPhones);
  }, []);

  const handleDelete = id => {
    removeFavorite(id)
    setDisplayPhone(getFavorites())
  }

  if(displayPhone.length <1) return <EmptyState></EmptyState>
  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="mb-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
        {displayPhone.map((data) => (
          <PhoneCart key={data.id} data={data} deletable={true} handleDelete={handleDelete}></PhoneCart>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
