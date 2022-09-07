import React from "react";
// Images

import donate1 from "../../assets/LandingPage/donate1.png";
import donate2 from "../../assets/LandingPage/donate2.png";
import donate3 from "../../assets/LandingPage/donate3.png";
import donate4 from "../../assets/LandingPage/donate4.png";

const Donate = () => {
  return (
    <section className="pt-10  bg-gray-100">
      {/* events header */}
      <div className="flex justify-between items-center  w-[90%] mx-auto gap-5">
        <div className="uppercase w-fit max-w-[200px] text-lg font-semibold">
          Donate
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
        <div className="   hover:bg-[#f76c66] bg-[#ffae03] uppercase text-white flex justify-center items-center w-[150px] p-1 cursor-pointer">
          View More
        </div>
      </div>

      {/* events boody */}
      <div className="  w-[90%] mx-auto mt-5 grid grid-cols-4 gap-10">
        {/* 1ST CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={donate1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Vanamamalai Seva
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              An opportunity for you to contribute towards devine, daily worship
              and various other sevas which are...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Donate
          </div>
        </div>

        {/* 2ND CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={donate2}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Annadana Seva
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Donate towards free and tasty lunch prasadam served every day to
              hundreds of pilgrims visiting the...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Donate
          </div>
        </div>

        {/* 3RD CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={donate3}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Gurukul Seva
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              An opportunity for you to contribute towards shiksha, sanskaras
              and various other sections which are...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Donate
          </div>
        </div>

        {/* 4TH CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={donate4}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Festival Sevas
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Various festivals are celebrated at Vanamamalai, Nanguneri,
              throughout the year in commemoration of the divine appearance...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Donate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
