import React from 'react'
import { assets, testimonialsData } from '../../assets/assets'
import Navbar from '../../Components/Navbar/Navbar'


const Testimonal = () => {
  return (
    <>
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonal'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' data-aos="fade-down">Customer <span className='underline-offset-4 decoration-1 under font-light'>Testimonal</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facilis!</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {
                testimonialsData.map((testimonal, index)=> (
                    <div  key={index} className='max-w-[340px] border shadow-lg px-8 py-12 text-center hover:scale-95 transition-all duration-300' data-aos="fade-up">
                        <img className='rounded-full w-20 h-20 mx-auto mb-4' src={testimonal.image} alt={testimonal.alt} />
                        <h2 className='text-xl font-medium text-gray-700'>{testimonal.name}</h2>
                        <p className='text-sm text-gray-500 mb-4'>{testimonal.title}</p>

                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({length: testimonal.rating}, (item, index)=>(
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-500'>{testimonal.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Testimonal