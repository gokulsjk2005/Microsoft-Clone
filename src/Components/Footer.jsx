import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 w-[100%] flex flex-col'>

        <div className="footer-top flex justify-start lg:justify-center w-[100%] pt-5 px-5 flex-wrap gap-10">
            <div className="new px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>What's New</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Surface Pro</p>
                <p className='text-[12px] pb-1 text-gray-400'>Surface Pro Laptop</p>
                <p className='text-[12px] pb-1 text-gray-400'>Copilot for Organizations</p>
                <p className='text-[12px] pb-1 text-gray-400'>Copilot for Personal use</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft 365</p>
                <p className='text-[12px] pb-1 text-gray-400'>Explore Microsoft products</p>
                <p className='text-[12px] pb-1 text-gray-400'>Windows 11 apps</p>
            </div>
            <div className="store px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>Microsoft Store</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Account Profile</p>
                <p className='text-[12px] pb-1 text-gray-400'>Download Center</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Store Support</p>
                <p className='text-[12px] pb-1 text-gray-400'>Returns</p>
                <p className='text-[12px] pb-1 text-gray-400'>Order Tracking</p>
            </div>
            <div className="education px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>Education</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft in Education</p>
                <p className='text-[12px] pb-1 text-gray-400'>Devices for Education</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Teams for Education</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft 365 Education</p>
                <p className='text-[12px] pb-1 text-gray-400'>Office Education</p>
                <p className='text-[12px] pb-1 text-gray-400'>Educator Training and development</p>
                <p className='text-[12px] pb-1 text-gray-400'>Deals for students and parents</p>
                <p className='text-[12px] pb-1 text-gray-400'>Azure for students</p>
            </div>
            <div className="business px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>Business</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Cloud</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Security</p>
                <p className='text-[12px] pb-1 text-gray-400'>Azure</p>
                <p className='text-[12px] pb-1 text-gray-400'>Dynamic 365</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft 365 for business</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Teams</p>
                <p className='text-[12px] pb-1 text-gray-400'>Power Platform</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft 365 Copilot</p>
            </div>
            <div className="developer px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>Developer & IT</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Developer Center</p>
                <p className='text-[12px] pb-1 text-gray-400'>Documentation</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Learn</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Tech Community</p>
                <p className='text-[12px] pb-1 text-gray-400'>Azure Marketplace</p>
                <p className='text-[12px] pb-1 text-gray-400'>AppSource</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft 365 Developer Program</p>
            </div>
            <div className="company px-2">
                <h1 className='text-sm pb-2 text-gray-600 font-sm'>Company</h1>
                <p className='text-[12px] pb-1 text-gray-400'>Careers</p>
                <p className='text-[12px] pb-1 text-gray-400'>Developer Center</p>
                <p className='text-[12px] pb-1 text-gray-400'>Documentation</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Learn</p>
                <p className='text-[12px] pb-1 text-gray-400'>Microsoft Tech Community</p>
                <p className='text-[12px] pb-1 text-gray-400'>Azure Marketplace</p>
                <p className='text-[12px] pb-1 text-gray-400'>AppSource</p>
            </div>
        </div>

        <div className="footer-bottom w-[100%] text-start py-6 px-6 text-sm xl:flex xl:justify-center xl:gap-10 xl:flex-wrap">
            <div className="lan py-2 text-gray-600">
                <p>English (India)</p>
            </div>
            <div className="privacy py-2 text-gray-600">
                <p>Your Privacy Choices</p>
            </div>
            <div className="consumer py-2 text-gray-600">
                <p>Consumer Health Privacy</p>
            </div>
            <div className="bottomlast flex flex-col md:flex-row md:justify-start md:gap-10 md:flex-wrap">
                <div className="terms flex gap-3 md:gap-10 text-md text-gray-600 py-2">
                    <p>Contact</p>
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                    <p>Trademarks</p>
                </div>
                <div className="copyright text-gray-600 md:flex md:gap-3 sm:flex-wrap">
                    <p className='py-2'>About our ads</p>
                    <p className='py-2'>© Microsoft 2025</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer