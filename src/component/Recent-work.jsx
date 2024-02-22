import React from "react";
// import IMAGES from '../assets/img/image.js'
const RecentWork = () => {
  return (
    <>
      <div>
        <h2 className="text-orange-500 text-center text-2xl font-semibold uppercase">
          modest portfolio
        </h2>
        <h1 className="text-5xl text-[#EEEEEE] uppercase text-center mb-5 font-bold">
          Recent Work
        </h1>
        <p className="text-[#EEEEEE] text-center mx-72 opacity-75 italic">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad
          velit consequatur molestias at similique quod. Alias mollitia adipisci
          cum possimus dolore aperiam repudiandae placeat, error odio doloribus
          sequi facere?
        </p>
        {/* <img src={IMAGES.photo_1} alt="" /> */}
      </div>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card-1 --> */}
          <div className="group flex flex-col h-full bg-white border border-orange-500 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
              <img src="src/assets/img/background-image-1.png" alt="" srcset="" className="max-w-[19rem]"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Atlassian API
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Atlassian
              </h3>
              <p className="mt-3 text-gray-500">
                A software that develops products for software developers and
                developments.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-orange-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card -2--> */}
          <div className="group flex flex-col h-full border bg-white border-orange-500 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
              <img src="src/assets/img/background-image-2.png" alt="" srcset="" className="max-w-[19rem]"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                Asana API
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Asana
              </h3>
              <p className="mt-3 text-gray-500">
                Track tasks and projects, use agile boards, measure progress.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-orange-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card-3--> */}
          <div className="group flex flex-col h-full bg-white border border-orange-500 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-black rounded-t-xl">
            <img src="src/assets/img/background-image-3.png" alt="" srcset="" className="max-w-[20rem]"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                Slack API
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Slack
              </h3>
              <p className="mt-3 text-gray-500">
                Email collaboration and email service desk made easy.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-blue-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View sample
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                View API
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
};

export default RecentWork;
