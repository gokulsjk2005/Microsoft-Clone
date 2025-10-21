import React from 'react'
import card1 from './Assets/card1.avif'
import card2 from './Assets/card2.avif'
import card3 from './Assets/card3.avif'
import card4 from './Assets/card4.webp'
import card5 from './Assets/card5.avif'
import card6 from './Assets/card6.avif'
import card7 from './Assets/card7.avif'
import card8 from './Assets/card8.jpeg'
import cardBigPc from './Assets/cardBig1.avif'
import cardBigMob from './Assets/cardBig2.avif'
import facebook from './Assets/Facebook.avif'
import twitter from './Assets/x.webp'
import youtube from './Assets/YouTube.webp'



const Content = () => {
  return (
    <div className='content-container'>
        <div className="cardSection1 px-3 flex flex-wrap justify-center gap-10 lg:gap-8 py-10">
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px] ">
                <img src={card1} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card2} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card3} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] ">
                <img src={card4} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
        </div>

        <div className="xbox">
            <div className="card relative shadow-lg mx-auto flex flex-col items-center lg:m-10 xl:m-20 lg:items-start gap-6">
                <img src={cardBigPc} alt="Big Card PC" className='w-full h-auto hidden lg:block'/>
                <img src={cardBigMob} alt="Big Card Mobile" className='w-full h-auto lg:hidden'/>
                <div className="card-text py-5 px-6 lg:absolute lg:bottom-25 xl:bottom-40 lg:left-20 flex flex-col items-center lg:items-start">
                    <h1 className='text-2xl font-medium xl:text-4xl'>Xbox Series S</h1>
                    <p className='text-lg xl:text-xl xl:py-2'>Next-gen performance in the smallest Xbox ever.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Shop Xbox Series S</button>
                </div>
            </div>
        </div>

        <div className="cardSection2 px-3 flex flex-wrap justify-center gap-10 lg:gap-8 py-10">
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card5} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card6} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card7} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
            <div className="card shadow-lg max-w-[380px] xl:max-w-[320px]">
                <img src={card8} alt="" />
                <div className="card-text p-5">
                    <h1 className='text-xl font-medium mb-3'>Surface Laptop, Copilot + PC</h1>
                    <p>Unlock AI features Live Captions and Cocreator with this expectionally powerful laptop.</p>
                    <button className='bg-sky-700 text-white px-4 py-2 mt-3 my-2 hover:bg-sky-600 transition duration-300'>Learn More</button>
                </div>
            </div>
        </div>

        <div className="social flex justify-start items-center md:gap-6 gap-2 pb-10 px-10 md:px-40 flex-wrap">
            <div className="text-lg md:text-2xl md:mr-10">Follow Microsoft</div>
            <img src={facebook} className="w-8 md:w-10" />
            <img src={twitter} className="w-8 md:w-10" />
            <img src={youtube} className="w-8 md:w-10" />
        </div>
    </div>
  )
}

export default Content