import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between bg-zinc-600 h-[10vh] items-center p-5">
      <div>
        <h1 className="font-bold text-white">
          Company name - all rights reserved, 2023
        </h1>
      </div>
      <div>
        <div className="flex gap-5  text-white">
          <FaInstagram className="text-3xl" />
          <FaFacebookSquare className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
