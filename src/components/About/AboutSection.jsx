import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ShinyText from '../Home/ShinyText';

const Page1 = () => {

  const textRef = useRef();
  const aboutRef = useRef();
  const paraRef = useRef();


  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out" }
    );

    gsap.fromTo(paraRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "power3.out", delay: 0.5 } // Add delay to stagger animations
    );

  }, []);


  return (
    <>
      <section ref={aboutRef} className="py-10 flex flex-col justify-center items-center px-4 sm:px-16">

        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          {/* Text Section */}
          <div className="w-full space-y-4 text-left max-md:text-start">

            <h1 ref={textRef} className="text-4xl text-balance sm:text-7xl font-semibold py-5">
              I'm a Fullstack developer with passion to create <span className="text-[#30AF5B]">Interactive designs</span>
            </h1>
            <div className='text-right'>
              <p ref={paraRef} className="text-balance sm:text-xl max-sm:text-start mb-10 max-md:ml-0 ml-40">
                I'm <ShinyText text="Mounesh Pattar" disabled={false} speed={3} className='text-[#30AF5B]' />, a creative frontend developer dedicated to building visually appealing, user-friendly, and responsive web experiences. I focus to blend design and functionality to create seamless digital interactions.{" "}
              </p>

              <a href="D:\Portfolio-main\public\Documents\Mounesh_s_Pattar_Resume (1).pdf" download={"Mounesh_S_Pattar_Resume (1).pdf "}>
                <button className="resume-btn border p-3 w-36 border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out">
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page1