import React, { useEffect, useState } from "react";

const BootomHeader = () => {
  // Local variables
  const [hoveredSubMenuItem, setHoveredSubMenuItem] = useState();

  //   test variable status
  useEffect(() => {
    console.log("hoveredSubMenuItem: ", hoveredSubMenuItem);
  }, [hoveredSubMenuItem]);

  return (
    <nav className="sticky top-0 py-2 z-[9999] bg-white">
      {/* botoom header content container */}
      <div className="bg-gray-100 w-[90%] mx-auto  rounded-full">
        <ul className=" flex justify-around items-center gap-5 w-[80%] mx-auto text-sm text-gray-600">
          {/* Home/About */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Home/About
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden ">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Mission/Vision
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Associate Mutt
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Vanamamalai
                </li>
              </ul>
            </div>
          </li>

          {/* Jeeyars */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Jeeyars
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden ">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Biography
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Lectures
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Books & Teaching
                </li>
              </ul>
            </div>
          </li>

          {/* Mutt/Temples */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 px-4 group-hover:bg-[#ffae03] group-hover:text-white">
              Mutt/Temples
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Live Telecast / Aarathi
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Mutt Schedule
                </li>
              </ul>
            </div>
          </li>

          {/* Festivals */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Festivals
            </span>
            {/* <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 hover:bg-[#ffae03] hover:text-white">
                  Events Page
                </li>
              </ul>
            </div> */}
          </li>

          {/* Activities */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Activities
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000]  -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md ">
                <li
                  className="cursor-pointer  w-full   relative   "
                  onMouseEnter={() => setHoveredSubMenuItem("VidyaPeetam")}
                  onMouseLeave={() => setHoveredSubMenuItem("")}
                >
                  <div className=" p-2 px-4 py-4 hover:bg-[#ffae03] hover:text-white w-full rounded-t-md">
                    Vidya Peetam
                  </div>
                  <div
                    className={`absolute left-[100%] top-0  w-[180px] ${
                      hoveredSubMenuItem === "VidyaPeetam" ? "block" : "hidden"
                    } `}
                  >
                    <div className="cursor-pointer ml-2 hover:bg-[#ffae03] hover:text-white p-4 bg-gray-100 shadow-xl rounded-md ">
                      Vidya Peetam tour
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Spread dharma / Protect dharma
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Mutt/Temple Tour
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white rounded-b-md">
                  Projects Events
                </li>
              </ul>
            </div>
          </li>

          {/* Gallery */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Gallery
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Daily darshan / Aarthi
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Images/Videos
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Diginitory visitors
                </li>
              </ul>
            </div>
          </li>

          {/* Lectures */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Lectures
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Sri Ramanujan Teaching
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Daily Lectures
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Our speakers
                </li>
              </ul>
            </div>
          </li>

          {/* Downloads */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Downloads
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Wallpaper
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  E-calendar
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Quotation
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  E-magazine
                </li>
              </ul>
            </div>
          </li>

          {/* Utilities */}
          <li className="relative  py-2 group">
            <span className=" cursor-pointer p-2 group-hover:bg-[#ffae03] group-hover:text-white">
              Utilities
            </span>
            <div
              className={`absolute  transition w-[150px] z-[5000] -left-2 top-[100%] hidden group-hover:block shadow-2xl rounded-md `}
            >
              <ul className="w-full  space-y-3 bg-gray-100 mt-2 rounded-md overflow-hidden">
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Office Stationery
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Desktop Calendar
                </li>
                <li className="cursor-pointer p-2 px-4 hover:bg-[#ffae03] hover:text-white">
                  Pooja Essential
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BootomHeader;
