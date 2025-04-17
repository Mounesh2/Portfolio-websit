import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const SecondSection = () => {
    return (
        <>
            <hr className="border-[#E2E8F0] w-full" />
            <div className='overflow-hidden w-full'>
                <div className='flex gap-5 text-5xl flex-row items-center font-medium whitespace-nowrap p-10 text-gray-300' id='scrolling-container'>
                    <div id="text-container" className="flex items-center gap-5">
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div1">Web Animation</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div2">Performance Optimization</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div3">Cross-Browser Compatibility</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div4">Version Control (Git, GitHub)</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div5">Community</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div6">Development</div>

                    </div>
                    {/* Duplicate */}
                    <div id="text-container-secondary" className="flex items-center gap-5">
                    <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />

                        <div className="div1">Web Animation</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div2">Performance Optimization</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div3">Cross-Browser Compatibility</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div4">Version Control (Git, GitHub)</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div5">Community</div>
                        <FontAwesomeIcon icon={faStarOfLife} className='text-xl' />
                        <div className="div6">Development</div>

                    </div>
                </div>
            </div>

            <hr className='border-[#E2E8F0] w-full' />
        </>
    )
}

export default SecondSection