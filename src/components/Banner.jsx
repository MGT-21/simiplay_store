import { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './Banner.css';

import banner1 from '../assets/Banner1.jpg'
import banner2 from '../assets/Banner2.jpg'

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
                <div className="swiper-slide px-4 px-md-0"> 
                    <img src={banner1} alt="slide-1" className='w-100 rounded-3'/>
                </div>
                <div className="swiper-slide px-4 px-md-0">
                    <img src={banner2} alt="slide-2" className='w-100 rounded-3'/>
                </div>
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination"></div>
            
            <div className="swiper-button-prev d-none d-md-block"></div>
            <div className="swiper-button-next d-none d-md-block"></div>
        </div>
    );
}