import React from "react";
// Images
import upcomingEvent1 from "../../assets/LandingPage/1stCard.jpg";

const UpcommingEvents = () => {
  return (
    <section className="pt-10  bg-gray-100">
      {/* events header */}
      <div className="flex justify-between items-center  w-[80%] mx-auto gap-5">
        <div className="uppercase w-[25%] max-w-[200px] text-lg font-semibold">
          Upcoming Events
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
          <div className=" w-full p-5 border-b flex flex-col justify-between ">
            <h1 className="mb-5 font-semibold text-lg  min-h-[60px]">
              Garuda Panchami – August 2, 2022
            </h1>
            <p className="text-sm h-[150px] leading-loose text-gray-600">
              Garuda Panchami is a festival celebrated to commemorate the birth
              of Garuda, an ardent devotee and the bird carrier of Lord Vishnu.
              The fifth day of the waxing moon in the month of...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-5">
            <div className="p-1 px-2 text-sm border border-gray-400 text-gray-500 group-hover:text-white group-hover:bg-[#ffae03] group-hover:border-[#ffae03] cursor-pointer group-hover:scale-125 active:scale-95 transition ">
              READ MORE
            </div>
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
          <div className=" w-full p-5 border-b flex flex-col justify-between ">
            <h1 className="mb-5 font-semibold text-lg  min-h-[60px]">
              Jhulan Utsava – August 8, 2022
            </h1>
            <p className="text-sm h-[150px] leading-loose text-gray-600">
              The Jhulan Festival is celebrated in the month of Shravana
              (August), from the eleventh day of the bright fortnight (Ekadashi)
              to the full-moon day (Purnima). This festival is celebrated to
              commemorate the childhood...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-5">
            <div className="p-1 px-2 text-sm border border-gray-400 text-gray-500 group-hover:text-white group-hover:bg-[#ffae03] group-hover:border-[#ffae03] cursor-pointer group-hover:scale-125 active:scale-95 transition ">
              READ MORE
            </div>
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
          <div className=" w-full p-5 border-b flex flex-col justify-between ">
            <h1 className="mb-5 font-semibold text-lg  min-h-[60px]">
              Balarama Purnima – August 12, 2022
            </h1>
            <p className="text-sm h-[150px] leading-loose text-gray-600">
              The auspicious appearance day of Lord Balarama, the elder brother
              of Lord Sri Krishna, is celebrated on the full-moon day of
              Shravana (August). Lord Balarama appeared as the son of Rohini and
              Vasudeva....
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-5">
            <div className="p-1 px-2 text-sm border border-gray-400 text-gray-500 group-hover:text-white group-hover:bg-[#ffae03] group-hover:border-[#ffae03] cursor-pointer group-hover:scale-125 active:scale-95 transition ">
              READ MORE
            </div>
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
          <div className=" w-full p-5 border-b flex flex-col justify-between ">
            <h1 className="mb-5 font-semibold text-lg  min-h-[60px]">
              Sri Krishna Janmashtami – August 18-19, 2022
            </h1>
            <p className="text-sm h-[150px] leading-loose text-gray-600">
              Sri Krishna Janmashtami is the most important festival of our
              temple. The entire world celebrates the divine appearance of Lord
              Sri Krishna. In our temple, the arrangements for the festival
              start well ahead. The...
            </p>
          </div>
          <div className="w-full flex   justify-center items-center py-5">
            <div className="p-1 px-2 text-sm border border-gray-400 text-gray-500 group-hover:text-white group-hover:bg-[#ffae03] group-hover:border-[#ffae03] cursor-pointer group-hover:scale-125 active:scale-95 transition ">
              READ MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcommingEvents;
