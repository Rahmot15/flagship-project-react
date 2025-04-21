import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../Components/Ui/Button";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { detailsId } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(detailsId));
  const { brand, name, model, image, description,camera_info } = singlePhone;

  return (
    <div className="w-11/12 mx-auto space-y-3">
      <img className="mx-auto pt-12" src={image} alt="" />

      <div className="flex justify-between my-12">
        <h1 className="font-thin lg:text-7xl md:text-6xl text-3xl ">{name}</h1>
        <div className="flex gap-4 ">
          <Button label={<MdShoppingCart />} />
          <Button label={<MdBookmarkAdd />} />
        </div>
      </div>

      <p className="text-xl"><span className="text-2xl text-amber-500 mr-5">Brand :</span> {brand}</p>
      <p className="text-xl"><span className="text-2xl text-amber-500 mr-5">Model :</span> {model}</p>
      <p className="text-xl"><span className="text-2xl text-amber-500 mr-5">Description :</span> {description}</p>
      <p className="text-xl"><span className="text-2xl text-amber-500 mr-5">Camera_info :</span> {camera_info}</p>
    </div>
  );
};

export default PhoneDetails;
