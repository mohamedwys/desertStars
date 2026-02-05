import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png'
import { FaSquareFacebook,FaSquareInstagram,FaSquareXTwitter } from "react-icons/fa6";

function Footer({navItem}) {
  return (
    <footer className='bg-white'>
        <div className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-4">
            <div className='flex flex-wrap space-x-8 md:space-x-0 space-y-4 md:space-y-0 w-full text-primary mt-2'>
                {/* Company */}
                <div className='md:w-3/4 lg:w-[45%] pr-8 space-y-12' >
                    <div className='flex items-center gap-6 '>
                        <img src={logo} alt="logo" className='w-16 h-16' />
                        <h1 className=' text-4xl font-black '>Desert Stars</h1>
                    </div>
                    <p className='lg:w-4/5'>Desert Stars Children Choir  
                        recreational program designed to inspire a love of music.
                    </p>
                    

                </div>
                {/* Platform */}
                <div className='md:w-1/4 lg:w-[15%]' >
                    <h4 className='text-xl font-bold mt-5'>Website</h4>
                    <nav className='space-y-3 mt-8 list-none'>
                        {navItem.map(({link,path},index) => {
                            return <li key={link + index} ><Link className='hover:text-Thirdary duration-300 cursor-pointer' offset={-100} to={path}>{link}</Link></li>
                        })}
                    </nav>
                </div>
                {/* Help */}
                {/* <div className='md:w-1/2 lg:w-[20%]' >
                    <h4 className='text-xl font-bold mt-5'>Help</h4>
                    <nav className='space-y-3 mt-8 list-none'>
                        <li><a className='hover:text-Thirdary duration-300' href='/' >How does it works?</a></li>
                        <li><a className='hover:text-Thirdary duration-300' href='/' >Where to ask question?</a></li>
                        <li><a className='hover:text-Thirdary duration-300' href='/' >How to play?</a></li>
                        <li><a className='hover:text-Thirdary duration-300' href='/' >What is needed for this?</a></li>
                    </nav>
                </div> */}
                {/* Contact */}
                <div className='md:w-1/2 lg:w-[20%]' >
                    <h4 className='text-xl font-bold mt-5'>Contact</h4>
                    <div className='space-y-3 mt-8'>
                        <p>(+971)55 430 7037</p>
                        <p>Desert Stars Choir DXB</p>
                        <p>Kojak Building, Motor City</p>
                        <p>Dubai, UAE</p>

                    </div>
                </div>
            </div>
            <hr className='mt-10' />
            <div className='text-primary flex justify-between items-center mt-10 mb-5'>
                <p className='font-light text-primary'>© Desert Stars 2026.</p>
                <nav className='flex gap-4 text-4xl'>
                    <a href="https://www.facebook.com/" target='_blank'><FaSquareFacebook/></a>
                    <a href="https://www.instagram.com/" target='_blank'><FaSquareInstagram/></a>
                    <a href="https://x.com/" target='_blank'><FaSquareXTwitter/></a>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer