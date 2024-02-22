import React from "react";
import {Link} from 'react-scroll';
import { useNavigate } from "react-router-dom";

const NavbarSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex overflow-hidden w-full justify-center z-10">
      <div className="fixed flex justify-items-center justify-center bg-[#EEEEEE] my-5 grow mx-24 p-2 rounded-full bottom-0 shadow-inner shadow-black sm:flex-none z-10">
        <button className=" bg-black rounded-full mx-2 shadow-xl shadow-black" >
          <Link to="Hero-Section" smooth={true} duration={500} >
            <img
              src="src/assets/img/Home Page.png"
              alt=""
              srcSet=""
              className="p-3 md:w-14"
            />
          </Link>
        </button>
        <button className=" bg-black rounded-full mx-2 shadow-xl shadow-black">
          <Link to="about-section" smooth={true} duration={500}>
            <img
              src="src/assets/img/Info.png"
              alt=""
              srcSet=""
              className="p-3 md:w-14"
            />
          </Link>
        </button>
        <button className=" bg-black rounded-full mx-2 shadow-xl shadow-black">
          <Link to="team-section" smooth={true} duration={500}>
            <img
              src="src/assets/img/Management.png"
              alt=""
              srcSet=""
              className="p-3 md:w-14"
            />
          </Link>
        </button>
        <button className=" bg-black rounded-full mx-2 shadow-xl shadow-black" onClick={() => navigate("/galery")}>
          <a href="/galery">
            <img
              src="src/assets/img/Image.png"
              alt=""
              srcSet=""
              className="p-3 md:w-14"
            />
          </a>
        </button>
        <button className=" bg-black rounded-full mx-2 shadow-xl shadow-black">
          <Link to="contact-section" smooth={true} duration={500}>
            <img
              src="src/assets/img/Call male.png"
              alt=""
              srcSet=""
              className="p-3 md:w-14"
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavbarSection;
