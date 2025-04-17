import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import ShinyText from '../Home/ShinyText';


const Education = () => {

    const textRef = useRef();
    const edtextRef = useRef();
    const achievementsRef = useRef();


    useEffect(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: achievementsRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo(edtextRef.current,
            { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
            {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: achievementsRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);



    const education = [
        { award: "Bachelor of Engineering Completed", institution: "Angadi Institute of Technology and Management Belagavi", year: "2026" },
        { award: "Diploma Completed", institution: "Government Polytechnic Gajendragad", year: "February 2023" },
        { award: "Recognized by School Principal for Inspiring Thoughts", institution: "Shri Jagadguru Tontadarya CBSE School in Gajendragad", year: "April 2020" }
    ];

    return (
        <section ref={achievementsRef} className="w-full my-16 px-4 py-16">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">

                {/* Left Section (Heading) */}
                <div ref={textRef} className="md:w-1/2 pb-5">
                    <h2 className="text-lg mb-2 text-[#30AF5B]"><FontAwesomeIcon icon={faStarOfLife} className="text-lg mr-2" /><ShinyText text="Achievements" disabled={false} speed={2.5} />
                    </h2>
                    <h3 className="text-4xl md:text-5xl mb-4 font-medium text-[var(--white)]">
                        Awards & <br />Recognition
                    </h3>
                    <p className="text-sm font-medium text-gray-600 pr-28 max-sm:pr-5">I have accomplished significant milestones that showcase my passion, dedication, and expertise in development and leadership.</p>
                </div>

                {/* Right Section (Education Details) */}
                <div ref={edtextRef} className="md:w-1/2 max-sm:text-sm">
                    {education.map((edu, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-400 py-4">
                            <div className="text-lg font-medium">
                                {edu.award}
                                <span className="text-gray-400 text-sm block">{edu.institution}</span>
                            </div>
                            <div className="text-gray-400 text-right">{edu.year}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
