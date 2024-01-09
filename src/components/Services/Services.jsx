import offers from "../../data/offers";
import SingleOffer from "./SingleOffer";
import React from "react";

const Services = (props) => {
  return (
    <div className="bg-gray-600 h-[90vh]" id="services">
      <p className="text-3xl font-bold p-10 text-white">What do we do?</p>
      <div className="grid grid-rows-2 grid-cols-3 gap-10 justify-items-center w-[960px] m-auto mt-5">
        {offers.map((offer) => {
          return <SingleOffer offer={offer} key={offer.name}></SingleOffer>;
        })}
      </div>
    </div>
  );
};

export default Services;
