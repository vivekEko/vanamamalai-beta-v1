import React, { useState } from "react";
import footerImage from "../../assets/LandingPage/footer_image.jpg";

const Footer = () => {
  // local variable
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  return (
    <footer className="h-[500px] w-full bg-[#202020] ">
      <div className=" w-[90%]  h-full mx-auto  grid grid-cols-4 gap-2 py-10">
        {/* Founder */}
        <div className="w-full h-full ">
          <h1 className="uppercase font-semibold mb-2 text-white text-xl">
            Sri Ramanujacharya
          </h1>
          <img
            src={footerImage}
            alt="Ramanujacharya"
            className="w-[230px] mb-5"
          />
          <p className="text-gray-300 text-sm w-[90%]">
            "What an individual pursues as a desirable end depends upon what he
            conceives himself to be.“ — Sri Ramanujacharya
          </p>
        </div>

        {/* contact us */}
        <div className="w-full h-full pt-20 ">
          <h1 className="uppercase font-semibold mb-2 text-white text-lg">
            Contact Us
          </h1>

          <div className="text-white text-sm w-[60%] ">
            <a
              href="https://goo.gl/maps/aiDcyeKR97m8ddkJA"
              target="_black"
              className="mb-5 block"
            >
              Sri Vanamamalai Mutt, Nanguneri, Tamil Nadu 627108
            </a>
            <a href="tel:+9104635250159" className="text-white block ">
              04635-250159 (Personal)
            </a>
            <a href="tel:+9104635250119 " className="text-white block mb-5">
              04635-250119 (Office)
            </a>

            <a
              href="mailto:varamangai2001@yahoo.com "
              className="text-white block"
            >
              varamangai2001@yahoo.com
            </a>
          </div>
        </div>

        {/* Subcribe */}
        <div className="w-full h-full pt-20 ">
          <h1 className="uppercase font-semibold mb-2 text-white text-lg">
            Subscribe
          </h1>

          <div className="text-white text-sm w-[60%] ">
            <form>
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                name="name"
                className="outline-none border-none h-[30px] mb-5 text-black px-2"
              />

              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-300"
              >
                Email
              </label>
              <input
                type="mail"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                name="email"
                className="outline-none border-none h-[30px] mb-5 text-black px-2"
              />

              <div
                onClick={() => {
                  setFormEmail("");
                  setFormName("");
                }}
                className="   hover:bg-[#ffae03] bg-gray-300 text-black uppercase hover:text-white flex justify-center items-center w-[100px] p-1 cursor-pointer text-sm"
              >
                Subscribe
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full h-full pt-20  ">
          <h1 className="uppercase font-semibold mb-2 text-white text-lg ">
            Quick Links
          </h1>

          <div className=" text-sm   justify-items-start grid  grid-cols-1  ">
            <div className="p-2 bg-gray-300 mb-5 w-[130px] text-center hover:bg-[#ffae03] hover:text-white cursor-pointer">
              Daily Darshan
            </div>
            <div className="p-2 bg-gray-300 mb-5 w-[130px] text-center hover:bg-[#ffae03] hover:text-white cursor-pointer">
              Temple schedule
            </div>
            <div className="p-2 bg-gray-300 mb-5 w-[130px] text-center hover:bg-[#ffae03] hover:text-white cursor-pointer">
              Upcoming events
            </div>
            <div className="p-2 bg-gray-300 mb-5 w-[130px] text-center hover:bg-[#ffae03] hover:text-white cursor-pointer">
              How to reach
            </div>
            <div className="p-2 bg-gray-300 mb-5 w-[130px] text-center hover:bg-[#ffae03] hover:text-white cursor-pointer">
              Donate now
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-gray-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
