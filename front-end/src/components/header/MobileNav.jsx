import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function MobileNav({menuItems, logo, hideLeft, onOpen, onClose}) {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
        <button onClick={onOpen} className="border border-[#f9f7f3] rounded">
            <HiMiniBars3BottomRight className="w-7 h-7"/>
        </button>
        <div className={`transition-all w-full h-full fixed bg-[#f9f7f3] z-50 top-0 ${hideLeft} flex justify-center items-center`}>
            <button onClick={onClose} className="absolute right-8 top-32">
                <IoIosCloseCircleOutline className="w-7 h-7"/>
            </button>
            <div>
                <ul className="flex flex-col gap-5">
                    {
                        menuItems?.map((menu,index) => (
                            <li key={index}>
                                <Link to={menu} className="font-medium captalize text-[#1b2629] text-2xl">{menu}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className='flex gap-4 items-center font-medium mt-10'>
            <li>
                <button className='text-[#1b2629] px-4 py-2 rounded border'>log in</button>
            </li>
            <li>
                <button className='text-[#1b2629] px-4 py-2 rounded border'>sign up</button>
            </li>
        </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav