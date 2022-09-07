import React from "react";
// Images
import activity1 from "../../assets/LandingPage/activity1.png";
import activity2 from "../../assets/LandingPage/activity2.png";
import activity3 from "../../assets/LandingPage/activity3.png";
import activity4 from "../../assets/LandingPage/activity4.png";

const Activities = () => {
  return (
    <section className="pt-10  bg-gray-100">
      {/* events header */}
      <div className="flex justify-between items-center  w-[90%] mx-auto gap-5">
        <div className="uppercase w-fit max-w-[200px] text-lg font-semibold">
          Activities
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
              src={activity1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[30px]  ">
              Teachings
            </h1>
            <p className="text-sm h-[60px]  leading-loose text-gray-600">
              Teachings bound to spark your consciousness...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Listen
          </div>
        </div>

        {/* 2ND CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={activity2}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[30px]  ">
              Temple tours
            </h1>
            <p className="text-sm h-[60px]  leading-loose text-gray-600">
              A unique religious tourism tour is a...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Listen
          </div>
        </div>

        {/* 3RD CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={activity3}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[30px]  ">
              Know our Jeeyars
            </h1>
            <p className="text-sm h-[60px]  leading-loose text-gray-600">
              Meet our Jeeyars between...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Listen
          </div>
        </div>

        {/* 4TH CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={activity4}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[30px]  ">
              Lectures and seminars
            </h1>
            <p className="text-sm h-[60px]  leading-loose text-gray-600">
              Listen to divine discussions held every day; starting from ...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-4 text-sm group-hover:bg-[#f76c66] group-hover:text-white font-semibold bg-[#ffae03] transition uppercase">
            Listen
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
