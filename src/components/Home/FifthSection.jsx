import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function FifthSection() {
    return (
        
        <section className="service-tag py-28 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="flex flex-wrap justify-between mb-8">
                    <h2 className="text-5xl font-semibold mb-5 uppercase text-balance">My Service<br />Expertise</h2>
                    <div className="flex justify-end">
                        <div className="max-w-lg">
                            <p className="text-gray-400 mb-5 text-balance">
                                As a front-end developer, I use modern ideas, simplicity in design,
                                and universal visual identification tailored to the dedicated and
                                current market.
                            </p>
                            
                {/* Right Side Button */}
                            <NavLink to={"/contact"}>
                                <button className="contact-btn border p-3 text-sm border-black rounded-3xl cursor-pointer hover:bg-black hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mb-10">
                                    Let's Discuss <FontAwesomeIcon icon={faArrowRight} className='mx-2 w-4 h-4 -rotate-45' />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {/* UI/UX DESIGNER */}
                    <div className="border-t border-gray-600 pt-6">
                        <h3 className="text-lg text-gray-500">(01)</h3>
                        <h3 className="text-2xl font-semibold">UI/UX Implementation</h3>
                        <p className="text-gray-400 mt-2">
                        Creating intuitive user interfaces with modern design principles, ensuring seamless user experience across devices.
                        </p>
                    </div>

                    {/* BRANDING */}
                    <div className="border-t border-gray-600 pt-6">
                        <h3 className="text-lg text-gray-500">(02)</h3>
                        <h3 className="text-2xl font-semibold">Animations & Performance Optimization</h3>
                        <p className="text-gray-400 mt-2">
                        Enhancing UI with smooth animations and interactive elements
                        </p>
                    </div>

                    {/* DEVELOPMENT */}
                    <div className="border-t border-gray-600 pt-6">
                        <h3 className="text-lg text-gray-500">(03)</h3>
                        <h3 className="text-2xl font-semibold">DEVELOPMENT</h3>
                        <p className="text-gray-400 mt-2">
                        Proficient in React, JavaScript, and Tailwind CSS to build responsive and interactive web applications.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
