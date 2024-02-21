import React from "react";

const ContactSection = () => {
  return (
    <div className="h-fitt" id="contact-section">
      <div className="">
        <h1 className="sm:text-9xl text-6xl text-[#EEEEEE] font-sans mx-10">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <div className="border border-solid-l w-1/4 bg-white mx-10 sm:my-12 my-6 " />
          <h2 className="text-[#EEEEEE] sm:text-8xl text-5xl font-serif">
            Get In Touch
          </h2>
        </div>
        <div className="sm:grid grid-cols-2 my-6">
          <div className="text-[#EEEEEE] mx-12">
            <div>
              <h5 className="text-3xl font-sans"> What we can do for you?</h5>
              <div className="my-2">
                <button className="xl:mx-3 p-2 bg-transparent border border-[#EEEEEE] rounded-md">
                  <a href="http://"> Film Documenter </a>
                </button>
                <button className="xl:mx-3 p-2 bg-transparent border border-[#EEEEEE] rounded-md">
                  <a href="http://"> Photografy </a>
                </button>
                <button className="xl:mx-3 p-2 bg-transparent border border-[#EEEEEE] rounded-md">
                  <a href="http://"> Documentaion </a>
                </button>
              </div>
            </div>
            <div className="sm:grid grid-rows-3 relative">
              <div className="sm:grid grid-cols-2 gap-10">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent p-3 my-3 border-b active:border-transparent"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent p-3 my-3 border-b focus:border-t-transparent"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows=""
                className="bg-transparent p-3 mt-3 border-b"
                placeholder="Message"
              />
              <button className=" absolute bottom-3 text-2xl hover:text-orange-400 duration-200">
                <a href="http://"> Send Message </a>
              </button>
            </div>
          </div>
          <div className="text-[#EEEEEE] sm:ml-52 my-10 mx-10 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              saepe perspiciatis sit dolorem aspernatur, delectus voluptas
              commodi voluptatum optio sed iure ut dolore vel vitae totam
              voluptate eaque. Blanditiis, iste. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Numquam sint placeat impedit,
              accusantium quia aspernatur suscipit, est excepturi veniam,
              voluptas architecto aut provident sunt! Numquam, fugiat quos.
              Quidem, at earum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
