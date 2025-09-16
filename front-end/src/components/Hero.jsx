import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>Hello to my new food <span className='text-[#9c702a]'>blog</span></h1>
        <form action="/search" className="bg-white px-4 py-2 rounded relative flex items-center">
        <IoSearch className="w-5 h-5 mr-2 text-neutral-300"/>
        <input className="outline-none w-full placeholder:text-[#1b2629]" name="query" type="search" placeholder="Search for your recipe" id="search" required />
        </form>
    </div>
  )
}

export default Hero