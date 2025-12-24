import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4 '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aperiam enim quisquam deleniti eum sit, odio esse commodi veritatis facilis.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold'>Compeny</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#" className='hover:text-white'>Home</a>
                    <a href="#about" className='hover:text-white'>About</a>
                    <a href="#contact" className='hover:text-white'>Contact Us</a>
                    <a href="#" className='hover:text-white'>Privacy policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold'>Subscribe to Our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum.</p>

                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter Your Email' className='p-2
                    rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto '/>
                    <button className='py-2 px-4 rounded bg-blue-500 text-white hover:scale-95 transition-all duration-300'>Subscribe</button>
                </div>

            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            <h2 className='font-semibold'>Date : 22/06/25 | by <span className='font-serif'>SIM VIBOL</span>. All Right Reserved</h2>
        </div>
    </div>
  )
}

export default Footer