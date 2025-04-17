import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import rejouice from "/src/images/rejouice.png"
import jswork from "/src/images/jswork.png"
import shkw from "/src/images/shkw.png"

const projects = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating engaging modern designs",
        image: rejouice,
        link: "*"
    },
    {
        id: 2,
        title: "Web Development",
        description: "Building functional, logical websites",
        image: jswork,
        link: "*"
    },
    {
        id: 3,
        title: "Web Animations & Effects",
        description: "Enhancing UI with smooth animations and interactive elements",
        image: shkw,
        link: "*"
    },
];

export default function FeaturedWork() {

    return (

        <section className="work-tage py-16 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-semibold mb-5">FEATURED WORK</h2>
                <div className="flex flex-wrap justify-between">
                    <p className="text-gray-400 max-w-xl mb-10">
                        As a Fullstack developer, I bring modern ideas, simplicity, and
                        universal design to create impactful digital experiences.
                    </p>
                    <NavLink to={"/contact"}>
                        <button className="contact-btn border p-3 border-black rounded-3xl cursor-pointer hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mb-10">
                            Let's Discuss <FontAwesomeIcon icon={faArrowRight} className='mx-2 w-4 h-4 -rotate-45' />
                        </button>
                    </NavLink>
                </div>

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="flex flex-col md:flex-row items-center gap-6 mb-12 border-b border-gray-700 pb-8 w-full"
                    >
                        {/* Text on the left */}
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-medium mb-2">
                                {project.title} <span className="text-gray-500">(0{index + 1})</span>
                            </h3>
                            <p className="text-gray-400 ">{project.description}</p>
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

                        {/* View Project Button on the right */}
                        <div className="flex-1 flex justify-end group relative">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative inline-flex overflow-hidden">
                                {/* First button (initial state) */}
                                <button className="relative translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12 cursor-pointer">
                                    View Project
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                                </button>

                                {/* Second button (hover state) */}
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="absolute top-0 left-0 w-full translate-y-[130%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0 cursor-pointer">
                                        View Project
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 -rotate-45" />
                                    </button>
                                </a>
                            </a>
                        </div>

                    </div>

                ))}
                <div className="flex justify-center">
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
            </div>
        </section>
    );
}
