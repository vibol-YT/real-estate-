import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [showMobileMenu , setShowMobileMenu] = useState(false)


    useEffect(()=>{
        if(showMobileMenu) {
            document.body.style.overflow ='hidden'
        }
        else {
            document.body.style.overflow ='auto '
        }
        return()=>{
            document.body.style.overflow =' auto '
        }
    }, [showMobileMenu])
    
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container shadow-md mx-auto flex justify-between items-center px-5 py-4 md:px-20 lg:px-32 '>
            <img src={assets.logo} alt="" data-aos="fade-right"/>
            <ul className='hidden md:flex gap-7 text-white ' data-aos="fade-down">
                <a href="/" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#project" className='cursor-pointer hover:text-gray-400'>Project</a>
                <a href="#testimonal" className='cursor-pointer hover:text-gray-400'>Testimonal</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full' data-aos="fade-left">Sign Up</button>
            <img  onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
        </div>

        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-[500px] h-screen rounded-md transition-all': 'h-0 w-0'}  top-4 right-4
          overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end px-10 py-2'>
                <img src={assets.cross_icon} className='w-6 cursor-pointer' onClick={()=> setShowMobileMenu(false)} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                <a onClick={()=> setShowMobileMenu(false)}  href="/" className='cursor-pointer px-4 py-2 hover:bg-blue-200 w-full text-center hover:text-gray-400'>Home</a>
                <a onClick={()=> setShowMobileMenu(false)}  href="#about" className='cursor-pointer px-4 py-2 hover:bg-blue-200 text-center w-full hover:text-gray-400'>About</a>
                <a onClick={()=> setShowMobileMenu(false)}  href="#project" className='cursor-pointer px-4 py-2 hover:bg-blue-200 w-full text-center hover:text-gray-400'>Project</a>
                <a onClick={()=> setShowMobileMenu(false)}  href="#testimonal" className='cursor-pointer px-4 py-2 hover:bg-blue-200 text-center w-full hover:text-gray-400'>Testimonal</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar