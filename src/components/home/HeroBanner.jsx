import React from "react";
// MUI Icons
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import YouTube from "react-youtube";

const HeroBanner = () => {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 0,
    },
  };

  return (
    <section className="mt-5">
      {/* carousel */}
      <div className="h-[500px]  bg-gray-200 w-[80%] mx-auto relative">
        <div className=" flex justify-center items-center w-[50px] h-full absolute right-0">
          <div className=" w-[50px]  h-[50px] flex justify-center items-center bg-white  opacity-50 hover:opacity-100  group cursor-pointer">
            <ArrowForwardIosRoundedIcon className="text-gray-800 group-hover:text-[#ffae03]" />
          </div>
        </div>

        <div className=" flex justify-center items-center w-[50px] h-full absolute left-0">
          <div className=" w-[50px]  h-[50px] flex justify-center items-center bg-white  opacity-50 hover:opacity-100  group cursor-pointer">
            <ArrowForwardIosRoundedIcon className="text-gray-800 group-hover:text-[#ffae03] rotate-180" />
          </div>
        </div>

        <YouTube
          videoId={"4dTzP4dIuik"}
          //   id={string}
          className=""
          opts={opts}
          //   iframeClassName={string}
          //   style={object}
          //   title={string}
          //   loading={string}

          //   onReady={(event) => {
          //     event.target.playVideo();
          //   }}
          //   onPlay={func}
          //   onPause={func}
          //   onEnd={func}
          //   onError={func}
          //   onStateChange={func}
          //   onPlaybackRateChange={func}
          //   onPlaybackQualityChange={func}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
