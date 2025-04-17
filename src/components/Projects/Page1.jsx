import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faStarOfLife,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import ShinyText from '../Home/ShinyText';
import rejouiceImage from "/src/images/rejouice.png";
import shkwImage from "/src/images/shkw.png";
import reactProjectsImage from "/src/images/react-projects.png";
import jsworkImage from "/src/images/jswork.png";

const Page1 = () => {

  const textRef = useRef();
  const projectRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" }
    );
  }, []);


  const projects = [
    {
      id: 1,
      image: rejouiceImage,
      title: "Rejouice",
      description:
        "Developed a pixel-perfect UI clone of Rejouice.com, featuring GSAP animations, scroll-trigger effects and Lenis smooth scrolling.",
      liveLink: "http://rejouiceui.vercel.app/",
      codeLink: "https://github.com/Kartikaysharma2004/rejouice",
    },
    {
      id: 2,
      image: shkwImage,
      title: "shkw-dev",
      description:
        "Built a pixel-perfect UI clone of shkw-dev.com with GSAP animations, and Lenis smooth scrolling, showcasing responsive design and smooth transitions.",
      liveLink: "https://github.com/Mounesh2",
      codeLink: "",
    },
    {
      id: 3,
      image: reactProjectsImage,
      title: "React Projects",
      description:
        "This collection showcases a variety of projects built with React.js, demonstrating various web development techniques and concepts.",
      codeLink: "https://github.com/Mounesh2",
      liveLink: "",
    },
    {
      id: 4,
      image: jsworkImage,
      title: "JavaScript Projects",
      description:
        "This collection showcases a variety of JavaScript projects that I've developed to demonstrate my skills and creativity in web development.",
      codeLink: "https://github.com/Mounesh2",
      liveLink: "",
    },
  ];

  return (
    <>
      <section ref={projectRef} id="mywork" class="mywork py-16 max-md:px-4 px-16">
        <div ref={textRef} class="max-w-6xl mx-auto">
          {" "}
          <h2 class="text-lg text-[#30AF5B] mb-2 shiny-sec">
            <FontAwesomeIcon icon={faStarOfLife} className="text-lg mr-2" />
            <ShinyText text="My Work" disabled={false} speed={2.5} />
          </h2>{" "}
          <h3 class="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
            Projects
          </h3>
          <p class="mb-4 text-lg max-sm:text-sm">
            Explore my projects—where design meets functionality.<br />Each one showcases my skills and passion for front-end development.
          </p>
        </div>

        {/* Project Details */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-6 mt-12 border-b border-gray-700 pb-8 w-full px-16 max-lg:px-0"
          >
            {/* Text on the left */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-medium mb-2">
                {project.title} <span className="text-gray-500">(0{index + 1})</span>
              </h3>
              <p className="text-gray-400 ">{project.description}</p>

              {/* View Project Button on the right */}

              <div className='flex mt-5'>
                <div className="flex-1  flex group relative">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex overflow-hidden">
                    {/* First button (initial state) */}
                    <button className="relative translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12 cursor-pointer max-sm:text-sm">
                      View Code
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                    </button>

                    {/* Second button (hover state) */}
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <button className="absolute top-0 left-0 w-full translate-y-[130%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0 cursor-pointer max-sm:text-sm">
                        View Code
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                      </button>
                    </a>
                  </a>
                </div>

                <div className="flex-1 flex group relative">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex overflow-hidden">
                    {/* First button (initial state) */}
                    <button className="relative translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12 cursor-pointer max-sm:text-sm">
                      View Project
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                    </button>

                    {/* Second button (hover state) */}
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <button className="absolute top-0 left-0 w-full translate-y-[130%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0 cursor-pointer max-sm:text-sm">
                        View Project
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                      </button>
                    </a>
                  </a>
                </div>
              </div>

            </div>


            {/* Image in the center */}
            <div className="flex-1 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
            </div>

          </div>


        ))}

        <div className="flex justify-center pt-5">
          <a href="https://github.com/Mounesh2" target="_blank">
            <button
              type="button"
              className="btn bg-[#222] text-gray-400 hover:text-white rounded-full px-5 py-3 text-sm 
               hover:bg-[#1E1E1E] transition-all cursor-pointer inline-flex items-center gap-1 shadow-lg"
            >
              More projects on
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Page1;
