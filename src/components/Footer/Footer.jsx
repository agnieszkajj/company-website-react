import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-700 ">
      <div className="flex md:justify-between items-center p-5 flex-col md:flex-row md:w-[960px] m-auto md:px-0">
        <div>
          <p className="font-bold text-white mb-3 md:mb-0">
            Company name - all rights reserved, 2023
          </p>
        </div>
        <div>
          <div className="flex gap-5  text-white">
            <FaInstagram className="text-3xl" />
            <FaFacebookSquare className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
