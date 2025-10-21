import React, { useRef } from 'react'
import homeImage1 from './Assets/homeImg1.png'
import homeImage11 from './Assets/homeImg11.png'
import homeImage2 from './Assets/homeImg2.png'
import homeImage22 from './Assets/homeImg22.png'
import left from './Assets/left-arrow.png'
import right from './Assets/right-arrow.png'
import windows from './Assets/Link-List-Icons-Microsoft-365.svg'
import surface from './Assets/Link-List-Icons-Surface-Devices.svg'
import xbox from './Assets/Link-List-Icons-Xbox-Games-Consoles.svg'

const Home = () => {

    const page1ref = useRef(null);
    const page2ref = useRef(null);
    const dot1ref = useRef(null);
    const dot2ref = useRef(null);

    const changePage = () => {
        if(page1ref.current.classList.contains('hidden')){
            page1ref.current.classList.remove('hidden');
            page2ref.current.classList.add('hidden');
            dot1ref.current.classList.remove('bg-gray-400');
            dot1ref.current.classList.add('bg-gray-600');
            dot2ref.current.classList.remove('bg-gray-600');
            dot2ref.current.classList.add('bg-gray-400');
        }
        else {
            page1ref.current.classList.add('hidden');
            page2ref.current.classList.remove('hidden');
            dot1ref.current.classList.add('bg-gray-400');
            dot1ref.current.classList.remove('bg-gray-600');
            dot2ref.current.classList.add('bg-gray-600');
            dot2ref.current.classList.remove('bg-gray-400');
        }
    }

  return (
    <div className='home-container'>


        <div ref={page1ref} className="home-content w-[100%] flex-col-reverse md:flex-row items-center md:items-start md:justify-between gap-6 hidden">
            <div className="text-content flex flex-col px-6 md:min-w-70 shadow-lg md:absolute md:top-1/6 lg:top-40 md:left-10 lg:left-20 py-5 bg-white md:rounded-md md:z-10 md:w-1/3"> 
                <h1 className='text-2xl md:text-3xl font-medium mb-2'>Meet Surface Pro</h1>   
                <p className='text-md md:text-lg text-gray-900'>This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.</p>
                <button className='bg-sky-700 my-5 md:mb-3 mb-10 text-white px-4 py-2 rounded-md w-max hover:bg-sky-600 transition duration-300'>Learn More</button>
            </div>
            <div className="image-content w-full">
                <img src={homeImage11} alt="Home Visual" className='w-full h-auto md:hidden'/>
                <img src={homeImage1} alt="Home Visual Small" className='h-120 w-[100%] hidden md:block'/>
            </div>
        </div>


        <div ref={page2ref} className="home-content w-[100%] md:flex-row items-center md:items-start md:justify-between gap-6" >
          <div className="image-content w-full">
                <img src={homeImage22} alt="Home Visual" className='w-full h-auto md:hidden'/>
                <img src={homeImage2} alt="Home Visual Small" className='h-120 w-[100%] hidden md:block'/>
            </div>
            <div className="text-content flex flex-col px-6 md:min-w-70 shadow-lg md:absolute lg:top-40 md:top-28 md:left-[500px] lg:left-[650px] xl:left-[800px]  2xl:left-[900px] py-5 bg-white md:rounded-md md:z-10 md:w-1/3"> 
                <h1 className='text-2xl md:text-3xl font-medium mb-2'>Microsoft 365</h1>   
                <p className='text-md md:text-lg text-gray-900'>Introducing Microsoft 365 Premium with our highest usage limits and exclusive Copilot features for AI power users.</p>
                <div className="btns sm:flex sm:flex-row sm:gap-4">
                    <button className='bg-sky-700 my-5 md:mb-3 text-white px-4 py-2 rounded-md w-max hover:bg-sky-600 transition duration-300'>Discover Microsoft 365 Premium</button>
                    <button className='text-sky-700 md:mb-3 px-4 py-2 rounded-md w-max hover:underline transition duration-300'>See other Microsoft 365 options</button>
                </div>
            </div>
        </div>

        <div className="pagination">
            <div className="dots flex justify-center gap-12 my-6 items-center">
                <img src={left} alt="Left Arrow" className='w-5 cursor-pointer hover:h-6 hover:w-6 hover:-translate-x-1' onClick={()=>changePage()}/>
                <div className="dots flex gap-3">
                    <div ref={dot1ref} className="dot w-3 h-3 rounded-full bg-gray-400"></div>
                    <div ref={dot2ref} className="dot w-3 h-3 rounded-full bg-gray-600"></div>
                </div>
                <img src={right} alt="Right Arrow" className='w-5 cursor-pointer hover:h-6 hover:w-6 hover:translate-x-1' onClick={()=>changePage()}/>  
            </div>
        </div>

        <div className="explore flex gap-10 justify-center mt-10 mb-5 flex-wrap px-6 md:px-0 py-10">
            <div className="365 flex flex-col items-center gap-2">
                <img src={windows} className="w-12 h-auto" />
                <p className='text-blue-700 font-medium underline'>Choose your Microsoft 365</p>
            </div>
            <div className="xbox flex flex-col items-center gap-2">
                <img src={xbox} className="w-12 h-auto" />
                <p className='text-blue-700 underline font-medium'>Shop Xbox</p>
            </div>
            <div className="windows flex flex-col items-center gap-2">
                <img src={windows} className="w-12 h-auto" />
                <p className='text-blue-700 underline font-medium'>Get Windows 11</p>
            </div>
            <div className="surface flex flex-col items-center gap-2">
                <img src={surface} className="w-12 h-auto" />
                <p className='text-blue-700 underline font-medium'>Explore Surface Devices</p>
            </div>
        </div>
    </div>
  )
}

export default Home