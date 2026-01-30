import { useState } from 'react';
import logo from '../assets/images/logo.png'
import { GrMenu,GrClose } from "react-icons/gr";
import { Link } from 'react-scroll';
function Header({ navItem }) {
    const [openMenu,setOpenMenu] = useState(false);

    
    function toggleMenu () {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <header className='text-xl text-primary flex justify-between items-center max-w-screen-2xl p-4 md:px-14 mx-auto fixed bg-white top-0 left-0 right-0 z-30'>
                <div className='flex gap-4 lg:gap-8 items-center'>
                    <a href='/' id="logo" className='flex items-center gap-4' >
                        <img src={logo} alt="logo" className='w-12 h-12' />
                        <h1 className=' text-3xl font-black '>DESERT STARS</h1>
                    </a>
                    <nav>
                        <ul className='md:flex hidden gap-4 lg:gap-8 font-medium'>
                            {navItem.map(({link,path},index) => {
                                return <Link key={link + index} to={path} className='hover:text-secondary duration-500 cursor-pointer' offset={-100} >{link}</Link>
                            })}              
                        </ul>
                    </nav>
                </div>

            {/* mobile menu */}
            
                <div onClick={toggleMenu} className='block md:hidden cursor-pointer'>
                    {openMenu? <GrClose /> : <GrMenu />}
                </div>
            </header>
            <div className={`${openMenu? "flex opacity-100" : "opacity-0"} md:hidden flex-col fixed z-20 top-20 left-0 right-0 text-center bg-primary font-medium duration-500 rounded-br-xl rounded-bl-xl overflow-hidden`}>
                {navItem.map(({link,path},index) => {
                    return <div className='w-full h-full' key={link + index} ><Link className='block text-white hover:bg-secondary duration-500 w-full h-full py-4 cursor-pointer' to={path} offset={-100} >{link}</Link></div>
                })}
            </div>
        </>
        
    )
}

export default Header