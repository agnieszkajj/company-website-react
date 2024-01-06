const HomePage = ({ handleClickServices }) => {
  return (
    <div className="bg-forest h-[90vh] bg-cover flex items-center">
      <div className="ml-5 flex flex-col gap-8 w-1/2">
        <h1 className="font-bold text-white text-3xl">
          Our company offers best quality products!
        </h1>
        <h2 className="font-bold text-white text-xl">
          Don't believe us - check!
        </h2>
        <button
          onClick={handleClickServices}
          className="text-white border-white border-2 self-start p-2 w-1/3 hover:bg-white hover:text-black font-bold transition duration-1000 ease-in-out"
        >
          Offer
        </button>
      </div>
    </div>
  );
};

export default HomePage;
