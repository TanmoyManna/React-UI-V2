"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'

import React from 'react'

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
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        32
                    </div>
                    <p className="text-lg font-normal mt-2">Hours</p>
                </div>
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        16
                    </div>
                    <p className="text-lg font-normal mt-2">Minutes</p>
                </div>
                <div  className="text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white text-2xl font-bold">
                        02
                    </div>
                    <p className="text-lg font-normal mt-2">Seconds</p>
                </div>
            </div>
            {/* CTA Button */}
            <button className="mt-6 bg-white text-black text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                Order Now
            </button>
        </div>
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
                <PreviewEditor code={headerSection1} scope={{assets }} />
            </div>
        </DashboardWrapper>
    )
}

export default page