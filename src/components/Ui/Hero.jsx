import React from "react";
import CountUp from "react-countup";
import ProImg from "../../assets/images/profile.png";
import resume from "../../assets/pdf/Hrithik_Hazarika_Resume.pdf"

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="items-center justify-between md:flex sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-lg text-[#081e21] font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-[#081e21] font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
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
                <button className="bg-[#8873ef] text-white font-[500] flex items-center gap-2 hover:bg-[#193256] ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-[#193256] font-[600] text-[16px] border-b border-solid border-[#193256]"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-[#081e21] mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              provident eaque quasi ut explicabo in labore! Ducimus omnis ex
              nulla vitae in harum consequuntur nemo nam. Similique,
              consequuntur quod! Ducimus.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-[#193256] text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://github.com/Hrithik100"
                  className="text-[#193256] text-[15px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                   href="https://www.linkedin.com/in/hrithik-hazarika-81324145/"
                  className="text-[#193256] text-[15px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left end */}
          {/* hero img */}
          <div className="mt-10 basis-1/3 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={ProImg} alt="" className="rounded-[3rem]" />
            </figure>
          </div>
          {/* hero img end */}
          {/* hero content right */}
          <div className="flex flex-wrap justify-between gap-3 mt-10 text-center md:basis-1/5 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-[#081e21] font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-[#081e21] font-[600] text-[18px]">
                Months of experience
              </h4>
            </div>
          </div>
          {/* hero content right end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
