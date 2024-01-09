import offers from "../../data/offers";
import SingleOffer from "./SingleOffer";
import React from "react";

const Services = (props) => {
  return (
    <div className="bg-gray-600" id="services">
      <div className="w-[960px] m-auto">
        <p className="text-3xl font-bold py-10 text-white">What do we do?</p>
        <div className="grid grid-rows-2 grid-cols-3 gap-10 justify-items-center mt-5 pb-10">
          {offers.map((offer) => {
            return <SingleOffer offer={offer} key={offer.name}></SingleOffer>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
