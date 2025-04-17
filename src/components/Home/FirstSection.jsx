import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ShinyText from "./ShinyText";
import image from "/src/images/Mounesh.jpeg"

export default function FirstSection() {

    const textRef = useRef();
    const homeRef = useRef();

    useEffect(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" }
        );

    }, []);

    return (
        <section ref={homeRef} className="py-10 flex flex-col justify-center items-center px-4 sm:px-16">

            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8">
                {/* Text Section */}
                <div ref={textRef} className="intro w-full lg:w-1/2 space-y-4 py-6">
                    <p className="text-lg sm:text-xl">Hi, I'm Mounesh Pattar</p>
                    <h1 className="text-5xl sm:text-7xl font-semibold">
                        Fullstack <br /> <span className="span text-[#30AF5B]">Developer</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-xl">
                        Shaping the future of web interactions with clean, efficient, and engaging designs{" "}
                        <ShinyText text="Fullstack" disabled={false} speed={2.5} className='text-[#30AF5B]' /> development.
                    </p>
                    <hr className="border-[#E2E8F0] w-full" />
                    {/* Social Icons */}
                    <div className="social-links flex gap-4 mt-6 font-normal">
                        <a
                            href="https://github.com/Mounesh2"
                            className="relative py-3 bg-transparent group"
                        >
                            GitHub
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mounesh-s-pattar-1b3221299"
                            className="relative py-3 bg-transparent group"
                        >
                            LinkedIn
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="mailto:mouneshsattar0@gmail.com"
                            className="relative py-3 bg-transparent group"
                        >
                            Gmail
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 w-4 h-4 -rotate-45" />
                            <span className="underline absolute top-10 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>


                </div>

                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <div className="h-[500px] w-[400px] max-md:h-96 overflow-hidden rounded-b-full shadow-2xl">
                        <img
                            src={image}
                            alt="Kartikay" loading="lazy" decoding="async"
                            className="avtar h-full w-full aspect-[3/4] rounded-b-full object-cover transition duration-300 hover:scale-[1.02] grayscale hover:grayscale-0"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}