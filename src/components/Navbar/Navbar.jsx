const Navbar = () => {
  return (
    <nav className=" bg-zinc-600">
      <div className="flex md:justify-between items-center md:w-[960px] m-auto">
        <div>
          <p className="font-bold text-white py-5">my company</p>
        </div>
        <div>
          <div className="flex gap-5  text-white py-5 collapse md:visible">
            <a href="#teamPage">About us</a>
            <a href="#services">Services</a>
            <a disabled className="cursor-not-allowed">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
