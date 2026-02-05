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
            <header className='text-lg text-primary flex justify-between items-center max-w-screen-2xl p-4 md:px-14 mx-auto fixed bg-white/95 backdrop-blur-md top-0 left-0 right-0 z-30 shadow-sm'>
                <div className='flex gap-4 lg:gap-12 items-center flex-1'>
                    <a href='/' id="logo" className='flex items-center gap-3' >
                        <img src={logo} alt="Desert Stars Choir Logo" className='w-10 h-10 md:w-12 md:h-12' />
                        <div className='flex flex-col'>
                            <h1 className='text-xl md:text-2xl font-black leading-tight'>Desert Stars</h1>
                            <span className='text-xs font-medium text-secondary hidden sm:block'>Children&apos;s Choir Dubai</span>
                        </div>
                    </a>
                    <nav className='flex-1'>
                        <ul className='md:flex hidden gap-6 lg:gap-8 font-semibold text-base'>
                            {navItem.map(({link,path},index) => {
                                if (link === 'Book Now') return null; // We'll add this as a button
                                return <Link key={link + index} to={path} className='hover:text-secondary duration-300 cursor-pointer transition-colors' offset={-100} >{link}</Link>
                            })}
                        </ul>
                    </nav>
                </div>

                {/* CTA Button - Desktop */}
                <Link
                    to="booking"
                    offset={-100}
                    className='hidden md:block px-6 py-2.5 bg-gradient-to-r from-secondary to-accent text-white rounded-lg font-bold text-base hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer'
                >
                    Book Now
                </Link>

                {/* mobile menu toggle */}
                <div onClick={toggleMenu} className='block md:hidden cursor-pointer text-primary hover:text-secondary transition-colors'>
                    {openMenu? <GrClose size={24} /> : <GrMenu size={24} />}
                </div>
            </header>
            <div className={`${openMenu? "flex opacity-100" : "opacity-0 pointer-events-none"} md:hidden flex-col fixed z-20 top-20 left-0 right-0 text-center bg-white shadow-lg font-medium duration-500 rounded-br-xl rounded-bl-xl overflow-hidden border-t border-gray-100`}>
                {navItem.map(({link,path},index) => {
                    return (
                        <div className='w-full h-full' key={link + index}>
                            <Link
                                className={`block ${link === 'Book Now' ? 'bg-gradient-to-r from-secondary to-accent text-white font-bold' : 'text-primary hover:bg-cream'} duration-300 w-full h-full py-4 cursor-pointer`}
                                to={path}
                                offset={-100}
                                onClick={() => setOpenMenu(false)}
                            >
                                {link}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}

export default Header