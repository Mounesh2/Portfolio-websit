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
  const educationRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
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
          trigger: educationRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);



  const education = [
    { degree: "Bachelor of Engineering Completed", institution: "Angadi Institute of Technology and Management Belagavi", year: "2026" },
    { degree: "Diploma Completed", institution: "Government Polytechnic Gajendragad", year: "2023" },
    { degree: "Secondary (10th)", institution: "Shri Jagadguru Tontadarya CBSE School in Gajendragad", year: "2020" }
  ];

  return (
    <section ref={educationRef} className="w-full my-16 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">

        {/* Left Section (Heading) */}
        <div ref={textRef} className="md:w-1/2">
          <h2 className="text-lg mb-2 text-[#30AF5B]"><FontAwesomeIcon icon={faStarOfLife} className="text-lg mr-2" /><ShinyText text="Education" disabled={false} speed={2.5} />
          </h2>
          <h3 className="text-4xl md:text-5xl mb-4 font-medium text-[var(--white)]">
            My Education
          </h3>
          <p className="text-sm font-medium text-gray-600">Learning never exhausts the mind; it fuels innovation and growth.</p>
        </div>

        {/* Right Section (Education Details) */}
        <div ref={edtextRef} className="md:w-1/2 max-sm:text-sm">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-400 py-4">
              <div className="text-lg font-medium">
                {edu.degree}
                <span className="text-gray-400 text-sm block">{edu.institution}</span>
              </div>
              <div className="text-gray-400">{edu.year}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
