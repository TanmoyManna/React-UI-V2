"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'

import React from 'react'
import { Button } from 'react-ui'

import assets from '../../../../json/assets'


const headerSection1 = `
<div className="w-full mx-auto">
    {/* Background Image */}
    <div className="relative max-h-[815px] md:h-[500px] h-[600px] w-full">
        <img
            src={assets.burgerIcon} // Replace with actual burger image
            alt="Burger Special"
            className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-xl font-normal uppercase tracking-wide">Juicy Deal</p>
            <h1 className="text-6xl font-semibold md:text-5xl mt-2">Burger Special</h1>
            <p className="mt-4 text-xl md:text-lg font-normal max-w-lg">
                Enjoy a mouthwatering burger deal that's too good to miss.
                Hurry, this offer is available for a limited time!
            </p>
            {/* Countdown Timer */}
            <div className="flex mt-6 space-x-4">
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        01
                    </div>
                    <p className="text-lg font-normal mt-2">Day</p>
                </div>
                <span className="text-xl font-normal flex items-center justify-center">:</span>
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        32
                    </div>
                    <p className="text-lg font-normal mt-2">Hours</p>
                </div>
                <span className="text-xl font-normal flex items-center justify-center">:</span>
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        16
                    </div>
                    <p className="text-lg font-normal mt-2">Minutes</p>
                </div>
                <span className="text-xl font-normal flex items-center justify-center">:</span>
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        02
                    </div>
                    <p className="text-lg font-normal mt-2">Seconds</p>
                </div>
            </div>
            {/* CTA Button */}
            <Button className="mt-6 bg-white text-black text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                Order Now
            </Button>
        </div>
    </div>
</div>
`;

const headerSection2 = `
<div className="container w-full  p-24 bg-white">
            <div className="bg-gray-300 rounded-2xl shadow-lg flex items-center gap-12 p-12 h-[629px]">
                {/* Left Section - Image */}
                <div className="w-1/2 h-[500px]">
                    <img
                        src={assets.shoeIcon} // Replace with actual product image
                        alt="Exclusive Shop Offer"
                        className="w-full max-h-full object-contain scale-x-[-1]"
                    />
                </div>

                {/* Right Section - Offer Content */}
                <div className="w-1/2 text-center md:text-left mt-6 md:mt-0 flex flex-col items-start">
                    <h2 className="text-5xl md:text-4xl font-bold text-black text-start">Exclusive Shop Offer</h2>
                    <p className="text-2xl font-medium text-gray-800 mt-4 text-start">Hurry In!</p>
                    <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                        This special promotion won’t last long—grab your chance to save now!
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex mt-6 space-x-4">
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                01
                            </div>
                            <p className="text-lg font-normal mt-2">Day</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                32
                            </div>
                            <p className="text-lg font-normal mt-2">Hours</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                16
                            </div>
                            <p className="text-lg font-normal mt-2">Minutes</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                02
                            </div>
                            <p className="text-lg font-normal mt-2">Seconds</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6  bg-black text-white text-xl font-medium px-14 py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                        Grab the Deal
                    </button>
                </div>
            </div>
        </div>
`;

const headerSection3 = `
<div className="container w-full  p-24 bg-white">
            <div className="bg-gray-300 rounded-2xl shadow-lg flex items-center h-[629px]">

                {/* left Section - Offer Content */}
                <div className="w-1/2 text-center md:text-left mt-6 md:mt-0 flex flex-col items-start my-12 ml-12">
                    <h2 className="text-5xl md:text-4xl font-bold text-black text-start">Special Promotion</h2>
                    <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                        This special promotion won't last long—grab your chance to save now!
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex mt-6 space-x-4">
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                01
                            </div>
                            <p className="text-lg font-normal mt-2">Day</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                32
                            </div>
                            <p className="text-lg font-normal mt-2">Hours</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                16
                            </div>
                            <p className="text-lg font-normal mt-2">Minutes</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                02
                            </div>
                            <p className="text-lg font-normal mt-2">Seconds</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6  bg-black text-white text-xl font-medium px-14 py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                        Secure Your Deal
                    </button>
                </div>

                {/* right Section - Image */}
                <div className="w-1/2 h-full">
                    <img
                        src={assets.specialIcon} // Replace with actual product image
                        alt="Exclusive Shop Offer"
                        className="w-full max-h-full object-cover rounded-2xl"
                    />
                </div>


            </div>
        </div>
`;

const headerSection4 = `
<div className="container w-full  p-24 bg-white">
            <div className="bg-white rounded-2xl flex items-center h-[629px]">

                {/* left Section - Offer Content */}
                <div className="w-1/2 h-full">
                    <img
                        src={assets.limitedIcon} // Replace with actual product image
                        alt="Exclusive Shop Offer"
                        className="w-full h-full object-fill rounded-2xl"
                    />
                </div>


                {/* right Section - Image */}
                <div className="w-1/2 text-center md:text-left mt-6 md:mt-0 flex flex-col items-start my-12 ml-12">
                    <h2 className="text-5xl md:text-4xl font-bold text-black text-start">Exclusive Limited-Time Offer</h2>
                    <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                        Don't miss out on this exclusive offer! Enjoy incredible savings for a limited time.
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex mt-6 space-x-4">
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                01
                            </div>
                            <p className="text-lg font-normal mt-2">Day</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                32
                            </div>
                            <p className="text-lg font-normal mt-2">Hours</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                16
                            </div>
                            <p className="text-lg font-normal mt-2">Minutes</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                02
                            </div>
                            <p className="text-lg font-normal mt-2">Seconds</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6  bg-black text-white text-xl font-medium px-14 py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                        Get It Now
                    </button>
                </div>


            </div>
        </div>
`;

const headerSection5 = `
<div className="container w-full  p-24 bg-white">
            <div className="bg-white rounded-2xl flex items-center h-[650px]">

                {/* left Section - Offer Content */}
                <div className="w-1/2 h-full">
                    <img
                        src={assets.exclusiveIcon} // Replace with actual product image
                        alt="Exclusive Shop Offer"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>


                {/* right Section - Image */}
                <div className="w-1/2 text-center md:text-left mt-6 md:mt-0 my-12 ml-12">
                    <h2 className="text-5xl md:text-4xl font-bold text-black text-start">Exclusive Discount for New Clients</h2>
                    <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                        Enhance your brand’s online presence and get started with our expert team at a great value.
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex mt-6 space-x-4">
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                01
                            </div>
                            <p className="text-lg font-normal mt-2">Day</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                32
                            </div>
                            <p className="text-lg font-normal mt-2">Hours</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                16
                            </div>
                            <p className="text-lg font-normal mt-2">Minutes</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                02
                            </div>
                            <p className="text-lg font-normal mt-2">Seconds</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6  bg-black text-white text-xl font-medium w-full py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                        Contact us
                    </button>
                </div>


            </div>
        </div>
`;

const headerSection6 = `
<div className="container w-full  p-24 bg-white">
            <div className="bg-white rounded-2xl flex items-center h-[650px]">

                {/* left Section - Offer Content */}
                <div className="w-2/5 h-full">
                    <img
                        src={assets.sneakersIcon} // Replace with actual product image
                        alt="Exclusive Shop Offer"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>


                {/* right Section - Image */}
                <div className="w-3/5 text-center md:text-left mt-6 md:mt-0 flex flex-col items-start my-12 ml-12">
                    <h2 className="text-5xl md:text-4xl font-bold text-black text-start">Exclusive Limited-Time Offer</h2>
                    <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                        Don't miss out on this exclusive offer! Enjoy incredible savings for a limited time.
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex mt-6 space-x-4">
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                01
                            </div>
                            <p className="text-lg font-normal mt-2">Day</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                32
                            </div>
                            <p className="text-lg font-normal mt-2">Hours</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                16
                            </div>
                            <p className="text-lg font-normal mt-2">Minutes</p>
                        </div>
                        <span className="text-xl font-normal flex items-center justify-center">:</span>
                        <div className="text-center">
                            <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                                02
                            </div>
                            <p className="text-lg font-normal mt-2">Seconds</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-6  bg-black text-white text-xl font-medium px-14 py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                        Get It Now
                    </button>
                </div>


            </div>
        </div>
`;


const headerSection7 = `
<div className="w-full h-[815px] bg-white flex justify-end items-center bg-[url(/assets/images/furniture.png)] bg-cover bg-center">

            <div className="w-2/5 text-center md:text-left mt-6 md:mt-0 flex flex-col items-start my-9 mx-12">
                <p className="text-black text-xl font-semibold text-start">
                    Save Big!
                </p>
                <h2 className="text-6xl md:text-4xl font-semibold text-black text-start">Special Furniture Offer</h2>
                <p className="mt-4 text-gray-700 text-xl font-normal text-start">
                    Transform your space with stylish furniture at unbeatable prices—hurry, this offer is available for a limited time only!
                </p>

                {/* Countdown Timer */}
                <div className="flex mt-6 space-x-4">
                    <div className="text-center">
                        <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                            01
                        </div>
                        <p className="text-lg font-normal mt-2">Day</p>
                    </div>
                    <span className="text-xl font-normal flex items-center justify-center">:</span>
                    <div className="text-center">
                        <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                            32
                        </div>
                        <p className="text-lg font-normal mt-2">Hours</p>
                    </div>
                    <span className="text-xl font-normal flex items-center justify-center">:</span>
                    <div className="text-center">
                        <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                            16
                        </div>
                        <p className="text-lg font-normal mt-2">Minutes</p>
                    </div>
                    <span className="text-xl font-normal flex items-center justify-center">:</span>
                    <div className="text-center">
                        <div className="px-3 h-20 flex items-center justify-center bg-gray-100 rounded-2xl text-black text-2xl font-normal">
                            02
                        </div>
                        <p className="text-lg font-normal mt-2">Seconds</p>
                    </div>
                </div>

                {/* CTA Button */}
                <button className="mt-6  bg-black text-white text-xl font-medium px-14 py-5 rounded-full shadow-md hover:bg-gray-900 transition">
                    Shop Now
                </button>
            </div>
        </div>
`;
function page() {

    return (
        <DashboardWrapper>
            {/* Basic Text */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Header Section
                </h2>
                <p className='font-bold text-base leading-snug'>Header Example 1</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection1} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 2</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection2} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection3} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection4} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection5} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection6} scope={{ assets, Button }} />
            </div>
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Header Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection7} scope={{ assets, Button }} />
            </div>
        </DashboardWrapper>
    )
}

export default page