import React from "react"

const Poster=()=>{
    return(
        <>
        <div>
            <img className="md:h-[60vh] md:w-[100vw] h-[40vh] absolute z-[-1]" src="Assets/image.png" />
            <div className="md:h-[60vh] md:w-[100vw] h-[40vh] absolute z-[-1]  bg-gradient-to-t from-black to-transparent "></div>
            <div className="w-auto md:h-[40vh] flex flex-col justify-around items-center align- z-10">
                <h1 className="md:text-5xl text-3xl font-medium text-white text-center font-sans">Sansthaein Aur Samvidhan Institutions & Constitution</h1>
                <p className="md:w-[70vw] text-white font-medium md:inline hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eos suscipit repudiandae quis reiciendis distinctio laborum aliquam. Cumque possimus, ratione ipsam voluptas laudantium, maiores odio corporis, hic ullam vitae quae reiciendis animi. Corporis sunt aliquid quaerat facere dolores voluptatem amet facilis! Voluptas voluptatibus incidunt, reprehenderit illo distinctio accusantium tempora corrupti?</p>
            </div>
            <div className="h-[30vh] w-auto flex justify-center items-center">

            <div className="h-[30vh] w-[50vw] bg-gradient-to-r from-[#FB8500] to-[#FB8500]  text-white p-8">
                <div className="mb-6 mt-1 text-3xl font-medium font-sans">About us</div>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio vitae dicta. Eveniet accusantium, doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime doloribus deleniti repellendus explicabo in officia fuga itaque corporis dolore quos soluta laudantium tempora temporibus maxime .</p>
            </div>

            </div>
        </div>
        </>
    )
}
export default Poster