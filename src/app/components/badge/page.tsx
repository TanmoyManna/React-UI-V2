"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Badge, Icon, Chip } from 'react-ui'


const basicbadge = `
<Badge><Icon name="home" size={30} color="white" key="icon" /></Badge>
`;

const numberbadge = `
<Badge
badgeContent={4}
size="sm"
color="secondary"
position="topRight"><Icon name="home" size={30} color="white" key="icon" /></Badge>
`;
function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Basic Badge */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Badge
                </h2>
                <p className='font-bold text-base leading-snug'>Basic Badge</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={basicbadge} scope={{ Badge,Icon }} />
            </div>
            {/* Number Badge */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Number Badge</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={numberbadge} scope={{ Badge,Icon }} />
            </div>
            <div className='flex justify-end items-center space-x-3 py-10'>
                <Chip
                    onClick={() => (router.push('/api-doc/badge'))}
                    iconPosition="start"
                    variant="outline"
                    colorscheme="blue"
                >
                    Badge Api doc
                </Chip>
            </div>
        </DashboardWrapper>
    )
}

export default page