import React from "react";
import FrontImg from "../../assets/images/frontend.png"
import BackImg from "../../assets/images/backend.png"

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-[#081e21] font-[800] text-[2.4rem] mb-5">
            What do I do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-[#081e21] font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            ipsa, expedita mollitia aliquid obcaecati similique incidunt sed
            nemo praesentium eius quidem laborum quibusdam consectetur iure ea!
            Molestias magni sed vel.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full px-2 py-3 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-sm antialiased text-gray-700 text-semibold">
              {/* verticle line */}
              <div className="hidden absolute w-1 h-full bg-indigo-300 sm:block left-1/2 transform -translate-x-1/2"></div>
              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-[#8873ef] cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim veniam excepturi molestiae illum voluptate.
                        </p>
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
              {/* right card */}
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
                        <h3 className="text-[#8873ef] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-[#193256] group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim veniam excepturi molestiae illum voluptate.
                        </p>
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
