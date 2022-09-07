import React from "react";
// Images
import gallery1 from "../../assets/LandingPage/gallery1.png";
import gallery2 from "../../assets/LandingPage/gallery2.png";
import gallery3 from "../../assets/LandingPage/gallery3.png";
import gallery4 from "../../assets/LandingPage/gallery4.png";

const Gallery = () => {
  return (
    <section className="py-10  bg-gray-100">
      {/* events header */}
      <div className="flex justify-between items-center  w-[90%] mx-auto gap-5">
        <div className="uppercase w-fit max-w-[200px] text-lg font-semibold">
          Gallery
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
              src={gallery1}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[50px]  ">
              Glimpse of Jeeyars
            </h1>
          </div>
        </div>

        {/* 2ND CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={gallery2}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[50px]  ">
              Dignitary visits
            </h1>
          </div>
        </div>

        {/* 3RD CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={gallery3}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[50px]  ">
              Deities of Vanamamalai
            </h1>
          </div>
        </div>

        {/* 4TH CARD */}
        <div className="w-full  border group bg-white">
          <div className=" w-full bg-gray-200 overflow-hidden">
            <img
              src={gallery4}
              alt="garuda panchami"
              className="w-full group-hover:scale-105 transition"
            />
          </div>
          <div className=" w-full p-4 border-b flex flex-col justify-between ">
            <h1 className="mb-2 font-semibold text-lg  min-h-[50px]  ">
              Seminars and activities
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
