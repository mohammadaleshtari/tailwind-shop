import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="mx-auto flex justify-between items-center bg-[#282828] w-full z-50 fixed px-[30px] py-[15px]">
        <div>
          <img src="/picture/golestan-logo.png" alt="tea" className="w-28" />
        </div>
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            {["Home", "About Us", "Brands", "Products", "Contact Us", "FA"].map(
              (item, index) => (
                <li
                  key={index}
                  className={
                    index !== 5 ? "border-r-[1px] border-[#9f9f9f]" : ""
                  }
                >
                  <a
                    href="#"
                    className="text-[#9f9f9f] hover:text-white transition duration-300 text-lg pr-6"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#282828] absolute w-full top-16 left-0 p-4">
          <ul className="flex flex-col space-y-4">
            {["Home", "About Us", "Brands", "Products", "Contact Us", "FA"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#9f9f9f] hover:text-white transition duration-300 text-lg block text-center"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <div className="text-left bg-gradient-to-t from-slate-300">
        <div className="desktop:w-[100%] mobile:w-[50%] desktop:flex  desktop:pt-[150px] mobile:pt-[10px] pb-[70px]  desktop:ml-[200px] mobile:m-auto">
          <div className="mobile:w-[100%] desktop:w-[50%] mobile:text-center desktop:text-left mt-[100px]">
            <h2 className="text-[#fd4444] font-roboto mobile:text-[22px] font-normal mb-[20px] desktop:text-[31px]">
              Golestan Tea
            </h2>

            <h3 className="text-[#898989] mobile:text-[16px] font-light leading-[34px] desktop:text-[20px]">
              Sourced from the best tea estates on the banks of Brahmaputra
              River in Assam and Darjeeling, India, Golestan teas possess the
              smell and taste of traditional Indian teas.
            </h3>

            <button className="mt-[20px] font-Roboto text-[14px] font-light leading-[14px] text-[#7c7d7e] bg-[#ffffff] border-solid border-[#c8c8c8] rounded-[8px] w-[116px] h-[40px] hover:text-[#ffffff] hover:bg-[#FF0000] transition duration-300">
              Read more
            </button>
          </div>

          <div className="mobile:w-[80%] desktop:w-[60%] flex mobile:justify-center desktop:mt-[5px] mobile:mt-[50px] mr-[250px]">
            <img src="/picture/tea-pic1-1.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
