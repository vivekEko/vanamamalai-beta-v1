import React from "react";
// Images
import upcomingEvent1 from "../../assets/LandingPage/1stCard.jpg";

const Donate = () => {
  return (
    <section className="pt-10  bg-gray-100">
      {/* events header */}
      <div className="flex justify-between items-center  w-[80%] mx-auto gap-5">
        <div className="uppercase w-[25%] max-w-[200px] text-lg font-semibold">
          Donate
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
        <div className="   hover:bg-[#f76c66] bg-[#ffae03] uppercase text-white flex justify-center items-center w-[150px] p-1 cursor-pointer">
          View More
        </div>
      </div>

      {/* events boody */}
      <div className="  w-[80%] mx-auto mt-5 grid grid-cols-4 gap-10">
        {/* 1ST CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={upcomingEvent1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Festival Sevas
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              vel eaque quaerat nam vitae esse quia aliquid voluptatibus...
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
              src={upcomingEvent1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Srivigraha Nitya Seva
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              vel eaque quaerat nam vitae esse quia aliquid voluptatibus...
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
              src={upcomingEvent1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Annadana Seva
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              vel eaque quaerat nam vitae esse quia aliquid voluptatibus...
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
              src={upcomingEvent1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[40px]  ">
              Festival Sevas
            </h1>
            <p className="text-sm h-[100px]  leading-loose text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              vel eaque quaerat nam vitae esse quia aliquid voluptatibus...
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
