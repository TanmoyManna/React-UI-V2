"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'


import Container from '@/components/Container/Container'
import RightArrowIcon from '../../../../public/assets/icon/RightArrowIocn';
import PlayIcon from '../../../../public/assets/icon/PlayIcon';
import Image from 'next/image';
import bannerImage from '../../../../public/assets/images/bannerimage.png';

const headerSection1 = `
<div className=' w-full bg-white '>Header
   </div>
`;

function page() {
    const router = useRouter()
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
                <PreviewEditor code={headerSection1} scope={{ Container,RightArrowIcon,PlayIcon,Image,bannerImage }} />
            </div>
        </DashboardWrapper>
    )
}

export default page