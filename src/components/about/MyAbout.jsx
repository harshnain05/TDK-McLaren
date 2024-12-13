import React from 'react'
import Description from '../../common/Discription'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { NextPrewArrow } from '../../utils/Icon'
import { TESTIMONIAL } from '../../utils/Helper'
import SubHeading from '../../common/SubHeading';
const MyAbout = () => {
    return (
        <div className='relative max-w-[1140px] xl:mt-[160px] lg:mt-[100px] mt-[70px] mx-auto'>
            <div className="text-center ">
                <SubHeading text="lorem" secondSpanText="lorem" />
            </div>
            <div className='max-w-[490px] text-center mx-auto'>
                <Description text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
            </div>
            <button className="custom-prev-btn absolute left-[-7%] top-[49%] p-2 border border-black rounded-full hover:bg-black duration-300 ease-linear max-xl:top-[79%] max-xl:left-[45%] max-lg:left-[43%] max-lg:top-[80%] max-md:hidden"> <NextPrewArrow /></button>
            <button className="custom-next-btn absolute right-[-7%] top-[49%] rotate-180 p-2 border border-black rounded-full hover:bg-black duration-300 ease-linear max-xl:top-[79%] max-xl:right-[45%] max-lg:right-[43%] max-lg:top-[80%] max-md:hidden"><NextPrewArrow /> </button>
            <Swiper slidesPerView={3}
                spaceBetween={24}
                loop={true}
                centeredSlides={true}
                navigation={{
                    prevEl: '.custom-prev-btn',
                    nextEl: '.custom-next-btn',
                }}
                modules={[Navigation]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: true
                    },

                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                }}
                className='flex !pt-[62px] mySwiper max-lg:!pt-12 max-md:!pt-9 max-sm:!pt-5'>
                {TESTIMONIAL.map((obj, i) => (
                    <SwiperSlide key={i} className='p-5 shadow-box border rounded border-green-white max-w-[364px]'>
                        <div className='flex gap-2 pb-6'>
                            <img className='size-[60px]' src={obj.img} alt="testimonials-img" />
                            <div>
                                <h3 className='text-2xl font-normal leading-custom-4xl max-md:text-xl max-sm:text-lg'>{obj.name}</h3>
                                <a href='#testimonials' className='text-base font-normal leading-custom-4xl opacity-50'>{obj.id}</a>
                            </div>
                        </div>
                        {obj.svgImg}
                        <div className='max-w-[324px] pt-[18px]'>
                            <p className='font-normal text-base'>{obj.description} </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MyAbout