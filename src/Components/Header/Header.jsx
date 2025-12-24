
import Navbar from '../Navbar/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Header = () => {
  useEffect(()=> {
    AOS.init({duration:2000})
  }, [])
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20' data-aos="zoom-out">  Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16' data-aos="fade-up">
                <a href="#project" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#contact"  className='border bg-blue-400 border-white px-8 py-3 rounded'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header