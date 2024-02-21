import React from "react";

const BlogSection = () => {
  return (
    <>
      {/* <!-- Blog Article --> */}
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          {/* <!-- Avatar Media --> */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="size-12 rounded-full"
                  src="src/assets/img/Studio-Photos/Circle-Image-3.png"
                  alt="Image Description"
                />
              </div>

              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    {/* <!-- Tooltip --> */}
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-[#EEEEEE] dark:text-gray-200">
                          Fadli Robbi
                        </span>
                      </div>
                    </div>
                    {/* <!-- End Tooltip --> */}

                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        Owner Momento Films
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Avatar Media --> */}

          {/* <!-- Content --> */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl text-[#EEEEEE] dark:text-white">
                Announcing a free plan for small teams
              </h2>

              <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
                In the ever-evolving world of visual storytelling, Momento Films
                emerged as a beacon of creativity and innovation. Established in
                2022, the production house was born out of a college assignment
                project, gradually transforming into a thriving entity that
                specializes in creating captivating videos. With the tagline
                "Captures the Moment," Momento Films has become synonymous with
                preserving and immortalizing precious moments through the lens.
              </p>
            </div>

            <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
              The seeds of Momento Films were sown during a college assignment
              project in 2022.
            </p>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="src/assets/img/background-image-1.png"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
              one of our team
              </figcaption>
            </figure>

            <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
              A group of passionate individuals with a shared love for
              storytelling through visuals came together to create something
              extraordinary. Little did they know that this collaboration would
              be the inception of a production house that would redefine the art
              of filmmaking.
            </p>

            <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
              The success of their college project sparked a collective passion
              for filmmaking, leading the team to formalize their collaboration
              and establish Momento Films. Initially, the focus was on honing
              their craft and exploring various types of videos, from short
              films, documentary to promotional content. The team's dedication
              and commitment to delivering high-quality work quickly gained
              attention, opening up opportunities for freelance projects.
            </p>

            <blockquote className="text-center p-4 sm:px-7">
              <h1 className=" text-4xl mt-5 text-[#EEEEEE] dark:text-gray-200">
              Capture the moments.
              </h1>
            </blockquote>

            <figure>
              <img
                className="w-full object-cover rounded-xl"
                src="src/assets/img/7.png"
                alt="Image Description"
              />
            </figure>

            <div className="space-y-3">
              <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
                As Momento Films gained momentum, the team diversified its
                portfolio, taking on a wide range of projects. From corporate
                videos and advertisements to event coverage and documentaries,
                the production house showcased its versatility. The ability to
                adapt to different genres and meet the unique needs of clients
                became a hallmark of Momento Films.
              </p>
            </div>

            <p className="text-lg text-[#EEEEEE] dark:text-gray-200 text-justify">
              Recognizing the importance of collaboration in the creative
              industry, Momento Films actively sought partnerships with
              like-minded individuals and businesses. The production house
              became a hub for creative minds, fostering an environment where
              ideas could flourish, and collaborative projects could come to
              life. This commitment to teamwork and innovation has been
              instrumental in Momento Films' continued success. In addition to
              its core team, Momento Films embraced a freelance model, inviting
              talented individuals from various disciplines to contribute to
              their projects. This not only expanded the production house's
              creative pool but also provided opportunities for emerging artists
              to showcase their skills. As Momento Films continues to evolve,
              the team remains committed to pushing creative boundaries and
              delivering exceptional visual content. With a foundation rooted in
              passion, collaboration, and the art of storytelling, Momento Films
              looks forward to an exciting future filled with new challenges and
              opportunities to capture the moments that matter most.
            </p>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
      {/* <!-- End Blog Article --> */}
    </>
  );
};

export default BlogSection;
