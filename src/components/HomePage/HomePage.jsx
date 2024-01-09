const HomePage = () => {
  return (
    <div className="bg-forest h-[90vh] bg-cover flex items-center justify-center">
      <div className="flex flex-col gap-8 w-[960px]">
        <p className="font-bold text-white text-3xl">
          Our company offers the highest quality products!
        </p>
        <p className="font-bold text-white text-xl">
          Don't just take our word for it, verify it yourself.
        </p>
        <a
          href="#services"
          className="text-white hover:bg-white hover:text-black border-white border-2 self-start p-2 w-1/4  font-bold transition duration-1000 ease-in-out"
        >
          Our offer
        </a>
      </div>
    </div>
  );
};

export default HomePage;
