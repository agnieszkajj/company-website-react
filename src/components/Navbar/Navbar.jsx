const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-600 h-[10vh]">
      <div>
        <p className="font-bold text-white p-5">my company</p>
      </div>
      <div>
        <div className="flex gap-5  text-white p-5">
          <a href="#teamPage">About us</a>
          <a href="#services">Services</a>
          <a disabled className="cursor-not-allowed">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
