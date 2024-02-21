import React from "react";
import { useRef, useState } from "react";

import "/src//App.css";

const HeroSection = () => {
  return (
    // <div className=" h-screen bg-[url('src/assets/img/background-image-1.png')] to-transparent bg-cover bg-top bg-no-repeat ">
    // </div>
    <div id="Hero-Section">
      <div className=" h-screen sm:grid grid-cols-3 bg-[url('/src/assets/img/background-image-1.png')] bg-cover my-14 sm:my-0">
        <div className="text-[#EEEEEE] sm:flex-col flex justify-center pt-16 sm:mx-auto">
          <button className="m-1">
            <a href="http://">
              <img
                src="src/assets/img/Instagram-Circle.png"
                alt=""
                className="w-16 py-2 px-3"
              />
            </a>
          </button>
          <button className="m-1">
            <a href="http://">
              <img
                src="src/assets/img/WhatsApp.png"
                alt=""
                className="w-16 py-2 px-3"
              />
            </a>
          </button>
          <button className="m-1">
            <a href="http://">
              <img
                src="src/assets/img/University.png"
                alt=""
                className="w-16 py-2 px-3"
              />
            </a>
          </button>
          <div className="sm:border-[#EEEEEE] sm:border-l-2 sm:h-1/4 sm:mx-auto " />
        </div>
        <div className="text-[#EEEEEE] sm:my-auto my-5">
          <img src="/src/assets/img/Momento-films.png" alt="" />
        </div>
        <div className="sm:flex-col flex justify-center mx-auto ">
          <div className="p-2">
            <button>
              <div className="h-5 w-5 bg-[#EEEEEE] rounded-full inline-block" />
            </button>
          </div>
          <div className="p-2">
            <button>
              <div className="h-5 w-5 bg-[#EEEEEE] rounded-full inline-block" />
            </button>
          </div>
          <div className="p-2">
            <button>
              <div className="h-5 w-5 bg-[#EEEEEE] rounded-full inline-block" />
            </button>
          </div>
          <div className="p-2">
            <button>
              <div className="h-5 w-5 bg-[#EEEEEE] rounded-full inline-block" />
            </button>
          </div>
          <div className="p-2">
            <button>
              <div className="h-5 w-5 bg-[#EEEEEE] rounded-full inline-block" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black from-10% sm:h-60 h-32 -mt-60" />
    </div>
  );
};

export default HeroSection;
