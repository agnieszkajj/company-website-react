import offers from "../../data/offers";
import SingleOffer from "./SingleOffer";
import React from "react";

const Services = (props) => {
  return (
    <div className="bg-gray-600" id="services">
      <div className="md:w-[960px] m-auto">
        <p className="text-3xl font-bold py-10 text-white text-center md:text-left">
          What do we do?
        </p>
        <div className="md:grid md:grid-rows-2 md:grid-cols-3 gap-10 md:justify-items-center mt-5 pb-10 flex flex-col items-center">
          {offers.map((offer) => {
            return <SingleOffer offer={offer} key={offer.name}></SingleOffer>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
