import React from "react";

const TeamPage = React.forwardRef((props, ref) => {
  return (
    <div className="bg-gray-300 h-screen" ref={ref}>
      <h1 className="text-3xl font-bold p-10">Our Team</h1>
      <div className="flex justify-center w-4/5 m-auto flex-col gap-10 p-5">
        <div className="flex justify-around">
          <div className="bg-employee1 bg-cover bg-center rounded-full w-[150px] h-[150px]"></div>
          <div className="w-2/3">
            <h1 className="my-3 font-bold">Name Surname [position]</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              adipisci voluptatibus animi? Vel provident quibusdam quis placeat,
              rerum, reprehenderit recusandae aut obcaecati repellendus eligendi
              consequuntur fugit blanditiis maxime error aspernatur.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-around">
          <div className="bg-employee2 bg-cover bg-center rounded-full w-[150px] h-[150px]"></div>
          <div className="w-2/3">
            <h1 className="my-3 font-bold">Name Surname [position]</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              adipisci voluptatibus animi? Vel provident quibusdam quis placeat,
              rerum, reprehenderit recusandae aut obcaecati repellendus eligendi
              consequuntur fugit blanditiis maxime error aspernatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TeamPage;
