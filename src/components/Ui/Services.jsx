import React from "react";
import FrontImg from "../../assets/images/frontend.png";
import BackImg from "../../assets/images/backend.png";
import js from "../../assets/images/js.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import react from "../../assets/images/react.png";
import tailwind from "../../assets/images/tailwind.png";
import redux from "../../assets/images/redux.png";
import sass from "../../assets/images/sass.png";
import mui from "../../assets/images/mui.png";
import bootstrap from "../../assets/images/bootstrap.png";
import npm from "../../assets/images/npm.png";
import node from "../../assets/images/node.png";
import express from "../../assets/images/express.png";
import mongodb from "../../assets/images/mongodb.png";
import { useSelector } from "react-redux";

const Services = () => {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  return (
    <section
      className={
        !isDarkMode
          ? ``
          : `bg-gradient-to-r from-[#152642] via-[#1b3154] to-[#244271] ...`
      }
      id="services"
    >
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2
            className={
              !isDarkMode
                ? `text-[#081e21] font-[800] text-[2.4rem] mb-5`
                : `text-[#fff] font-[800] text-[2.4rem] mb-5`
            }
          >
            Technologies I've been working
          </h2>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-sm antialiased text-gray-700 text-semibold">
              <div className="hidden absolute w-1 h-full bg-indigo-300 sm:block left-1/2 transform -translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl text-center">
                          Frontend Development
                        </h3>
                        <div className="text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7 grid grid-cols-4 gap-4 items-center">
                          <img
                            src={js}
                            alt=""
                            className="h-11 w-11 rounded-sm"
                          />
                          <img src={html} alt="" className="h-11 w-11" />
                          <img src={css} alt="" className="h-14 w-14" />
                          <img src={react} alt="" className="h-12 w-12" />
                          <img src={tailwind} alt="" className="h-7 w-8" />
                          <img src={redux} alt="" className="h-11 w-11" />
                          <img src={sass} alt="" className="h-11 w-11" />
                          <img src={mui} alt="" className="h-11 w-11" />
                          <img src={bootstrap} alt="" className="h-11 w-11" />
                          <img src={npm} alt="" className="h-11 w-11" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={FrontImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="50"
                        className="bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl text-center">
                          Backend Development
                        </h3>
                        <div className="text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7 grid grid-cols-4 gap-4 items-center">
                          <img src={node} alt="" className="w-12 h-11" />
                          <img src={express} alt="" className="w-11 h-11" />
                          <img src={mongodb} alt="" className="w-13 h-11" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={BackImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
