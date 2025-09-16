import { useState } from 'react'
import DesktopNav from './DesktopNav';
import logo from "/logo.svg"
import MobileNav from './MobileNav';

function Header() {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]");
    const  menuItems = ["recipes", "products", "about", "contact"];
    
    const onOpen = () => {
        setHideLeft("left-0");
    }
    const onClose = () => {
        setHideLeft("-left-[1000px]");
    }
  return (
    <>
    <div className='max-[900px]:hidden'>
        <DesktopNav menuItems={menuItems} logo={logo}/>
    </div>
    <div className='min-[900px]:hidden'>
      <MobileNav menuItems={menuItems} logo={logo} onClose={onClose} onOpen={onOpen} hideLeft={hideLeft}/>
    </div>
    </>
  )
}

export default Header