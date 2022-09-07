import React, { useState } from "react";
// MUI Icons
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import YouTube from "react-youtube";
// Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsiveObject = {
  0: {
    items: 3,
  },
};

const opts = {
  height: "200",
  width: "100%",
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
    showinfo: 0,
    mute: 1,
    loop: 0,
  },
};

const items = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center items-center w-full  "
  >
    <YouTube videoId={"7IpwB4_W7Jw"} className="w-full mx-2" opts={opts} />
  </div>,

  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-full "
  >
    <YouTube videoId={"s3a6knnAzQI"} className="w-full mx-2" opts={opts} />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-full "
  >
    <YouTube videoId={"2Qa4iZtq9gg"} className="w-full mx-2" opts={opts} />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="flex justify-center items-center w-full "
  >
    <YouTube videoId={"D_bHVNd13zs"} className="w-full mx-2" opts={opts} />
  </div>,
];

const SmallCarousel = () => {
  // local variables
  const [selevctedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="mt-5">
      {/* carousel */}
      <div className="h-[200px]  w-[90%] mx-auto relative">
        <div className="max-w-[3000px]  mx-auto relative">
          <AliceCarousel
            mouseTracking
            autoPlay={false}
            autoPlayInterval={2000}
            infinite={true}
            // disableButtonsControls={false}
            disableDotsControls
            // renderDotsItem={(e) => {
            //   return (
            //     <div
            //       className={`h-[8px] w-[8px]
            //        ${
            //          e?.isActive === "__active" &&
            //          e?.activeIndex === selevctedIndex
            //            ? "bg-red-500"
            //            : "bg-gray-500"
            //        }
            //        rounded-full mx-2`}
            //     ></div>
            //   );
            // }}
            items={items}
            responsive={responsiveObject}
            renderPrevButton={() => {
              return (
                <div className=" absolute left-0 top-[35%] w-[50px]  h-[50px] flex justify-center items-center bg-white  opacity-50 hover:opacity-100  group cursor-pointer">
                  <ArrowForwardIosRoundedIcon className="text-gray-800 group-hover:text-[#ffae03] rotate-180" />
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div className="absolute right-0 top-[35%]  w-[50px]  h-[50px] flex justify-center items-center bg-white  opacity-50 hover:opacity-100  group cursor-pointer">
                  <ArrowForwardIosRoundedIcon className="text-gray-800 group-hover:text-[#ffae03]" />
                </div>
              );
            }}
            onSlideChanged={(e) => {
              setSelectedIndex(e.item);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SmallCarousel;
