"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Switch, Chip } from 'react-ui'


const defaultSwitch = `
<Switch />
`;

const EndLabelSwitch = `
<Switch
label="lableText"
labelPosition="end"/>
`;

const StartLabelSwitch = `
<Switch 
label="lableText"
labelPosition="start"/>
`;

const InnerLabelSwitch = `
<Switch 
variant="secondary"
activelabel="on"
inactivelable="off"/>
`;

function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Default Switch */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                Switch
                </h2>
                <p className='font-bold text-base leading-snug'>Default Switch</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={defaultSwitch} scope={{ Switch }} />
            </div>
            {/* End Label Switch */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Switch With End Label</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={EndLabelSwitch} scope={{ Switch }} />
            </div>
            {/* Start Label Switch */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Switch With Start Label</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={StartLabelSwitch} scope={{ Switch }} />
            </div>
            {/* Inner Label Switch */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Switch With Inner Label</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={InnerLabelSwitch} scope={{ Switch }} />
            </div>
            <div className='flex justify-end items-center space-x-3 py-10'>
                <Chip
                    onClick={() => (router.push('/api-doc/switch'))}
                    iconPosition="start"
                    variant="outline"
                    colorscheme="blue"
                >
                    Switch Api doc
                </Chip>
            </div>
        </DashboardWrapper>
    )
}

export default page