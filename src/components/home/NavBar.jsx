import React, { useState, useEffect } from 'react';
import { HERDER_LIST } from '../../utils/Helper';
import TopSection from '../../assets/image/png/top-header.png'
import Scope from '../../assets/image/svg/nav-input-logo.svg'
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const closeNavbar = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className='bg-blue-800  justify-between items-center mb-9'>
            <img className='max-sm:hidden mx-auto ' src={TopSection} alt="" />

            <div className='flex justify-between  items-center pt-4 container max-w-[1140px] mx-auto md:ps-20 xl:ps-0 ps-5 pe-5 md:pe-5 xl:pe-0 '>
            </div>

    
            <button
                onClick={handleOpen}
                className={`hidden size-7 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`} >
                <span
                    className={`w-7 transition-all duration-300 h-[3px] bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
                ></span>
                <span
                    className={`w-7 transition-all duration-300 h-[3px] bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
                ></span>
                <span
                    className={`w-7 transition-all duration-300 h-[3px] bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
                ></span>
            </button>

            <div className={`flex gap-6 lg:px-3 xl:px-0 max-lg:flex-col max-w-[1140px] mx-auto items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center z-10 max-lg:items-center max-lg:bg-black max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:top-0' : 'left-full'}`}>

                {HERDER_LIST.map((data, i) => (
                    <a onClick={closeNavbar} className='whitespace-nowrap hover:text-blue-400  transition-all duration-300 text-[#E6EDF0] leading-150 text-[18px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] max-lg:text-[22px] after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full after:' href={data.link} key={i}>{data.name}</a>

                )

                )}
                <div className="relative w-[257px] lg:block hidden  justify-end mb-4 mt-[27px] ml-auto">
                    <input
                        type="text"
                        placeholder="Search by keyword"
                        className="w-full  pr-20 text-gray-900 border-2 border-white bg-blue-800 focus:outline-none py-2 px-4 rounded-md"
                    />
                    <img className='absolute top-4  right-3' src={Scope} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Navbar;

