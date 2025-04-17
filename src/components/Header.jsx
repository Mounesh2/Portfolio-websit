import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

const Header = () => {
    const HeaderRef = useRef();
    const [currmode, setCurrmode] = useState("light")

    useEffect(() => {

        const toggletheme = document.querySelector(".togglebtn")
        

        toggletheme.addEventListener("click", () => {
            if (currmode === "light") {
                setCurrmode("dark");
                document.body.classList.add("dark");
                document.body.classList.remove("light");

            } else {
                setCurrmode("light");
                document.body.classList.add("light");
                document.body.classList.remove("dark");
            }
            console.log(currmode);
        }
        )
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.to(HeaderRef.current, {
                y: 10, // Starts from above the viewport
                opacity: 1,
                duration: 1, // Animation duration in seconds
                ease: "power2.out",
            });
            

            return () => ctx.revert();
        });
    });

    return (
        <>

            {/* For Large Devices */}
            <nav ref={HeaderRef}
                className="nav max-w-screen-sm backdrop-blur-md bg-white/80 pointer-events-auto sticky top-1 flex items-center justify-between gap-6 rounded-full py-2 mx-auto max-md:bg-transparent max-md:backdrop-blur-none transition-colors z-50 px-6"
                style={{
                    opacity: 1,
                    willChange: "auto",
                    transform: "none",
                    outline: "0px",
                }}
            >

                <NavLink
                    className="font-clashDisplay text-2xl font-medium sm:text-xl"
                    to="/"
                >
                    MP
                </NavLink>
                <ul className="max-md:hidden gap-6 text-sm flex">
                    <li className="group relative">
                        <NavLink className="active-link" to="/">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="nav-items translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                    Home
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                    Home
                                </div>
                            </span>
                        </NavLink>
                    </li>
                    <li className="group relative">
                        <NavLink to="/about">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="nav-items translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                    About
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                    About
                                </div>
                            </span>
                        </NavLink>
                    </li>
                    <li className="group relative">
                        <NavLink to={"/projects"}>
                            <span className="relative inline-flex overflow-hidden">
                                <div className="nav-items translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                    Projects
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                    Projects
                                </div>
                            </span>
                        </NavLink>
                    </li>
                    <li className="group relative">
                        <NavLink to="/contact">
                            <span className="relative inline-flex overflow-hidden">
                                <div className="nav-items translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                    Contact
                                </div>
                                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                    Contact
                                </div>
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-4">
                    <button className="togglebtn inline-flex cursor-pointer bg-white items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 w-11 relative rounded-full border border-bg-700 bg-backdrop text-text-primary shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none">
                        <div
                            className="svgsun absolute inset-0 flex items-center justify-center"
                            // style={{ opacity: 1, willChange: "auto", transform: "none" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-sun"
                            >
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                        </div>
                        <div
                            className="svgmoon absolute inset-0 flex items-center justify-center"
                            // style={{
                            //     opacity: 0,
                            //     willChange: "auto"
                            // }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-moon"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </div>
                        <span className="sr-only">Toggle Dark Mode theme</span>
                    </button>
                </div>
            </nav>



            {/* For Mobile Devices */}

            <nav className="mobile-nav flex-center fixed bottom-0 left-0 right-0 z-50 w-full md:hidden bg-white">
                <ul className="flex w-full justify-evenly rounded-t-3xl border-t border-[#CACACC] bg-backdrop text-text-secondary shadow backdrop-blur-md">
                    <li className="p-4">

                        <NavLink
                            to={"/"}
                            className="flex flex-col items-center justify-center gap-1 text-highlight-primary"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-home "
                            >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span className="text-xs">Home</span>
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink
                            className="flex flex-col items-center justify-center gap-1 text-text-primary"
                            to="/about"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-smile "
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                <line x1="15" x2="15.01" y1="9" y2="9"></line>
                            </svg>
                            <span className="text-xs">About</span>
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink
                            className="flex flex-col items-center justify-center gap-1 text-text-primary"
                            to={"/projects"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-layout-dashboard "
                            >
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="text-xs">Projects</span>
                        </NavLink>
                    </li>
                    <li className="p-4">
                        <NavLink
                            className="flex flex-col items-center justify-center gap-1 text-text-primary"
                            to={"/contact"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-send "
                            >
                                <path d="m22 2-7 20-4-9-9-4Z"></path>
                                <path d="M22 2 11 13"></path>
                            </svg>
                            <span className="text-xs">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
