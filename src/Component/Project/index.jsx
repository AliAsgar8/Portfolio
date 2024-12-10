import React, { useEffect, useState } from 'react';
import image1 from '../../assets/e-commerce.png';
import image2 from '../../assets/arbab_shawarma.png';
import image3 from '../../assets/superfood.png';
import image4 from '../../assets/bakery_shop.png';

// Throttle function to limit scroll event firing
const throttle = (callback, limit) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall >= limit) {
            lastCall = now;
            callback(...args);
        }
    };
};

const Animation = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollRight, setScrollRight] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const topScroll = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = topScroll / docHeight;

            if (percentage >= 0.3) {
                const newPercentage = (percentage - 0.3) * -600;
                const rightPercentage = (percentage - 0.3) * 600;
                setScrollLeft(newPercentage);
                setScrollRight(rightPercentage);
            } else {
                setScrollLeft(0);
                setScrollRight(0);
            }
        }, 16);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { text: 'E-Commerce Frontend', img: image1, url: "https://e-commerce-frontend-opal-nine.vercel.app/" },
        { text: 'Arbab Shawarma', img: image2 },
        { text: 'Super Food', img: image3 },
        { text: 'Bakery Shop', img: image4, url:"https://aliasgar8.github.io/Bakery-Shop/" },
    ];

    return (
        <div className='flex flex-col gap-5 px-10 overflow-hidden relative bg-[rgb(29,29,29)]' id='project'>
            <div className='z-20  '>
                <div className=' flex gap-5'>
                    <div className=' h-[400px] w-[700px] transition-transform duration-200 ease-linear will-change' style={{ transform: `translateX(${scrollLeft}%) rotate(${scrollLeft * 0.5}deg)` }}>
                        <img src={image1} alt='Project 1' className='h-[100%] w-[100%] hidden sm:block' />
                    </div>
                    <div className='h-[400px] w-[700px] transition-transform duration-200 ease-linear will-change' style={{ transform: `translateX(${scrollRight}%) rotate(${scrollRight * 0.5}deg)` }}>
                        <img src={image2} alt='Project 2' className='h-[100%] w-[100%] hidden sm:block' />
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='h-[400px] w-[700px] transition-transform duration-200 ease-linear will-change' style={{ transform: `translateX(${scrollLeft}%) rotate(${scrollLeft * 0.5}deg)` }}>
                        <img src={image3} alt='Project 3' className='h-[100%] w-[100%]  hidden sm:block' />
                    </div>
                    <div className='h-[400px] w-[700px] transition-transform duration-200 ease-linear will-change' style={{ transform: `translateX(${scrollRight}%) rotate(${scrollRight * 0.5}deg)` }}>
                        <img src={image4} alt='Project 4' className='h-[100%] w-[100%]  hidden sm:block' />
                    </div>
                </div>
            </div>

            {/* Text and Hover Effect */}
            <div className='absolute top-52 left-14  text-center w-[70%] z-20 m-auto sm:left-36 md:left-40'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className='relative border-b border-b-[rgb(186,178,164)] cursor-pointer pb-3 flex justify-between mb-10'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* SUPER FOOD Text */}
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(186,178,164)] text-2xl md:text-4xl artifika-regular"
                        >
                            {item.text}
                        </a>
                        {/* Image that appears on hover */}
                        <div
                            className={`absolute w-[300px] h-[200px] transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                top: 0,
                                right: '0',
                                zIndex: 50,
                                pointerEvents: hoveredIndex === index ? 'auto' : 'none',
                            }}
                        >


                            <img src={item.img} alt={item.text} className='h-[100%] w-[100%] z-50' />

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Animation;
