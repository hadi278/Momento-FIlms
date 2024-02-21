import React from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div id="about-section" className="h-fitt relative">
      <div>
        <h1 className="text-5xl text-[#EEEEEE] text-center uppercase my-5 mb-10">
          momento films
        </h1>
      </div>
      <div className="sm:grid grid-cols-2 gap-5">
        <div className="text-[#EEEEEE] flex justify-center px-10">
          <img
            src="src/assets/img/background-image-2.png"
            alt=""
            className="my-auto"
          />
        </div>
        <div className="text-[#EEEEEE]">
          <h1 className="text-5xl font-mono font-bold text-center">About</h1>
          <h5 className="text-3xl text-center">Momento Films</h5>
          <p className="pt-5 text-justify px-10 text-xl">
            In the ever-evolving world of visual storytelling, Momento Films
            emerged as a beacon of creativity and innovation. Established in
            2022, the production house was born out of a college assignment
            project, gradually transforming into a thriving entity that
            specializes in creating captivating videos. With the tagline
            "Captures the Moment," Momento Films has become synonymous with
            preserving and immortalizing precious moments through the lens.
          </p>
          <p className="pt-5 text-justify px-10 text-xl">
            The seeds of Momento Films were sown during a college assignment
            project in 2022. A group of passionate individuals with a shared
            love for storytelling through visuals came together to create
            something extraordinary. Little did they know that this
            collaboration would be the inception of a production house that
            would redefine the art of filmmaking.
          </p>
          <p className="pt-5 text-justify px-10 text-xl">
            The success of their college project sparked a collective passion
            for filmmaking, leading the team to formalize their collaboration
            and establish Momento Films. Initially, the focus was on honing
            their craft and exploring various types of videos, from short films,
            documentary to promotional content. The team's dedication and
            commitment to delivering high-quality work quickly gained attention,
            opening up opportunities for freelance projects.
          </p>
          <button
            onClick={() => navigate("/about-momento")}
            type="button"
            className=" bg-orange-500 mx-10 my-7 p-3 rounded hover:bg-transparent border border-transparent hover:border-orange-500 duration-500"
          >
            <p className=" text-[#EEEEEE] px-5">Learn More</p>
          </button>
        </div>
      </div>
    </div>
    // <div className='h-screen bg-sky-400' id='about-section'>
    //     test
    // </div>
  );
};

export default AboutSection;
