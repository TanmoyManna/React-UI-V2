"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'




const newsLetter1 = `
<div className="bg-[#4F46E5] text-white py-10 px-6 rounded-lg shadow-md mx-auto">
                <div className="flex items-center justify-between px-6">
                    {/* Left Section */}
                    <div className="lg:w-1/2 text-center lg:text-left w-[575px]">
                        <h2 className="text-2xl font-bold">Sign up for our newsletter</h2>
                        <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint velit officia consequat duis enim velit mollit.
                        </p>
                    </div>

                    {/* Right Section (Form) */}
                    <div className="lg:w-1/2 flex-row justify-center lg:justify-end mt-5 lg:mt-0">
                        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="px-4 py-2 w-64 text-black focus:outline-none"
                            />
                            <button className="bg-[#6366F1] text-white font-semibold px-5 py-2 hover:bg-[#4F46E5] transition">
                                Notify me
                            </button>
                        </div>
                        {/* Privacy Policy */}
                        <p className="mt-4 text-center lg:text-left text-gray-300 text-xs">
                            We care about the protection of your data. Read our{" "}
                            <a href="#" className="underline text-white hover:text-gray-200">
                                Privacy policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
`;

function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Basic Text */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    NewsLetter Section
                </h2>
                <p className='font-bold text-base leading-snug'>NewsLetter Example 1</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={newsLetter1} scope={{}} />
            </div>
        </DashboardWrapper>
    )
}

export default page