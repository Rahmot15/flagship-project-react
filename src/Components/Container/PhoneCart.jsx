import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const PhoneCart = ({ data, deletable,handleDelete }) => {
  const { name, description, image,id } = data;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600  text-white" >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                Vew Details
              </span>
            </button>
          </Link>
        </div>

      </div>
      {deletable && <button onClick={() => handleDelete(id)} className="absolute -top-4 -right-2 btn rounded-full px-3 py-5"> <MdDelete size={20}/> </button>}
    </div>
  );
};

export default PhoneCart;
