import React from 'react';
import SubHeading from '../../common/SubHeading';
import Navbar from './NavBar';
import Description from '../../common/Discription';
const Hero = () => {
            return (
                <div className="top-bg-sec max-w-[1440px]  bg-no-repeat bg-cover  ">
        <Navbar />
            <div className="inset-0  "></div>
            <div className="relative z-10 flex flex-col items-center text-white h-screen px-4 text-center ">
                <div className=" max-w-[1000px] mt-[46px] ">
                    <SubHeading text="Driving Transformation for Performance and Passion Within " />
                </div>
                        <div className='max-w-[960px] mt-[15px] text-center mx-auto'>
                            <Description text="The future of electric mobility is here. TDK and NEOM McLaren Formula E" />
                        </div>
            </div>
        </div>
    );
};

export default Hero;
