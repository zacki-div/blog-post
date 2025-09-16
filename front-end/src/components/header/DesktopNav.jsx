import { Link } from 'react-router-dom'

function DesktopNav({ menuItems, logo }) {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu,index) => (
                    <li key={index}>
                        <Link to={menu} className='font-medium capitalize text-'>{menu}</Link>
                    </li>
                ))
            }
        </ul>
        <ul className='flex gap-4 items-center font-medium'>
            <li>
                <button className='text-[#1b2629] px-4 py-2 rounded'>log in</button>
            </li>
            <li>
                <button className='text-[#1b2629] px-4 py-2 rounded'>sign up</button>
            </li>
        </ul>
    </div>
  )
}

export default DesktopNav