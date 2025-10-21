import { useRef } from 'react'
import microsoftLogo from './Assets/microsoft.png'
import cart from './Assets/cart.png'
import search from './Assets/search.png'

const Header = () => {

    
    const navItemsRef = useRef(null);
    const navToggle = () => {
        if (navItemsRef.current.classList.contains('-translate-x-96')) {
            navItemsRef.current.classList.remove('-translate-x-96');
            navItemsRef.current.classList.add('bg-gray-100');
        } else {
            navItemsRef.current.classList.add('-translate-x-96');
            navItemsRef.current.classList.remove('bg-gray-100');
        }
    }

  return (
    <div className='header-container flex justify-between items-center p-3 md:px-16 shadow-md'>
        <div className="hamburger search flex items-center gap-4 md:hidden" onClick={() => navToggle()}>
            <div className="hamburger py-1 cursor-pointer flex flex-col justify-center items-center">
                <div className="line w-5 h-[1.2px] bg-black"></div>
                <div className="line w-5 h-[1.2px] bg-black my-1"></div>
                <div className="line w-5 h-[1.2px] bg-black"></div>
            </div>
            <img src={search} alt="Search" className='w-5'/>

        </div>
        <div className="logo md:order-1 flex items-center gap-8">
            <img src={microsoftLogo} alt="Microsoft Logo" className='w-26'/>
            <div ref={navItemsRef} className="features md:flex md:items-center md:gap-6 absolute md:static mt-14 md:mt-0 md:bg-transparent px-10 p-6 md:p-3 text-lg md:text-sm -translate-x-96 md:translate-0 inset-0">
                <div className="f-item py-3 md:py-0">Microsoft 365</div>
                <div className="f-item py-3 md:py-0">Teams</div>
                <div className="f-item py-3 md:py-0">Copilot</div>
                <div className="f-item py-3 md:py-0">Windows</div>
                <div className="f-item py-3 md:py-0">More</div>
                <div className="f-item py-3 md:py-0 md:hidden lg:block">Surface</div>
                <div className="f-item py-3 md:py-0 md:hidden xl:block">Xbox</div>
                <div className="f-item py-3 md:hidden md:py-0 xl:block">Support</div>
                <div className="f-item py-3 md:hidden md:py-0">Software</div>
                <div className="f-item py-3 md:hidden md:py-0">Developer & IT</div>
            </div>
        </div>
        <div className="accounts cart flex items-center gap-4 md:order-2">
            <div className="hidden lg:block">All Microsoft</div>
            <img src={search} alt="Search" className='w-5 hidden md:block'/>
            <img src={cart} alt="Cart" className='w-5 '/>
            <div className="profile-picture w-8 h-8 rounded-full bg-gray-300 cursor-pointer">
                {/* Profile picture can be added here */}
            </div>
        </div>
    </div>
  )
}

export default Header