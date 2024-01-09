import React from "react";

const TeamPage = (props) => {
  return (
    <div className="bg-gray-300" id="teamPage">
      <div className="w-[960px] m-auto pb-10">
        <p className="text-3xl font-bold py-10">Our Team</p>
        <div className="flex justify-center flex-col gap-10">
          <div className="flex justify-around">
            <div className="bg-employee1 bg-cover bg-center rounded-full w-[150px] h-[150px]"></div>
            <div className="w-2/3">
              <p className="my-3 font-bold">Name Surname [position]</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci voluptatibus animi? Vel provident quibusdam quis
                placeat, rerum, reprehenderit recusandae aut obcaecati
                repellendus eligendi consequuntur fugit blanditiis maxime error
                aspernatur.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-around">
            <div className="bg-employee2 bg-cover bg-center rounded-full w-[150px] h-[150px]"></div>
            <div className="w-2/3">
              <p className="my-3 font-bold">Name Surname [position]</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci voluptatibus animi? Vel provident quibusdam quis
                placeat, rerum, reprehenderit recusandae aut obcaecati
                repellendus eligendi consequuntur fugit blanditiis maxime error
                aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
