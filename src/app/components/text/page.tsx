"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Text, Chip } from 'react-ui'


const BasicText = `
<Text
as="h1"
size="sm"
weight="bold"
align="right"
italic={true}
underline={true}
className="text-white">
be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick
</Text>
`;

function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Basic Text */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Text
                </h2>
                <p className='font-bold text-base leading-snug'>Header Text</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={BasicText} scope={{ Text }} />
            </div>
            <div className='flex justify-end items-center space-x-3 py-10'>
                <Chip
                    onClick={() => (router.push('/api-doc/text'))}
                    iconPosition="start"
                    variant="outline"
                    colorscheme="blue"
                >
                    Text Api doc
                </Chip>
            </div>
        </DashboardWrapper>
    )
}

export default page