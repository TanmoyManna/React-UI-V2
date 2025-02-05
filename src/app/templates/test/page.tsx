"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'

import React from 'react'
import { Button } from 'react-ui'

import assets from '../../../../json/assets'

function page() {

    return (
        <DashboardWrapper>
            {/* Basic Text */}
            {/* <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Header Section
                </h2>
                <p className='font-bold text-base leading-snug'>Header Example 1</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={headerSection1} scope={{ assets, Button }} />
            </div> */}
        </DashboardWrapper>
    )
}

export default page