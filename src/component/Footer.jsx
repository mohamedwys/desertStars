import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png'
import { FaSquareFacebook,FaSquareInstagram,FaSquareXTwitter } from "react-icons/fa6";

function Footer({navItem}) {
  return (
    <footer className='bg-gradient-to-b from-white to-cream border-t border-cream-dark'>
        <div className="max-w-screen-2xl p-4 md:px-14 mx-auto py-12">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-primary'>
                {/* Company */}
                <div className='lg:col-span-2 space-y-6' >
                    <div className='flex items-center gap-4'>
                        <img src={logo} alt="Desert Stars Choir Logo" className='w-14 h-14' />
                        <div>
                            <h1 className='text-3xl font-black'>Desert Stars</h1>
                            <p className='text-sm font-semibold text-secondary'>Children&apos;s Choir Dubai</p>
                        </div>
                    </div>
                    <p className='text-light leading-relaxed lg:w-4/5'>
                        A vibrant community music program where children aged 7-14 discover their voices, build confidence, and create lasting friendships through the joy of singing.
                    </p>

                    {/* Social Links */}
                    <div className='flex items-center gap-4'>
                        <p className='text-sm font-semibold text-dark'>Follow us:</p>
                        <nav className='flex gap-3 text-3xl'>
                            <a href="https://www.facebook.com/" target='_blank' rel="noreferrer" className='text-primary hover:text-secondary transition-colors duration-300' aria-label="Facebook">
                                <FaSquareFacebook/>
                            </a>
                            <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className='text-primary hover:text-secondary transition-colors duration-300' aria-label="Instagram">
                                <FaSquareInstagram/>
                            </a>
                            <a href="https://x.com/" target='_blank' rel="noreferrer" className='text-primary hover:text-secondary transition-colors duration-300' aria-label="X (Twitter)">
                                <FaSquareXTwitter/>
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-lg font-bold mb-6 text-dark'>Quick Links</h4>
                    <nav className='space-y-3 list-none'>
                        {navItem.map(({link,path},index) => {
                            return (
                                <li key={link + index}>
                                    <Link className='text-light hover:text-secondary duration-300 cursor-pointer transition-colors font-medium' offset={-100} to={path}>
                                        {link}
                                    </Link>
                                </li>
                            )
                        })}
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <h4 className='text-lg font-bold mb-6 text-dark'>Get In Touch</h4>
                    <div className='space-y-4 text-light'>
                        <div className='flex items-start gap-3'>
                            <span className='text-secondary mt-1'>📞</span>
                            <a href="tel:+971554307037" className='hover:text-secondary transition-colors'>
                                (+971) 55 430 7037
                            </a>
                        </div>
                        <div className='flex items-start gap-3'>
                            <span className='text-secondary mt-1'>📍</span>
                            <div>
                                <p>AN Events, Kojak Building</p>
                                <p>Motor City, Dubai, UAE</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <span className='text-secondary mt-1'>🕒</span>
                            <div>
                                <p>Mon & Wed</p>
                                <p>4:30 PM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-12 mb-8 border-cream-dark' />

            <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-light'>
                <p className='text-sm'>
                    © {new Date().getFullYear()} Desert Stars Children&apos;s Choir. All rights reserved.
                </p>
                <p className='text-sm'>
                    Made with <span className='text-red-500'>♥</span> in Dubai
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer