import React from "react"

const Header=()=>{
    return (
        <>
    <nav className="px-4 py-3 lg:px-6 lg:py-0 lg:h-[9vh] bg-[#FB8500]">
        <div className="flex flex-wrap lg:justify-between
        items-center mx-auto max-w-screen-xl font-Inter justify-center gap-3 lg:h-[9vh]">
            <a href="#" className="flex items-center">
                <img className="h-[50px] p-1 " src="Assets/png-clipart-three-headed-lion-lion-capital-of-ashoka-sarnath-museum-state-emblem-of-india-national-symbols-of-india-planet-miscellaneous-mammal 1.png" />

                <span className="self-center flex justify-center items-center
                whitespace-nowrap font-sans font-medium text-3xl text-white">
                    Constitution of India</span>
            </a>

            <div>
                <ul className="md:flex justify-between align-items lg:w-[30vw] md:w-[30vw] sm:w-[90vw] gap-[5px] text-white font-regular hidden">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About us</li>
                    <li className="cursor-pointer">Learn</li>
                    <li className="cursor-pointer">Games</li>
                    <li className="cursor-pointer">Langauge</li>
                </ul>
            </div>

            <div className="flex items-center justify-evenly lg:order-2 w-[320px]">
                <button className="text-white bg-[#000C73] hover:bg-[#3e75c8]
                dark:text-white focus:bg-[#FB5607] 
                rounded-[12px] text-md text-center lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none font-Inter px-4 font-medium">Login / Sign up</button>

            </div>       
        </div>
    </nav>

        </>
    )
}
export default Header