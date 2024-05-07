import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex item-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb:text-[2rem]">
              Want to know more?
            </h2>
            <a href="#contact">
              <button className="bg-[#8873ef] text-white font-[500] flex items-center gap-2 hover:bg-[#193256] ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i className="ri-mail-line"></i>Contect me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-[16px] text-gray-300 leading-7 mt-4 sm:mt-0">
              Feel free to connect with me. Happy coding
              <i className="ri-heart-fill"></i>
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[18px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px]bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/Hrithik100" target="_blank"
                  className="text-gray-300 font-[500] text-[25px]"
                >
                  {" "}
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px]bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/hrithik-hazarika" target="_blank"
                  className="text-gray-300 font-[500] text-[25px]"
                >
                  {" "}
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[10px] mt-10">
            <li>
              <a className="text-lg text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-lg text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-lg text-gray-400 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-lg text-gray-400 font-[600]" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  H
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-2xl text-gray-200 font-[500] text-[18px]">
                    Hrithik
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Portfolio
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[15px]">
                Copyright &copy; {year} by Hrithik - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
