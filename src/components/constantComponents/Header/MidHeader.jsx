import React from "react";

const MidHeader = () => {
  return (
    <div>
      {/* mid header content container */}
      <div className=" h-[100px] flex justify-between items-center w-[90%] mx-auto">
        {/* logo */}
        <div className=" w-[80px] h-[80px] bg-slate-200 flex justify-center items-center">
          {/* TODO: VM LOGO */}
          LOGO
        </div>

        {/* Donate CTA */}
        <div className="bg-gradient-to-t from-[#f76c66] to-[#ffb349] text-white text-center rounded-md p-3  active:scale-95 cursor-pointer transition w-[200px] hover:scale-105">
          Donate Now
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
