const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-600 h-[10vh]">
      <div>
        <h1 className="font-bold text-white p-5">my company</h1>
      </div>
      <div>
        <div className="flex gap-5  text-white p-5">
          <h1>about us</h1>
          <h1>offer</h1>
          <h1>contact</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
