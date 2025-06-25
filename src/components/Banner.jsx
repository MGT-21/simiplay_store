import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './Banner.css';

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'

export default function Banner() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        }
    }, []);

    return (
        <div className="swiper mt-custom" ref={swiperRef}>
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide"> 
                    <img src={banner1} alt="slide-1" className='w-100'/>
                </div>
                <div className="swiper-slide">
                    <img src={banner2} alt="slide-2" className='w-100'/>
                </div>
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination"></div>
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}