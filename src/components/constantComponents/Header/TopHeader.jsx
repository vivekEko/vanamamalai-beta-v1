import React, { useEffect, useState } from "react";
// MUI ICONS
import TranslateIcon from "@mui/icons-material/Translate";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Images
import Banner from "../../../assets/ConstantOrGlobal/BannerVM.png";

const TopHeader = () => {
  // local variables
  const [iconHighter, setIconHighlighter] = useState(false);
  const [activeIcon, setActiveIcon] = useState();

  return (
    <div className="bg-gray-50">
      {/* top header content container */}
      <div className="flex justify-between items-center py-3 ">
        {/* live darshan CTA container */}
        <div className="flex-1 pl-[5%]">
          {/* live darshan CTA */}
          <div className="bg-gradient-to-t from-[#f76c66] to-[#ffb349] text-white text-center rounded-md p-1  active:scale-95 cursor-pointer transition w-[110px]">
            Live Darshan
          </div>
        </div>

        {/* vm image container*/}
        <div className="  flex-1  flex justify-center items-center">
          <img src={Banner} alt="banner" className="h-[50px]" />
        </div>

        {/* icon links container */}
        <div className="flex-1 pr-[5%] ">
          {/* icon links */}
          <ul className="flex justify-end gap-10 items-center  w-full">
            <li>
              <CalendarMonthIcon className="hover:text-[#f76c66] text-[#ffae03] transition cursor-pointer" />
            </li>
            <li>
              <MapIcon className="hover:text-[#f76c66] text-[#ffae03] transition cursor-pointer" />
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="transition cursor-pointer"
                fill={
                  iconHighter && activeIcon === "youtube"
                    ? "#f76c66"
                    : "	#ffae03"
                }
                onMouseEnter={() => {
                  setActiveIcon("youtube");
                  setIconHighlighter(true);
                }}
                onMouseLeave={() => {
                  setActiveIcon("");
                  setIconHighlighter(false);
                }}
              >
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="transition cursor-pointer"
                fill={
                  iconHighter && activeIcon === "instagram"
                    ? "#f76c66"
                    : "	#ffae03"
                }
                onMouseEnter={() => {
                  setActiveIcon("instagram");
                  setIconHighlighter(true);
                }}
                onMouseLeave={() => {
                  setActiveIcon("");
                  setIconHighlighter(false);
                }}
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </li>
            <li>
              <TranslateIcon className="hover:text-[#f76c66] text-[#ffae03] transition cursor-pointer" />
            </li>
            <li>
              <SearchIcon className="hover:text-[#f76c66] text-[#ffae03] transition cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
