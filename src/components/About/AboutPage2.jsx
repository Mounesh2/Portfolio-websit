import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStarOfLife,
    faPencil,
    faSearch,
    faCode,
    faRocket
} from "@fortawesome/free-solid-svg-icons";
import ShinyText from '../Home/ShinyText';

const AboutPage2 = () => {

    const textRef = useRef();
    const aboutRef = useRef();


    useEffect(() => {
        const AboutAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 50%",  // Animation triggers when the footer is 90% in view
                toggleActions: "play none none none",
            },
        });
        AboutAnimation
            .fromTo(textRef.current,
                { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
                { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" })
    }, []);


    const processes = [
        {
            id: "01",
            icon: faSearch,
            title: "Research",
            description: "Gathering insights and understanding goals to create a strong project foundation."
        },
        {
            id: "02",
            icon: faPencil,
            title: "Wireframing",
            description: "Structuring layouts and defining elements to enhance user experience."
        },
        {
            id: "03",
            icon: faCode,
            title: "Development",
            description: "Turning wireframes into functional, responsive, and dynamic websites."
        },
        {
            id: "04",
            icon: faRocket,
            title: "Launch & Iterate",
            description: "Deploying, testing, and refining to ensure a seamless user experience."
        }
    ];

    return (
        <>
            <section ref={aboutRef} id="myprocess" class="w-full mt-16 px-4">
                <div ref={textRef} class="max-w-6xl mx-auto">
                    {" "}
                    <h2 class="text-lg mb-2 shiny-sec text-[#30AF5B]">
                        <FontAwesomeIcon icon={faStarOfLife} className="text-lg mr-2" />
                        <ShinyText text="Steps I follow" disabled={false} speed={2.5} />
                    </h2>{" "}
                    <h3 class="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
                        My Development Process
                    </h3>
                    <p class="mb-4 text-lg max-sm:text-sm">
                        I have built projects that deliver seamless and engaging digital experiences.
                    </p>
                </div>
                <div className='flex flex-wrap gap-6 p-5 items-center justify-center'>
                    {processes.map((process) => (
                        <div key={process.id} className="container border border-gray-400 w-72 h-52 rounded-2xl p-5 shadow-lg hover:shadow-xl transition ease-in-out duration-300">
                            <FontAwesomeIcon icon={process.icon} className='bg-black text-white rounded-full p-3' />
                            <h1 className='font-medium text-xl max-md:text-lg mt-2'>{process.id}. {process.title}</h1>
                            <p className='mt-2'>{process.description}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default AboutPage2