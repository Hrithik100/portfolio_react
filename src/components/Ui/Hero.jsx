import React from "react";
import CountUp from "react-countup";
import ProImg from "../../assets/images/profile.png";
import resume from "../../assets/pdf/Hrithik_Hazarika_Resume.pdf";
import { useSelector } from "react-redux";

const Hero = () => {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  return (
    <section
      className={
        !isDarkMode
          ? `pt-0`
          : `pt-0 bg-gradient-to-r from-[#152642] via-[#1b3154] to-[#244271] ...`
      }
      id="about"
    >
      <div className="container pt-14">
        <div className="items-center justify-between md:flex sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className={
                !isDarkMode
                  ? `text-lg text-[#081e21] font-[600] text-[16px]`
                  : `text-lg text-[#fff] font-[600] text-[16px]`
              }
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className={
                !isDarkMode
                  ? `text-[#081e21] font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5`
                  : `text-[#fff] font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5`
              }
            >
              I'm Hrithik Hazarika
              <br />
              Web Developer
            </h1>
            <div
              className="flex items-center gap-6 mt-7"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
            >
              <a href={resume}>
                <button
                  className={
                    !isDarkMode
                      ? `bg-[#8873ef] text-white font-[500] flex items-center gap-2 hover:bg-[#193256] ease-in duration-300 py-2 px-4 rounded-[8px]`
                      : `bg-[#8873ef] text-white font-[500] flex items-center gap-2 hover:bg-[#7056f3] ease-in duration-300 py-2 px-4 rounded-[8px]`
                  }
                >
                  <i className="ri-mail-line"></i>Resume
                </button>
              </a>
              <a
                href="#portfolio"
                className={
                  !isDarkMode
                    ? `text-lg text-[#193256] font-[600] text-[16px] border-b border-solid border-[#193256] hover:text-[#1f3f6a]`
                    : `text-lg text-gray-400 font-[600] text-[16px] border-b border-solid border-gray-400 hover:text-[#fff]`
                }
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className={
                !isDarkMode
                  ? `text-lg flex gap-2 text-[#081e21] mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10`
                  : `text-lg flex gap-2 text-[#fff] mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10`
              }
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I am a front-end developer having passion for learning and creating fully
              functional and responsive web application. I have a good knowledge
              of Javascript, React, HTML, CSS. I too have a good understanding
              of server side frameworks like ExpressJS and database management like MongoDB.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span
                className={
                  !isDarkMode
                    ? `text-xl text-[#193256] text-[15px] font-[600]`
                    : `text-xl text-[#fff] text-[15px] font-[600]`
                }
              >
                Follow me:
              </span>
              <span>
                <a
                  href="https://github.com/Hrithik100"
                  className={
                    !isDarkMode
                      ? `text-[#193256] text-[30px] font-[600] hover:text-[#2d548c]`
                      : `text-gray-400 text-[30px] font-[600] hover:text-[#fff]`
                  }
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/hrithik-hazarika-81324145/"
                  className={
                    !isDarkMode
                      ? `text-[#193256] text-[30px] font-[600] hover:text-[#2d548c]`
                      : `text-gray-400 text-[30px] font-[600] hover:text-[#fff]`
                  }
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="mt-10 basis-1/3 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={ProImg} alt="" className="rounded-[3rem]" />
            </figure>
          </div>

          <div className="flex flex-wrap justify-between gap-3 mt-10 text-center md:basis-1/5 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2
                className={
                  !isDarkMode
                    ? `text-[#081e21] font-[700] text-[32px]`
                    : `text-[#fff] font-[700] text-[32px]`
                }
              >
                <CountUp start={0} end={4} duration={2} suffix="+" />
              </h2>
              <h4
                className={
                  !isDarkMode
                    ? `text-[#081e21] font-[600] text-[18px]`
                    : `text-[#fff] font-[600] text-[18px]`
                }
              >
                Months of experience
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
