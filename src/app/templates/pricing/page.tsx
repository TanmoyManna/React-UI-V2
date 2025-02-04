"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'


const pricingTable1 = `
<div className="max-w-sm mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
      {/* Plan Name */}
      <h3 className="text-xl font-bold text-gray-900">Starter Plan</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        For most businesses that want to optimize web queries
      </p>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200"></div>

      {/* Pricing */}
      <div>
        <span className="text-4xl font-extrabold text-gray-900">$32.00</span>
        <p className="text-gray-500 text-sm mt-1">per month / per user</p>
      </div>
    </div>
`;

const pricingTable2 = `
<div className="max-w-sm h-[500px] mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col">
            {/* Plan Name */}
            <h3 className="text-xl font-bold text-blue-600">Dlex Pro</h3>

            {/* Price Section */}
            <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">$12</span>
                <span className="ml-1 text-gray-500 text-sm">/month</span>
            </div>

            {/* Plan Description */}
            <p className="mt-2 text-gray-500 text-base">
                The essentials to provide your best work for clients.
            </p>

            {/* Features List */}
            <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-grow">
                {[
                    "5 Projects",
                    "Up to 500 subscribers",
                    "Custom analytics",
                    "Instant support",
                    "Marketing advisor",
                    "Custom integration",
                    "Private slack channel",
                    "Tracking customers flow",
                ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-auto w-full bg-indigo-100 text-indigo-600 font-semibold py-3 rounded-lg hover:bg-indigo-200 transition">
                Monthly billing
            </button>
        </div>
`;

const pricingTable3 = `
<div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-md">
                {/* Top Section */}
                <div>
                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-indigo-600">Individual</h3>

                    {/* Plan Description */}
                    <p className="text-gray-500 text-base mt-2">
                        The essentials to provide your best work for clients.
                    </p>

                    {/* Price Section */}
                    <div className="mt-4 flex items-baseline">
                        <span className="text-4xl font-extrabold text-gray-900">$12</span>
                        <span className="ml-1 text-gray-500 text-sm">/mo</span>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
                        Monthly billing
                    </button>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* What's Included Section */}
                <div>
                    <h4 className="text-sm font-semibold text-indigo-600 uppercase">What's Included</h4>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                        {[
                            "5 Projects",
                            "Up to 500 subscribers",
                            "Basic analytics",
                            "48-hour support response time",
                            "Marketing advisor",
                            "Custom integration",
                            "Private slack channel",
                            "Tracking customers flow",
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
`;
function page() {
    return (
        <DashboardWrapper>
            {/* Pricing Table Example 1 */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Pricing Table
                </h2>
                <p className='font-bold text-base leading-snug'>Pricing Table Example 1</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={pricingTable1} scope={{}} />
            </div>


            {/* Pricing Table Example 2 */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Pricing Table Example 2</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={pricingTable2} scope={{}} />
            </div>

            {/* Pricing Table Example 3 */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Pricing Table Example 3</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={pricingTable3} scope={{}} />
            </div>
        </DashboardWrapper>
    )
}

export default page