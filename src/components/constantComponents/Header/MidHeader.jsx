import React from "react";
import header1 from "../../../assets/LandingPage/Header1.png";
import header2 from "../../../assets/LandingPage/Header2.png";

const MidHeader = () => {
  return (
    <div>
      {/* mid header content container */}
      <div className=" h-[100px] flex justify-between items-center w-[90%] mx-auto">
        {/* logo */}
        <div className="flex-1 ">
          <div className=" w-[80px] h-[80px] bg-slate-200 flex justify-center items-center ">
            {/* TODO: VM LOGO */}
            LOGO
          </div>
        </div>

        <div className=" flex-1">
          <img src={header2} alt="header2" className="w-[200px] mx-auto" />
          <img src={header1} alt="header1" className="" />
        </div>

        {/* Donate CTA */}
        <div className="flex-1">
          <div className="ml-auto bg-gradient-to-t from-[#f76c66] to-[#ffb349] text-white text-center rounded-md p-3  active:scale-95 cursor-pointer transition w-[200px] hover:scale-105">
            Donate Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
