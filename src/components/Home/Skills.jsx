import htmlLogo from "/src/images/Logos/HTML.svg";
import cssLogo from "/src/images/Logos/CSS.svg";
import jsLogo from "/src/images/Logos/JavaScript.svg";
import tailwindLogo from "/src/images/Logos/TailwindCSS.svg";
import bootstrapLogo from "/src/images/Logos/Bootstrap.png";
import reactLogo from "/src/images/Logos/React.js.svg";
import reduxLogo from "/src/images/Logos/Redux.svg";
import materialUiLogo from "/src/images/Logos/material-ui-1.svg";
import gitLogo from "/src/images/Logos/GIT.svg";
import gsapLogo from "/src/images/Logos/GSAP.svg";
import netlifyLogo from "/src/images/Logos/Netlify.png";
import vercelLogo from "/src/images/Logos/vercel.svg";
import VscodeLogo from "/src/images/Logos/vscode.ico"
import chromeLogo from "/src/images/Logos/chrome.png"
import LenisLogo from "/src/images/Logos/lenis.ico"

export default function Skills() {

    const skills = [
        {
            id: 1,
            name: "HTML",
            image: htmlLogo,
        },
        {
            id: 2,
            name: "CSS",
            image: cssLogo,
        },
        {
            id: 3,
            name: "JavaScript",
            image: jsLogo,
        },
        {
            id: 4,
            name: "Tailwind CSS",
            image: tailwindLogo,
        },
        {
            id: 5,
            name: "Bootstrap",
            image: bootstrapLogo,
        },
        {
            id: 6,
            name: "React",
            image: reactLogo,
        },
        {
            id: 7,
            name: "Redux",
            image: reduxLogo,
        },
        {
            id: 8,
            name: "Material UI",
            image: materialUiLogo,
        },
        {
            id: 9,
            name: "GSAP",
            image: gsapLogo,
        },
        {
            id: 10,
            name: "Lenis",
            image: LenisLogo,
        },
        
        {
            id: 11,
            name: "Git",
            image: gitLogo,
        },
        {
            id: 12,
            name: "VS Code",
            image: VscodeLogo,
        },
        {
            id: 13,
            name: "Netlify",
            image: netlifyLogo,
        },
        {
            id: 14,
            name: "Vercel",
            image: vercelLogo,
        },
        {
            id: 15,
            name: "Chrome DevTools",
            image: chromeLogo,
        },
    ];

    return (

        <>
            <hr className="border-[#E2E8F0] w-full" />
            <div className="overflow-hidden w-full" >

                <div className="whitespace-nowrap py-10" id='scrolling-container'>
                    <div className="flex" id="text-container">
                        {skills.map((skill) => (
                            <div
                                key={skills.id}
                                className="skills flex items-center gap-2 px-6 py-2 mx-3 shadow-sm bg-white rounded-full"
                            >
                                <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless infinite effect */}
                        {skills.map((skill, index) => (
                            <div
                                key={`dup-${index}`}
                                className="skills flex items-center gap-2 px-6 py-2 mx-3 bg-white rounded-full shadow-sm"
                            >
                                <img src={skill.image} alt={skill.name} className="w-5 h-5" />
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
}
