import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../../assets/assets'

const Project = () => {

    const [currentIndex ,setCurrentindex] = useState(0)
    const [cardToshow, setCardToshow ] = useState(1)

    useEffect(()=> {
        const updateCardToshow = ()=> {
            if(window.innerWidth >= 1024){
                setCardToshow(projectsData.length)
            }
            else{
                setCardToshow(1)
            }
        }
        updateCardToshow();
        window.addEventListener('resize', updateCardToshow);

        return ()=> window.removeEventListener('resize' ,updateCardToshow)
        

    }, [])

    const nextProject = ()=> {
        setCurrentindex((prevIndex)=> (prevIndex + 1) % projectsData.length)
    }

    const prevProject = ()=> {
        setCurrentindex((prevIndex)=> prevIndex === 0 ? projectsData.length -1 : prevIndex - 1)
    }
  return (
    <div className='container mx-auto pt-20 px-6 py-4 md:px-20 lg:px-32 w-full overflow-hidden' id='project'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' data-aos="fade-down" >Project <span>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building legacices-explore Our Portfolio</p>

        {/* slider button */}
        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject}
             className='p-3 bg-gray-200 rounded mr-2 ' aria-label='Previous project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button  onClick={nextProject}
            className='p-3 bg-gray-200 rounded mr-2 ' aria-label='Next project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* Project slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
             style={{transform: `translateX(-${(currentIndex * 100)/cardToshow}%)`}}
            >
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 hover:scale-95 duration-300 transition-all ease-linear' data-aos="zoom-in">
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14 rounded-md shadow-md'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md hover:scale-x-105 transition-all duration-300 ease-linear'>
                                <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project