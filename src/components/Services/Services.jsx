import offers from "../../data/data";
import Offer from "./Offer";
import React from "react";

const Services = React.forwardRef((props, ref) => {
  return (
    <div className="bg-gray-600" ref={ref}>
      <h1 className="text-3xl font-bold p-5 ml-5 text-white">What do we do?</h1>
      <div className="grid grid-rows-2 grid-cols-3 gap-10 justify-items-center w-3/5 m-auto mt-5">
        {offers.map((offer) => {
          return <Offer offer={offer} key={offer.name}></Offer>;
        })}
      </div>
    </div>
  );
});

export default Services;
