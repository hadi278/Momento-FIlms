import React from "react";

const TeamSection = () => {
  return (
    <div>
      <div
        className="h-fitt z-10 bg-[url('src/assets/img/background-image-3.png')] bg-center bg-cover mt-10"
        id="team-section"
      >
        <h1 className="text-[#EEEEEE] text-center text-5xl font-sans font-semibold">
          Owner
        </h1>
        <h2 className="text-[#EEEEEE] text-center mt-2 text-3xl">
          momento films
        </h2>
        <div className="sm:grid grid-cols-2 my-16 ">
          <div className="text-justify mx-16 my-auto ">
            <h1 className="text-[#EEEEEE] font-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maxime quisquam assumenda optio perspiciatis vero. Incidunt cumque
              doloribus quaerat molestias tempora officiis, adipisci odit dicta
              voluptatum, unde aliquid laborum? Voluptates!
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quaerat inventore laudantium, quae fugit laborum id molestias
              consequatur excepturi quos doloremque hic esse labore ratione
              fugiat qui eius nemo dolore.
            </h1>
            <div className="my-10">
              <button className="pr-5">
                <a href="http://">
                  <img
                    src="src/assets/img/Instagram-Circle.png"
                    alt=""
                    className="size-10"
                  />
                </a>
              </button>
              <button className="pr-5">
                <a href="http://">
                  <img
                    src="src/assets/img/WhatsApp.png"
                    alt=""
                    className="size-10"
                  />
                </a>
              </button>
              <button className="pr-5">
                <a href="http://">
                  <img
                    src="src/assets/img/Send Email.png"
                    alt=""
                    className="size-10"
                  />
                </a>
              </button>
            </div>
          </div>
          <div>
            <div className=" w-1/2 p-5 rounded-t-3xl mx-auto shadow-inner shadow-inner">
              <img
                src="src/assets/img/Studio-Photos/Circle-Image-3.png"
                alt=""
                className="border-[10px] rounded-full"
              />
              <h1 className="text-center my-10 text-3xl text-[#EEEEEE]">
                Muhammad Fadhli Robby
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
