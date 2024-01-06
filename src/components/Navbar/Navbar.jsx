const Navbar = ({ handleClickServices, handleClickAbout }) => {
  return (
    <nav className="flex justify-between bg-zinc-600 h-[10vh]">
      <div>
        <h1 className="font-bold text-white p-5">my company</h1>
      </div>
      <div>
        <div className="flex gap-5  text-white p-5">
          <button onClick={handleClickAbout}>About us</button>
          <button onClick={handleClickServices}>Services</button>
          <button disabled className="cursor-not-allowed">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
