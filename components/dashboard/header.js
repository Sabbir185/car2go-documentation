import React from 'react';
import { FaBars, FaTh } from "react-icons/fa";



const Header = () => {

    return (
        <div className='header flex items-center'>
            <div className=' rounded h-14 w-16 shadow-sm ml-6 flex justify-center items-center'>
                <FaBars size={22} role="button" onClick={() => {
                    document.querySelector('.dashboard')?.classList.toggle(window.innerWidth >= 1024 ? 'mini' : 'mobile')
                }} />
            </div>
        </div>
    );
};

export default Header;