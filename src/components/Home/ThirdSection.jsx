import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import ShinyText from './ShinyText';

const ThirdSection = () => {

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


  return (
    <>

      <div ref={aboutRef} className="page-3 pb-16 pt-20 px-20 max-md:px-4">
        <h2 className="h2 text-center text-[#30AF5B] text-sm max-sm:text- pb-10 uppercase">
          <FontAwesomeIcon icon={faStarOfLife} className='text-sm pr-2' />
          <ShinyText text="About Me" disabled={false} speed={3} />

        </h2>
        <h3 ref={textRef} className="text-3xl font-medium max-md:text-xl text-gray-600 loading-8 flex justify-center text-center">
          I’m Mounesh Pattar, a passionate Fullstack Developer skilled in React, JavaScript, GSAP, and Tailwind CSS,
          crafting modern, responsive, and engaging web experiences. Constantly evolving, I aim to deliver seamless UI/UX and high-performance designs. Let’s build something amazing!{" "}
        </h3>
      </div>
    </>
  )
}

export default ThirdSection