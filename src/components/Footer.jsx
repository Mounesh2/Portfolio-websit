import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faDev } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from './Home/ShinyText';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const badgeRef = useRef(null);
  const bottomRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 50%",  // Animation triggers when the footer is 90% in view
        toggleActions: "play none none none",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 20%", // Starts animation when footer is 20% in view
        toggleActions: "play none none none",
      }
    });
    
    tl.fromTo(
      bottomRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" }
    )
    .fromTo(
      iconsRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" },
      "-=0.6"
    );    

    footerAnimation
      .fromTo(textRef.current, 
        { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, 
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" })
        .fromTo(badgeRef.current, { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, 
          { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power3.out" })
        .fromTo(buttonRef.current, 
          { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, 
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power3.out" })   
  }, []);

  return (
    <>
      <footer ref={footerRef} className="py-6 px-14 max-sm:px-2 flex flex-col items-center">
        {/* Call to Action Box */}
        <div className="footer bg-white shadow-lg rounded-4xl py-10 items-center flex justify-center flex-col text-center h-96 w-[70rem] max-lg:w-full">
          <p ref={badgeRef} className="work inline-flex items-center px-4 py-2 bg-lime-100 text-green-600 rounded-full text-sm mb-3">
            <div className='flex mr-2'>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span className="absolute w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <ShinyText text="Available for work" disabled={false} speed={3} className='text-sm max-sm:text-xs'/>
          </p>
          <h2 ref={textRef} className="text-2xl sm:text-5xl font-medium text-gray-900">
            Let’s build something<br />amazing together.
          </h2>
          <NavLink to={"/contact"}>
            <button ref={buttonRef} className="contact-btn mt-5 px-8 py-3 bg-[#18181B] text-white rounded-full text-sm max-sm:text-xs cursor-pointer font-medium transition ease-in-out hover:bg-gray-800">
              Contact Me
            </button>
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-8 w-full px-4 max-sm:pb-5">
          {/* Copyright Text */}
          <p ref={bottomRef} className="max-sm:text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} MP Developer. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="social-links flex gap-5" ref={iconsRef}>
            <a href="https://www.linkedin.com/in/mounesh-s-pattar-1b3221299" className="text-gray-700 hover:text-black transition text-2xl">
              <FontAwesomeIcon icon={faLinkedin} className='text-xl' />
            </a>
            <a href="https://github.com/Mounesh2" className="text-gray-700 hover:text-black transition text-2xl">
              <FontAwesomeIcon icon={faGithub} className='text-xl' />
            </a>
            <a href="https://www.instagram.com/mouneshsp8/profilecard/?igsh=cGpwZGd0dXBrOTkz" className="text-gray-700 hover:text-black transition text-2xl">
              <FontAwesomeIcon icon={faInstagram} className='text-xl' />
            </a>
            <a href="mailto:mouneshspattar0@gmail.com" className="text-gray-700 hover:text-black transition text-2xl">
              <FontAwesomeIcon icon={faEnvelope} className='text-xl' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
