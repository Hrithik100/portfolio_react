import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/features/themeSlice";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.darkMode.value);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <header
      ref={headerRef}
      className={
        !isDarkMode
          ? `w-full h-[80px] leading-[80px] flex items-center bg-slate-100 drop-shadow-md`
          : `w-full h-[80px] leading-[80px] flex items-center bg-[#12141e] drop-shadow-md`
      }
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-[#8873ef] text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              H
            </span>
            <div className="leading-[20px]">
              <h2
                className={
                  !isDarkMode
                    ? `text-2xl text-[#193256] font-[700]`
                    : `text-2xl text-[#fff] font-[700]`
                }
              >
                Hrithik
              </h2>
              <p
                className={
                  !isDarkMode
                    ? `text-lg text-[#193256] text-[14px] font-[500]`
                    : `text-lg text-gray-400 text-[14px] font-[500]`
                }
              >
                Portfolio
              </p>
            </div>
          </div>
          <div
            className={!isDarkMode ? `menu` : `menuDark`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <ul className="flex items-center gap-[20px]">
              <li>
                <a
                  onClick={handleClick}
                  className={
                    !isDarkMode
                      ? `text-lg text-[#193256] font-[600] hover:text-[#2d548c]`
                      : `text-lg text-gray-400 font-[600] hover:text-[#fff]`
                  }
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={
                    !isDarkMode
                      ? `text-lg text-[#193256] font-[600] hover:text-[#2d548c]`
                      : `text-lg text-gray-400 font-[600] hover:text-[#fff]`
                  }
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={
                    !isDarkMode
                      ? `text-lg text-[#193256] font-[600] hover:text-[#2d548c]`
                      : `text-lg text-gray-400 font-[600] hover:text-[#fff]`
                  }
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={
                    !isDarkMode
                      ? `text-lg text-[#193256] font-[600] hover:text-[#2d548c]`
                      : `text-lg text-gray-400 font-[600] hover:text-[#fff]`
                  }
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div onClick={() => dispatch(toggleDarkMode())}>
            {!isDarkMode ? (
              <i className="ri-moon-fill text-xl text-[#193256] cursor-pointer hover:text-[#2d548c]"></i>
            ) : (
              <i className="ri-sun-fill text-xl text-gray-400 cursor-pointer hover:text-[#fff]"></i>
            )}
          </div>
          <div className="flex items-center gap-4 ">
            <span
              onClick={toggleMenu}
              className={
                !isDarkMode
                  ? `text-2xl text-[#193256] md:hidden cursor-pointer`
                  : `text-2xl text-gray-400 md:hidden cursor-pointer`
              }
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
